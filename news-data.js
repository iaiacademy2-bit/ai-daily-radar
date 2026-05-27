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
    "headline": "ארגונים נאבקים להתאים עצמם לעידן סוכני ה-AI האוטונומיים",
    "explanation": "למרות שרוב הארגונים רוצים לאמץ סוכני AI תוך שלוש שנים, כ-76% מודים שאין להם את התשתיות והתהליכים הדרושים. קיים פער בין השאיפה ליכולת היישום בנוגע לאנשים, תהליכים וזרימות עבודה.",
    "impact": "מומחי L&D חייבים להוביל את תכנון השינוי הארגוני, פיתוח מיומנויות חדשות והתאמת תהליכים. עליהם להתמקד בבניית תשתית אנושית ותהליכית שתאפשר הטמעת סוכני AI יעילה ובטוחה.",
    "categoryKey": "learning",
    "source": "MIT Technology Review AI",
    "sourceUrl": "https://www.technologyreview.com/2026/05/26/1137584/rethinking-organizational-design-in-the-age-of-agentic-ai/",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 2,
    "headline": "פאניקת משרות ה-AI: בדיקת מציאות על השפעת הבינה המלאכותית על שוק העבודה",
    "explanation": "למרות ההיסטריה הגוברת לגבי איום ה-AI על משרות צווארון לבן, עדיין אין הוכחות משמעותיות להשפעה בקנה מידה גדול. הנתונים מצביעים על צורך בבדיקת מציאות לגבי ההיסטריה סביב השפעת AI על מקומות עבודה.",
    "impact": "אנשי L&D צריכים להרגיע חששות עובדים באמצעות מידע מדויק וכלים להתמודדות. עליהם לתכנן תוכניות הסבה ופיתוח מיומנויות שיעזרו לעובדים להסתגל ולשתף פעולה עם AI, במקום לחשוש משינויים.",
    "categoryKey": "learning",
    "source": "MIT Technology Review AI",
    "sourceUrl": "https://www.technologyreview.com/2026/05/26/1138028/the-download-ai-jobs-data/",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 3,
    "headline": "מונחים חיוניים להבנת סוכני AI: מילון מונחים חדש לסיוע בהתמצאות",
    "explanation": "עם התפתחות מהירה בתחום סוכני ה-AI, מילון מונחים זה מציג הגדרות קריטיות למונחים כמו 'Harness' ו-'Scaffold'. הוא נועד לסייע למפתחים ולאנשי מקצוע להבין ולתקשר ביעילות בתחום המשתנה.",
    "impact": "מומחי L&D צריכים לשלב את המונחים הללו בתוכניות הכשרה ופיתוח. זה יבטיח שללומדים יהיה בסיס ידע משותף ויכולת לתקשר באופן מדויק על טכנולוגיות AI וסוכניה.",
    "categoryKey": "learning",
    "source": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/agent-glossary",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 4,
    "headline": "התמחות עדיפה על קנה מידה: אסטרטגיה קריטית לרכישת AI שמתעלמים ממנה",
    "explanation": "מאמר זה טוען כי החלטות רכש רבות בתחום ה-AI מתמקדות בגודל ובקנה מידה, תוך התעלמות מחשיבות ההתמחות. בחירה במודלים או סוכני AI מותאמים לצרכים ספציפיים יכולה להניב תוצאות טובות יותר מפתרונות כלליים.",
    "impact": "אנשי L&D המעורבים ברכש טכנולוגיות AI צריכים ללמוד להעריך פתרונות על בסיס התמחות ולא רק קנה מידה. עליהם להכשיר צוותים לזהות צרכים מדויקים ולבחור בכלי AI שישרתו אותם בצורה אופטימלית ללמידה ופיתוח.",
    "categoryKey": "learning",
    "source": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/Dharma-AI/specialization-beats-scale",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 5,
    "headline": "בנה את אתר האינטרנט שלך לעידן הסוכנים: איך להתאים לאינטראקציות AI",
    "explanation": "סרטון זה מסביר כיצד להכין אתרי אינטרנט כדי שסוכני AI, כמו ג'מיני בכרום, יוכלו לסייע למשתמשים ביעילות. הוא מציג כיצד הבנת הקשר בדף והפעלת פעולות משפרים את אינטראקציית הסוכן עם האתר.",
    "impact": "מומחי L&D המפתחים תוכן למידה מבוסס ווב צריכים להבטיח שהאתרים שלהם יהיו 'ידידותיים לסוכני AI'. עליהם להבין את ממשקי ה-API כמו WebMCP כדי להפוך את התוכן נגיש יותר, סריק ויעיל עבור חוויות למידה מוגברות AI.",
    "categoryKey": "docs",
    "source": "YouTube: Matthew Berman",
    "sourceUrl": "https://www.youtube.com/watch?v=HdCc-KezQPk",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 6,
    "headline": "OpenAI מובילה בתחום סוכני קידוד AI לארגונים לפי דוח גרטנר",
    "explanation": "חברת OpenAI הוכרה כמובילה ברביע הקסם של גרטנר לשנת 2026 עבור סוכני קידוד AI לארגונים. כלי ה-Codex שלה זכה לשבחים על חדשנותו ויכולתו לפעול בקנה מידה ארגוני רחב.",
    "impact": "אנשי L&D צריכים לשים לב למגמה זו של AI לקידוד. עליהם לתכנן תוכניות הכשרה למפתחים על אופן השימוש היעיל בסוכני AI כאלה כדי לשפר פרודוקטיביות, וכן לשקול את ההשלכות על מיומנויות הקידוד העתידיות בארגון.",
    "categoryKey": "ai_models",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/index/gartner-2026-agentic-coding-leader",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 7,
    "headline": "התקנות DuckDuckGo זינקו: משתמשים דוחים את חיפוש ה-AI של גוגל",
    "explanation": "בעקבות שינויים בגוגל I/O 2026 שבהם גוגל החליפה קישורי חיפוש מסורתיים בסוכני AI, משתמשים רבים מביעים התנגדות. כתוצאה מכך, מספר ההתקנות של אפליקציית DuckDuckGo זינק ב-30%, מה שמצביע על דרישה לחלופות.",
    "impact": "מומחי L&D חייבים להבין את סנטימנט המשתמשים והתנגדות אפשרית לאוטומציה מלאה של AI. עליהם לעצב חוויות למידה מבוססות AI ששומרות על שליטת המשתמש ונותנות בחירה, כדי למנוע דחייה וליצור קבלה רחבה יותר.",
    "categoryKey": "media",
    "source": "TechCrunch AI",
    "sourceUrl": "https://techcrunch.com/2026/05/26/duckduckgo-installs-are-up-30-as-users-reject-being-force-fed-googles-ai-search/",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 8,
    "headline": "פריצות דרך מדהימות ב-AI מ-DeepMind: שיחה עם המנכ\"ל דמיס האסאביס",
    "explanation": "בראיון מעמיק, מנכ\"ל Google DeepMind, דמיס האסאביס, דן בחידושים ובפריצות הדרך האחרונות של החברה בתחום הבינה המלאכותית. הראיון מספק הצצה לאסטרטגיה ולפוטנציאל העתידי של AI, כולל ההתקדמות במודלים סוכנים.",
    "impact": "אנשי L&D צריכים לצפות בראיון זה כדי לקבל תובנות אסטרטגיות על כיווני הפיתוח של AI. הבנת החזון של מנהיגי התעשייה תאפשר להם לתכנן תוכניות למידה ארוכות טווח ולהכין את הארגון לטכנולוגיות העתידיות.",
    "categoryKey": "media",
    "source": "YouTube: Two Minute Papers",
    "sourceUrl": "https://www.youtube.com/watch?v=huAwz_BR8WM",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 9,
    "headline": "וירג'ין אטלנטיק מאיצה פיתוח אפליקציות באמצעות Codex של OpenAI",
    "explanation": "חברת Virgin Atlantic השתמשה בכלי ה-Codex של OpenAI כדי להשיק במהירות אפליקציית מובייל מחודשת לקראת עונת החגים. השימוש ב-AI איפשר להם להגיע לכיסוי בדיקות יחידה כמעט מלא וללא פגמים קריטיים.",
    "impact": "סיפור הצלחה זה מספק דוגמה קונקרטית לאופן שבו L&D יכולה להדריך צוותי פיתוח להשתמש ב-AI. עליהם ליצור תוכניות שיכשירו מפתחים בשיטות עבודה מומלצות לשימוש ב-AI כדי להאיץ פיתוח, לשפר איכות ולהגיע ליעדים עסקיים במהירות.",
    "categoryKey": "ai_models",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/index/virgin-atlantic",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 10,
    "headline": "Robinhood מאפשרת לסוכני AI לסחור במניות בחשבונות ייעודיים",
    "explanation": "פלטפורמת המסחר Robinhood מציגה אפשרות למשתמשים ליצור חשבון נפרד עם יתרה טעונה מראש, שבו סוכן AI יכול לבצע פעולות מסחר במניות באופן אוטונומי. זה מרחיב את השימוש בסוכני AI לתחום הפיננסי האישי.",
    "impact": "אנשי L&D צריכים להכיר בהשלכות האתיות והחינוכיות של סוכני AI אוטונומיים בתחום הפיננסים. עליהם לכלול בתכנים שלהם נושאים כמו אוריינות AI, סיכונים של אוטומציה וקבלת החלטות בסיוע AI, תוך הדגשת אחריות המשתמש.",
    "categoryKey": "ai_models",
    "source": "TechCrunch AI",
    "sourceUrl": "https://techcrunch.com/2026/05/27/robinhood-now-lets-your-ai-agents-trade-stocks/",
    "timeAgo": "היום",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-05-27";
