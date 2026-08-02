// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-08-02 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 25,
    "headline": "OpenAI חושפת את GPT-5.6 Sol: הדור הבא של הבינה המלאכותית כבר כאן",
    "explanation": "OpenAI הציגה השבוע במפתיע את המודל החדש שלה, GPT-5.6 Sol, שמבטיח להיות מהיר, יצירתי ומדויק משמעותית מקודמיו. זהו קפיצת מדרגה ביכולת של ה-AI להבין הקשרים מורכבים ולייצר תוכן ברמה כמעט אנושית.",
    "impact": "מפתחי הדרכה יוכלו להשתמש בו כדי ליצור סימולציות מורכבות של שיחות מכירה או שירות לקוחות, עם דמויות AI שמגיבות באופן ריאליסטי ובלתי צפוי.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9BR2ZzcDRMbGphY1pfMF9mVWVCZGUyV25mbHpZMnRjQUxWWWgtWGZqSk93eXEweHNlOU1MTW85d2hLc3NvT2E4Znd4ZG5DR1diQTZPcFExTi1wcC1t?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": true
  },
  {
    "id": 16,
    "headline": "ג'מיני למחשבי מק מבין מה יש על המסך ויכול לדבר איתכם",
    "explanation": "גוגל שחררה עדכון לאפליקציית Gemini על מחשבי מק, שכולל יכולת חדשה ומרשימה: \"מודעות למסך\". בנוסף, נוספו קולות חדשים וטבעיים יותר לשיחה עם העוזר החכם.",
    "impact": "מעצב למידה שמכין מדריך למערכת CRM חדשה יכול לבקש מג'מיני להסתכל על המסך וליצור עבורו תיאור טקסטואלי של השלבים לביצוע המשימה.",
    "categoryKey": "ai_models",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPLU1XVjdqcHJXTFRPREY5bFNXN1cwdFNLS05iQzU2cWpJZkx0SEtZV25yZkZaRDd0ZlNHT05tbU5SSUJQdVhLY2FkQWwtTUtpSXRoNi1tbnFpei0xc0VrSkoya2hqd0o4azk1S0VCeGROUEx4OE0tWFN3bXN5eW5lRlV6TERuU1Yzd0JtUE9MdFhrVl9ReFZOVy1YR2ZSSzhNMWZjaWIxSnVGaXh3WlE?oc=5",
    "timeAgo": "לפני 4 ימים",
    "trending": true
  },
  {
    "id": 5,
    "headline": "שדרוג ענק ל-ChatGPT: יכולות חדשות ו-7 רעיונות שישנו לכם את העבודה",
    "explanation": "ChatGPT קיבל עדכון משמעותי שמשפר את יכולות ניתוח הנתונים, הבנת ההקשר והיצירתיות שלו. העדכון הופך אותו לכלי חזק עוד יותר למשימות מורכבות.",
    "impact": "במקום לבזבז שעות על ניתוח משובי סוף קורס, אפשר להעלות את כל התגובות ולבקש מ-ChatGPT לזהות את 5 נקודות החוזק ו-5 התחומים לשיפור המרכזיים.",
    "categoryKey": "ai_models",
    "source": "Tom's Guide",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNbGV3QnBVSDB2b2Ywb2hZYm9mRkJIN1lKSXpUdGNpRzlHRFRYclRKQzJPXzRJN3lqb1hRTWdtajc3WTlTLVNRYzlXTjNPYTZwSGtXOXQ5WjVCWTJ0LUJwTWUyNVd6QTBfYlJlVkFRRWdRbkFobS1RWVcwSHhtX0lWOG5HSUQ1UU9oY3pBcXRUcTlsdld0M2xTa2t6RTJFZG85VWRn?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 42,
    "headline": "גוגל משחררת את Veo 3: כלי חדש ליצירת סרטונים שיחסוך לכם ימי צילום",
    "explanation": "גוגל השיקה את Veo 3, מחולל וידאו חדש שמסוגל לייצר קטעי וידאו ריאליסטיים ואיכותיים מתוך תיאור טקסט פשוט. הכלי מיועד להפוך רעיונות לסרטונים מרשימים תוך דקות.",
    "impact": "צוות L&D שמפתח קורס על בטיחות במפעל יכול לייצר סרטון הדגמה של 'מה לא לעשות' בלי לסכן עובדים או להשבית את קו הייצור לצורך צילומים.",
    "categoryKey": "media",
    "source": "Coursera",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9pT2NtNjFrUnU4aFNYUXhiS2tBS0tVVEUzWHp3dnA0T3hrS0M2OE1NdW9qWE1oU2pLWWdKZTRHbXo2N3VHNy1XUHF5Sml3YXVmMDl2d3U1Yw?oc=5",
    "timeAgo": "לפני יומיים",
    "trending": false
  },
  {
    "id": 15,
    "headline": "העוזר החכם של גוגל מתחבר לדפדפן כרום ויכול לעבוד בשבילכם",
    "explanation": "הסוכן החדש של גוגל, Gemini Spark, מתממשק עכשיו ישירות עם דפדפן כרום. הוא יכול לקרוא תוכן של עמודים, לסכם מאמרים ולבצע פעולות אוטומטיות ברשת.",
    "impact": "מנהלת הדרכה יכולה לבקש מ-Spark לסרוק אתרי חדשות בתחום הלמידה ולייצר לה סיכום שבועי של 5 המגמות החשובות ביותר, ישירות מהדפדפן.",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPM3VnRE5fZjA5T1hxZnZTNkpiYUkxbmNnT1dHR0tCemw3NF9OODJibGlGeFI4SW96ckRQOGJzajlzaHQwcU5YekxRejhDU1NiQVpybXloX2VSZ1hMNmVHV2pYYUx6ZEhGZFZVNmI0S2RVbFRHTjlyMy12N2dVVlFCV2E0SXFvMmt1d0JGMUczZFlHTWs?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 22,
    "headline": "מיקרוסופט מאשרת: כל כלי ה-Copilot יאוחדו לאפליקציית-על אחת",
    "explanation": "מיקרוסופט הכריזה על תוכנית לאחד את כל הגרסאות השונות של Copilot (בוורד, באקסל, ב-Teams) לתוך \"אפליקציית-על\" אחת. המטרה היא ליצור חוויה אחידה ורציפה בין כל תוכנות אופיס.",
    "impact": "זה אומר שבעתיד הקרוב, תוכלו להתחיל לכתוב תסריט ללומדה בוורד, לבקש מ-Copilot להפוך אותו למצגת בפאוורפוינט, ומשם ליצור משימות ב-Planner, הכל מאותו ממשק.",
    "categoryKey": "docs",
    "source": "PCMag",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPUUlibmdUYktwLXRYZ3NLU0VfZENSVmxJdmtJdHgtYkpsc0EtcDlpOUdTLTlIdXF2NTIyOGdVN2xaNVotR3NvRnBsdk5PQk1BOHo2UHZlUXdadW0tX2d4OWZRaEc2U1FrcjhXeU1fb0dxZWNKZVNYVlRkZUFaOGhIdTl4RTNwdE5IU3E1S2lrU1BGVXIxWnpWdA?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 1,
    "headline": "QuickBooks מתחבר ל-ChatGPT ו-Claude כדי להפוך ניהול כספים לקל יותר",
    "explanation": "תוכנת הנהלת החשבונות הפופולרית QuickBooks שילבה יכולות של ChatGPT ו-Claude ישירות במערכת. עכשיו אפשר לשאול שאלות ולקבל דוחות בשפה טבעית, בלי להכיר נוסחאות.",
    "impact": "מי שמעביר הדרכה על ניהול תקציב למנהלים בארגון יכול להדגים איך לשאול את המערכת \"כמה הוצאנו על כיבוד החודש?\" ולקבל תשובה מיידית, במקום ללמד אותם איך לייצא דוחות מורכבים.",
    "categoryKey": "learning",
    "source": "Intuit",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxQdk9MMngtclZzQTNRQVRQb2x4M0JQR29oMVJwQ0NVMTlYLWVWN2Jwd3liZUJPLVZTMVRtWFdxMy1xeU1LX1pySFdEWVVVdlBPYnNSTmRtYllISTFkeEVoNU1yT1JBdGwyVEx2STgzNXFTU2N4V2tyYjJiS0FCSFlkSkNSQkVmZ09OU2xFS0NBR0wtRUgyNWZxQV9oUUQ0aWFmX3lUWGxiTm9MbmdRMWpEb0pzQ1UzUkhBcG9BaHhUWndtOEU5bUtLdTg2SG03WFI5Qldv?oc=5",
    "timeAgo": "לפני 5 ימים",
    "trending": false
  },
  {
    "id": 36,
    "headline": "Canva משתפת פעולה עם ענקית הדפוס Cimpress לשילוב AI בעיצובים",
    "explanation": "Canva הכריזה על שותפות אסטרטגית עם Cimpress, חברת האם של Vistaprint. השילוב יאפשר למשתמשים לעצב חומרי הדרכה מודפסים בעזרת AI ולשלוח אותם להדפסה מקצועית בקליק.",
    "impact": "מעצבי למידה יוכלו ליצור פוסטרים, חוברות עבודה וכרטיסיות משחק מעוצבים ב-Canva, ולהזמין הדפסה איכותית שלהם ישירות מהפלטפורמה, מה שמקצר משמעותית את תהליך הפקת חומרי העזר הפיזיים.",
    "categoryKey": "media",
    "source": "simplywall.st",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPWEppcHZrMzFjeUNYV3FxVm1nVUQ4dDExNk83YWRHX2k2UEg2WTFDNldxUkxUTG5LTloydy1IMU5RN2pWczBqRzAtQTdBc0txM2lNNFZLMm5iSkd1UkhjY21lX3prVkEyQUhRYUtvaXBQNEN0clhxZnBEWFhNOTVxT1hvblpMZExMVGZQT21rS3hsSXZEQUdHcXFoZ1VtbEt6WVpHTHRNeS05LVRjSWhsMlBQdTVNSEx1bnVtc0VFenFhdlJiQndwbGdPM0E5TWRVNzVZYnlwcENkUdIB2gFBVV95cUxPWEppcHZrMzFjeUNYV3FxVm1nVUQ4dDExNk83YWRHX2k2UEg2WTFDNldxUkxUTG5LTloydy1IMU5RN2pWczBqRzAtQTdBc0txM2lNNFZLMm5iSkd1UkhjY21lX3prVkEyQUhRYUtvaXBQNEN0clhxZnBEWFhNOTVxT1hvblpMZExMVGZQT21rS3hsSXZEQUdHcXFoZ1VtbEt6WVpHTHRNeS05LVRjSWhsMlBQdTVNSEx1bnVtc0VFenFhdlJiQndwbGdPM0E5TWRVNzVZYnlwcENkUQ?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 40,
    "headline": "כלי חדש בשם Adwave יוצר סרטוני פרסומת והדרכה באופן אוטומטי",
    "explanation": "חברת Adwave השיקה מחולל וידאו מבוסס AI שמיועד ספציפית ליצירת סרטונים קצרים וקליטים. הכלי מתמחה בהתאמת התוכן לקהלי יעד שונים באופן אוטומטי.",
    "impact": "צוות הדרכה שצריך לקדם קורס חדש בארגון יכול להשתמש בכלי כדי לייצר 5 גרסאות שונות של סרטון 'טיזר' קצר, כל אחת מותאמת למחלקה אחרת, תוך דקות ספורות.",
    "categoryKey": "media",
    "source": "Demand Gen Report",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQT0F1YkZ4cHNMdkpoOVBnM3czR3VBNXBMeGplbnktOWZRNEMzTFpFTU5sR3VmR3B1LUxuN3NzelNvSG82aEVkZDkzTGtlYjJpc1h3eFVseFNWQThoUHd1NUdjaVd5TjdIY09meGM2UFhIdTllZ2ZUWmNXUXQ0OXIxMEFfYjkxbDNpR1NaSnQzVXpyek5yVUp4TDNSYXNQNm1IS3VBNlZrY0dlanVheDFVS1lWNHl6SGM1V0F3WF9wV3RTcmxZU2c2ZXdaNFZGZw?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 12,
    "headline": "הסוכן החכם של גוגל, Gemini Spark, זמין במדינות נוספות",
    "explanation": "גוגל מרחיבה את הזמינות של Gemini Spark, העוזר האישי שלה, למדינות נוספות ברחבי העולם. הכלי מאפשר לבצע משימות מורכבות הדורשות מספר שלבים, כמו תכנון נסיעה או מחקר שוק.",
    "impact": "מפתח הדרכה שבונה קורס על שוק בינלאומי חדש יכול להטיל על Spark משימה: \"מצא את 3 המתחרים הגדולים בגרמניה בתחום X, סכם את המוצרים שלהם והשווה את המחירים\".",
    "categoryKey": "ai_models",
    "source": "Thurrott.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPTklGV19TYUxBQ3FLeUF4ZDdva0M1cTJTeDRjbVFXTzJCU2dKT2VxUld4OV9qNE0tQm4yak1ITVFheThGLUgzVDJvRE9jWmdPQ3gyX0ZHaDE4WllWczM3RUx6bFBBVXdTN2p6RWZmUTJnZ2VPM0dqUE5ucExpMXN4cXdTdFR3Q2ZmalltQU4xVkNPTmQ2dDEyTWthWHI3eGN6QVJ2TEpsQk4wU3NCMEFlYnhtam5VLXhx?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 21,
    "headline": "זהירות: Copilot בוורד עלול להעתיק מידע נסתר למסמכים חדשים",
    "explanation": "חוקרי אבטחה גילו ש-Copilot ב-Word יכול בטעות להעתיק \"הוראות נסתרות\" שהיו בשימוש ליצירת מסמך אחד, ולהדביק אותן במסמך חדש לחלוטין. זה עלול לחשוף מידע על תהליך יצירת התוכן.",
    "impact": "כשאתם משתמשים ב-Copilot ליצירת תכנים רגישים, כמו חומרי הערכה לעובדים, ודאו שאתם לא מעבירים בטעות מידע ממסמך אחד למשנהו. כדאי לבדוק את הגדרות הפרטיות.",
    "categoryKey": "docs",
    "source": "The Hacker News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTE42UVlndWNmOFUyeXFBWERsa2pXbzEyYXhxSm5sLS1lVzNWSTZiTy1nNXlYNFpzZzJOM0dzMTJ0U0prUG0wM0k4ZTVoNUs4Sm1WOFJQckl3bWtfNk1tOGM4MTdyZWx6QnNRQnh1ZmpfS2VRczNscVdUVGpHLXJsSDA?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 45,
    "headline": "כלי חדש ב-Google Earth מאפשר לכם לשנות כל מקום בעולם בעזרת AI",
    "explanation": "גוגל הוסיפה ל-Google Earth כלי AI חדש בשם Nano Banana המאפשר למשתמשים ליצור תמונות דמיוניות על גבי כל מיקום במפה. אפשר להפוך את מגדלי עזריאלי לגורדי שחקים מעוגיות או את הכנרת לים של שוקולד.",
    "impact": "מדריכים יכולים להשתמש בזה כדי ליצור תמונות \"לפני ואחרי\" דרמטיות להדרכות על איכות סביבה, או ליצור תרחישים ויזואליים קיצוניים עבור הדרכות על ניהול משברים.",
    "categoryKey": "media",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPTXA0MWxUaW5IUGxodl9ZNlJBTmtRX1R6TnhtSVd1eW1iYjdFb0R1RDhKb3puWDIxeDR3Wm01WFpDMmgyZFVpTDVRRmJWN29NVE9VNHhGa2dZRUZrMzA4cEFMd044NVBmZTJQbFJ1aXFyU191UlpKbXhoR2t5bVNrU2pmTTdsRHRFall6ZkRTQXN0bEI2OUpxTkV6cDM4YmpfbWc?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 11,
    "headline": "אורקל מוסיפה את Gemini של גוגל למערכות ה-ERP שלה",
    "explanation": "חברת אורקל הודיעה על שילוב יכולות ה-AI של Google Gemini במערכות ה-Fusion ו-NetSuite שלה. המהלך יאפשר למשתמשים לבצע ניתוחים ולקבל המלצות מבוססות נתונים ישירות במערכת.",
    "impact": "מנהלי הדרכה בארגונים שמשתמשים במערכות של אורקל יוכלו בקרוב לבנות דוחות הדרכה חכמים יותר, למשל לשאול: \"אילו עובדים צפויים להזדקק להכשרה בנושא X בחציון הבא?\".",
    "categoryKey": "learning",
    "source": "The Register",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNUERGSm9HeWZPanZIX2YyRTN5LW5qYWpkUmExaWJMTzU0QzgtSi1rcE1PYUZQWkFWdEpjMThUTDFnMWwzRktpdnZGUkJRWTEyWnZfaDFRX3QydkRkdTh4QXhpSGM2M2QyLU9jZTQzR2RxSTVlR05tWC1KSTlHMVFCaTlLWmZ4QXd6YWVDWTVocXlUR0JUYWIwajB1TlQ5TXVTVXc?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 2,
    "headline": "שלושה פיצ'רים ב-ChatGPT Pro שגורמים למשתמשים לא לבטל את המנוי",
    "explanation": "מאמר ב-Digital Trends סוקר את 3 היכולות המתקדמות והשימושיות ביותר בגרסה בתשלום של ChatGPT. בין היתר, היכולת ליצור בוטים מותאמים אישית (GPTs) וניתוח קבצים מתקדם.",
    "impact": "אפשר ליצור בוט ייעודי שמאומן על מדריך הסגנון של הארגון. כל מפתח הדרכה יוכל להעביר דרכו טקסטים ולוודא שהם כתובים בטון ובשפה הארגונית האחידה.",
    "categoryKey": "ai_models",
    "source": "Digital Trends",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQaldydDdUQjcxSzJTdnEwTWpEV1ZaQmxYRXB0Uko3OEdlTFg2ZUFhM2wtZDlQcW5lRXJUcnNqdk1jSXBydS1PU2dsYnltT3prR0NtY0JSSThmdEx4SGNOd2t6MWRydDdOYVpmUExoQVMxUkl3RUxCbVoyVDRuRGNGT0cxOGpPTUpRNURwc2JVbERKSTlpVGk4S0pNaVlrejllbXlQMWhRTU9NYms?oc=5",
    "timeAgo": "לפני 4 ימים",
    "trending": false
  },
  {
    "id": 31,
    "headline": "רשת המלונות IHG משיקה כלי חיפוש מבוסס שיחה למציאת חופשות",
    "explanation": "רשת IHG (שבבעלותה הולידיי אין וקראון פלאזה) השיקה כלי חיפוש חדש באתר שלה. במקום פילטרים, אפשר פשוט לכתוב מה מחפשים, למשל \"מלון עם בריכה שמתאים לילדים ליד הים בתל אביב\".",
    "impact": "זהו מקרה מבחן מצוין להדרכות על חווית לקוח. אפשר להראות איך AI משנה את הדרך שבה לקוחות מתקשרים עם מותגים, ולהדגים איך זה יכול להיראות במערכות הפנימיות של הארגון.",
    "categoryKey": "learning",
    "source": "Hotel Dive",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPdFYtUkpGbklYeVB1OVF3N0FpM1pDNEJmbHdhLXpYSFhvSGpOSkxYZ0VUUVBtNmNZRWtvdGFqc0NueE9VYXJUS1VkUjJPVzVtelRCQURSOW9hTGZwQjNWeFdkNDNuR0ZqTHhSeGdhakNyajRwQ2FMaks2SENtc1l2NF9fc0RSS1poeHpGQTdOVi14bzg?oc=5",
    "timeAgo": "לפני 4 ימים",
    "trending": false
  },
  {
    "id": 4,
    "headline": "OpenAI פותחת תוכנית מיוחדת לחוקרים אקדמיים עם גישה ל-ChatGPT",
    "explanation": "OpenAI הכריזה על תוכנית חדשה המעניקה ל-100,000 חוקרים מהאקדמיה גישה מורחבת ומוזלת לכלי החברה. המטרה היא לעודד שימוש ב-AI למטרות מחקר ופיתוח מדעי.",
    "impact": "אם הארגון שלכם משתף פעולה עם אוניברסיטאות, זו הזדמנות מצוינת. אפשר לרתום סטודנטים וחוקרים לפרויקטי הדרכה חדשניים ולבחון את יעילות הלמידה בעזרת הכלים המתקדמים ביותר.",
    "categoryKey": "learning",
    "source": "SiliconANGLE",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPMWZHY09lNmhac3ViU3RYX2pvY2pWd0xEQm9fSS1nSEtQT3p1cXcydFFoZklZNlVfQzR3VHV2cWRmWklUYmRHdVh0TERqd1lkaGNVQjRTNlUxTTM1NlpPaTVYZ1FMRW4wdUo5cU9XNU56NzB1RUhCNHhLRVVzdWdwZDg1eno3WVFfZzFxNHFOMERYRmJhTFBteTR2d2txZ2dfNmVka2lNX2pSOURi?oc=5",
    "timeAgo": "לפני 4 ימים",
    "trending": false
  },
  {
    "id": 9,
    "headline": "שיחות פרטיות עם Claude דלפו והופיעו בתוצאות החיפוש של גוגל",
    "explanation": "תקלת פרטיות חמורה גרמה לכך ששיחות של משתמשים עם הצ'אט Claude, שנחשבו פרטיות, הפכו פומביות וניתן היה למצוא אותן בחיפוש בגוגל. החברה טוענת שהבעיה טופלה.",
    "impact": "זו תזכורת חשובה לכל צוותי ההדרכה: לעולם אין להזין מידע רגיש או סודי של החברה או של עובדים לתוך כלי AI ציבוריים. יש להדריך את העובדים בהתאם.",
    "categoryKey": "ai_models",
    "source": "Fortune",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxPdmF0Z2hIVUJKTkp0Q09sT1RkUThycVdCczZHQU1SbVQwQW9ITlJEVURfRlJMRFNIMUhMbjJIejZqVHo1STFkZjgzM1dqemZ0cEttVTBLTm5iNUVfV29JNjhjMGhwaVVZZjVLYmt5c3F0M21qTnd5YWJ5NV9kOTB0LTJDYWlCdkVrdGZ2QVZqLWZYZTd4X0VMMmxjVXVhcHJyak1oVVR2VXdST040NWY0VWlKWmI5NkRfM01JMUFIb2ZfQW9wZWxEc0pCVnIydXRORW5tRm5LRDZVZHNTa3Q0bFlGaw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 18,
    "headline": "גוגל הסירה את כלי ה-AI החדש מ-Google Earth אחרי יום אחד בלבד",
    "explanation": "גוגל נאלצה להשבית את כלי יצירת התמונות החדש ב-Google Earth פחות מ-24 שעות לאחר השקתו. הסיבה: משתמשים החלו מיד ליצור תמונות מזויפות של אסונות טבע ואירועים מדאיגים.",
    "impact": "האירוע הזה הוא שיעור חשוב באוריינות דיגיטלית ואתית. ניתן להשתמש בו כדוגמה בהדרכות על זיהוי 'פייק ניוז' ועל האחריות הנלווית לשימוש בכלי AI יוצרים.",
    "categoryKey": "media",
    "source": "BBC",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1adTR6blFZc3dnaHBqN0V6UmdEbXZrbEJYZVVRWl9LclNQRUc3QnY4ZUNUbk9fbWU5c1ozQUE0UkdhOWwtZlVua21aenFzRzRpeUhlYUpDLUgtdw?oc=5",
    "timeAgo": "לפני יומיים",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-08-02";
