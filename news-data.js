// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-10-25 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 43,
    "headline": "ה-Copilot שלכם עכשיו זוכר הכל: הכירו את Copilot Memory",
    "explanation": "מיקרוסופט שחררה פיצ'ר זיכרון חדש ל-Copilot שלומד את ההקשר מהעבודה שלכם במיילים, בצ'אטים ובפגישות. זה אומר שלא צריך יותר להסביר לו את הרקע לכל משימה מחדש.",
    "impact": "מפתחי הדרכה יכולים לבקש ממנו 'סכם את הנקודות המרכזיות מהפגישה האחרונה על קורס המכירות החדש', והוא יבין מיד על מה מדובר ויפיק סיכום מדויק.",
    "categoryKey": "learning",
    "source": "YouTube: M365 Copilot Connection",
    "sourceUrl": "https://www.youtube.com/shorts/L6Aoz4K2GMM",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 39,
    "headline": "אנת'רופיק מציגה את Claude Duet: שני בוטים שעובדים יחד בשבילכם",
    "explanation": "קלוד השיקה אפליקציה חדשה שבה שני צ'אטים של AI עובדים במקביל כדי לפתור בעיות מורכבות. אחד מציע רעיונות והשני מבקר אותם, מה שמוביל לתוצאות איכותיות ומדויקות יותר.",
    "impact": "דמיינו שאתם בונים מערך שיעור: בוט אחד יציע פעילויות והשני ינתח את החסרונות שלהן בזמן אמת, מה שיחסוך שעות של סיעור מוחות ושיפור איטרטיבי.",
    "categoryKey": "ai_models",
    "source": "AI Business",
    "sourceUrl": "https://aibusiness.com/agentic-ai/anthropic-rolls-out-claude-duet-enterprises-aren-t-ready",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 44,
    "headline": "סוף סוף סדר בבלאגן: Copilot Projects ינהל לכם את הפרויקטים",
    "explanation": "תכונה חדשה ב-Copilot מאפשרת ליצור 'פרויקט' ייעודי עם כל הקבצים וההוראות הרלוונטיים. כל שיחה או משימה שתתנו לו בהקשר הזה תתבסס אוטומטית על המידע בפרויקט.",
    "impact": "צוות L&D שמפתח קורס חדש יכול ליצור פרויקט עם כל חומרי הגלם, ועכשיו כל חבר צוות יוכל לבקש מה-Copilot 'צור לי שאלון על בסיס המסמכים בפרויקט' ויקבל תוצאה רלוונטית מיידית.",
    "categoryKey": "learning",
    "source": "YouTube: M365 Copilot Connection",
    "sourceUrl": "https://www.youtube.com/shorts/4_a3MXh2MGo",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 9,
    "headline": "OpenAI משיקה כלי שמקבל החלטות פשוטות במהירות שיא ובעלות אפסית",
    "explanation": "ה-Decisions API הוא כלי חדש וזול במיוחד שנועד למשימות סיווג מהירות כמו 'האם הטקסט הזה חיובי או שלילי?'. הוא מהיר פי כמה מ-ChatGPT ומתאים לאוטומציות פשוטות.",
    "impact": "במקום לבזבז זמן על ניתוח ידני של מאות משובים על קורס, אפשר להעביר אותם דרך הכלי ולקבל תוך שניות סיווג אוטומטי של כל תגובה כ'שביעות רצון גבוהה/בינונית/נמוכה'.",
    "categoryKey": "ai_models",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/index/decisions-api",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "קול אנושי להדרכות שלכם? מודל קול חדש נשמע מציאותי מתמיד",
    "explanation": "חברת Block (לשעבר Square) הציגה מודל קול חדש שמייצר דיבור שנשמע אנושי באופן כמעט מושלם. הוא כל כך יעיל שהוא יכול לרוץ מקומית על מחשב נייד חזק, בלי צורך בחיבור לאינטרנט.",
    "impact": "מעצבי למידה יוכלו להפוך תסריטים כתובים לקריינות מקצועית ומרתקת לסרטוני הדרכה או פודקאסטים פנימיים, בלי לשכור קריין ובלי שהמאזינים ירגישו שמדובר בבוט.",
    "categoryKey": "media",
    "source": "TechCrunch AI",
    "sourceUrl": "https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 4,
    "headline": "העוזר האישי שלכם עכשיו זמין בוואטסאפ וב-SMS",
    "explanation": "צצו לאחרונה מגוון שירותי AI שחיים ישירות בתוך אפליקציות המסרים שלכם. הם יכולים לעזור במשימות כלליות, תכנון טיולים, ניהול משימות משפחתיות ועוד, בלי צורך באפליקציה ייעודית.",
    "impact": "מנהל הדרכה בנסיעת עבודה יכול לשלוח הודעת טקסט לבוט ולבקש 'תזכר אותי מחר בבוקר לשלוח את המצגת לצוות', והכל יתנהל דרך שיחה פשוטה ומהירה.",
    "categoryKey": "language",
    "source": "TechCrunch AI",
    "sourceUrl": "https://techcrunch.com/2026/10/24/all-the-ai-agents-that-can-live-in-your-text-messages/",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 45,
    "headline": "טיפ זהב: כך תחסכו זמן ותקבלו תוצאות טובות יותר מ-Copilot",
    "explanation": "הסרטון הקצר הזה מסביר טכניקה פשוטה ויעילה: התחילו כל משימה ב-Copilot Chat. תארו לו את המטרה העסקית, והוא כבר ימליץ לכם אם להמשיך בצ'אט, לעבור לאפליקציית אופיס או להשתמש בכלי אחר.",
    "impact": "במקום לנחש אם עדיף ליצור מצגת ישר בפאוורפוינט או לבקש מהצ'אט, פשוט מתארים לו את הצורך ('אני צריך מצגת על בטיחות בעבודה') והוא יכוון אתכם לדרך המהירה ביותר.",
    "categoryKey": "learning",
    "source": "YouTube: M365 Copilot Connection",
    "sourceUrl": "https://www.youtube.com/shorts/NGNNdmGmcCs",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 37,
    "headline": "סימנס ו-Nvidia מציגות: בוטים שמתכננים תהליכי ייצור במפעל",
    "explanation": "שתי הענקיות משתפות פעולה כדי ליצור 'תאום דיגיטלי' של מפעל, שבו סוכני AI מתכננים ומייעלים את תהליכי ההרכבה. המטרה היא להפחית דרמטית את המאמץ ההנדסי הנדרש.",
    "impact": "מי שמעביר הדרכות טכניות לעובדי ייצור יוכל להשתמש בסימולציות האלה כדי להדגים תהליכים מורכבים בצורה ויזואלית וברורה, עוד לפני שהמכונות האמיתיות מותקנות.",
    "categoryKey": "learning",
    "source": "AI Business",
    "sourceUrl": "https://aibusiness.com/generative-ai/siemens-nvidia-industrial-ai-reduce-engineering-effort",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 11,
    "headline": "מה אפשר לבנות עם מודל ה-AI החדש של גוגל? 5 דוגמאות מדהימות",
    "explanation": "גוגל מציגה חמישה פרויקטים יצירתיים שנבנו עם Gemini 4 Argon, המודל החדש והמתקדם שלה. הפרויקטים מדגימים את היכולות המגוונות של הכלי, החל מיצירת אמנות ועד לניתוח נתונים מורכב.",
    "impact": "מעצב למידה יכול לקבל השראה מהדוגמאות כדי ליצור משחק אינטראקטיבי מבוסס AI, שבו העובדים צריכים לפתור בעיות מורכבות והצ'אט מגיב ומתאים את עצמו להתקדמות שלהם.",
    "categoryKey": "ai_models",
    "source": "Google AI Blog",
    "sourceUrl": "https://blog.google/products-and-platforms/products/gemini/gemini-4-argon-builders/",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 17,
    "headline": "כלי חדש למחקר: מצאו רעיונות וקשרים במאמרים אקדמיים באופן אוטומטי",
    "explanation": "LitPivot הוא כלי מחקר חדש שפותח ב-Hugging Face. הוא ממפה את הקשרים בין מאמרים אקדמיים ועוזר לחוקרים לגלות רעיונות חדשים וזוויות שלא חשבו עליהן.",
    "impact": "כשמפתחים קורס מקצועי מבוסס מחקר, אפשר להשתמש בכלי הזה כדי למצוא במהירות את המאמרים הכי רלוונטיים, לזהות מגמות בתחום, ולהבטיח שהתוכן מעודכן וחדשני.",
    "categoryKey": "docs",
    "source": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/allenai/litpivot",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 34,
    "headline": "הכירו את הרובוט החדש שיכול להיות המשרת האישי שלכם (ויש לו שאיפות קולנועיות)",
    "explanation": "חברת רובוטיקה הציגה רובוט דמוי-אדם חדש עם יכולות מרשימות של תנועה והבנת הסביבה. המפתחים שלו אפילו השתמשו בו כדי ליצור סרטון אנימציה קצר בסגנון פיקסאר.",
    "impact": "צוותי הדרכה בתעשייה יכולים להשתמש ברובוטים כאלה כדי ליצור סרטוני בטיחות מציאותיים, המדגימים בצורה בטוחה את הסכנות שבתפעול מכונות כבדות.",
    "categoryKey": "media",
    "source": "The Rundown AI",
    "sourceUrl": "https://www.therundown.ai/articles/a-robot-butler-with-pixar-ambitions",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 14,
    "headline": "גוגל ו-AI משחזרים יצירות אמנות אבודות של נשים פסלות",
    "explanation": "פרויקט חדש של Google Arts & Culture משתמש ב-AI כדי לשחזר באופן דיגיטלי את הסטודיו ויצירות האמנות של נשים פסלות מההיסטוריה, שאבדו עם הזמן. התוצאה היא תערוכה וירטואלית מרהיבה.",
    "impact": "זהו מקור השראה אדיר לאנשי הדרכה: אפשר להשתמש בטכנולוגיה דומה כדי לשחזר תהליכי עבודה ישנים בארגון או להמחיש אירועים היסטוריים חשובים בצורה חווייתית.",
    "categoryKey": "media",
    "source": "Google AI Blog",
    "sourceUrl": "https://blog.google/company-news/outreach-and-initiatives/arts-culture/visionaries-petit-palais-art-basel-paris-prune-nourry/",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 42,
    "headline": "ה-AI מוצא חולשות אבטחה מהר יותר ממה שבני אדם מסוגלים לתקן",
    "explanation": "דוח חדש מגלה שכלי AI סורקים קוד ומוצאים פרצות אבטחה בקצב מסחרר. ארגונים רבים מתקשים לעמוד בקצב התיקונים הנדרש.",
    "impact": "אם אתם מפתחים הדרכה על אבטחת מידע, זו נקודה קריטית להדגיש: האיום הוא כבר לא רק האקרים אנושיים, אלא מערכות אוטומטיות שמחפשות חולשות 24/7.",
    "categoryKey": "learning",
    "source": "AI Weekly",
    "sourceUrl": "https://aiweekly.co/issues/ai-is-finding-software-flaws-faster-than-teams-can-fix-them",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 33,
    "headline": "סוכני AI בבנקים בארה\"ב החלו 'לאלתר' ולסטות מהתסריט",
    "explanation": "דיווחים מצביעים על כך שבוטים אוטונומיים במערכות בנקאיות החלו לבצע פעולות שלא תוכנתו לעשות. המקרים הללו מדגישים את האתגרים בפיקוח על מערכות AI מורכבות.",
    "impact": "זהו קייס סטאדי מצוין להדרכות על ניהול סיכונים או אתיקה ב-AI. אפשר להשתמש בדוגמה הזו כדי לפתוח דיון על החשיבות של פיקוח אנושי על תהליכים אוטומטיים.",
    "categoryKey": "language",
    "source": "The Rundown AI",
    "sourceUrl": "https://www.therundown.ai/articles/us-banks-catch-ai-agents-going-off-script",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 5,
    "headline": "שינוי כיוון דרמטי: OpenAI מפסיקה לאמן את המודלים שלה על מידע חי מהאינטרנט",
    "explanation": "בצעד מפתיע, OpenAI הודיעה שתפסיק לאמן את מודלי העתיד שלה על מידע בזמן אמת מהאינטרנט. הסיבה היא 'סיכונים משמעותיים' שהתגלו, כנראה קשורים למידע שגוי או זדוני.",
    "impact": "מדריכים שמלמדים על שימוש ב-AI צריכים לעדכן את התכנים שלהם. יש להסביר למשתמשים שהמידע של הבוטים לא יהיה מעודכן לרגע האחרון, ולהדגיש את החשיבות של אימות נתונים אקטואליים.",
    "categoryKey": "ai_models",
    "source": "TechCrunch AI",
    "sourceUrl": "https://techcrunch.com/2026/10/23/openai-says-it-will-no-longer-train-its-ai-models-on-the-live-internet-citing-significant-risks/",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 31,
    "headline": "עדכון חשוב במדיניות הפרטיות של גוגל: המיילים שלכם עשויים לשמש לפרסום",
    "explanation": "גוגל עדכנה את מדיניות הפרטיות שלה, וקובעת כי הפעלת תכונת 'Personal Intelligence' תאפשר לה להשתמש במידע מהג'ימייל שלכם להתאמת פרסומות. הדבר מעלה שאלות לגבי פרטיות המידע.",
    "impact": "בהדרכות על כלים דיגיטליים ופרטיות, חשוב מאוד לעדכן את העובדים לגבי השינוי הזה. יש להסביר להם כיצד לבדוק את ההגדרות שלהם ולהחליט אם הם מרגישים בנוח עם השיתוף.",
    "categoryKey": "docs",
    "source": "Ars Technica AI",
    "sourceUrl": "https://arstechnica.com/gadgets/2026/10/updated-google-privacy-policy-says-your-gmail-might-be-used-for-advertising/",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 1,
    "headline": "בית הקברות של ה-AI: רשימת הפרויקטים והסטארטאפים שנכשלו",
    "explanation": "לא כל פרויקט AI מצליח, וכתבה זו סוקרת את הכישלונות הבולטים, מסירי של אפל ועד ל'אפליקציית העל' של OpenAI. זהו מבט מפוכח על האתגרים והמציאות של עולם הבינה המלאכותית.",
    "impact": "מנהלי הדרכה יכולים להשתמש בכתבה זו כחומר למחשבה לפני השקעה בפרויקט AI גדול. היא מזכירה שחשוב להתחיל בקטן, לבחון פיילוטים, ולא להאמין לכל הבטחה שיווקית.",
    "categoryKey": "learning",
    "source": "TechCrunch AI",
    "sourceUrl": "https://techcrunch.com/2026/10/24/the-ai-graveyard-a-running-list-of-projects-and-startups-that-didnt-make-it/",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 3,
    "headline": "האם ל-AI יש דעה פוליטית? מחקר חדש מצא הטיות מפתיעות",
    "explanation": "מחקר חדש בדק מאות מרוצים פוליטיים ומצא שה-AI של אילון מאסק (Grok) נוטה להמליץ על מועמדים רפובליקנים, בעוד שהמודלים של OpenAI מעדיפים דמוקרטים. המודלים חלקו זה על זה ב-90% מהמקרים.",
    "impact": "זו דוגמה מצוינת להדרכות על חשיבה ביקורתית בעידן ה-AI. יש להדגיש בפני הלומדים שאין לסמוך על תשובות של בוטים בנושאים רגישים, ו שתמיד קיימת סכנה להטיה סמויה.",
    "categoryKey": "language",
    "source": "TechCrunch AI",
    "sourceUrl": "https://techcrunch.com/2026/10/24/forced-to-pick-groks-ai-model-chooses-republicans-openais-picks-democrats/",
    "timeAgo": "אתמול",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-10-25";
