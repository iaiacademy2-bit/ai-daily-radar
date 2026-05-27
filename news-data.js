// Categories definition with colors
const CATEGORIES = {
  ai_models: { name: 'מודלי בינה מלאכותית', bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'קבצים ומסמכים',       bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'מדיה',                 bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'למידה והדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',           bg: '#fff1f2', text: '#e11d48' }
};

// News data — auto-generated on 2026-05-27
const NEWS_DATA = [
  {
    "id": 1,
    "headline": "גוגל Display Ads מקבלת בית חדש ומשופר",
    "explanation": "גוגל העבירה את ניהול פרסומות הדיספליי שלה לפלטפורמת Demand Gen החדשה, מה שמאפשר לפרסם בצורה יעילה ומאוחדת יותר. המעבר מייעל את תהליך הקמת הקמפיינים וניהולם.",
    "impact": "מנהל שיווק יכול כעת לנהל את כל קמפייני המודעות החזותיות שלו ממקום אחד חכם, דבר שיחסוך זמן וישפר את ביצועי הפרסום.",
    "categoryKey": "media",
    "source": "Google AI Blog",
    "sourceUrl": "https://blog.google/products/ads-commerce/google-display-ads-demand-gen/",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 2,
    "headline": "גוגל Health: כל נתוני הבריאות שלך במקום אחד",
    "explanation": "אפליקציית גוגל Health מאפשרת כעת לרכז ולצפות בכל נתוני הבריאות שלך ממכשירים שונים במקום אחד נוח. זה מעניק למשתמשים שליטה טובה יותר על המידע הרפואי והאישי שלהם.",
    "impact": "משתמש עם שעון חכם ואפליקציות כושר יכול כעת לראות את כל המדדים החשובים כמו דופק וצעדים בלוח מחוונים אחד, ולקבל תמונה ברורה יותר על בריאותו.",
    "categoryKey": "learning",
    "source": "Google AI Blog",
    "sourceUrl": "https://blog.google/products-and-platforms/products/google-health/connect-data-across-devices/",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 3,
    "headline": "ChatGPT מתחברת לחדשות אמינות מברזיל",
    "explanation": "OpenAI יצרה שיתוף פעולה עם גופי חדשות מובילים מברזיל כדי להזרים תוכן עיתונאי אמין ל-ChatGPT. זה מאפשר גישה מורחבת לחדשות עם ציון מקור ושקיפות מלאה.",
    "impact": "חוקר שוק או מנהל עסקי בישראל שצריך מידע עדכני על ברזיל יכול לקבל מ-ChatGPT סיכומים מהימנים מכתבות עיתונאיות מאומתות.",
    "categoryKey": "language",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/index/grupo-folha-grupo-uol-partnership",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 4,
    "headline": "מודלי שפה חדשים ומהירים מ-NVIDIA לייצור טקסט ברגע",
    "explanation": "Hugging Face מציגה את מודלי Nemotron-Labs Diffusion Language של נוידיה, המאפשרים יצירת טקסט במהירות חסרת תקדים. המודלים האלו מספקים קפיצת מדרגה ביכולות יצירת תוכן מהירה ואיכותית.",
    "impact": "מפתח תוכן יכול להשתמש במודלים אלו כדי לייצר כותרות, תיאורי מוצרים או פוסטים לרשתות חברתיות בכמויות עצומות ובמהירות שיא, מה שיחסוך זמן יקר.",
    "categoryKey": "ai_models",
    "source": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/nvidia/nemotron-labs-diffusion",
    "timeAgo": "היום",
    "trending": true
  },
  {
    "id": 5,
    "headline": "יוטיוב תסמן אוטומטית סרטוני AI ותגביר את השקיפות",
    "explanation": "יוטיוב מתחילה לסמן באופן אוטומטי סרטונים המכילים תוכן שנוצר משמעותית על ידי בינה מלאכותית, במקום לסמוך רק על היוצרים. סימוני ה-AI יהיו בולטים יותר לעין המשתמשים.",
    "impact": "צופה יכול כעת לזהות בקלות אם סרטון חדשותי או סרטון דוקומנטרי חשוב נוצר באופן מלאכותי, מה שיעזור לו להעריך את אמינות המידע שהוא צורך.",
    "categoryKey": "media",
    "source": "TechCrunch AI",
    "sourceUrl": "https://techcrunch.com/2026/05/27/youtube-will-now-automatically-label-ai-videos/",
    "timeAgo": "היום",
    "trending": true
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-05-27";
