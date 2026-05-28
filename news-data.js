// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-05-28
const NEWS_DATA = [
  {
    "id": 25,
    "headline": "קנבה החדשה: עוזר AI אישי שמבין אתכם ויוצר מצגות לבד",
    "explanation": "קנבה שדרגה את כלי ה-AI שלה ועכשיו אפשר פשוט לדבר איתה והיא תעצב עבורכם שקפים, תכתוב טקסטים ותמצא תמונות. היא גם לומדת את סגנון המותג שלכם כדי לשמור על קו אחיד.",
    "impact": "אפשר לקחת את זה וליצור טיוטה ראשונה למצגת קורס שלם תוך דקות, כולל עיצוב ותוכן בסיסי.",
    "categoryKey": "media",
    "source": "Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQQVJIZGlGVThLYnItTGhObGo4UUxhZjdPaVdCcVR5VU1La1hDUU91VDdOSldDLWxQZ2JjNHlLeXlJLWVxUHRXc3FPQUliLVlwLXE1RXF4T1pBRnRoNzYtM1RMQUJxa0M4aVR6RHlLLTdqT3JWNzJVSG4tWWlycFB3REFPd1Y5THNaUjg0Ti13ajhDYzBiOEdNMXFfVUxsc2RvZVJPa044Y3E0bVhNLTZNT2hHRQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 7,
    "headline": "קלוד הופך לסוכן אוטומטי: תנו לו משימות והוא יבצע אותן במחשב שלכם",
    "explanation": "העדכון החדש מאפשר לקלוד לפעול כמו עוזר אישי אמיתי, שיכול לפתוח תוכנות, למלא טפסים ולבצע פעולות במחשב. הוא יכול לעקוב אחר תהליכים מורכבים ולבצע אותם באופן עצמאי.",
    "impact": "אפשר לקחת את זה וליצור אוטומציה שמכינה דוח נוכחות חודשי בקורסים, כולל שליחת תזכורות למשתתפים.",
    "categoryKey": "ai_models",
    "source": "CNBC",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOUjI0ZnpMRjJlSTc1ampPUW5kRlJ2dktsMGhVMmFtYmlpSEd5RjZzRkxxdG9fYnIxZVZSVlZXQlBzOF9VRXdkVmJrcHQ3ajFEV1pIMUxNQzRTQmRzR3NVQ3FFcDJxa29tUU8tS21BTTIwZnl6WC1CYzhLdFZoMzBsV1hOeDN2aEFKV3ppZ2ZPTTBhQdIBlwFBVV95cUxQSWNYT1JYME5aQ0JuejlBY3Jab01MS1V2Z0pIOFZIZlBDWjZnc183SmdpaXMyNk01STBmbzIxM0ZOZktRRkNTdHhKcHZJNTNoeFZjTWNVcVZRN1hTVGRKRmN3ZDY3R3ZyUEZ5UmpWQmY5WmhTazZOQVI4MHA3SGNqbTFaNmI3cDRkRUQ1a092RGZfaVFZcndV?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 10,
    "headline": "גוגל ג'מיני הופך לעוזר פרואקטיבי 24/7 שיודע מה אתם צריכים מראש",
    "explanation": "אפליקציית ג'מיני החדשה לא רק עונה לשאלות, אלא גם מציעה עזרה באופן יזום על סמך ההתנהגות שלכם. היא יכולה לתכנן עבורכם משימות, לסכם פגישות שהיו לכם ולהכין אתכם ליום המחרת.",
    "impact": "אפשר לקחת את זה ולקבל סיכום אוטומטי של פגישת אפיון הדרכה, עם המשימות המרכזיות לכל אחד.",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxNVGxlcDl0VnlkNWYzdUcwSTkyM0FBOFNUUGpkWjdRV0Zmcmp5cjJQa0VwX3lqamY2ZXRFQlBMSEt6ZkxVd2FMN2sxZHd2ZG1HeVkycTAwX0dHREJEMmFYU09RM2JzaUppQjhsMTNJU00xUk4yTkF3cGxEYjUtclc1M2NWWUQ4M1hpWGRNOQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 1,
    "headline": "חדש ב-ChatGPT: חנות אפליקציות שמרחיבה את היכולות שלו לכל תחום",
    "explanation": "בדיוק כמו בסמארטפון, עכשיו אפשר להתקין \"אפליקציות\" בתוך ChatGPT שמתמחות במשימות ספציפיות. למשל, אפליקציה ליצירת דיאגרמות, אפליקציה לניתוח נתונים או אפילו לתכנון טיולים.",
    "impact": "אפשר לקחת את זה ולהתקין אפליקציה שיוצרת תרשימי זרימה מורכבים עבור לומדה אינטראקטיבית.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5TVUd6SlhpczNJdVZieDRwT1RFN0ZlUGlldkpuclVmd3hQbWFBb0NFdHdadk1kbnJSODFXRG9iNWVtUXFYNXdOVFRaUlVzdkpWN21TdWFEVzRINDlZYkpnOVlESQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 8,
    "headline": "קלוד משיק כלי עיצוב חדש שמתחרה ישירות בקנבה",
    "explanation": "חברת Anthropic השיקה את Claude Design, כלי חדש המאפשר ליצור עיצובים גרפיים באמצעות שיחה. פשוט מתארים לו מה רוצים לראות, והוא יוצר פוסטים, באנרים ומצגות ברמה גבוהה.",
    "impact": "אפשר לקחת את זה וליצור במהירות תמונות ואיורים מקוריים עבור לומדות, בלי צורך במעצב גרפי.",
    "categoryKey": "media",
    "source": "Anthropic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9JT2syNlBSbmRUM0xtZzl3bG02dTRicmR2N0J3UDRpQ29zY0tSeEhoUmp5dEJyWmhfY0I2MzVEbjY3NkV4UTJtYzhKbDB6Ri1PSGJDSnJhY3o3T1JfU3FMcEVFUjFjbkNVaGR3?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 34,
    "headline": "מחולל התמונות של ChatGPT השתדרג: עכשיו הוא מבין הקשר ומדייק בפרטים",
    "explanation": "גרסה 2.0 של יוצר התמונות ב-ChatGPT מבינה הרבה יותר טוב בקשות מורכבות ויוצרת תמונות ריאליסטיות יותר. הוא גם מצליח לשמור על דמות עקבית בין תמונות שונות.",
    "impact": "אפשר לקחת את זה וליצור סדרת תמונות של אותה 'מדריכה וירטואלית' במצבים שונים לאורך קורס שלם.",
    "categoryKey": "media",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE96QnVnaXU0bWFnZF9MMVBROVpXeXVtSHBDSE1kc0k1cXMzdG1uLUJIT2U2Rk9jVVJNV2FzNzA4VFhrUkNqNi1janYtNzNneXZIWURncGNiZGdSWU1HVkxCN2tBYVZuWWc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 13,
    "headline": "מיקרוסופט קופיילוט יכול עכשיו לדבר איתכם בזמן אמת וליצור אוטומציות",
    "explanation": "העדכון החדש של קופיילוט מאפשר לנהל איתו שיחה קולית טבעית וזורמת, ללא השהיות. בנוסף, הוא מציע ממשק חדש ופשוט ליצירת תהליכי עבודה אוטומטיים בין אפליקציות שונות.",
    "impact": "אפשר לקחת את זה וליצור אוטומציה ששולחת מייל סיכום אישי לכל עובד בסיום קורס מקוון.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi_AFBVV95cUxOMzRXYTJzR1J2dW1PQml3RHJCeU1BN2x5UDRObmVEYnM5WENwTDZ4eVFYZDlxVUptRW05ZU01MHR5UkkyS3F0LXVQc29JRklBeDBuajN2eTNCazlCZnJ4Q1JvdTM5MUdPdndkOHBaOFU3amNQQ1N2Smstd2xhUGFSZVpBdjhFSkltZ0lNT3NzdFRiVTNhYUVjVjZyNVdqVGVhWGVaZklNYVlYNVNZMmN5LTJIQTFwZmRVUWlyZFdvY3dZNFEzUlFSdDhrVkhVYmUyNVhqM1ZxUjJONDRrT05ORUk4V2VWRDhwWU1PNVNqV0tGOWdncjJIbnVCMzA?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 23,
    "headline": "הצעד הבא של OpenAI: צ'אט פיננסי שמתחבר לחשבון הבנק שלכם",
    "explanation": "OpenAI משיקה מוצר חדש שנועד לעזור בניהול הכספים האישיים שלכם. הכלי יוכל להתחבר לחשבונות הבנק, לנתח הוצאות, להציע תובנות ולעזור בתכנון תקציב.",
    "impact": "אפשר לקחת את זה וליצור סימולציות פיננסיות מציאותיות עבור הדרכות בנושאי כלכלת המשפחה או ניהול תקציב.",
    "categoryKey": "learning",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNdFBfTXUxSDUyLUFUcnVFbEVfWlZuRGhiaURGem9NUm5VUkpsalpLeGVjWG1CQVd2RVVFTnZ6SnVVeEVYMVhhWl9KSV9BVmFrYXhzRUFYVzJyTmxNS2UwYmIzMWF1NGZkemdMOW1sSXpDekFxR2plYkFuN3FMeHRsWjZIbURTQjRLbDkyNlIzU0s1Z3VQUTB5SlJvaXFiUzZWRm15M1Vrc01qQnVWVHBXenhQMks?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "המוח של ChatGPT השתדרג: עכשיו הוא מדויק יותר ומבין אתכם טוב יותר",
    "explanation": "המודל החדש שפועל כברירת מחדל ב-ChatGPT נותן תשובות עובדתיות ומדויקות יותר. הוא גם טוב יותר בהתאמה אישית של התשובות לסגנון ולצרכים שלכם.",
    "impact": "אפשר לקחת את זה וליצור תוכן הדרכתי מדויק יותר, עם פחות 'המצאות' ובדיקת עובדות מהירה יותר.",
    "categoryKey": "language",
    "source": "Engadget",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOWWIyMnlYTE5sTTJIbFcxVlExYVQ0cUJtYndsd1pWbURjUElhWUFORG5JcVRscUdUbW5fdWp3SUtKWmtQdmlfejJ2cWpQRTh4OExqNEpUOTR4YU11Q21HbHl3a2R4YW93VnhkdW5PV3VQVFVRbzlMNWVpZWYxSU1FbWt5UzRlWnd6NFBsb2l4WTZHRjZwVUV1MXlEU24xTWNiYVdXMFV0MlBJQQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 4,
    "headline": "בדרך: ChatGPT 5.2 עם יכולות חדשות ומפתיעות",
    "explanation": "לפי הדלפות, הגרסה הבאה של ChatGPT תכלול פיצ'רים חדשים ומרגשים. עדיין אין פרטים רשמיים, אבל השמועות מדברות על יכולות ניתוח והבנה עמוקות מאי פעם.",
    "impact": "אפשר לקחת את זה ולהתחיל לחשוב על סוגי הדרכות חדשים שיהיו אפשריים עם כלי חכם כל כך.",
    "categoryKey": "ai_models",
    "source": "Tom's Guide",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE44UldveFpHY0tyZ0JrcUxEMk1BUlJTX0lLY0t1OERoOVJsdUw1eV9lS3FyTUE1T25hNldmeTFZQ2VLWFhxRTlRWWVEVDRSdXJHNzJyQXJRdmVEbFk?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 5,
    "headline": "הסוכנים של קלוד יכולים עכשיו 'לחלום' כדי להשתפר במשימות",
    "explanation": "פיצ'ר חדש מאפשר לסוכני AI של קלוד להריץ סימולציות פנימיות ('חלומות') כדי ללמוד ולשפר את הביצועים שלהם. זה עוזר להם להתמודד טוב יותר עם משימות מורכבות בעולם האמיתי.",
    "impact": "אפשר לקחת את זה וליצור בוט הדרכה שמשתפר באופן עצמאי במענה על שאלות של לומדים.",
    "categoryKey": "learning",
    "source": "ZDNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZ3RXNUgzeDJtYUtLdTZFd2F4eUdMWTZOaWRyMFB2SkF2SlBoU2x4VkVyQmNJcE1uUVJacFBEQW4zdi1ZQ2laaEVHQ2d6ZURsY0RRLUpiVnJIRlg5UkZpeEl0NDIwUHo4SHJuRU9QeC1mNWU4MWlBX0JTaWIyb0lZYU9NT3Nia2dLeU9GUWFXVHZmR1JVUThzTWNySUY?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 9,
    "headline": "אחרי 25 שנה: גוגל משנה את תיבת החיפוש עם AI שמבין אתכם",
    "explanation": "גוגל משלבת את יכולות ה-AI המתקדמות שלה ישירות בתוך מנוע החיפוש. במקום רשימת קישורים, תקבלו תשובה מקיפה ומסוכמת, עם תמונות, סרטונים ומידע רלוונטי.",
    "impact": "אפשר לקחת את זה ולבצע תחקיר תוכן להדרכה בצורה מהירה ויעילה פי כמה מבעבר.",
    "categoryKey": "docs",
    "source": "The New York Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPVzZ0WC1UelpJRkNTMldfbkcwaW43MDJ3cXh2elVTLVBhUHZBeTFWYWNXT3NHWjlPcFJ5SjZkOTdOZ21BdEJpeFE5NlE4ZUhpQllLcWEtM0RtTlJhdE9yOUdEajRELTR3ZVFpbXBrbVg3cUVVSGFyc1hTRERfZHhUbg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 15,
    "headline": "קופיילוט סטודיו מאפשר לכם לבנות צבא של בוטים שעובדים יחד",
    "explanation": "הכלי החדש של מיקרוסופט מאפשר ליצור ולנהל מספר 'סוכני AI' שונים, שכל אחד מהם מומחה בתחומו. הם יכולים לשתף פעולה ביניהם כדי לבצע משימות מורכבות שדורשות מספר מיומנויות.",
    "impact": "אפשר לקחת את זה וליצור מערך תמיכה ללומדים: בוט אחד לבעיות טכניות ובוט אחר לשאלות על התוכן.",
    "categoryKey": "ai_models",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi9gFBVV95cUxPUFFZa3ppZ1dubmlJX1BYYi1BOVVoVUJ4T01QanRPV1ZjMUFWWW43Mmo3bzJsQWVkWUNJX2FVLUc4TkVPQWZKSnBrVlQzbmxZUTF5LVlycUtQTldETVVMblVsNzZVbnlPMnlhYkhpdTZCSXkyWUdaTEFtdzQ1VlhfRWJhNS16Q1JJWUM2WFR2MFNiOXZfazZnR0hEU0oxSF9md1J1WGRkME9TdFNrS2RUemRJNkt4V3RfYm1WMUxNYXZMQVdDMGVaVjdXNnBaRnc1dU5BZkVBNkJ2ckJuY1haUTRpazBNNzVRSWhvQm04VzRXZ2xjZ0E?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 24,
    "headline": "בקרוב: OpenAI משיקה 'אפליקציית-על' שתאחד את כל כלי ה-AI שלה",
    "explanation": "לפי דיווחים, OpenAI עובדת על אפליקציה חדשה למחשב שתשלב את כל היכולות שלה במקום אחד. המטרה היא ליצור חווית משתמש פשוטה ואינטואיטיבית יותר, שתחליף ריבוי כלים.",
    "impact": "אפשר לקחת את זה ולהיערך לסביבת עבודה אחת שבה יוצרים טקסט, תמונות וקוד להדרכות.",
    "categoryKey": "ai_models",
    "source": "WSJ",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQc1Q0VXRKaDJqRVJpSnd0WkktV0Rfb0E3MmxkaDREMkJRWndlelNQNHdkN1ByUmo0R0FORUM1QVI5a3ZSamJISjVJNnN3SDd3OXNrRjE2NEdEc3lhZGpHR3Q5VjR3SW9EcG1kUF9SZlJsVTBNdlgteWNYdXFKWXQxcnVxUTVpM05NS3poMW4xYWlrOTdmdHdaUkVwdlpteVAtNVlHNzVkUXVZN1FuNXc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 30,
    "headline": "סקירה מקיפה: כלי ה-AI הטובים ביותר ליצירת וידאו לשנת 2026",
    "explanation": "אתר CNET סקר ובדק את מחוללי הווידאו המובילים בשוק. הכתבה מדרגת את הכלים לפי איכות, קלות שימוש ומחיר, ועוזרת לבחור את הכלי המתאים לצרכים שלכם.",
    "impact": "אפשר לקחת את זה ולבחור את הכלי הכי מתאים כדי ליצור סרטוני הדגמה קצרים ללומדות שלנו.",
    "categoryKey": "media",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE5vcDI4MU1MSHFzME9mSXo3aG02am9ELUJKWFFrc1lucllaN3BwdXV0ZG9pZzBCSF9RN1hmR2tQZDZ3Z3JjclU1NUZoX05KNUhRTWRqMllxcDZZZ2VlcFFxc3RJVGNxTzM1b2xGcWl3Q1ZrQmYxUXhkaHNJUzdrUQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 32,
    "headline": "מחולל וידאו חדש ומפחיד באיכותו מרעיד את הוליווד",
    "explanation": "כלי חדש ליצירת וידאו מציג יכולות כל כך מרשימות וריאליסטיות, שהוא גורם לדאגה בתעשיית הקולנוע. הוא מאפשר ליצור סצנות מורכבות ודמויות שנראות אמיתיות לחלוטין.",
    "impact": "אפשר לקחת את זה ולהתחיל לחשוב על יצירת סרטוני הדרכה עלילתיים וסימולציות וידאו מורכבות.",
    "categoryKey": "media",
    "source": "Futurism",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPekdKZlJvamZqRWpBcnZVYWdUQVF4NU5QcGxjOThIbjIxNFVwNVI3TkFfdmZ5Y2Mta1BHZlI0aGFyVXB2M1JxemNEZTE0Ukt2ekJpb09OR0g3bVBIaUlFdklLZXFMdjUyUHNSQUlNTk9ObjRHbnh6SVZfY3J2VEZXOVM1aG8tbjZRd0U0MzVNZ2d6amlO?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 33,
    "headline": "המדריך המלא: מחוללי התמונות הטובים ביותר לשנת 2026",
    "explanation": "סקירה מקיפה של CNET שמדרגת את כלי יצירת התמונות המובילים. הכתבה משווה בין הכלים השונים ועוזרת להבין מי הכי טוב ליצירת תמונות ריאליסטיות, איורים או עיצובים גרפיים.",
    "impact": "אפשר לקחת את זה ולבחור את הכלי המדויק ליצירת תמונות אווירה לקורס הבא שלנו.",
    "categoryKey": "media",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTFBZNWxfdUZFQ1lfVF93UUVIYlVucmJoMWRpQUw4Mm1mazFUM24tRVk0S0pfUkg3SDd0T0ZvYjZ1UlJkWGUyNGk5OGJhM2JLNjZENy04OGpoQXVKT1BZbmdVZ3F5c2hIQ1ZNb3VGTnZMRXlTYUREblRfcEc2LWw1QQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 39,
    "headline": "מחקר חדש: 85% מהעובדים לא יודעים איך ליישם הדרכות AI בעבודה",
    "explanation": "סקר חדש מגלה פער עצום בין ההדרכות שהעובדים מקבלים על כלי AI לבין היכולת שלהם להשתמש בכלים אלו במשימות היומיומיות. רוב העובדים מרגישים שההדרכה תיאורטית מדי ולא רלוונטית.",
    "impact": "אפשר לקחת את זה ולוודא שהדרכות ה-AI הבאות שלנו יהיו מבוססות על תרחישים אמיתיים מהעבודה.",
    "categoryKey": "learning",
    "source": "Fast Company",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxORzZuTjJKYkl1aTRUZDVfYW04UFdFanVoai1jWTFzdFd0NE1DOWNUdDVhRjFSUUpSU29jYzQ0SnlIQXp1R0V2ZFAzYU9xZlBuRFdMX0M0OFphM3VqQjcyeERqY19kVnMwQ0RwS0ZrbVZfUVI4Zk5QOXJWVDM1R244dzRWZ3ZnVjNyTC05WHJvalBVZw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-05-28";
