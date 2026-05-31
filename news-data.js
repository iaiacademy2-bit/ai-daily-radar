// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-05-31
const NEWS_DATA = [
  {
    "id": 1,
    "headline": "וואו: ChatGPT פותח חנות אפליקציות ייעודיות לכל משימה",
    "explanation": "OpenAI השיקה חנות אפליקציות בתוך ChatGPT, שמאפשרת להוסיף כלים קטנים שמתמחים במשימות ספציפיות. במקום צ'אט כללי, אפשר להתקין אפליקציה לניתוח נתונים, יצירת תמונות או סיכום מסמכים.",
    "impact": "אפשר לקחת את זה וליצור 'אפליקציית הדרכה' פנימית שתענה על שאלות עובדים חדשים על בסיס מסמכי הקליטה שלכם.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5TVUd6SlhpczNJdVZieDRwT1RFN0ZlUGlldkpuclVmd3hQbWFBb0NFdHdadk1kbnJSODFXRG9iNWVtUXFYNXdOVFRaUlVzdkpWN21TdWFEVzRINDlZYkpnOVlESQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 24,
    "headline": "Canva משתדרגת: עוזר AI חדש שמעצב בשבילכם הכל",
    "explanation": "Canva שחררה את Canva AI 2.0, שדרוג ענק שהופך את הכלי לעוזר עיצוב אישי. תתארו לו מה אתם צריכים, והוא ייצר מצגות שלמות, דפי עבודה או פוסטים לרשתות החברתיות לבד.",
    "impact": "אפשר לקחת את זה וליצור מערך שיעור שלם, כולל מצגת ודפי תרגול, פשוט על ידי תיאור נושא ההדרכה בכמה מילים.",
    "categoryKey": "media",
    "source": "Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQQVJIZGlGVThLYnItTGhObGo4UUxhZjdPaVdCcVR5VU1La1hDUU91VDdOSldDLWxQZ2JjNHlLeXlJLWVxUHRXc3FPQUliLVlwLXE1RXF4T1pBRnRoNzYtM1RMQUJxa0M4aVR6RHlLLTdqT3JWNzJVSG4tWWlycFB3REFPd1Y5THNaUjg0Ti13ajhDYzBiOEdNMXFfVUxsc2RvZVJPa044Y3E0bVhNLTZNT2hHRQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 13,
    "headline": "מיקרוסופט משחררת סוכן AI שמשתלט לכם על המחשב (בקטע טוב)",
    "explanation": "ה-Copilot של מיקרוסופט קיבל שדרוג מטורף: עכשיו הוא יכול לבצע משימות מורכבות במחשב שלכם. למשל, לבקש ממנו 'מצא את כל המצגות על בטיחות, סכם אותן, ושלח במייל למנהלים'.",
    "impact": "אפשר לקחת את זה ולהפוך תהליכי הפקת דוחות הדרכה לאוטומטיים לחלוטין, מהוצאת נתונים ועד שליחת המייל המסכם.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi_AFBVV95cUxOMzRXYTJzR1J2dW1PQml3RHJCeU1BN2x5UDRObmVEYnM5WENwTDZ4eVFYZDlxVUptRW05ZU01MHR5UkkyS3F0LXVQc29JRklBeDBuajN2eTNCazlCZnJ4Q1JvdTM5MUdPdndkOHBaOFU3amNQQ1N2Smstd2xhUGFSZVpBdjhFSkltZ0lNT3NzdFRiVTNhYUVjVjZyNVdqVGVhWGVaZklNYVlYNVNZMmN5LTJIQTFwZmRVUWlyZFdvY3dZNFEzUlFSdDhrVkhVYmUyNVhqM1ZxUjJONDRrT05ORUk4V2VWRDhwWU1PNVNqV0tGOWdncjJIbnVCMzA?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 5,
    "headline": "המתחרה של ChatGPT נהיה חכם יותר: הכירו את Claude 4.8",
    "explanation": "אנת'רופיק שחררה גרסה חדשה וחזקה יותר לצ'אט שלה, Claude. הגרסה החדשה, Opus 4.8, מצטיינת בניתוח מסמכים ארוכים ומורכבים ומספקת תשובות מדויקות יותר.",
    "impact": "אפשר לקחת את זה ולהעלות מדריך טכני של 200 עמודים, ולבקש ממנו לייצר ממנו לומדה אינטראקטיבית עם שאלות ותשובות.",
    "categoryKey": "ai_models",
    "source": "Anthropic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBVeFZoaVpfX1hnTlJPS05nQWZYRnB6bUdOc3pzSmlyX3dpN3BleUlVQm53Z3Bxd29JOUw1MENDMWk5VF9CX1VSU0Q2eV9zMXZWNUVOb2V4N2VaUQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 9,
    "headline": "חיפוש גוגל משתנה לגמרי: במקום לינקים, תקבלו תשובה מוכנה",
    "explanation": "גוגל משלבת AI ישירות בתוצאות החיפוש, כך שבמקום רשימת אתרים תקבלו פסקה מסכמת עם התשובה. החיפוש הופך להיות שיחה במקום רשימת קישורים.",
    "impact": "אפשר לקחת את זה ולבצע תחקיר מהיר פי 10 לנושא הדרכה חדש, ולקבל את עיקרי הדברים בלי לקפוץ בין אתרים.",
    "categoryKey": "language",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBPRTRCdWtiQnhsdE1UX3RKN1didkFva3pRQ21FNElZd2c5cmZFeHZsem1KN3lSMmx3c3EzaHZVaXJnbWhRTFlZQ1dkT0FBVWhCSXVrMGNfWGxqb3dScElPTVdjU0JPQzdXSDBpSW55eGI3WGhjOHBvS21hQl80VDQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 28,
    "headline": "Sora של OpenAI: כלי הוידאו שהולך לשנות את עולם ההדרכה",
    "explanation": "OpenAI הציגה את Sora, כלי חדש שמייצר סרטוני וידאו פוטוריאליסטיים מתיאור טקסט פשוט. כותבים לו 'אסטרונאוט רוכב על סוס על מאדים' ומקבלים סרטון שנראה אמיתי לגמרי.",
    "impact": "אפשר לקחת את זה וליצור סרטוני הדגמה מורכבים או סימולציות מסוכנות בלי צורך ביום צילומים או אנימטורים.",
    "categoryKey": "media",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBsZjJVejJMam9TZEZWVUFOR1NhaWhhZXBFakV1cFlTenMzWkYwdDY2XzBMZkRCWmVsRmlfTEZvbFNKMDdm?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 33,
    "headline": "יוצר התמונות של ChatGPT השתדרג ומבין הרבה יותר טוב",
    "explanation": "OpenAI שחררה גרסה 2.0 ליצירת תמונות בתוך ChatGPT. הכלי החדש טוב משמעותית ביצירת טקסט בתוך תמונות ומבין הוראות מורכבות יותר לגבי סגנון וקומפוזיציה.",
    "impact": "אפשר לקחת את זה וליצור תמונות ייחודיות למצגות וללומדות, כולל אינפוגרפיקות פשוטות או תרשימי זרימה מעוצבים.",
    "categoryKey": "media",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE96QnVnaXU0bWFnZF9MMVBROVpXeXVtSHBDSE1kc0k1cXMzdG1uLUJIT2U2Rk9jVVJNV2FzNzA4VFhrUkNqNi1janYtNzNneXZIWURncGNiZGdSWU1HVkxCN2tBYVZuWWc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 18,
    "headline": "Claude החדש בונה תהליכי אוטומציה תוך כדי שיחה",
    "explanation": "לצד המודל החדש, Claude מציג כלי 'זרימות עבודה דינמיות'. הוא יכול להבין משימה מורכבת, לחלק אותה לשלבים ולהשתמש בכלים שונים כדי לבצע אותה באופן אוטומטי.",
    "impact": "אפשר לקחת את זה ולבקש ממנו 'קרא את קובץ המשוב הזה, זהה את הנושאים המרכזיים, וצור טיוטה למצגת סיכום'.",
    "categoryKey": "docs",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQQ2taMVlYMlJRZlBOc3dLU0trM1h4djVWRTFuSkkxckJTdTlVTWNDLUhwNlRWb19YclM5SHM0NU1JRi0zNlVqa3JQeElMT0xsMFV6Y2czVFpYTENFamxVbEpmSURMMHhyNGt4ZUdfUzhRLVRtYkVlWFo2bEtoY3p3Q2loTjBWaFo4dVEwZ0RIeE1GUnFNUjQxcQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 4,
    "headline": "בדרך אלינו? פרטים ראשונים על ChatGPT-5.2",
    "explanation": "לפי הדלפות, הגרסה הבאה של ChatGPT תהיה מהירה יותר ותתמקד ביכולות התאמה אישית. המטרה היא שהצ'אט ילמד את סגנון הכתיבה וההעדפות שלכם כדי לתת תשובות מותאמות אישית.",
    "impact": "אפשר לקחת את זה ובעתיד לאמן את הצ'אט על סגנון הכתיבה של החברה, כדי שיפיק חומרי הדרכה שמרגישים 'שלנו'.",
    "categoryKey": "ai_models",
    "source": "Tom's Guide",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE44UldveFpHY0tyZ0JrcUxEMk1BUlJTX0lLY0t1OERoOVJsdUw1eV9lS3FyTUE1T25hNldmeTFZQ2VLWFhxRTlRWWVEVDRSdXJHNzJyQXJRdmVEbFk?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 12,
    "headline": "גוגל חשפה בכנס I/O: משקפיים חכמות ו-Gemini בכל מקום",
    "explanation": "בכנס המפתחים השנתי שלה, גוגל הראתה איך עוזר ה-AI שלה, Gemini, משתלב בכל המוצרים. בנוסף, היא הציגה אב טיפוס למשקפיים חכמות שיוכלו לתרגם שיחות בזמן אמת.",
    "impact": "אפשר לקחת את זה ולדמיין עתיד בו עובד חדש מרכיב משקפיים שמזהות מכונה ומציגות לו הוראות הפעלה ישירות מול העיניים.",
    "categoryKey": "learning",
    "source": "WIRED",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTE93aUhUZmNKc1JRT2xuYkM5YUdlNUNFWDd5ay1aSXZ0SXFuWmgyWF9XQ1BlTlBkSDRTcFJVeFhneC05NmNRa0FITUExR0tOdGdtNGpXRThiblhBZ2hCbm02NWl3U2d2cUR4NGJON214YjNUYVUyVG5MZ2xUQjQtZ2M?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 14,
    "headline": "ה-Copilot של מיקרוסופט מקבל עיצוב חדש ונוח יותר",
    "explanation": "מיקרוסופט הציגה עיצוב חדש ל-Copilot בתוך יישומי Office. העיצוב החדש מקל על גילוי יכולות ומציג הצעות חכמות לפעולות שאפשר לבצע על המסמך הפתוח.",
    "impact": "אפשר לקחת את זה וליצור תסריטים לסרטוני הדרכה בוורד, ובלחיצת כפתור לבקש מה-Copilot להפוך אותם למצגת פאוורפוינט.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNRjdjUHR6OUY0MGdQSm1NbjkwVzlEN01ibEZqd1VxaVBOT0ZwdDlEdENMbUFEdGZ1bk5CU3FmeDZRVXFkY0hZOExuSzNlRHFLeVlkNlR6OV82Q0wwcHNaMTNsMmowY3FPcTBfRXBuOFVDbmF4V0t0VkpEbm84dzFCXy04eEV2UC1tOUc5NzZLT3piQlBna0hNUUU4bXA4eGdQbmZzamt1WklCc3M0S2ZKWExYbw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "בדקנו: יצירת וידאו עם Midjourney נותנת תמורה מדהימה למחיר",
    "explanation": "הכלי הפופולרי ליצירת תמונות, Midjourney, נכנס גם הוא לתחום הוידאו. לפי סקירות ראשונות, הוא עדיין לא ברמה של Sora, אבל מציע תוצאות מרשימות מאוד במחיר נגיש.",
    "impact": "אפשר לקחת את זה וליצור סרטוני אנימציה קצרים ומרשימים שישמשו כפתיח ללומדות או כקטעי מעבר במצגות.",
    "categoryKey": "media",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNc2NaY25hYUw0RUFNSTBPRlpYRmw3OUdrNk9yR1dIM1hTWmxMNkc5WE5zSE9HY2o5ZUJMTlhzWTZBeHpBVmhiaC1tSi10NGNtTDItcVlDNWgtaHlaNDBLSEVYR19sVENYQlIzOFBLSEY1Y0taX1Q3X3NwNEhaWnI0NWg0MmJ3VUk3Mi1ZcXgtNHVPbnU5U2ZhNXpqWm9XaWxiOV9JZ1REbDR3UHdmdGIwRkduN3RHcjJPTmxBTG1QNXJkcWp1SmpEN28weGI?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 21,
    "headline": "בקרוב: OpenAI תשיק אפליקציית 'סופר-אפ' למחשב שלכם",
    "explanation": "לפי דיווחים, OpenAI עובדת על אפליקציית דסקטופ שתאחד את כל כלי ה-AI שלה למקום אחד. המטרה היא ליצור חוויה רציפה ונוחה יותר, במקום לעבוד דרך הדפדפן.",
    "impact": "אפשר לקחת את זה ובעתיד לנהל את כל תהליך יצירת התוכן להדרכה, מטקסט ועד תמונה ווידאו, במקום אחד.",
    "categoryKey": "ai_models",
    "source": "WSJ",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQc1Q0VXRKaDJqRVJpSnd0WkktV0Rfb0E3MmxkaDREMkJRWndlelNQNHdkN1ByUmo0R0FORUM1QVI5a3ZSamJISjVJNnN3SDd3OXNrRjE2NEdEc3lhZGpHR3Q5VjR3SW9EcG1kUF9SZlJsVTBNdlgteWNYdXFKWXQxcnVxUTVpM05NS3poMW4xYWlrOTdmdHdaUkVwdlpteVAtNVlHNzVkUXVZN1FuNXc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 36,
    "headline": "איך להשתמש נכון ב-AI בפיתוח הדרכה (ומה לא לעשות)",
    "explanation": "חברת Cornerstone פרסמה מדריך מקיף על השילוב של AI בעולם הלמידה הארגונית. המדריך מציג דוגמאות לשימושים מוצלחים וגם טעויות נפוצות שכדאי להימנע מהן.",
    "impact": "אפשר לקחת את זה ולקבל רעיונות פרקטיים ומוכחים לשיפור תהליכי פיתוח ההדרכה אצלכם בארגון, כבר מחר בבוקר.",
    "categoryKey": "learning",
    "source": "Cornerstone OnDemand",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQQmhXZG11XzZER2ZKcnlmWHk4OEV4OFBsTUdvZ25fYjJfSkhhUFJnV294TzB5WUhzdktwaE9iY2NaazVwanlqU3FJNWtPeGdEenEyeWc0NGQtMDJxQ3gzOHF3ZEY1M0lnemJiZGNZV1d2M1M3Ri1CUXVJQUZjRzdNY2Fod0RwMVdnRWV6OUdB?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 16,
    "headline": "מיקרוסופט מאפשרת לבנות צבא של בוטים שעובדים יחד",
    "explanation": "ה-Copilot Studio, הכלי של מיקרוסופט לבניית בוטים, קיבל עדכון המאפשר ליצור 'מערכות מרובות סוכנים'. זה אומר שאפשר לבנות כמה בוטים שמתמחים בדברים שונים, ולתת להם לעבוד יחד על משימה.",
    "impact": "אפשר לקחת את זה וליצור 'צוות הדרכה וירטואלי': בוט אחד שכותב תוכן, בוט שני שמעצב אותו, ובוט שלישי ששולח אותו לעובדים.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi9gFBVV95cUxPUFFZa3ppZ1dubmlJX1BYYi1BOVVoVUJ4T01QanRPV1ZjMUFWWW43Mmo3bzJsQWVkWUNJX2FVLUc4TkVPQWZKSnBrVlQzbmxZUTF5LVlycUtQTldETVVMblVsNzZVbnlPMnlhYkhpdTZCSXkyWUdaTEFtdzQ1VlhfRWJhNS16Q1JJWUM2WFR2MFNiOXZfazZnR0hEU0oxSF9md1J1WGRkME9TdFNrS2RUemRJNkt4V3RfYm1WMUxNYXZMQVdDMGVaVjdXNnBaRnc1dU5BZkVBNkJ2ckJuY1haUTRpazBNNzVRSWhvQm04VzRXZ2xjZ0E?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 25,
    "headline": "Canva AI 2.0: לא רק עיצוב, אלא מערכת יצירתית חושבת",
    "explanation": "הגרסה החדשה של Canva AI הופכת את הפלטפורמה מכלי עיצוב פסיבי לשותף יצירתי אקטיבי. הוא מציע רעיונות, משלים עיצובים באופן אוטומטי, ומבין את המטרה שלכם.",
    "impact": "אפשר לקחת את זה ולהתחיל פרויקט הדרכה עם רעיון כללי בלבד, ולתת לכלי להציע מבנים, עיצובים ותכנים מתאימים.",
    "categoryKey": "media",
    "source": "CMSWire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOWkdSVWp5OTU2ckNncmtJVzJBY0wzMXhUYU5VcWpzcEVjOUt4VE40MnBiTGxOTzJKUTN0T28xQWtQd1FxejNBN2pXbC1sU04yUVBSWmpDNnhBVl9VVHJaemNlQnM5dWxmMTYzZGtCVjBGVzJNbld4ZE5GbWh2ZEticDJWdTBlVmF2?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 8,
    "headline": "ה-AI של Claude לומד לכתוב קוד בלי להציק למפתחים",
    "explanation": "אחת היכולות החדשות ב-Claude היא 'מצב קוד אוטומטי'. הכלי יכול לכתוב ולהריץ קוד כדי לבצע משימות, בלי לשאול את המשתמש על כל צעד ושעל, מה שהופך אותו לעצמאי יותר.",
    "impact": "אפשר לקחת את זה וליצור סקריפטים פשוטים לאוטומציה של משימות הדרכה, כמו יצירת חשבונות משתמשים במערכת הלמידה.",
    "categoryKey": "language",
    "source": "Memeburn",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPYU1UQXhXV0JNRnp5Vkl3bk9aWjFmWnoydTRNRVoxTnp6VEZWTXNFM2EydjhpMUhuRXJfU2xrR0ZoUk1iYUk4Skc1OFZSSjAyVkZ3a2dQd3JCWHBCRUZzUTl4U0VwMFV5Sk9ZVXhKZXZYWlRwWGJUR3NvUEdLSDB0OHpsbHJmSURobEpYNmh3cUc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 32,
    "headline": "סקירה מקיפה: מחוללי התמונות הטובים ביותר לשנת 2026",
    "explanation": "אתר CNET סקר את כלי יצירת התמונות המובילים כיום, כולל Midjourney, DALL-E 3 ו-Stable Diffusion. הסקירה משווה את איכות התמונה, קלות השימוש והתכונות הייחודיות של כל אחד.",
    "impact": "אפשר לקחת את זה ולבחור את הכלי המתאים ביותר ליצירת תמונות מקוריות עבור חומרי ההדרכה שלכם, בהתאם לתקציב ולצרכים.",
    "categoryKey": "media",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTFBZNWxfdUZFQ1lfVF93UUVIYlVucmJoMWRpQUw4Mm1mazFUM24tRVk0S0pfUkg3SDd0T0ZvYjZ1UlJkWGUyNGk5OGJhM2JLNjZENy04OGpoQXVKT1BZbmdVZ3F5c2hIQ1ZNb3VGTnZMRXlTYUREblRfcEc2LWw1QQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-05-31";
