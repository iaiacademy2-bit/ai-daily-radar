"""
Weekly AI News Fetcher — every Sunday 07:00 Israel time.
Uses Google News RSS search + curated RSS feeds for broad coverage.
Targets 15-20 quality items per weekly digest.
"""

import json, os, sys, re
import feedparser
import requests
from datetime import datetime, timezone
from urllib.parse import quote

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR   = os.path.dirname(SCRIPT_DIR)

with open(os.path.join(ROOT_DIR, 'sources.json'), encoding='utf-8') as f:
    SOURCES = json.load(f)

GEMINI_KEY = os.environ.get('GEMINI_API_KEY', '')
if not GEMINI_KEY:
    print('ERROR: GEMINI_API_KEY not set'); sys.exit(1)

TODAY = datetime.now(timezone.utc).strftime('%Y-%m-%d')

# ── 1. Google News RSS — active search queries ─────────────────────────────
# These guarantee fresh, relevant results regardless of RSS feed availability

GOOGLE_NEWS_SEARCHES = [
    'ChatGPT new feature update',
    'Claude AI new feature update',
    'Gemini AI new feature 2026',
    'Microsoft Copilot new update',
    'AI tool new release',
    'OpenAI new product launch',
    'Canva AI new feature',
    'AI video generator new',
    'AI image generator new',
    'בינה מלאכותית כלי חדש',
    'AI training learning tool',
    'Midjourney Sora new feature',
    'NotebookLM new feature',
    'Perplexity AI update',
    'Runway AI new feature',
]

GOOGLE_NEWS_BASE = 'https://news.google.com/rss/search?q={}&hl=en&gl=US&ceid=US:en&num=5'

# ── 2. Curated RSS feeds ────────────────────────────────────────────────────

RSS_FEEDS = [
    ('TechCrunch AI',       'https://techcrunch.com/category/artificial-intelligence/feed/'),
    ('VentureBeat AI',      'https://venturebeat.com/ai/feed/'),
    ('OpenAI Blog',         'https://openai.com/news/rss.xml'),
    ('Google AI Blog',      'https://blog.google/rss/'),
    ('Hugging Face Blog',   'https://huggingface.co/blog/feed.xml'),
    ('MIT Tech Review AI',  'https://www.technologyreview.com/feed/'),
    ('Ars Technica AI',     'https://feeds.arstechnica.com/arstechnica/index'),
    ('AI News',             'https://www.artificialintelligence-news.com/feed/'),
    ('The Rundown AI',      'https://www.therundown.ai/feed'),
    ('Anthropic Blog',      'https://www.anthropic.com/rss.xml'),
]

# ── 3. YouTube channels ─────────────────────────────────────────────────────

YOUTUBE_CHANNELS = {
    'M365 Copilot Connection': 'UCMVG4U2L2ocqgdYLAubuYGQ',
    'Paul J Lipsky':           'UC1WU0dIZnRxQldlbUEiMkFE',
    'Roboverse':               'UCZ3KGRwOA_uONNE_6VGG2bA',
    'Ava Does AI':             'UCeKNYDvbHFQS7fA38GpoR-g',
    'Moshiko A':               'UCKmZyF5BNkfebVVih8jzGyA',
    'Youri van Hofwegen':      'UCdR7eGozLjafYMTd2BFnJaQ',
    'Dean Stokes Online':      'UCX-znXB00avwiMyXU9GRlWA',
    'AI Revolution X':         'UC5l7RouTQ60oUjLjt1Nh-UQ',
    'AI Daily Brief':          'UCKelCK4ZaO6HeEI1KQjqzWA',
    'Kevin Stratvert':         'UCfJT_eYDTmDE-ovKaxVE1ig',
    'Matthew Berman':          'UCnUYZLuoy1rq1aVMwx4aTzw',
    'Two Minute Papers':       'UCbfYPyITQ-7l4upoX8nvctg',
}

YT_RSS = 'https://www.youtube.com/feeds/videos.xml?channel_id='

# ── Fetch helpers ────────────────────────────────────────────────────────────

def clean_html(text):
    return re.sub(r'<[^>]+>', '', text or '').strip()

def fetch_rss(url, source_name, max_items=5):
    items = []
    try:
        feed = feedparser.parse(url)
        for entry in feed.entries[:max_items]:
            title   = clean_html(entry.get('title', '')).strip()
            summary = clean_html(entry.get('summary', '') or entry.get('description', ''))[:300].strip()
            link    = entry.get('link', '')
            if title and len(title) > 10:
                items.append({'title': title, 'summary': summary, 'link': link, 'source': source_name})
    except Exception as e:
        print(f'  ! RSS error [{source_name}]: {e}')
    return items

# ── Collect articles ─────────────────────────────────────────────────────────

seen_titles = set()
articles = []

def add_articles(new_items):
    for item in new_items:
        key = item['title'].lower()[:60]
        if key not in seen_titles:
            seen_titles.add(key)
            articles.append(item)

# Google News search (primary source)
print('=== Google News searches ===')
for query in GOOGLE_NEWS_SEARCHES:
    url = GOOGLE_NEWS_BASE.format(quote(query))
    items = fetch_rss(url, f'Google News: {query}', max_items=4)
    add_articles(items)
    print(f'  "{query}": {len(items)} items  (total: {len(articles)})')

# Curated RSS feeds
print('\n=== Curated RSS feeds ===')
for name, url in RSS_FEEDS:
    items = fetch_rss(url, name, max_items=5)
    add_articles(items)
    print(f'  {name}: {len(items)} items  (total: {len(articles)})')

