// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-10-18 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 1,
    "headline": "OpenAI חושפת את GPT-6: שני מודלים חדשים, Sol ו-Luna, משנים את כללי המשחק",
    "explanation": "הגרסה החדשה והעוצמתית ביותר של ChatGPT הגיעה, עם שני מודלים ייעודיים. Sol מתמחה ביצירתיות ורעיונות חדשים, בעוד Luna מתמקדת בניתוח נתונים ודיוק לוגי.",
    "impact": "מעצבי למידה יכולים להשתמש ב-Sol כדי לקבל רעיונות פורצי דרך למשחוק קורסים, וב-Luna כדי לנתח משובים של עובדים ולזהות פערים בידע בצורה מדויקת.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFB4SldKWWgzNDExSThTZW9MRTQ5WHE3VFRZMl9oSjIzaVhuZEZaY1ZSUTFxZTJFaFpUanlncTQySUg5SlRGVnNkQXZ0S3IxLWJScXNkLXY2Z3Jzbk5WR0UwSFp0NmUxN3c?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 19,
    "headline": "מיקרוסופט משדרגת את Copilot: בונים סוכני AI אוטונומיים שינהלו תהליכים עבורכם",
    "explanation": "Copilot Studio החדש מאפשר ליצור 'סוכנים' דיגיטליים שמבצעים משימות מורכבות באופן עצמאי ומתמשך. זה הרבה יותר מצ'אט, אלו ממש עובדים וירטואליים למשימות רוטיניות.",
    "impact": "מנהלת הדרכה יכולה לבנות סוכן AI שבודק אוטומטית השלמת קורסי חובה, שולח תזכורות מותאמות אישית למנהלים ולעובדים, ומפיק דוח התקדמות שבועי ללא מגע יד אדם.",
    "categoryKey": "learning",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihAJBVV95cUxNMWJLZjF0emdwNkZQekdCZFdUbnI2eUFXc3FpYVBpZHpYZ0t2czdmUmcxOWQtWWZaM3BzS1pSdWJKVnRTVTRRazJudnJRQmhLWGhXeEwzYkhvNmJaXzVnb3VRUWdtNlB6LWRLZlRBQWFfVUdBVGFEN3p2OEdjWklEb0Z1U0JFbWdpOENEYU5UMkpSem5VcVNqSHJmSTFlQkpaZkhYSGZ2RDJyN1JEY0MzVEtJYlVabTVwZ095Z2dGazRka2lZREktbVd2RXJLNkhIM3hKSlc0UkhDYm1aSTRlU1MzYXVvZG14bTZ4WE9UTVA3X21GR2RfblNMZDFSeThTR054eg?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 3,
    "headline": "שליטה מלאה על התשובות: ל-ChatGPT 6 יש כפתור חדש לקביעת עומק החשיבה",
    "explanation": "פיצ'ר חדש בשם 'Reasoning Slider' מאפשר לקבוע כמה 'עמוק' ה-AI יחשוב לפני שהוא עונה. אפשר לבחור בין תשובה מהירה וישירה לתשובה מפורטת ומנומקת.",
    "impact": "כשמפתחים תרגול סימולציה למנהלים, אפשר להשתמש במצב ה'עמוק' כדי לקבל תרחישים מורכבים עם ניואנסים, ובמצב ה'מהיר' כדי לייצר שאלות קצרות לבוחן ידע.",
    "categoryKey": "ai_models",
    "source": "Geeky Gadgets",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9uU0Q1NWRqRG9TYzlYSm1qSndyb1VydGtCOExfNktBTk9UbkozOUhHZjRxSGY1X0M2N21XWHdkY3RyWktKNTVpS2VOQU9wZFYzbEdxcnBmSQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 14,
    "headline": "גוגל משיקה סוכן Gemini לעסקים: אוטומציה של תהליכים ארגוניים בקלות",
    "explanation": "גוגל השיקה גרסה עסקית של Gemini שמתחברת למערכות הארגוניות. הסוכן החדש יכול לבצע משימות כמו ניתוח דוחות, תיאום פגישות וניהול פרויקטים באופן אוטומטי.",
    "impact": "צוות L&D יכול להשתמש בסוכן כדי לנתח את נתוני ה-LMS, לזהות עובדים עם ביצועים נמוכים ולהציע להם אוטומטית קורסים רלוונטיים לשיפור.",
    "categoryKey": "learning",
    "source": "ALM Corp",
    "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBtaVNjRWxBTVpkOTIxVnFReHBLd0pvLWU5bnVPWmdiZnZZX25pYVVwdVZKUVNGN014YUsyYzBWXzZJQjNfalk4clF3YUp4Qm02VmcxRXBkRnA1eWRFY2Y5UXB3OE5hX0tFTWN5ZVA2NHo1bUdRR0lV?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 21,
    "headline": "סוף סוף: Copilot מקבל את כל היכולות של Office באפליקציה אחת",
    "explanation": "אפליקציית Copilot החדשה משלבת את כל כלי ה-AI של Word, Excel ו-PowerPoint במקום אחד. מעכשיו אפשר ליצור מסמך, לנתח נתונים ולבנות מצגת בלי לעבור בין תוכנות.",
    "impact": "במקום לבזבז שעות על עיצוב מצגת הדרכה, אפשר פשוט להזין ל-Copilot את סיכום ההדרכה מ-Word והוא ייצר מצגת מעוצבת ומוכנה להצגה תוך דקות.",
    "categoryKey": "docs",
    "source": "TechRadar",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxPRzB3Qm1GWXRzenBodjZoX1BXeFZid2kyMF9NMW9hXzJsWlhqZTlrekVNdno4UkNsU2p3YmtjYjlKR0JiUk9DRmVPMzRBUEQ5ZTFPVXZleHZoNGp6Y0hPUWY3Z3Mtb0w1WEFiMkRYRlFlRTdIYkZsYVdYbXcxODNxV1IwNXpqX0xPdkt5WXZpQWlYQl9nV0tJZHpEUE5QcV9WQjRtQUdtc0NISzdBcTM5OGh5T280N3lKbkRucGltQWNZX2lqSGpqNmY5ckFuRmFKbTE0SGIzQkdpel9WeFlZZDRGZEV0U0pNN0JSNURB?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 44,
    "headline": "אמזון השיקה כלי AI שיוצר מצגות עסקיות באופן אוטומטי",
    "explanation": "הכלי החדש, Bedrock AgentCore, מאפשר ליצור מצגות שלמות על ידי תיאור התוכן הרצוי בשפה פשוטה. הוא מנתח את הבקשה, אוסף מידע רלוונטי ומעצב את השקפים.",
    "impact": "מנהל מוצר שצריך להעביר הדרכה על פיצ'ר חדש יכול לבקש מהכלי \"צור מצגת השקה לפיצ'ר X\", והוא יקבל מצגת מקצועית עם הסברים, תמונות ונתונים.",
    "categoryKey": "media",
    "source": "Amazon Web Services (AWS)",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOd3BUVi1zNDhoUXpwTTE4ZU9LY0NVUV92d0c2WW5ud3VkbUxjT0FHWTIwX25kRTZfTWxWQ2pVbnNoNnQtckkwVHNIXzZRWGxtRF93VWYxeEtneWdxcFU0eHhKRzA3SWM5cGpTR19yR2E5b2lnU0ZVQ1J2X0NEMlI0UkVIdGU3ajYzLV85OU54OXcwMVFvYVdZeE1oVHBrTzJi?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 39,
    "headline": "כלי חדש מאפשר ליצור סרטונים ארוכים ועקביים בעזרת AI",
    "explanation": "Seedance 3.0 הוא כלי ליצירת וידאו ששומר על עקביות של דמויות וסגנון לאורך סרטונים ארוכים. זה פותר את אחת הבעיות הגדולות של מחוללי וידאו כיום.",
    "impact": "צוות הדרכה שמפתח סדרת סרטוני מיקרו-למידה יכול להשתמש בכלי כדי ליצור דמות מדריכה וירטואלית שתופיע בכל הסרטונים ותשמור על מראה וקול אחידים.",
    "categoryKey": "media",
    "source": "Startup Fortune",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPakRFMzJxSTJ3SzdFQTA0YmdnRlRQT1dBWnN4ZHZlcHF1aHdnUklfYkF6U0ZFUTNoblhGRkVjbHFTclFHSjljdlZKSkJvbWJfdFhhdlFiY2g2aEE4Q0pCbGFmQlRYVHNZU3hKMzEySVp5T2ZQZjJsZndZT3dGSFR3NU9SbXdrcDZOTUx3Rlk5U2NyYk5jNjlJ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 33,
    "headline": "מדריך חדש: כך תשתמשו בכלי ה-AI של Canva ליצירת תוכן לרשתות חברתיות",
    "explanation": "Metricool פרסמו מדריך מפורט שמסביר צעד-אחר-צעד איך להשתמש ביכולות ה-AI החדשות של Canva. המדריך מכסה יצירת תמונות, כתיבת טקסטים ותזמון פוסטים.",
    "impact": "מי שאחראי על קידום קורסים פנימיים בארגון יכול להשתמש במדריך כדי לייצר קמפיין ויזואלי מרשים תוך דקות, במקום להעסיק מעצב גרפי חיצוני.",
    "categoryKey": "media",
    "source": "Metricool",
    "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9ESEtuLWNaejk5b3dzYnk1N3pKUDB4eFYzekVpbEhEbjRVUWQ5MWxWMzA2cjdNSF9KUmRFWFNlZ20yYTZSalFfNUFRVkw5TzRWNWRPWkdTOTdmT25iczVGSFluajBEM3h5VUFTVUlFQ3o4aGhKMzU1ZQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "לא צריך מתכנת: מדריך חדש מראה איך לבנות אתר שלם עם ChatGPT",
    "explanation": "המדריך המעשי של Hostinger מפרט איך כל אחד יכול לבנות אתר אינטרנט פונקציונלי מאפס. התהליך כולל יצירת קוד, עיצוב וכתיבת תוכן, הכל בעזרת שיחה עם הבוט.",
    "impact": "מחלקת הדרכה יכולה כעת לבנות מיני-סייט ייעודי לקורס דגל חדש, כולל עמוד נחיתה, מערכת רישום ודפי מידע, בלי לבקש עזרה מצוות הפיתוח.",
    "categoryKey": "learning",
    "source": "Hostinger",
    "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1ONkhsZG5SeEhqZ3lEeUVCZE9iNWVpNlV1dElqNHlxRC1GUU45dklZeS1NVkpsQ05BZEl6eWJkSzVmXzhZbUpSRlgwY0Z1ZXpRQ2szV0pWcmdjWTlBVHNHM0FyQ1pvNnVZOERiMmVRZlo?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 4,
    "headline": "טיפ למשתמשי מק: כך תחליפו את החיפוש הרגיל בשאילתה ישירה ל-ChatGPT",
    "explanation": "מדריך קצר מראה איך להגדיר קיצור דרך במערכת ההפעלה של אפל (MacOS). במקום לפתוח את הדפדפן, אפשר לשאול שאלות את ChatGPT ישירות משורת החיפוש.",
    "impact": "זהו שדרוג פרודוקטיביות אדיר למפתחי הדרכה. כשצריך לבדוק עובדה מהירה או לקבל ניסוח חלופי למשפט, התשובה נמצאת במרחק הקלדה אחת, בלי לצאת מהמסמך.",
    "categoryKey": "language",
    "source": "OS X Daily",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOOVN0aFRDV2VxVnhVQjBacHB6cm5DOTNneU9zWWxqSUgtX3FLX09KUVhrS2xub3VENjhKR19nOHJSdXMtWW1mb0lvN3lXbS1OYnFONFh3dHdlREhjVEMzOHdOTmpwNFBKYzZDLWw0M3kyMWxEZTZIMlFHS1BrLTBEYzJCc0dWRU9tWU8yaHdnZ1BSYjZV?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 9,
    "headline": "מפתח השתמש ב-Claude AI כדי לבנות 7 חלופות חינמיות לכלי אדובי",
    "explanation": "מתכנת הראה כיצד השתמש בצ'אט של Anthropic כדי לכתוב קוד לשבע אפליקציות. התוצאה היא כלים חינמיים שמחקים פונקציות של תוכנות יקרות כמו פוטושופ ואילוסטרייטור.",
    "impact": "זה מראה שאפשר להשתמש בכלי AI לא רק ליצירת תוכן, אלא גם ליצירת כלי עבודה. צוות הדרכה יכול לבנות לעצמו כלי פנימי קטן, למשל, מחולל תעודות סיום קורס מותאמות אישית.",
    "categoryKey": "media",
    "source": "TechRepublic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQcDVWbnY0dl9hTHhSa0hWNEJnUVpfRkRtc0VTYXRCbHN5bWtZeGpEWjg1c2RQVmpxQ2JUZGQ4T1ZGQmp3X3pleHZjTTFHQ1JEdF9HZFRVUnN3ZTE0UDRJY2I0b1g4Mk0xb01mbnJFWlFGZTc3T0F6UElfa1hyajQ1TjFlUXl0UEpWU2tuZnhJcjdWQTlUSEpnd2N3?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 16,
    "headline": "פיצ'ר חדש ב-Gemini פותר את התסכול הגדול ביותר בחיפוש על גבי מפה",
    "explanation": "גוגל שילבה את Gemini ישירות במפות, מה שמאפשר לשאול שאלות מורכבות בשפה טבעית. למשל: \"מצא לי מסעדות איטלקיות כשרות עם חניה במרחק 10 דקות הליכה מפה\".",
    "impact": "כשמתכננים יום עיון או סדנה מחוץ למשרד, אפשר להשתמש בזה כדי למצוא בקלות מקום שעונה על כל הדרישות: נגישות, גודל, ציוד טכני ואפשרויות צהריים בסביבה.",
    "categoryKey": "language",
    "source": "Android Police",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQblZpcG1aVk41bUhFYlVZWWNMb1NBc1VoSDRkT210SlpKRzhrVmgwc182WkV3ZEpTNDdkd0xzXzJ6MV9EUHJxbFpTOXJGTktGZmpqLWRJMUx4a2tOcW5sQTFqREdzVXU0eVh2OE5UTHhfR3d1ZmpwcG1qbFl2TFc1QmhTNkMzUkxiZktZ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 38,
    "headline": "עורך הווידאו החינמי VSDC מוסיף מחולל וידאו מבוסס AI",
    "explanation": "תוכנת עריכת הווידאו הפופולרית VSDC שחררה גרסה חדשה עם כלי AI מובנה. מעכשיו אפשר ליצור קטעי וידאו חדשים מטקסט ישירות בתוך תוכנת העריכה, ולשלב אותם בפרויקט.",
    "impact": "מפתחי הדרכה שיוצרים סרטוני הדרכה יכולים כעת לייצר אנימציות קצרות או קטעי מעבר ויזואליים בלי לחפש חומרים ברשת, מה שמקצר משמעותית את זמן ההפקה.",
    "categoryKey": "media",
    "source": "The National Law Review",
    "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNTUp3VHE3RkRPMUxscjhXY1k4QWdjT3ZjOEJmTzcxLWczQ2VxcDl4UmU3a1dNMmlJZkF6Q1puZDdzaFVLbE9LNUx2TFIyU0ppNG1Mb2lqRm41UmNYbTlPSVlmWDBHUTRHVkpvVWFXUkJvLWZPbXBneFYtUVJmdjU0TndFbnhaZEJpZzhROTlUTWxHeVFhb2V4eldyUmxET2pOSGtFOHVLb0JtMUJ1UnRLcw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 10,
    "headline": "גוגל מציגה את Gemini 4 Argon: מודל חדש שמיועד לפתרון בעיות מורכבות במיוחד",
    "explanation": "זוהי גרסת העל החדשה של ג'מיני, שמיועדת למשימות הדורשות חשיבה רב-שלבית ועמוקה. גוגל טוענת שהיא מצטיינת בניתוח מערכות סבוכות ופתרון אתגרים שדורשים הבנה רחבה.",
    "impact": "צוות L&D שמתכנן תוכנית פיתוח מנהלים שנתית יכול להשתמש בארגון כדי למפות את כל צרכי הארגון, להצליב אותם עם כישורי המנהלים, ולהציע מסלולי למידה מותאמים אישית.",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQSnlfSFAtZ3F0bFlnbTVkTUJHb2ZMa2ZLR2Q0Zm4wUi1yd0dPNjk0Z1dxalhMZ0x3WFpmNGF0bnA5SGpnalRXSFZEcjc0M2VsNjlHOFZtU1dVVUlrUGpNN24zLW02V0U0NFk5Z3dwbDZFcE1kS0ZSaFNxOHVHUWdTWURZSWIyUENmbXdjeTRwOGQ3SkhOSHMxaHlBMVpEbWw2?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 45,
    "headline": "מיקרוסופט משדרגת את Copilot Notebooks במטרה לעקוף את המתחרה של גוגל",
    "explanation": "הכלי של מיקרוסופט, המקביל ל-NotebookLM, קיבל שדרוג משמעותי. הוא מאפשר להעלות מסמכים, לסכם אותם, לשאול עליהם שאלות וליצור תוכן חדש המבוסס עליהם.",
    "impact": "מדריך שצריך להעביר קורס המבוסס על נהלים פנימיים ארוכים ומסורבלים, יכול להעלות את כל הנהלים לכלי וליצור ממנו תקציר, מצגת ואפילו שאלות למבחן.",
    "categoryKey": "docs",
    "source": "Root-Nation.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOWFhxZjVaRVZseGNyemI2YW9NMGxRUFVpYTJ0V1JNVkRiVXJKT2phaDUyM0VCVHVnbENnWUlmYnl5czUtUTMtMURMcWZETlBiR2gzZG9hSkI2dmQtNTA1VXlzUmpCeWNhWTFkU2VJaTBHVzZ1YXN0YUlpOHJLNENxSkk2MjJNVFQ2VlE1SmV4TEFLd2FWU3NlODdKbTI5OHZuQ3paYXYwVVJPMnRiN0lLUDFGV2pwcnhRYVU1bkkxaU9kNkgzQzM1eFVRRFIxdkpGSUlmWlFQZw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 22,
    "headline": "מיקרוסופט משיקה Copilot ייעודי לעורכי דין ולתחום המשפטי",
    "explanation": "הגרסה החדשה של Copilot מותאמת במיוחד לעולם המשפט. היא יודעת לנתח מסמכים משפטיים, לסכם פסקי דין ולעזור בניסוח חוזים, תוך שמירה על הטרמינולוגיה המקצועית.",
    "impact": "זהו מודל מצוין לאיך ניתן להתאים AI לתחום ספציפי. מחלקת הדרכה יכולה לקחת את הרעיון ולבנות בעזרת הכלים החדשים 'Copilot להדרכה' שיכיר את כל חומרי הלמידה בארגון.",
    "categoryKey": "language",
    "source": "LawSites",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQcUZTeHFON0FiQ0pLTm51eGx1YXVsT3VHOHdMTmJVbFRVVVUyNzZCVnpUbmxPaXR3SkIyN19maGNQMGVjaG5uZmlkZlk5UWVJOGdTcV93RjlZRlBOeE8zUHhSaElaODJQV0NFb3dDMnhIcGczUjZicFluSHdkR3llczVIVXp1V2pxcGhlZy01X25hOEs2X1pSRDZzbXRockRTVkpTMTRXQ0tIazlWZU9rcEdXVXlGeWZvTG93ZW93RVJyaDRnaWJTbUpHbGx1UnlBT3dCY2RBaDZKQWJsZldIVw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 35,
    "headline": "Canva משתפת פעולה עם EY ו-Snowflake ליצירת פלטפורמת AI לאנשי מכירות",
    "explanation": "שלוש ענקיות טכנולוגיה חברו יחד כדי לבנות כלי AI שמסייע לאנשי מכירות. הכלי מנתח נתונים, מציע אסטרטגיות ויוצר חומרי שיווק מותאמים אישית באופן אוטומטי.",
    "impact": "צוותי הדרכת מכירות יכולים להשתמש בפלטפורמה ככלי סימולציה מתקדם. אפשר לתת למדריכים להתאמן על תרחישי לקוח מורכבים שהמערכת מייצרת, ולקבל פידבק מבוסס נתונים.",
    "categoryKey": "learning",
    "source": "EY",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijwJBVV95cUxOVnkyN3hHSTJ1eVBUVHlqZjVSWGZfbVdQeDBGa0YwN2dSYmx6elB6d210d1oybUFRTjl5a0NNSGxXeTd6XzFYRDdiR0MyQ2d5RGVqV1kzdG5OcEZBN3JHQ1FoaF8yeURHU1plU2d2WklIcGgtN205YUNYTWI2Q3FkTTg5YVBPTENycS0zdjdyV3lLRzYwM0UtMlJheWwwMFBRWEJCSEJEUnhnWjVXVXlPUTBhQ3dOaGVEMk54OHJwMzEzdE9RV0RHc0h2Z0JHY3BRczFyUEY4MUF5UFBla3BZWGxGUEpLVlppQ2cweUtQVE9uN185X1l6N0pZcFRxYzktWFVIazJLbHVZYk1SZF9F?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 41,
    "headline": "מדריך טכני: איך לחבר את מחולל הווידאו Kling למערכות שלכם",
    "explanation": "Kling הוא אחד ממחוללי הווידאו המבטיחים ביותר, וכעת יש לו API שמאפשר לחבר אותו לאתרים ואפליקציות. המדריך החדש מסביר למפתחים איך לבצע את החיבור ב-13 צעדים פשוטים.",
    "impact": "צוות הדרכה עם יכולות טכניות יכול לחבר את Kling למערכת ה-LMS. כך, ניתן לאפשר לעובדים ליצור סרטוני סיכום קצרים בסוף כל יחידת לימוד, באופן אוטומטי.",
    "categoryKey": "media",
    "source": "https://tech-insider.org/",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE5UWjZ4Y3V6cXZtekdRYzFfQzZ6Y20wNU1NWkhONURzQzVsTzVwWlNhV19RLWpFMXJ1b3pyNFpuTU5pLUJjS1ZlUWxrNGJvakZXT1FWLXdUb0tUMlhsSTNGNmNzanRtd080U3Z2TG9aMGpRdw?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-10-18";
