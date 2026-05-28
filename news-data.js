// Categories definition with colors
const CATEGORIES = {
  ai_models: { name: 'מודלי בינה מלאכותית', bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'קבצים ומסמכים',       bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'מדיה',                 bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'למידה והדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',           bg: '#fff1f2', text: '#e11d48' }
};

// News data — auto-generated on 2026-05-28
const NEWS_DATA = [
  {
    "id": 1,
    "headline": "גוגל משלבת פרסומות מבוססות AI בפלטפורמת הדור הבא שלה",
    "explanation": "גוגל משדרגת את מערכת הפרסום שלה על ידי שילוב פרסומות ה\"דיספליי\" לתוך פלטפורמה חדשה מונעת AI. המהלך הזה מבטל מודל פרסום ותיק ומאפשר יצירת קמפיינים חכמים יותר.",
    "impact": "משווקים יכולים מעכשיו ליצור קמפיינים פרסומיים מדויקים ואפקטיביים יותר, עם יכולת למצוא לקוחות פוטנציאליים בצורה אוטומטית וחכמה.",
    "categoryKey": "media",
    "source": "Artificial Intelligence News",
    "sourceUrl": "https://www.artificialintelligence-news.com/news/google-folds-display-ads-ai-first-demand-gen-platform/",
    "timeAgo": "היום",
    "trending": true
  },
  {
    "id": 2,
    "headline": "סוכני AI עצמאיים למיסים: דיוק מוגבר ואוטומציה עם קודקס",
    "explanation": "OpenAI, בשיתוף עם Thrive ו-Crete, פיתחו סוכני AI למיסים שמסוגלים לשפר את עצמם ולבצע מילוי טפסים באופן אוטומטי. המערכת החדשה מגבירה את הדיוק ומאיצה תהליכי עבודה.",
    "impact": "יועצי מס ורואי חשבון יכולים להשתמש בסוכנים אלה כדי לטפל בכמות גדולה של תיקי מס במהירות ובדיוק חסרי תקדים, ולפנות זמן לייעוץ מורכב יותר ללקוחות.",
    "categoryKey": "docs",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/index/building-self-improving-tax-agents-with-codex/",
    "timeAgo": "היום",
    "trending": true
  },
  {
    "id": 3,
    "headline": "דרכים חדשות למצוא תוכן מקורי ואיכותי בחיפוש AI של גוגל",
    "explanation": "גוגל מציגה שיפורים בחיפוש ה-AI שלה, שנועדו לעזור למשתמשים לאתר בקלות רבה יותר מקורות מידע מהימנים ותוכן מקורי. עכשיו יהיה קל יותר להבחין בין יצירות מקוריות לתוכן שנוצר על ידי AI או מועתק.",
    "impact": "עיתונאים, חוקרים וסטודנטים יכולים להשתמש בחיפוש המשופר כדי למצוא במהירות מידע אותנטי ולזהות את המקורות הראשוניים, ולוודא שהם מסתמכים על ידע מהימן.",
    "categoryKey": "learning",
    "source": "Google AI Blog",
    "sourceUrl": "https://blog.google/products-and-platforms/products/search/original-high-quality-content-search/",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 4,
    "headline": "צללו עמוק יותר ל-I/O 2026 עם NotebookLM",
    "explanation": "כלי ה-AI NotebookLM של גוגל קיבל עדכון המאפשר לו לנתח ולהרחיב מידע מאירועים כמו Google I/O. הוא עוזר למשתמשים להבין לעומק את ההכרזות החשובות.",
    "impact": "מפתחים ומנהלי מוצר יכולים להשתמש ב-NotebookLM כדי לסכם נקודות מפתח מכנסים טכנולוגיים, להבין את ההשלכות שלהן על עבודתם ולתכנן צעדים עתידיים.",
    "categoryKey": "docs",
    "source": "Google AI Blog",
    "sourceUrl": "https://blog.google/innovation-and-ai/products/notebooklm/notebooklm-google-io-2026/",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 5,
    "headline": "סיסקו ו-OpenAI משנות את פיתוח התוכנה הארגוני עם קודקס",
    "explanation": "סיסקו ו-OpenAI משתפות פעולה כדי לשלב את מודל ה-AI קודקס בתהליכי הנדסת התוכנה הארגוניים של סיסקו. זה יאפשר לסיסקו לפתח תוכנה מבוססת AI במהירות רבה יותר ולתקן באגים באופן אוטומטי.",
    "impact": "מהנדסי תוכנה בסיסקו יכולים מעכשיו להתמקד בחדשנות במקום בתיקון תקלות חוזרות, בעוד הקודקס מטפל בזיהוי ופתרון בעיות קוד באופן אוטומטי.",
    "categoryKey": "language",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/index/cisco",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 6,
    "headline": "Warp מסתמכת על GPT-5.5 ליצירת סוכני קידוד בקוד פתוח",
    "explanation": "חברת Warp משתמשת ב-GPT-5.5 ובמודלים נוספים של OpenAI כדי לתאם בין סוכני קידוד בסביבות פיתוח שונות. המערכת נועדה לייעל את שיתוף הפעולה בפרויקטי קוד פתוח.",
    "impact": "צוותי פיתוח תוכנה יכולים להשתמש ב-Warp כדי לארגן ולשלב עבודת קידוד בין מתכנתים שונים, מה שמאפשר להם לפתח פרויקטים גדולים ומורכבים במהירות וביעילות רבה יותר.",
    "categoryKey": "ai_models",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/index/warp",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 7,
    "headline": "Reachy Mini הופך עצמאי לחלוטין – פועל גם ללא אינטרנט!",
    "explanation": "הרובוט Reachy Mini עבר עדכון חשוב המאפשר לו לפעול באופן מקומי לחלוטין, ללא צורך בחיבור קבוע לאינטרנט. זה משפר את הפרטיות והאמינות של הפעלת המערכת.",
    "impact": "חברות המפעילות רובוטים אינטראקטיביים בסביבות רגישות למידע או עם חיבור אינטרנט לא יציב, יכולות מעתה להשתמש ב-Reachy Mini בביטחון מלא, תוך שמירה על פרטיות הנתונים.",
    "categoryKey": "language",
    "source": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/local-reachy-mini-conversation",
    "timeAgo": "היום",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-05-28";