# YouTube channels
print('\n=== YouTube channels ===')
for name, channel_id in YOUTUBE_CHANNELS.items():
    items = fetch_rss(YT_RSS + channel_id, f'YouTube: {name}', max_items=3)
    add_articles(items)
    if items:
        print(f'  {name}: {len(items)} videos  (total: {len(articles)})')

print(f'\n✓ Total unique articles collected: {len(articles)}')

if len(articles) < 5:
    print('Not enough articles — keeping existing news-data.js')
    sys.exit(0)

# ── Call Gemini — process in one focused batch ────────────────────────────────

# Take top 40 articles for Gemini to choose from
batch = articles[:40]

articles_text = '\n\n---\n\n'.join([
    f'[{i+1}] SOURCE: {a["source"]}\nTITLE: {a["title"]}\nSUMMARY: {a["summary"]}\nURL: {a["link"]}'
    for i, a in enumerate(batch)
])

TARGET_ITEMS = 18  # aim for rich weekly digest

prompt = f"""אתה עורך ידיעון AI שבועי לצוות פיתוח הדרכה (L&D) בישראל. היום: {TODAY}.

הקהל: אנשי הדרכה, מעצבי למידה, מנהלים — ללא רקע טכני ב-AI.
המטרה: ידיעון שבועי שנותן ערך אמיתי — אנשים צריכים לסיים לקרוא ולחשוב "וואו, אני חייב לנסות את זה".

להלן {len(batch)} כתבות מהשבוע האחרון:

{articles_text}

---

בחר בדיוק {TARGET_ITEMS} פריטים. תן עדיפות ל:
1. כלי AI חדש שיצא — מה הוא עושה, למה הוא מעניין
2. פיצ'ר חדש בכלי קיים (ChatGPT, Claude, Gemini, Canva, Copilot, Midjourney וכד')
3. שדרוג שאפשר להשתמש בו מחר בבוקר בפיתוח הדרכה
4. סרטון YouTube שמסביר כלי או טכניקה שימושיים

אל תבחר: מאמרי ניתוח שוק, מחקרים אקדמיים, פוליטיקה, "AI ישנה את העולם".

כללי כתיבה (קריטי):
- כותרת: מלהיבה, ספציפית, בעברית. "גוגל השיקה כלי שיוצר סרטוני הדרכה מדהימים תוך שניות" > "עדכון חדש מגוגל"
- הסבר: מה הכלי עושה חדש ב-2 משפטים. פשוט כמו להסביר לחבר בוואטסאפ.
- שימוש: משפט אחד שמתחיל ב"אפשר לקחת את זה ו..." — דוגמה קונקרטית לפיתוח הדרכה.
- אסור: "LLM", "מודל שפה", "אינפרנס", "פייפליין", "פרומפט", "ארכיטקטורה"
- מותר: "בוט", "צ'אט AI", "כלי", "אפליקציה", "אוטומציה", "יוצר תוכן"

עבור כל פריט החזר JSON:
{{
  "id": מספר מ-1,
  "headline": "כותרת בעברית מלהיבה (עד 12 מילים)",
  "explanation": "2 משפטים בעברית פשוטה — מה חדש ומה מיוחד",
  "impact": "משפט אחד שמתחיל ב'אפשר לקחת את זה ו...' — שימוש קונקרטי בפיתוח הדרכה",
  "categoryKey": "ai_models או docs או media או learning או language",
  "source": "שם המקור",
  "sourceUrl": "קישור",
  "timeAgo": "מתי בעברית (היום / אתמול / השבוע)",
  "trending": true לשלושה הפריטים הכי חמים, false לשאר
}}

החזר JSON array בלבד. ללא markdown, ללא טקסט נוסף."""

print(f'Calling Gemini API with {len(batch)} articles, requesting {TARGET_ITEMS} items...')

url_api = f'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key={GEMINI_KEY}'
payload = {
    'contents': [{'parts': [{'text': prompt}]}],
    'generationConfig': {
        'temperature': 0.4,
        'maxOutputTokens': 16384,
    }
}

try:
    resp = requests.post(url_api, json=payload, timeout=180)
except requests.exceptions.Timeout:
    print('Gemini API timeout — keeping existing news-data.js')
    sys.exit(0)

if resp.status_code != 200:
    print(f'Gemini API error {resp.status_code}: {resp.text[:300]}')
    sys.exit(1)

raw = resp.json()['candidates'][0]['content']['parts'][0]['text'].strip()
print(f'Gemini response: {len(raw)} chars')

# Strip markdown fences
if raw.startswith('```'):
    raw = raw.split('\n', 1)[1].rsplit('```', 1)[0].strip()

try:
    news_items = json.loads(raw)
    print(f'✓ Parsed {len(news_items)} news items')
except json.JSONDecodeError as e:
    print(f'JSON parse error: {e}\nRaw: {raw[:400]}')
    sys.exit(1)

# ── Write news-data.js ──────────────────────────────────────────────────────

js = f"""// Categories
const CATEGORIES = {{
  ai_models: {{ name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' }},
  docs:      {{ name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' }},
  media:     {{ name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' }},
  learning:  {{ name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' }},
  language:  {{ name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }}
}};

// Weekly digest — auto-generated {TODAY}
const NEWS_DATA = {json.dumps(news_items, ensure_ascii=False, indent=2)};

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "{TODAY}";
"""

out = os.path.join(ROOT_DIR, 'news-data.js')
with open(out, 'w', encoding='utf-8') as f:
    f.write(js)

print(f'\n✅ Done! news-data.js written with {len(news_items)} items for weekly digest {TODAY}')
