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

# ── Collect articles ────────────────────────────────────────────────────────

def fetch_rss(url, source_name, max_items=3):
    items = []
    try:
        feed = feedparser.parse(url)
        for entry in feed.entries[:max_items]:
            title   = entry.get('title', '').strip()
            summary = (entry.get('summary', '') or entry.get('description', ''))[:250].strip()
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
    for a in articles[:15]
])

prompt = f"""אתה עורך חדשות AI עבור צוות פיתוח הדרכה (L&D) בישראל. היום: {TODAY}.

הקהל שלנו: אנשי הדרכה, מעצבי למידה, מנהלים — ללא רקע טכני ב-AI.
המטרה: לעזור להם לדעת אילו כלי AI חדשים קיימים ואיך להשתמש בהם בעבודה.

להלן כתבות ועדכונים מהשבוע האחרון:

{articles_text}

---

כללי בחירה — בחר רק כתבות על:
✅ כלי AI חדש שיצא (אפליקציה, שירות, פלטפורמה)
✅ פיצ'ר חדש בכלי קיים (ChatGPT, Claude, Gemini, Copilot, Canva AI, וכד')
✅ מודל AI חדש שיצא — עם דגש על מה אפשר לעשות איתו
✅ עדכון מעשי שאנשי הדרכה יוכלו להשתמש בו

❌ אל תכלול: מאמרי דעה, ניתוחי שוק עבודה, מחקרים אקדמיים, "AI ישנה את העולם", פוליטיקה.

---

כללי כתיבה — חשוב מאוד:
- כתוב כאילו אתה מסביר לחבר חכם שאין לו רקע טכני
- עברית פשוטה וחיה — בלי מונחים כמו "מודל שפה", "אינפרנס", "פרומפט", "פייפליין"
- כותרת: מלהיב, ברור, קצר. למשל: "גוגל השיקה כלי שיוצר תמונות מדהימות בחינם"
- הסבר: מה הכלי/הפיצ'ר, מה חדש בו — 2 משפטים פשוטים
- שימוש ב-L&D: דוגמה קונקרטית אחת לשימוש מעשי בפיתוח הדרכה — "למשל, אפשר לקחת את הכלי הזה וליצור..."

---

עבור כל כתבה שתבחר, החזר JSON עם השדות הבאים:
- "id": מספר עוקב מ-1
- "headline": כותרת בעברית (מקסימום 10 מילים, מלהיבה וברורה)
- "explanation": 2 משפטים בעברית פשוטה — מה הכלי, מה חדש
- "impact": משפט אחד-שניים — דוגמה מעשית ספציפית לשימוש בפיתוח הדרכה, מנוסח בשפת "אפשר לקחת את זה ו..."
- "categoryKey": אחד מ: ai_models | docs | media | learning | language
- "source": שם המקור
- "sourceUrl": קישור לכתבה
- "timeAgo": מתי בעברית (למשל "לפני יומיים", "השבוע", "אתמול")
- "trending": true לשני הפריטים החשובים ביותר, false לשאר

החזר JSON array בלבד. ללא markdown, ללא הסברים נוספים."""

url = f'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_KEY}'
payload = {'contents': [{'parts': [{'text': prompt}]}]}

print('Calling Gemini API...')
resp = requests.post(url, json=payload, timeout=120)

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
  ai_models: {{ name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' }},
  docs:      {{ name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' }},
  media:     {{ name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' }},
  learning:  {{ name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' }},
  language:  {{ name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }}
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
