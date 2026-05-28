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
    "headline": "גוגל משדרגת את הפרסום עם פלטפורמת AI חדשה",
    "explanation": "גוגל משלבת את פרסומות ה-Display הוותיקות בפלטפורמת Demand Gen מבוססת AI. זהו שינוי משמעותי שמסיים מודל פרסום דיגיטלי בן כמעט שני עשורים.",
    "impact": "מפרסמים יכולים כעת להשתמש בכלי AI חכמים יותר כדי למקד את הקמפיינים שלהם ולהגיע ללקוחות בצורה יעילה יותר מאי פעם.",
    "categoryKey": "media",
    "source": "Artificial Intelligence News",
    "sourceUrl": "https://www.artificialintelligence-news.com/news/google-folds-display-ads-ai-first-demand-gen-platform/",
    "timeAgo": "היום",
    "trending": true
  },
  {
    "id": 2,
    "headline": "פלטפורמת Warp מציגה פיתוח קוד קואורדינטיבי עם GPT-5.5",
    "explanation": "פלטפורמת Warp משלבת את מודל ה-GPT-5.5 החדש של OpenAI כדי לתאם סוכני קידוד בפרויקטים שונים. המערכת תומכת בתהליכי פיתוח מקומיים, בענן ובקוד פתוח.",
    "impact": "מפתחי תוכנה יכולים להשתמש ב-Warp כדי לייעל את שיתוף הפעולה בפרויקטים, לכתוב קוד מהר יותר וביעילות גבוהה יותר, ולקצר את מחזור הפיתוח.",
    "categoryKey": "ai_models",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/index/warp",
    "timeAgo": "היום",
    "trending": true
  },
  {
    "id": 3,
    "headline": "חיפוש גוגל מבוסס AI מציג דרכים חדשות למצוא תוכן מקורי",
    "explanation": "גוגל משיקה פיצ'רים חדשים לחיפוש ה-AI שלה, המאפשרים למשתמשים למצוא בקלות רבה יותר מקורות מידע אהובים ותוכן מקורי ואיכותי. המערכת שופרה כדי לזהות ולהבליט יוצרים ותכנים מהימנים.",
    "impact": "עיתונאים, חוקרים ויוצרי תוכן יכולים לסמוך על כך שחיפושי ה-AI שלהם יפנו אותם למקורות הטובים ביותר, ויעזרו להם לאתר מידע רלוונטי ואמין במהירות.",
    "categoryKey": "learning",
    "source": "Google AI Blog",
    "sourceUrl": "https://blog.google/products-and-platforms/products/search/original-high-quality-content-search/",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 4,
    "headline": "צללו עמוק לתוך Google I/O 2026 עם NotebookLM",
    "explanation": "כלי ה-AI של גוגל, NotebookLM, מציע דרך חדשה לנתח ולהבין את כל ההכרזות הגדולות מוועידת המפתחים Google I/O 2026. הוא מאפשר למשתמשים לחקור לעומק כל נושא שהוצג.",
    "impact": "מפתחים, יזמים ואנשי טכנולוגיה יכולים להשתמש ב-NotebookLM כדי לסכם נקודות חשובות, לחבר בין רעיונות שונים וללמוד את כל הפרטים במהירות, במקום לצפות בכל ההרצאות.",
    "categoryKey": "docs",
    "source": "Google AI Blog",
    "sourceUrl": "https://blog.google/innovation-and-ai/products/notebooklm/notebooklm-google-io-2026/",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 5,
    "headline": "סיסקו ו-OpenAI משנות את הנדסת התוכנה הארגונית עם Codex",
    "explanation": "חברות סיסקו ו-OpenAI משתפות פעולה כדי לרתום את מודל ה-AI Codex לשיפור הנדסת תוכנה. המטרה היא להאיץ פיתוח מבוסס AI, לחזק הגנות סייבר ולאפשר תיקון אוטומטי של תקלות.",
    "impact": "צוותי פיתוח וסייבר בארגונים גדולים ייהנו מקיצור זמני פיתוח, אבטחה משופרת של קוד ותהליכים אוטומטיים לטיפול בבאגים, מה שיחסוך זמן וכסף רב.",
    "categoryKey": "language",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/index/cisco",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 6,
    "headline": "סוכני מס אוטונומיים חדשים נבנו עם Codex של OpenAI",
    "explanation": "OpenAI, יחד עם חברות Thrive ו-Crete, פיתחו סוכני מס משתפרים אוטומטית בעזרת מודל ה-Codex. הסוכנים הללו יכולים להפוך את הגשת הדוחות ליעילה ומדויקת יותר.",
    "impact": "רואי חשבון ויועצי מס יכולים להשתמש בטכנולוגיה זו כדי להפוך את תהליכי הגשת הדיווחים לאוטומטיים, לצמצם טעויות אנוש ולשחרר זמן יקר למשימות מורכבות יותר.",
    "categoryKey": "docs",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/index/building-self-improving-tax-agents-with-codex",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 7,
    "headline": "הרובוט Reachy Mini פועל כעת באופן מקומי לחלוטין",
    "explanation": "רובוט ה-Reachy Mini קיבל שדרוג המאפשר לו להפעיל את יכולות ה-AI שלו באופן מקומי, ללא צורך בחיבור קבוע לענן. זה משפר את המהירות ואת הפרטיות של הפעולות.",
    "impact": "חברות ומוסדות חינוך המשתמשים ברובוטים יכולים כעת ליהנות מפעולה חלקה ומהירה יותר, תוך שמירה על נתונים רגישים בתוך הרשת המקומית שלהם.",
    "categoryKey": "ai_models",
    "source": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/local-reachy-mini-conversation",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 8,
    "headline": "שיתוף מודלי AI ענקיים הפך קל יותר",
    "explanation": "בלוג Hugging Face מציג שיטה חדשה בשם 'Delta Weight Sync' בספריית TRL, המאפשרת לשתף ולעדכן מודלי AI בעלי טריליוני פרמטרים ביעילות. השיטה מקלה על העבודה עם מודלים גדולים במיוחד.",
    "impact": "מפתחי AI וחוקרים העובדים עם מודלי שפה גדולים יכולים כעת לשלוח, לעדכן ולשתף את עבודתם במהירות רבה יותר, ולקדם פרויקטים מורכבים.",
    "categoryKey": "ai_models",
    "source": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/delta-weight-sync",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 9,
    "headline": "רובוטי AI חדשים משנים את המסחר במט\"ח",
    "explanation": "שוק המט\"ח מתפתח במהירות עם הצגת רובוטי AI חדשניים המספקים דיוק ומהירות חסרי תקדים. כלים אלו מאפשרים גישה ממושמעת יותר לתנודתיות השוק.",
    "impact": "סוחרים ואנליסטים יכולים להשתמש ברובוטים אלו כדי לייצר אסטרטגיות מסחר מבוססות נתונים, לבצע עסקאות מהירות ולנהל סיכונים בצורה טובה יותר.",
    "categoryKey": "learning",
    "source": "Artificial Intelligence News",
    "sourceUrl": "https://www.artificialintelligence-news.com/news/exploring-the-benefits-of-ai-bots-for-forex-trading-in-forex-markets/",
    "timeAgo": "היום",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-05-28";
