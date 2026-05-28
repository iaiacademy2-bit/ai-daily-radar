// Categories definition with colors
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// News data — auto-generated on 2026-05-28
const NEWS_DATA = [
  {
    "id": 1,
    "headline": "צללו לעומק עם NotebookLM: הכלי לניתוח מידע מורכב!",
    "explanation": "NotebookLM, כלי ה-AI של גוגל, עכשיו עוזר לכם להבין במהירות מידע מורכב במיוחד. הוא מסכם, מנתח ומציג תובנות מתוך כמויות גדולות של טקסטים, כמו סיכומי כנסים או חומרים ארוכים.",
    "impact": "למשל, אפשר לקחת את הכלי הזה ולסכם באופן אוטומטי חומרי למידה ארוכים, פרוטוקולים מישיבות מורכבות, או מחקרי עומק, כדי לחלץ מהם את הנקודות החשובות ביותר לצורך פיתוח הדרכה.",
    "categoryKey": "docs",
    "source": "Google AI Blog",
    "sourceUrl": "https://blog.google/innovation-and-ai/products/notebooklm/notebooklm-google-io-2026/",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 2,
    "headline": "גוגל מחזקת את חיפוש ה-AI: מצאו מקורות איכותיים בקלות!",
    "explanation": "גוגל משפרת את מנוע החיפוש המבוסס AI שלה, כדי לעזור לכם למצוא בקלות רבה יותר תוכן מקורי ואיכותי. זה אומר פחות זמן בחיפושים ויותר תוצאות רלוונטיות לתכנים אמינים.",
    "impact": "למשל, אפשר לקחת את שיפור החיפוש הזה כדי למצוא במהירות חומרים מקצועיים, מחקרים עדכניים, או מקורות השראה לפיתוח קורסים ותכנים הדרכתיים באיכות גבוהה ומוכחת.",
    "categoryKey": "docs",
    "source": "Google AI Blog",
    "sourceUrl": "https://blog.google/products-and-platforms/products/search/original-high-quality-content-search/",
    "timeAgo": "השבוע",
    "trending": true
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-05-28";
