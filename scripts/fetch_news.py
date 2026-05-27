"""
Daily AI News Fetcher — uses Gemini REST API directly (no SDK).
Runs via GitHub Actions every morning at 07:00 Israel time.
"""

import json, os, sys, time
import feedparser
import requests
from datetime import datetime, timezone

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR   = os.path.dirname(SCRIPT_DIR)

with open(os.path.join(ROOT_DIR, 'sources.json'), encoding='utf-8') as f:
    SOURCES = json.load(f)

GEMINI_KEY = os.environ.get('GEMINI_API_KEY', '')
if not GEMINI_KEY:
    print('ERROR: GEMINI_API_KEY not set')
    sys.exit(1)

TODAY = datetime.now(timezone.utc).strftime('%Y-%m-%d')

# ── RSS feeds ──────────────────────────────────────────────────────────────

RSS_MAP = {
    'https://www.artificialintelligence-news.com/':            'https://www.artificialintelligence-news.com/feed/',
    'https://aimagazine.com/':                                 'https://aimagazine.com/feed/',
    'https://www.therundown.ai/':                              'https://www.therundown.ai/feed',
    'https://openai.com/news/':                                'https://openai.com/news/rss.xml',
    'https://www.anthropic.com/news':                          'https://www.anthropic.com/rss.xml',
    'https://huggingface.co/blog':                             'https://huggingface.co/blog/feed.xml',
    'https://techcrunch.com/category/artificial-intelligence/':'https://techcrunch.com/category/artificial-intelligence/feed/',
    'https://venturebeat.com/ai/':                             'https://venturebeat.com/ai/feed/',
    'https://www.technologyreview.com/topic/artificial-intelligence/': 'https://www.technologyreview.com/feed/',
    'https://arstechnica.com/ai/':                             'https://feeds.arstechnica.com/arstechnica/index',
    'https://blog.google/innovation-and-ai/technology/ai/':   'https://blog.google/rss/',
}

YOUTUBE_CHANNELS = {
    'AI Daily Brief':    'UCcplBmD2-7NcLsEjwFjZpEg',
    'AI Revolution X':   'UCU7GBNBiF68hpFd9LxFyFSg',
    'Matthew Berman':    'UCnUYZLuoy1rq1aVMwx4aTzw',
    'Two Minute Papers': 'UCbfYPyITQ-7l4upoX8nvctg',
    'Kevin Stratvert':   'UCfpnY5NnBl-8L7rJZCmy7aw',
}

YT_RSS = 'https://www.youtube.com/feeds/videos.xml?channel_id='

# ── Collect articles ────────────────────────────────────────────────────────

def fetch_rss(url, source_name, max_items=3):
    items = []
    try:
        feed = feedparser.parse(url)
        for entry in feed.entries[:max_items]:
            title   = entry.get('title', '').strip()
            summary = (entry.get('summary', '') or entry.get('description', ''))[:500].strip()
            link    = entry.get('link', '')
            if title:
                items.append({'title': title, 'summary': summary, 'link': link, 'source': source_name})
    except Exception as e:
        print(f'  RSS error [{source_name}]: {e}')
    return items

articles = []

print('Fetching RSS feeds...')
for site in SOURCES['websites']:
    if not site.get('enabled'):
        continue
    rss_url = RSS_MAP.get(site['url'])
    if rss_url:
        items = fetch_rss(rss_url, site['name'])
        articles.extend(items)
        print(f'  {site["name"]}: {len(items)} items')

print('Fetching YouTube channels...')
for name, channel_id in YOUTUBE_CHANNELS.items():
    items = fetch_rss(YT_RSS + channel_id, f'YouTube: {name}', max_items=2)
    articles.extend(items)
    print(f'  {name}: {len(items)} videos')

print(f'\nTotal articles: {len(articles)}')

if not articles:
    print('No articles found — exiting without changes')
    sys.exit(0)

# ── Call Gemini REST API ────────────────────────────────────────────────────

articles_text = '\n\n---\n\n'.join([
    f'SOURCE: {a["source"]}\nTITLE: {a["title"]}\nSUMMARY: {a["summary"]}\nURL: {a["link"]}'
    for a in articles[:25]
])

prompt = f"""You are an AI news curator for a team in Israel. Today is {TODAY}.

Here are the latest AI news articles:

{articles_text}

YOUR TASK:
Select the {SOURCES['settings']['max_items_per_run']} best articles.

STRICT SELECTION RULES — only include articles about:
✅ New AI tools or apps launched
✅ New features added to existing AI products (ChatGPT, Claude, Gemini, Copilot, etc.)
✅ New AI models released
✅ Practical AI product updates people can use today

❌ EXCLUDE: opinion articles, job market analysis, organizational strategy, research papers, general trends, "AI will change X" articles.

WRITING RULES (very important):
- Write as if explaining to a smart person with NO tech background
- Use everyday Hebrew — no jargon like "LLM", "inference", "pipeline", "harness", "scaffold"
- Headlines: short, exciting, clear. Example: "ChatGPT יכול עכשיו לקרוא את המסמכים שלך"
- Explanation: what is the tool, what does it do NEW, in 2 simple sentences
- Impact: one concrete example of how someone can use this TODAY at work

For each article return a JSON object:
- "id": integer from 1
- "headline": Hebrew headline (max 10 words, exciting, clear)
- "explanation": 2 sentences in plain Hebrew — what happened, what is new
- "impact": 1-2 sentences — one concrete work example, no jargon
- "categoryKey": one of: ai_models | docs | media | learning | language
- "source": source name
- "sourceUrl": article URL
- "timeAgo": time in Hebrew (e.g. "לפני שעתיים", "היום", "אתמול")
- "trending": true for top 2 items, false for others

Return ONLY a valid JSON array. No markdown, no explanation."""

url = f'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_KEY}'
payload = {'contents': [{'parts': [{'text': prompt}]}]}

print('Calling Gemini API...')
resp = requests.post(url, json=payload, timeout=60)

if resp.status_code != 200:
    print(f'Gemini API error {resp.status_code}: {resp.text[:500]}')
    sys.exit(1)

raw = resp.json()['candidates'][0]['content']['parts'][0]['text'].strip()
print(f'Gemini response: {len(raw)} chars')

# Strip markdown fences if present
if raw.startswith('```'):
    raw = raw.split('\n', 1)[1]
    raw = raw.rsplit('```', 1)[0].strip()

try:
    news_items = json.loads(raw)
except json.JSONDecodeError as e:
    print(f'JSON parse error: {e}')
    print('Raw:', raw[:300])
    sys.exit(1)

print(f'Generated {len(news_items)} items')

# ── Write news-data.js ─────────────────────────────────────────────────────

js = f"""// Categories definition with colors
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

out = os.path.join(ROOT_DIR, 'news-data.js')
with open(out, 'w', encoding='utf-8') as f:
    f.write(js)

print(f'Done! news-data.js written with {len(news_items)} items for {TODAY}')
