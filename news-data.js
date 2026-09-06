// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-09-06 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 1,
    "headline": "דור חדש של אינטליגנציה: OpenAI חושפת את GPT-6 Astra",
    "explanation": "הכירו את GPT-6 Astra, השדרוג העצום הבא ל-ChatGPT. הוא מהיר יותר, חכם יותר ומסוגל להבין הקשרים מורכבים בצורה שמזכירה חשיבה אנושית.",
    "impact": "מנהלי הדרכה יכולים להשתמש בו כדי לתכנן אסטרטגיית למידה שנתית שלמה, כולל יעדים, מדדים ותקציבים, תוך דקות ספורות במקום שבועות של עבודה.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE11QUxBUVJLdC1jSmtJbmcxQzg4Qm9yUlNPS3JEMEVBanIyY1FRT2k2R0hBTlNnX2VqcWpTSDJUMDV0TjBJN1VGamlrZzVPZw?oc=5",
    "timeAgo": "היום",
    "trending": true
  },
  {
    "id": 9,
    "headline": "קלוד עובד בשבילכם ברקע: אוטומציה חדשה בזמן שאתם עובדים",
    "explanation": "קלוד (Claude) יכול כעת לבצע משימות ברקע המחשב שלכם, כמו לחיצה על כפתורים ומילוי טפסים. הוא פשוטו כמשמעו עובד במקומכם בזמן שאתם מתרכזים במשימות אחרות.",
    "impact": "במקום לעדכן ידנית 50 משתמשים חדשים במערכת ה-LMS, מעצב הלמידה יכול לתת לקלוד רשימה והוא יזין את כולם אוטומטית, ויחסוך שעות של עבודה חוזרת.",
    "categoryKey": "language",
    "source": "PCWorld",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOUldGb0ZGU1ZQMjVSWUlRUnNyUHpfN1hHclA2V1pjUldTM0ppMW5xSTlCa3VaV24zSTJpbE90bkNuampOZmpibXZXYl9fRTdGS1ZJRGl2Z2hOYTdtNFZzLXJfX2xma3NrbEhmYjVnTU9wUXA4M25sbk9UNVFiV2ppSjBxQW4wdjhoSE5Na2R3SVpOWVFYUFpKSktldUFaMEFPR2tPZHBJejJCaDA?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 12,
    "headline": "ג'מיני מסדר לכם את התמונות: ניהול אוטומטי לספריית Google Photos",
    "explanation": "גוגל שחררה יכולת חדשה לג'מיני (Gemini) שמאפשרת לו לנהל, למיין וליצור אלבומים בספריית התמונות שלכם. פשוט תארו לו מה אתם רוצים, והוא יארגן הכל לבד.",
    "impact": "צוות L&D שצילם מאות תמונות באירוע חברה יכול לבקש מג'מיני 'למצוא את כל התמונות עם אנשים מחייכים וליצור מצגת', ולקבל תוצר מוכן תוך דקות.",
    "categoryKey": "media",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxNZjZydEpPN2s2Tm9YM1FuSkFqdWVLRUpZN3Job0drdldXVUw3RFl6YkswYVoySjVKOU9Cc1RwOUdsamxyRzN4QWlqd2VtbUtLcmxJc2RndzZEaHl6TVZmdGtHNy0xYW5fY1lzU003OTJtaEozOFZCa3Y3ckp6dlkyMF9KZ2hNZ01IbTdPNVA4akxIalEwaU1ELUJzeFFUdw?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 33,
    "headline": "גוגל משיקה מתחרה ל-Canva: יוצרים עיצובים גרפיים בעזרת משפטים",
    "explanation": "הכירו את Google Pics, כלי חדש שמאפשר ליצור עיצובים גרפיים מקצועיים בלי שום ידע בעיצוב. במקום לגרור אלמנטים, פשוט כותבים מה רוצים לראות והכלי יוצר את התמונה.",
    "impact": "מעצבת הדרכה שצריכה תמונת נושא לקורס על 'ניהול זמן' יכולה פשוט לכתוב 'שעון מודרני על רקע של משרד נקי עם צבעים כחולים' ולקבל עיצוב מושלם מיידית.",
    "categoryKey": "media",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQcEpTdDB1MXpBQ0JJVjA2NmJpb1FwOEZfN0wwM0dxdnF4c29rY1lkclVLN1h4dXkwLUtiVkw1YnhTcmxnOXVhc3Y3WDFUSmVZWUQwUm5mSzMtVjJmdnF2d2lEWlMzV3NPY0ZrcTdFcmFacThKQ2JRcXpWZUMxRVRvcXQ0NFdsQS1HaENydUhzWTB1NXlieDZnMVZBZ0h4bW9teUpxNFVvcW10SEk?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 19,
    "headline": "גוגל משדרגת את Classroom עם 30+ כלי AI חדשים ללמידה",
    "explanation": "גוגל הטמיעה עשרות כלים מבוססי AI בפלטפורמת Classroom, המיועדים לסייע למורים ויוצרי תוכן. הכלים כוללים יצירת תרגילים, מתן משוב אוטומטי והתאמה אישית של חומרי לימוד.",
    "impact": "מי שמפתח קורס דיגיטלי יכול להשתמש בכלים החדשים כדי לייצר באופן אוטומטי שלושה סוגי שאלות שונים לכל שיעור, ולהתאים את רמת הקושי לכל לומד בנפרד.",
    "categoryKey": "learning",
    "source": "shattered.io",
    "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBMTkZ5aUlGQTVMVXBFekNrSnc5dTUxVllGOW9FYmdFbHhIdXVYYllTUVVzRENLdlhQR0h6Y1lvRGgxLXd3VlBBbFByNTlRMHg4blhDSUNYcW1aaVk4Ui13cElLcGFXRTM2YjgtcXM2OA?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 6,
    "headline": "אנת'רופיק מציגה שני מודלים חדשים: Claude Fable ו-Claude Mythos",
    "explanation": "קלוד מתפצל לשני מודלים חדשים ומשופרים: Fable 5.1 המצטיין במשימות יצירתיות ושיחה, ו-Mythos 5.1 המהיר והיעיל יותר למשימות אנליטיות ועיבוד נתונים.",
    "impact": "לפיתוח סימולציית שירות לקוחות, צוות ההדרכה ישתמש ב-Fable כדי ליצור דיאלוגים אמינים. לעומת זאת, לניתוח תוצאות מבחנים של 200 עובדים, הם ישתמשו ב-Mythos כדי לקבל תובנות מהירות.",
    "categoryKey": "ai_models",
    "source": "Anthropic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE8wODA3NURfTHVDbUZnSE12Q3A0TFpvYjhDLU1rT1NVZ2xmM2Z0VWJPc1ZRM0RVVkpIckh6b0ROcXIxTHgzODZWYV9yekV1dTJiMk1KbkVWcThSeUYxcUpDUy1KZw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 37,
    "headline": "כלי חדש יוצר סרטונים בחינם כדי להאיץ יצירת תוכן דיגיטלי",
    "explanation": "הושק כלי חדש בשם Video Generator המאפשר ליצור סרטונים קצרים מבוססי AI בחינם. הוא מיועד להפוך טקסטים, תמונות או רעיונות לסרטונים מוכנים לשיתוף תוך זמן קצר.",
    "impact": "במקום להפיק סרטון הדרכה יקר על 'איך משתמשים במערכת ה-CRM החדשה', אפשר להזין את השלבים כטקסט ולקבל סרטון הסבר ויזואלי תוך דקות, מוכן להפצה בארגון.",
    "categoryKey": "media",
    "source": "Yahoo Finance",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPQVVpaXZYNUpBeGM5WTlTYUhaSFczLVowcEFndzZ2d3NGQUlaRWxFS1ZiSEdlbXBMVm5Kd2JNOWxIRkRxT2kyTFp4azBSUGlNT3VKZzZ1X1ZUNkdsUUFSMWh6Qk1yWWhqUS0zZGE4blYxbks1TkI3RGtpTURadVFpVE02V055Q0dCT2VWemNzV3BIY2JHZ2lGZzc5UmY?oc=5",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 14,
    "headline": "גוגל משיקה את Gemini Flash: סוכן AI מהיר למשימות אוטומטיות",
    "explanation": "גוגל שחררה גרסה חדשה של ג'מיני בשם Flash 3.8, שתוכננה במיוחד לפעול כ'סוכן' אוטונומי. הוא מהיר במיוחד ומיועד לביצוע שרשרת של פעולות מורכבות באופן עצמאי.",
    "impact": "מפתח הדרכה יכול להורות לג'מיני פלאש: 'מצא את כל המצגות בארגון בנושא בטיחות, סכם אותן למסמך אחד, הפוך אותו ללומדה אינטראקטיבית ושלח אותה לאישור'.",
    "categoryKey": "ai_models",
    "source": "VentureBeat",
    "sourceUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNMHpNUnplNkRkbUhZNFNRbXpENzJfdzFKelp1akdHeEhWMXRJZTVfU0R6clE5WUc2S2U0N2E0ZGZCaFlMczNybUdTdUc0UmtvQXF0dDVGWUlzUmxJN3NZNENaY2dVLW4wREtCTFF3YzAyUGJ4WUhFT2tfYUZNVE0yZDhqaDFkZUtJd3BnZVFhaW1COHBDRG12OXZHVVFyejBLSDNQWmU0UjNFUWRVZ0tGdll2SUxaM1FscHVHTg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 20,
    "headline": "מיקרוסופט משדרגת את Copilot עם יכולות סוכן והבנת הקשר טובה יותר",
    "explanation": "GitHub Copilot מקבל שדרוג משמעותי שמאפשר לו לפעול כ'סוכן' שמבין משימות מורכבות. הוא יכול כעת להבין את ההקשר של פרויקט שלם ולא רק את שורת הקוד הבודדת.",
    "impact": "צוות פיתוח הדרכה שבונה לומדה מורכבת יכול לתת ל-Copilot משימה כמו 'הוסף מנגנון ניקוד לכל השאלונים בקורס הזה', והוא יבצע את השינויים בכל הקבצים הרלוונטיים.",
    "categoryKey": "language",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOUmdTamhJbmFRdzBGV2FwM2x1Qnc2cGtXOW9qVlJIdElLR0ZlTE5FNC1EM3ZadDJLbjZUQkdsTzdweUQ4cDRqYi1EaFBDT0JXV3BmaHA4N0tHWERlSW5NVjBsMDBWTk1ubmFqQkFldXI5eXJqbFdBQlZTTkg5bnY3c3hQUGV5d2VZWHJoa2xTWklaUHhiWFVuVjNmS3dmNkJERU9OU1dTY216LTg0VDRuam1LbWNvd05CaGk0MjU5bmhDbmdEa2l5amF1dk1mUDBvdWhNODRIel9zUQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 4,
    "headline": "שדרוג ענק ל-ChatGPT ו-Codex עם GPT-6 Astra",
    "explanation": "המודל החדש GPT-6 Astra לא רק משפר את ChatGPT, אלא גם את Codex, הכלי לכתיבת קוד. המשמעות היא יכולות אוטומציה ותכנות חזקות מאי פעם, גם למי שאינו מתכנת.",
    "impact": "מעצב למידה יכול לבקש מ-Codex המשודרג: 'כתוב לי קוד JavaScript למשחק זיכרון אינטראקטיבי עבור לומדה, עם תמונות של מוצרי החברה', ולקבל קוד עובד להטמעה מיידית.",
    "categoryKey": "ai_models",
    "source": "9to5mac.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNc0NKclhYelRhTmRNdUtQckJkd3FVODg0aTFocW9WLXhLcExuRDcxczU2OU9SdU9EU2ZDaDJrb3VKaVM0VDdsRkxJSjhTaWw1ZTJiUWJ3VjVRbjBVMVJpSlNMMFZVTzQ1bmJZSkpXYklBTXd6ZTQ2aGFiTFp6Z0xldV9YSzJnVGdiN3hGSkIyNm9pbEw2enBqcHJ5U3lVVFd2VWt3eXJydXJBWk5Ockh1WEM2RQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 17,
    "headline": "פיצ'ר חדש בג'מיני של גוגל מיועד למולטי-טאסקרים",
    "explanation": "גוגל החלה להפיץ תכונה חדשה בג'מיני המאפשרת לו לעבוד על מספר משימות במקביל בחלונות שונים. אפשר לבקש ממנו לסכם מאמר בחלון אחד, ובמקביל לכתוב מייל בחלון אחר.",
    "impact": "מנהלת הדרכה יכולה להשתמש בזה כדי לנתח משובים מסקר הדרכה, ובמקביל לבקש מג'מיני לנסח תוכנית שיפורים המבוססת על התובנות שעולות מהניתוח בזמן אמת.",
    "categoryKey": "language",
    "source": "Android Authority",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPZ2lhRWQ5bGZ4cUZnTDMxSDg4a3RVTHR1d0VpLUxZdVgtZVhlcUtPOGJaMzdBM1E1RzJLRk9pbzVycC1ZQy0tM1JxeHlEVEtKMi1XOVR5a2FhVndxZG1sR0VId2RVYkxOVzdYQ0JzZmowWF91WUZ0TmwtaUVtQjlucXA2QU9PUG8?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "גוגל משדרגת את יצירת הווידאו בג'מיני: מה זה אומר ליוצרי תוכן?",
    "explanation": "גוגל שדרגה את יכולות יצירת הווידאו של ג'מיני עם מודל Omni 1.1. השדרוג מאפשר יצירת סרטונים ארוכים יותר, עם איכות גבוהה יותר ושליטה טובה יותר על התנועה והדמויות.",
    "impact": "יוצר תוכן הדרכתי יכול כעת ליצור סרטון אנימציה של דקה שלמה שמסביר תהליך עבודה מורכב, במקום להסתפק בקליפים קצרים של 5-10 שניות כפי שהיה אפשרי קודם.",
    "categoryKey": "media",
    "source": "TechRepublic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOclUzV2ZMRlFLcGJWMS1RZHBHOGR3ZnhGVVhGMWlUT1VheXZvYVZQMnFTRlI2d0k5U19vdzI1dGVmckhkQjFHajNoeFZ1S1hTODllQkJFLU1uTVVEYjN3ZUZvWVJWWTNfalEyQ1NXdzRyQnZCNGJPdTBxTVlYbDNROXZ4UDVRWjUzSVE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 42,
    "headline": "איך להשתמש במחולל התמונות Leonardo AI: מדריך מעודכן",
    "explanation": "פורסם מדריך חדש ומעודכן לשנת 2026 על Leonardo, אחד ממחוללי התמונות הפופולריים. המדריך מסביר צעד אחר צעד איך להפיק את המיטב מהכלי ומהפיצ'רים החדשים שלו.",
    "impact": "כל איש צוות הדרכה יכול לעבור על המדריך הזה ובתוך שעה ללמוד איך לייצר תמונות ייחודיות ומקצועיות לכל הלומדות והמצגות, בלי להזדקק למאגרי תמונות גנריים.",
    "categoryKey": "learning",
    "source": "tech-insider.org",
    "sourceUrl": "https://news.google.com/rss/articles/CBMidkFVX3lxTE9DS3V3UDYyZERnR0dpcmNEcGxILW9wMnQyR1N4MEtrenh4YjVNbkRxTlNzRURwUVV2c0hiWDBIWFVkbnByN1pNV1NhaHpsamd5cGdxbzNIYnFOWnR1Wi1yd1BqdU5kNUk5cmlvdW54NXhaVFgxMWc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 24,
    "headline": "כל הפיצ'רים החדשים שנוספו ל-Microsoft 365 Copilot באוגוסט",
    "explanation": "מיקרוסופט סיכמה את כל העדכונים ל-Copilot בחבילת 365, כולל יכולות חדשות בוורד, אקסל ו-PowerPoint. השדרוגים מתמקדים בסיכום פגישות, ניתוח נתונים ויצירת מצגות מהירות יותר.",
    "impact": "מי שמלמד Excel בארגון יוכל להשתמש ב-Copilot כדי ליצור תרגילים מורכבים באופן אוטומטי על בסיס דאטה-סט נתון, כולל טבלאות ציר ותרשימים, ולהתאים אותם לרמת הלומדים.",
    "categoryKey": "docs",
    "source": "Neowin",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPVFZHdGE0STloQk5vbVRrTnllY1JQS2RlMHh6TjJkaWQtOWZkLXNtMUs1WmRWVWpZNUFtUzVIWnRFQzBsczNIdXBGWnRzRUxDT0ZpRXZHZER1X0dzVm9UdnI2c2xoTm85d1pRa1Z2UXYyWjNHdU1NOElpVEQ3MTc4UU9nS0txY3N2S0dqWk9nc0pveG44bnZvMVlrekFMcDhYVVFvb0sxYw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 43,
    "headline": "מטא משתמשת בתמונות שלכם לאימון AI? כך תמנעו את זה",
    "explanation": "מטא החלה להשתמש בתמונות ציבוריות מאינסטגרם כדי לאמן את כלי יצירת התמונות החדש שלה, Meta Muse. הכתבה מסבירה איך להיכנס להגדרות ולבטל את הסכמתכם לכך.",
    "impact": "זהו עדכון חשוב לכל מי שמעביר הדרכות על מדיה חברתית ואתיקה דיגיטלית. חשוב להכיר את האפשרות הזו ולהדריך עובדים כיצד לשמור על פרטיותם ועל הקניין הרוחני שלהם.",
    "categoryKey": "learning",
    "source": "Fast Company",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOa3V6aHAzb29VQm1ETER4WW54eTVVVGNZTVFsblZqWURkQklNMEFuM3BBNDlPTGd6NFhjcjJyUE9lMTlQTnN2ZXBRTEFfbWZOQ3RXOUlhcGFDdnNoRzRUT0w0VGhmVEtObGZGX0JiWXB1bTVXVkVDR2gwNDBYZVZ1YnZ0S2VQSmROTW1aeGJsVzRjakI3Xy1RNTRn?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 16,
    "headline": "גוגל חושפת 5 יכולות AI חדשות לאנדרואיד, כולל עזרה בנגישות",
    "explanation": "גוגל הציגה חמישה פיצ'רים חדשים למערכת ההפעלה אנדרואיד, ביניהם Guided Vision שעוזר לכבדי ראייה. הכלים משתמשים ב-AI כדי להפוך את המכשיר לחכם ונגיש יותר.",
    "impact": "צוותי הדרכה צריכים להיות מודעים ליכולות אלו כדי להבטיח שהלומדות והחומרים שהם מפתחים יהיו נגישים. למשל, אפשר להתאים הדרכות כך שיעבדו היטב עם Guided Vision.",
    "categoryKey": "learning",
    "source": "TechRadar",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxNSGY3cHJoVWZJc2l1V19DTmU4Y0JfdVJfUm96UkxaMHlKZmZSb3Y3TkZEek1KUEo1cWQtOTh5WVFwdlQ5bldjT0plMGdYN2doQjhzT2ZGWWFBRFlFUm1oSnkwTlVzUTJ1a2JIZllVQU1PSW9leE1JTWwyR1poN2JDQS1FOUhUSGZmVnBpUV9Qd1hpSWhLV0pQSXN5eFlQbHA4TGF0YUp3X0tsNDJvNmw3ajBCOXFNa0JldEVmUHBWLXhPZWd2SUY0a0VibC1GZHNBaUdUY2ZCTQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 36,
    "headline": "Canva נלחמת במיקרוסופט וגוגל על לקוחות ארגוניים",
    "explanation": "קאנבה (Canva) מכריזה על שורה של פיצ'רים חדשים המיועדים לארגונים גדולים. המטרה היא להפוך את קאנבה לכלי המרכזי ליצירת כל סוגי התוכן הוויזואלי, ממצגות ועד חומרי הדרכה.",
    "impact": "עבור מחלקות L&D, זה אומר שכלי שהיה נתפס כ'חמוד' הופך לפלטפורמה עוצמתית עם יכולות שיתוף פעולה, ניהול מותג ובקרת איכות ברמה ארגונית.",
    "categoryKey": "docs",
    "source": "Forbes Australia",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNUUwtVmpHM1BSMHFnQWVGaHVkbXpCNUxueVZxVEstOGZ5akk1cDNLajctc010eVVkZW1nZW5zRzk1cldqR1dHODBsWnRuYWRwVUxaVEJXY29YWGtEdE9ITmFvaERzVE1vbGJhVU4tLW1MQUJMSTBsOWVqcXRwZXVURDNiaEJ4X0R0RHIzQ1A4R0w2SU0xYmljVFhJSFpXSGM0b3BlemdxaEdhOWRlQS1VLWFRMnlEaHVkX1E?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 8,
    "headline": "קלוד מציג יכולות חדשות למסחר אוטונומי",
    "explanation": "אנת'רופיק הציגה יכולות 'סוכן' חדשות לקלוד, המאפשרות לו לבצע משימות מורכבות בעולם המסחר הדיגיטלי. הוא יכול להשוות מוצרים, לבצע רכישות ולנהל הזמנות באופן עצמאי.",
    "impact": "אפשר להשתמש ביכולת הזו כדי לבנות סימולציות הדרכה מתקדמות לאנשי רכש. הלומד יצטרך לתת הוראות לקלוד, והוא יבצע את תהליך הרכש מול ספקים וירטואליים.",
    "categoryKey": "language",
    "source": "Digital Commerce 360",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNVF9TNVNRaFVmcHh4RkhHcmdtelItMzBtSllwVXpjVUg2NkRYaGMxZ3JRNE5RcjlyNTVaS1BKZ25CMUJMYTlUTmpCd2NlWVozRnpoRmFLZmN3MjdTODBNbFNNXzVSXzFKT24weDBkT3FvTFNEd0QzRDQ2TGwzb2ZCYlZKR1c4RFpxMFg4anhzeTRwTE4wdFVrUjJ4SDFmV004Q1BXVENHRWFsS2_SAbABQVVfeXFMUGctdEF2Z29RdWxoejM5T2JqOTRDM0E5bHFsVTRMMDZQb2prYkJtczhBVl9VQUdLdThwa1VHYU1IUlFjQkxVMWNsckRLQkFQTmppYWdiNHVBekdERTUtNUFCelJyWEo1bXozVkU5elp0akV0S2xGMWNYNXg5TGNzTEJ0a0VLcllid3NRSEVwVTUtOGo2dWhTcmU5aEhFQ3FuUDdCby04NC1mT3BZT0t3alc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-09-06";
