// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-06-21 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 21,
    "headline": "מיקרוסופט משנה את כללי המשחק: Copilot Cowork זמין לכולם",
    "explanation": "מיקרוסופט השיקה את Copilot Cowork, גרסה ארגונית מתקדמת של העוזר החכם שלה. הוא מתחבר לכל המידע הפנימי של החברה ומאפשר לעובדים לקבל תשובות מדויקות על נהלים, פרויקטים ונתונים.",
    "impact": "מנהלת הדרכה יכולה עכשיו לבנות בוט פנימי שיענה לשאלות עובדים חדשים על תהליכי קליטה, במקום להעביר מצגות שוב ושוב. זה חוסך זמן יקר ומספק תשובות מיידיות 24/7.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNYl95X2hIN1lFYnFNM0EtVUtOWlJrQWp2Q25CWDFlR3VxdFF4dlZxY3FQX0V0emd5dFQ3UDZjWWRQNUpnR3VpNzRLUUpENXBvYVprQ1RhQkw0SkVwcmZDR0pHbFhQNVR5RHlhRjNuak5NWU9jclBXTkpVeXU0NUlMeHc0T3pMYXpuT1Z6azNNcjJlT294dzQyaUxFNHhTekNhQjNWOXppNA?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 15,
    "headline": "אדריכלות למידה באוטומט: Adobe משלבת AI בכל כלי העיצוב",
    "explanation": "אדובי הוסיפה עוזר AI חכם לפוטושופ, פרמייר ואינדיזיין, שמאפשר ליצור ולערוך תמונות, סרטונים ומסמכים באמצעות שיחה פשוטה. הוא מבין בקשות מורכבות ומציע רעיונות יצירתיים תוך כדי עבודה.",
    "impact": "מעצבת למידה שמכינה חוברת דיגיטלית על בטיחות בעבודה יכולה לבקש מהכלי 'הוסף איור של עובד עם קסדה בכל עמוד שני', והוא יעשה זאת אוטומטית. זה מקצר תהליכי עיצוב משעות לדקות.",
    "categoryKey": "media",
    "source": "Adobe Newsroom",
    "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1iM1dHcDBrc01VNWxESDBlN08tZ2UwQ2lJdENLU0ljeDhnaVdkaGltdW4tT0p5ZEFVSkRjYXRLUFdORGk3UWx4Z2xrVUFPMTl1NFlIVFhCemRjTXdzRXFkYjdmQ2pTbDh0UHNpQ2l0Y3JTXzA?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": true
  },
  {
    "id": 3,
    "headline": "העוזר האישי שלכם עובד גם כשאתם ישנים: ChatGPT משיק תזמון משימות",
    "explanation": "פיצ'ר חדש ב-ChatGPT מאפשר לתזמן משימות שירוצו אוטומטית בזמן שנקבע מראש. אפשר לבקש ממנו להכין סיכום יומי, לכתוב מיילים או לנתח נתונים כל בוקר בשעה 8:00.",
    "impact": "במקום להכין ידנית כל שבוע דוח על התקדמות העובדים בקורסים, אפשר לתזמן משימה ב-ChatGPT שתנתח את נתוני האקסל ותשלח סיכום מסודר למנהלים בכל יום חמישי בבוקר.",
    "categoryKey": "language",
    "source": "9to5Mac",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOUGxjVURXNlktVHU5TjJFaWdYM2VhMUZINWJWTWw2SzFpb01sZVVnVDVucmRwNlVhUS1FWTRQVWJOX2VZRGFES1FxT3JyNWZXMzNQNmprM0VmWkwzSVJiY1RUa2V3Tzg2OG5WYmVCblFOeW1laTNvUHRBVjdneHVEUzBuZnpxX1Y0U2FVVnBHanQ?oc=5",
    "timeAgo": "לפני 4 ימים",
    "trending": true
  },
  {
    "id": 37,
    "headline": "וידאו: 9 כלי Canva חדשים שיעיפו לכם את המצגות",
    "explanation": "סרטון YouTube חדש מציג 9 יכולות AI מדהימות שנוספו לקנבה ממש עכשיו. הכלים מאפשרים ליצור אנימציות מורכבות, לעצב אינפוגרפיקות מונפשות ולהפיק סרטונים קצרים בלחיצת כפתור.",
    "impact": "מי שמעביר הדרכות מכירה בארגון יכול להפוך שקפים סטטיים ומשעממים לסרטוני מוצר קצרים ודינמיים, ולהציג את הפיצ'רים החדשים בצורה ויזואלית ומרתקת.",
    "categoryKey": "media",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5ESWYwSGxvdUNmOUlVRDg0UGc3TFhpUWNVbFo2RTB3LWxWM04wdkhGb1JKaW56a3kzR1NGM3FyaFUxNlhvSTgyTk5kVTZ4aThVd3V2OF9mZDlVMnhHcTFScQ?oc=5",
    "timeAgo": "לפני יומיים",
    "trending": false
  },
  {
    "id": 2,
    "headline": "ChatGPT זוכר הכל: שדרוג הזיכרון החדש ומה הוא אומר עבורנו",
    "explanation": "מעכשיו, ChatGPT יכול לזכור שיחות קודמות והעדפות אישיות שלכם. הוא לומד את סגנון הכתיבה שלכם, את הפרויקטים שאתם עובדים עליהם, ונותן תשובות מותאמות אישית.",
    "impact": "צוות L&D שמפתח סדרת קורסים על שירות לקוחות יכול 'ללמד' את הצ'אט את המינוחים והטון של החברה פעם אחת, ובכל פעם שיבקש ממנו לכתוב תסריט לסימולציה, הוא ישתמש באותה שפה בדיוק.",
    "categoryKey": "language",
    "source": "ZDNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPd21rT193MlZoNktpSkp5a0lnLUJVcnFSRmFVdzhCbk5yb0FYREZiOXNyUVNLZ29GOUhtS3dDSzBuQ0hPRzJ3SmlQZVRMd0ZHUXVHVU1IZ3NnbUVCNVZEOFJNVTA1M0dibGVRVnpLRGZGcHB3VlJvSU9nLV9XNjFaUkxxT0xWd29GY2c?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 43,
    "headline": "יצירת סרטוני הדרכה עקביים הפכה לקלה מתמיד עם Seedance 2.5",
    "explanation": "כלי חדש ליצירת וידאו, Seedance 2.5, פותר את בעיית העקביות הגדולה של סרטוני AI. הוא מאפשר לייצר סרטון עם מספר סצנות שונות, תוך שמירה על אותה דמות ואותו סגנון לאורך כל הדרך.",
    "impact": "מפתחי הדרכה יכולים ליצור סדרת סרטוני 'מיקרו-למידה' על תוכנה חדשה, כשבכל סרטון אותה 'מדריכה וירטואלית' מסבירה פיצ'ר אחר, מה שיוצר חווית למידה אחידה ומקצועית.",
    "categoryKey": "media",
    "source": "Barchart.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOZXBmeWxiMldBeFZCd1lOLVBwM25qMEZhVnNmejlLZFl2WVRSbVFOX2hZTmNVZ1E0dzAzYWNpRU1IWlMtOVRMd0d3czhDc19YTWpmdVJuV0VkZk5nNnhVekJMS3ViNWlhZU5ZWjB6VWxQT1NJRS0zcmFaOVpXcjJheWlhR0NuZmxyYlJuLTlZeGRGTWVBTmstQkV5MlhCQXlvd09VcU1vaGYzcEE5aEZvbzNmc25DaW1oVTlZUnZaOVNFQ0hGX3NFamowQVc1dw?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 16,
    "headline": "גוגל מציגה רמקול חכם חדש שיכול להפוך לעוזר הדרכה אישי",
    "explanation": "גוגל השיקה את Google Home Speaker החדש, שמופעל על ידי מנוע ה-AI המתקדם Gemini. הוא יכול לנהל שיחות מורכבות, להבין הקשר ולבצע משימות כמו סיכום פגישות או חיפוש מידע בזמן אמת.",
    "impact": "דמיינו שבחדר ההדרכה יש עוזר קולי שמקשיב לדיון, ובסופו מפיק סיכום אוטומטי של הנקודות המרכזיות ושולח אותו במייל לכל המשתתפים. זה בדיוק מה שהכלי החדש מאפשר.",
    "categoryKey": "learning",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOTmNNMTByMGR2azV3SE5FR0RJVzRQTnB2VWtoSS1kWHh0dXJ0MkFycWZxNjhlZ1E2UFlKX252ei1SenoxX0lKdVMyT0tqQ2RHS0dMdEVQbVdWVEN4aU5zSHVfbjhkVS10MlNVeVd1QmY3TnhwR1RLcF96NmdQbWtsWUtNWHNFNWU3Y0pONWp0SnFvQ3VWYV9MUHVVSV9DZ1N3?oc=5",
    "timeAgo": "לפני 4 ימים",
    "trending": false
  },
  {
    "id": 35,
    "headline": "רשת מריוט השיקה בוט AI שיכול לתת לכם רעיונות להדרכות חווייתיות",
    "explanation": "רשת המלונות מריוט השיקה את 'Ask Bonvoy', כלי חיפוש מבוסס שיחה למציאת חופשות. הכלי מבין בקשות כמו 'מצא לי חופשה רגועה עם ספא ונוף לים' ומציע המלצות מותאמות אישית.",
    "impact": "צוותי רווחה והדרכה יכולים להשתמש בכלי הזה כדי לקבל השראה לימי גיבוש או סדנאות מנהלים. אפשר לשאול אותו 'תכנן לי סדנת מנהיגות בת יומיים בצפון שמשלבת פעילות אתגרית' ולקבל רעיונות יצירתיים.",
    "categoryKey": "learning",
    "source": "Hotel Dive",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPMHZYc1N2RnpqVzJkTm9abG5fOVZOWGdzMElLV0lrbXJ6RzhrYWlwcXk5Z0d6OXJnNUVBajBHcDBKQ1JZYmVhMEdnYlR1dXA1bm1rZlkxNG9QbVh1Y0hITlVoTUhPT05wbUFHc2NzVnpUeW40MjFmSVh1UGRaWE1GUnJiSnBsSVFBZVVPTllWcXk1aEVtNGI1bUlB?oc=5",
    "timeAgo": "לפני 4 ימים",
    "trending": false
  },
  {
    "id": 8,
    "headline": "וידאו: 9 טריקים שימושיים להוציא יותר מצ'אט ה-AI של קלוד",
    "explanation": "סרטון חדש מדגים 9 טיפים וטכניקות מתקדמות לעבודה עם Claude. הוא מסביר איך לגרום לו לנתח מסמכים גדולים, לשנות סגנון כתיבה בצורה מדויקת וליצור טבלאות מורכבות.",
    "impact": "מפתח הדרכה שצריך להפוך מדריך טכני יבש של 100 עמודים לסדרת טיפים קצרים וקלילים בוואטסאפ, ילמד מהסרטון איך לבקש מקלוד לבצע את המשימה הזו בצורה יעילה.",
    "categoryKey": "language",
    "source": "Popular Science",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9vRGZ0SFVqbFMtWEEtUDBacDlIcDB3N1lFeF93bm5rTjdwZWdEcllCQjBuaU05QW1tRlRxSE1uYUZLNW9nWXdVVWpPeDNsNWs0T3VNenhRa2l5ZmdHWnc?oc=5",
    "timeAgo": "לפני יומיים",
    "trending": false
  },
  {
    "id": 12,
    "headline": "וידאו: מדריך למתחילים שיסביר לכם איך להשתמש ב-Gemini 3.0 של גוגל",
    "explanation": "סרטון הדרכה מקיף שמסביר צעד אחר צעד איך להשתמש בגרסה החדשה של Gemini. הוא מכסה את כל היכולות, החל מכתיבת טקסטים ועד ניתוח תמונות וסרטונים.",
    "impact": "כל איש צוות הדרכה, גם ללא שום רקע טכני, יכול לצפות בסרטון הזה ובתוך שעה להתחיל להשתמש בכלי כדי לייצר רעיונות לקורסים, לכתוב שאלות למבחנים או ליצור תמונות למצגות.",
    "categoryKey": "ai_models",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE56eTA3all6SHptemdyVWxzYUtpbl92ZGdiaERFd0RiZThjWDc5THotUGltRVZJUW1SMFNMWXlveW5FQlQxY2wtUEVfZWNSYzBRMGtadk1ENzE5b1U?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 1,
    "headline": "מה באמת חדש ב-GPT-5? כל מה שאנחנו יודעים על המודל הבא של OpenAI",
    "explanation": "הצצה ראשונה ליכולות של מודל השפה הבא, GPT-5, שצפוי להיות חכם ומהיר משמעותית. הדיווחים מדברים על יכולת הבנה עמוקה יותר של הקשר וביצוע משימות מורכבות הדורשות חשיבה רב-שלבית.",
    "impact": "בעתיד הקרוב, מנהל הדרכה יוכל לתת לכלי כזה מטרה כמו 'בנה לי תוכנית הדרכה שנתית למנהלים חדשים', והוא יפיק תוכנית שלמה, כולל מטרות, תכנים, לו\"ז ודרכי מדידה.",
    "categoryKey": "ai_models",
    "source": "Built In",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE0zcTBuNjNoeWVkRlVJaXRTVWduYTFDbnN5aFU1QmFieWFfZ0V3SzRRMUhPak5WaldUeE16cFVXTlZwblJZdWM4eVdVX2E4eFRGVzAzNXRLVXZUOHBZbk1oaUFqbkltM1g2TXVZMFBLckc1QQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 41,
    "headline": "כלי חדש בשם Hub יוצר סרטוני AI שלמים במקום אחד",
    "explanation": "חברת MiniMax השיקה את Hub, פלטפורמה חדשה ליצירת וידאו שמאחדת את כל השלבים. היא יכולה לכתוב תסריט, לייצר את הקריינות וליצור את הוויזואליה, הכל מתוך ממשק אחד.",
    "impact": "במקום להשתמש בשלושה כלים שונים, מפתח הדרכה יכול כעת להזין ל-Hub נושא כמו 'ניהול זמן אפקטיבי' ולקבל סרטון הדרכה קצר ומוכן להפצה תוך דקות ספורות.",
    "categoryKey": "media",
    "source": "Variety",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNMjVyWHN0VjZreEhqQ1Vsa2tRZk5RQl82SUd0cG9UeENCZmY0YnlkOEh4RXR6U25wS20zRF85LVhDd0Q0QW5tNXlEMWx0QXgzRG5qQy12d2hwTHpSUjhtVzg5c25tZS05NXhmXzI2OTBpWFZBT1hhcXBUTGhiU1dBcTNkZzY3OHpHYjFOS1lGeENaSllQMWFPeDMtUndpXzdwVHFraXB2MEw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 10,
    "headline": "וידאו: 25 יכולות מדהימות של Claude AI לכתיבת תוכן טכני",
    "explanation": "סרטון הדגמה מעמיק מציג 25 שימושים של קלוד שרלוונטיים במיוחד לכתיבה טכנית ופיתוח. הוא מראה איך הכלי יכול להסביר קוד, לכתוב תיעוד ולפשט נושאים מורכבים.",
    "impact": "מדריך טכני שצריך להסביר לעובדים איך להשתמש במערכת CRM חדשה, יכול להשתמש בטכניקות מהסרטון כדי ליצור מדריכים ברורים, מדויקים וקלים להבנה, גם לקהל לא טכנולוגי.",
    "categoryKey": "language",
    "source": "MarkTechPost",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNRWtsZVJ6WFNiam41bkJjOWM1d2N5U1YtNkg1U1JtNTlsd0NUYTZMWGZJM2diS1pMcDFiWUFselFaZFh5MF8tb2I2NGRHT2RvOExaWFQ0LVlwRlFkSVJMVl9SVnBRSHlKeUQ2NVU3Y1l1Sk4xUTBQelBJSVp5Nlh1V3lDTGZIZmlnNXlZUk41d01mUkdHUWVPRXJn?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 17,
    "headline": "אנדרואיד 17 ו-Gemini משתלבים כדי להפוך את הטלפון לעוזר למידה נייד",
    "explanation": "גוגל הכריזה על שילוב עמוק של יכולות Gemini במערכת ההפעלה אנדרואיד 17. הפיצ'רים החדשים מאפשרים לבצע מספר משימות במקביל בצורה חכמה יותר, כמו לסכם סרטון יוטיוב תוך כדי כתיבת מייל.",
    "impact": "עובד שנמצא בנסיעת רכבת יכול לצפות בוובינר מוקלט ובמקביל לבקש מהעוזר החכם לסכם את הנקודות המרכזיות ולנסח מהן פוסט קצר לרשת הפנימית של החברה. זו למידה תוך כדי תנועה ברמה חדשה.",
    "categoryKey": "learning",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxORTVCQWRfRlBqT0d1UWtBUGUtaU84MWhESHJKeHA2eHBJNzI3amk1c1VYNmdCbFA5dUNib0FnbF9SUEd3S0xGX0pfVGlCQmdwQmMyODZkSEhjQzJ4amhuSVA1T09TbFdWZjR4blFrRXhDdG5FRW9vdGFwT3NIVTBGNkN6Mld4MjNPM1VzT0dwVm5NWVlBSkttbUJtYnlrYmQwak1hMTFjQW5oTXpYYzJSbWJFSmozSVE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 31,
    "headline": "פייסבוק משיקה כלי חיפוש חכם שיהפוך אותה למאגר ידע אדיר",
    "explanation": "פייסבוק השיקה מנוע חיפוש מבוסס AI בתוך הפלטפורמה שלה. הכלי החדש יכול לענות על שאלות מורכבות על בסיס המידע העצום שקיים בקבוצות, פוסטים ודיונים ברשת החברתית.",
    "impact": "מנהלי קהילות למידה יכולים להשתמש בזה כדי למצוא בקלות דיונים רלוונטיים או תשובות לשאלות שעלו בעבר בקבוצת הפייסבוק של הקורס, ולהפוך את הידע הקיים לנגיש יותר.",
    "categoryKey": "docs",
    "source": "Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPLUVYVnZVQWxtZDZnaFpPdTZJTWtBcHNfYTZobFJIbU42SUI0V3ppR2dvTkFVZHNGWndhNG1lbmxxZU8xa1NqV1V1MndmY0hBSl9zYUtiR05RdTJlZ2VMdmxsTmpFQkVaT0dHaHhlODFHcXBmQU12ek9DaW1kT3F3aWIyRTU5d0RCWHV6eDVkNTVackNaem9PZmNvM3hYbEotNy1VdldjdkN2UFF3T3JaMExQVDAwNHYwOWloTGUzNXpjVDNvVDdpLVd5eGJpclMtWFpvaEtQLThYQUQ2S2c?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 44,
    "headline": "רוצים ליצור סרטון מוטיבציה לסדנה? כלי חדש מציע 100 תבניות וידאו מוכנות",
    "explanation": "הושק כלי חדש בשם AI Inspo שמציע מעל 100 תבניות וידאו מוכנות בהשראת המונדיאל. המשתמשים יכולים להתאים אישית את הטקסטים והתמונות וליצור סרטונים קצרים ומלאי אנרגיה.",
    "impact": "לפני סדנת פיתוח מנהלים בנושא עבודת צוות, אפשר להשתמש בכלי כדי ליצור סרטון פתיחה קצר ומרגש עם קטעי ספורט, ציטוטים מעוררי השראה והלוגו של החברה.",
    "categoryKey": "media",
    "source": "EIN News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOc3pqV29VaXZpTG1ETFFkY01FMVgyUERiM3FwMzJOb1BPRFk2Q1RualRUTFk0V0NNcTc2Mi1Mb3AyeW9wc2M2SlBpOUlFakw2UWFmSzNyZkdsaXdaWXJmV0NGbk1CTjBocXA0cEhnbllHamZLMVUzMGEweHR4RFZ4UmNXdWg0SnlTMWhraVQ3Qlc2clVCTGtXODJaV3FFWTVKdzhNWnFDbTVBdGE0WHZuY3M3am80b1Q4Qm9uMDJn0gG-AUFVX3lxTE5zempXb1VpdmlMbURMUWRjTUUxWDJQRGIzcXAzMk5vUE9EWTZDVG5qVFRMWTRXQ01xNzYyLUxvcDJ5b3BzYzZKUGk5SUVqTDZRYWZLM3JmR2xpd1pZcmZXQ0ZuTUJOMGhxcDRwSGduWUdqZksxVTMwYTB4dHhEVnhSY1d1aDRKeVMxaGtpVDdCVzZyVUJMa1c4MlpXcUVZNUp3OE1acUNtNUF0YTRYdm5jczdqbzRvVDhCb24wMmc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 26,
    "headline": "OpenAI משיקה רשת שותפים כדי להטמיע AI בכל ארגון",
    "explanation": "OpenAI הכריזה על 'רשת השותפים' שלה, גוף חדש שיסייע לחברות וארגונים להטמיע את כלי הבינה המלאכותית שלה. הרשת תכלול מומחים ויועצים שיעזרו להתאים את הטכנולוגיה לצרכים ספציפיים.",
    "impact": "ארגונים גדולים שרוצים לבנות מערכת למידה מותאמת אישית מבוססת AI יוכלו להיעזר במומחים האלה. זה יאפשר להם, למשל, ליצור סימולציות מורכבות או מערכות המלצה לקורסים בצורה מקצועית.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9uMkJtTlNBalBxNWxuLVlzbHlsaTFGdXdmUks2Z1pqZ0IyZkNyYmZUU1JkYlc4emNMclpXUWo1aEpyRVJRX3VKQnlScl93bkdrN1pBeWlaVVNSeWk2cmh5dlpWRF9ZTkY2LW9qMw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 24,
    "headline": "מיקרוסופט עוברת למודל תשלום לפי שימוש ב-Copilot Cowork",
    "explanation": "בניגוד למודל המנוי החודשי הקבוע, מיקרוסופט הודיעה על מודל תמחור חדש וגמיש עבור Copilot Cowork. ארגונים ישלמו רק על מה שהם משתמשים בו בפועל, מה שמוזיל את עלויות הכניסה.",
    "impact": "מחלקת הדרכה קטנה יכולה להתחיל להשתמש בכלי כדי לבנות בוט שאלות ותשובות לקורס ספציפי, ולשלם סכום נמוך. אם הפיילוט יצליח, אפשר יהיה להרחיב את השימוש לכלל הארגון מבלי להתחייב לסכומים גדולים מראש.",
    "categoryKey": "docs",
    "source": "Computerworld",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOcXNFejFBellpMTFyS1FkUUtKeFB6V2hWOGtva1dBYmE1UmZLZ3RaRUs1T0E1bG9YNFRTUS1nV3ZkanUzeUR5a1BEVVFxVkR5MmlSenphaHpFM3ZlWnlfbnVHN1lreWk5WnF0UXNqcEt5V1ZMOXgxOFRNN0R3S0NFcEk0dFgxcjFCQlFxTGE3Mk9HLWVhZ19Nd0FReGRrZ0dTVE9LUzI0WHdSMjVudmc?oc=5",
    "timeAgo": "לפני 4 ימים",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-06-21";
