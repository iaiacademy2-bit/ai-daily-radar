"""
Daily AI News Fetcher
Runs via GitHub Actions every morning at 07:00 Israel time.
Fetches RSS feeds + YouTube channels, summarizes with Gemini, writes news-data.js.
"""

import json
import os
import sys
import feedparser
import requests
from datetime import datetime, timezone, timedelta

import google.generativeai as genai

# ── Config ────────────────────────────────────────────────────────────────────

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR   = os.path.dirname(SCRIPT_DIR)

with open(os.path.join(ROOT_DIR, 'sources.json'), encoding='utf-8') as f:
    SOURCES = json.load(f)

genai.configure(api_key=os.environ['GEMINI_API_KEY'])
model = genai.GenerativeModel('gemini-1.5-flash')

TODAY     = datetime.now(timezone.utc).strftime('%Y-%m-%d')
CUTOFF    = datetime.now(timezone.utc) - timedelta(hours=SOURCES['settings']['lookback_hours'])

# ── RSS feed map (site URL → RSS URL) ────────────────────────────────────────

RSS_MAP = {
    'https://www.artificialintelligence-news.com/':           'https://www.artificialintelligence-news.com/feed/',
    'https://aimagazine.com/':                                'https://aimagazine.com/feed/',
    'https://blog.google/innovation-and-ai/technology/ai/':  'https://blog.google/rss/',
    'https://www.reuters.com/technology/artificial-intelligence/': 'https://feeds.reuters.com/reuters/technologyNews',
    'https://www.therundown.ai/':                            'https://www.therundown.ai/feed',
    'https://openai.com/news/':                              'https://openai.com/news/rss.xml',
    'https://www.anthropic.com/news':                        'https://www.anthropic.com/rss.xml',
    'https://huggingface.co/blog':                           'https://huggingface.co/blog/feed.xml',
    'https://techcrunch.com/category/artificial-intelligence/': 'https://techcrunch.com/category/artificial-intelligence/feed/',
    'https://venturebeat.com/ai/':                           'https://venturebeat.com/ai/feed/',
    'https://www.technologyreview.com/topic/artificial-intelligence/': 'https://www.technologyreview.com/feed/',
    'https://arstechnica.com/ai/':                           'https://feeds.arstechnica.com/arstechnica/index',
}

# YouTube channel RSS (channel_id needed — using known IDs for the listed handles)
YOUTUBE_RSS_MAP = {
    '@AIDailyBrief':         'UCcplBmD2-7NcLsEjwFjZpEg',
    '@airevolutionx':        'UCU7GBNBiF68hpFd9LxFyFSg',
    '@matthew_berman':       'UCnUYZLuoy1rq1aVMwx4aTzw',
    '@TwoMinutePapers':      'UCbfYPyITQ-7l4upoX8nvctg',
    '@KevinStratvert':       'UCfpnY5NnBl-8L7rJZCmy7aw',
    '@AvaDoesAI':            'UCJjBIHSHmRsNKhVkAcS3kHg',
}

YOUTUBE_RSS_BASE = 'https://www.youtube.com/feeds/videos.xml?channel_id='

# ── Fetch articles ────────────────────────────────────────────────────────────

def fetch_rss(url, source_name, max_items=3):
    items = []
    try:
        feed = feedparser.parse(url)
        for entry in feed.entries[:max_items]:
            items.append({
                'title':   entry.get('title', '').strip(),
                'summary': (entry.get('summary', '') or entry.get('description', ''))[:600].strip(),
                'link':    entry.get('link', ''),
                'source':  source_name,
            })
    except Exception as e:
        print(f'  RSS error [{source_name}]: {e}')
    return items

articles = []

# Websites via RSS
print('Fetching website RSS feeds...')
for site in SOURCES['websites']:
    if not site.get('enabled'):
        continue
    rss_url = RSS_MAP.get(site['url'])
    if rss_url:
        items = fetch_rss(rss_url, site['name'])
        articles.extend(items)
        print(f'  {site["name"]}: {len(items)} items')

# YouTube channels via RSS
print('Fetching YouTube channels...')
for ch in SOURCES['youtube_channels']:
    if not ch.get('enabled'):
        continue
    channel_id = YOUTUBE_RSS_MAP.get(ch['handle'])
    if channel_id:
        rss_url = YOUTUBE_RSS_BASE + channel_id
        items = fetch_rss(rss_url, ch['name'], max_items=2)
        for item in items:
            item['source'] = f"YouTube: {ch['name']}"
        articles.extend(items)
        print(f'  {ch["name"]}: {len(items)} videos')

print(f'\nTotal raw articles collected: {len(articles)}')

if not articles:
    print('No articles found — keeping existing news-data.js')
    sys.exit(0)

# ── Summarize with Gemini ─────────────────────────────────────────────────────

articles_text = '\n\n---\n\n'.join([
    f'SOURCE: {a["source"]}\nTITLE: {a["title"]}\nSUMMARY: {a["summary"]}\nURL: {a["link"]}'
    for a in articles[:25]
])

prompt = f"""You are an AI news curator for an L&D (Learning & Development) team in Israel.
Today is {TODAY}.

Below are the latest AI news articles collected this morning:

{articles_text}

Task:
1. Select the {SOURCES['settings']['max_items_per_run']} most important and interesting articles.
2. For each, create a JSON object with these exact fields:
   - "id": integer, sequential from 1
   - "headline": Hebrew translation of the headline (clear and concise, max 12 words)
   - "explanation": 2-3 sentences in Hebrew explaining what happened
   - "impact": 2-3 sentences in Hebrew on how this affects L&D professionals
   - "categoryKey": exactly one of: ai_models | docs | media | learning | language
   - "source": source name from the article
   - "sourceUrl": the article URL
   - "timeAgo": approximate time in Hebrew (e.g. "לפני שעתיים", "לפני 5 שעות", "היום")
   - "trending": true for the 2 most impactful items, false for others

Return ONLY a valid JSON array. No markdown fences, no explanation, no extra text."""

print('Calling Gemini API...')
response = model.generate_content(prompt)
raw = response.text.strip()

# Strip markdown fences if present
if raw.startswith('```'):
    raw = raw.split('\n', 1)[1]
    raw = raw.rsplit('```', 1)[0].strip()

try:
    news_items = json.loads(raw)
except json.JSONDecodeError as e:
    print(f'JSON parse error: {e}')
    print('Raw response:', raw[:500])
    sys.exit(1)

print(f'Generated {len(news_items)} news items')

# ── Write news-data.js ────────────────────────────────────────────────────────

js_content = f"""// Categories definition with colors
const CATEGORIES = {{
  ai_models: {{ name: 'מודלי בינה מלאכותית', bg: '#eef2ff', text: '#0a47fd' }},
  docs:      {{ name: 'קבצים ומסמכים',       bg: '#ecfdf5', text: '#059669' }},
  media:     {{ name: 'מדיה',                 bg: '#f5f3ff', text: '#7c3aed' }},
  learning:  {{ name: 'למידה והדרכה',         bg: '#fffbeb', text: '#d97706' }},
  language:  {{ name: 'שפה ותרגום',           bg: '#fff1f2', text: '#e11d48' }}
}};

// News data — auto-generated on {TODAY}
const NEWS_DATA = {json.dumps(news_items, ensure_ascii=False, indent=2)};

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "{TODAY}";
"""

out_path = os.path.join(ROOT_DIR, 'news-data.js')
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f'news-data.js written successfully ({len(news_items)} items, {TODAY})')
