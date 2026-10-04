// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-10-04 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 2,
    "headline": "OpenAI משיקה חבילת אופיס מתחרה למייקרוסופט ישירות בתוך ChatGPT",
    "explanation": "OpenAI חשפה סט כלים חדש שמאפשר יצירת מסמכים, מצגות וטבלאות ישירות בתוך הצ'אט. זהו צעד משמעותי שהופך את ChatGPT מפלטפורמת שיחה לסביבת עבודה מלאה.",
    "impact": "מעצבי למידה יכולים כעת לבנות שלד שלם לקורס – מטקסטים ועד מצגות – במקום אחד, בלי לקפוץ בין תוכנות שונות. התוצאה היא תהליך פיתוח מהיר ויעיל יותר.",
    "categoryKey": "docs",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPMThVYXNHdk44dXhHc1F0NHZ5SzJYd2FBN3BWSHJ3R1pXMjMySWlfbTQwaVRxc2l3QkFGUDJLamZ2Yk1zVlBFekl6SVRlbF9kc0lpWEdjQVBHUzhETUNMQm0waVdPSmlOLTh6MlhNZ2pmbFZBR0hpQnYtQUhVX2tiTzBtbEp0YkRuQjViX0Z2eGFpTzVwMFlOd010STAyeVRKVHhlWVNnZ0xpYTcxVDlxM3dha2tjbXp3SE9QRGhfTkdNNlJLQm9sOTh4dHdpQQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 1,
    "headline": "הכירו את Dots: העוזר האישי החדש של OpenAI שינהל לכם את המשימות",
    "explanation": "OpenAI השיקה את 'dots', סוכן AI אישי שמתחבר לאפליקציות שלכם ומבצע משימות באופן אוטומטי. הוא יכול לנהל יומן, לענות למיילים, להזמין טיסות ועוד, והכל דרך שיחה פשוטה.",
    "impact": "מנהל הדרכה יכול להשתמש ב-dots כדי לתאם אוטומטית פגישות הדרכה מורכבות עם עשרות משתתפים. במקום לבזבז שעות על תיאומים, הכלי ימצא את הזמן שמתאים לכולם וישלח זימונים.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9MVUVlaTV5ZFFBUnVJMFZDWTJIRGg5R20zQXpKU0tENk5PMXR0TEZ0N2VqRXpsOHdrazZKYS1QaUFNZ2tzN0c4Tnk0UjBjRmtFX0RjRw?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 11,
    "headline": "גוגל חושפת את Gemini 4 Argon: מודל ה-AI החזק ביותר שלה עד היום",
    "explanation": "גוגל הכריזה על הדור הבא של מנוע ה-AI שלה, שמבטיח יכולות הבנה והיגיון מתקדמות משמעותית. המודל החדש תוכנן להתמודד עם משימות מורכבות במיוחד ולהציע פתרונות יצירתיים יותר.",
    "impact": "צוות L&D שמפתח קורס על חשיבה ביקורתית יוכל להשתמש ב-Gemini 4 כדי לייצר סימולציות עסקיות מורכבות. המשתתפים יצטרכו לפתור בעיות שה-AI יציג להם, מה שיהפוך את הלמידה למעשית ומאתגרת.",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNRjB3amppaF9yb1FhSmxoUW5GUEtCREcxbW1ScXJRRWN5ZGtIM0N0d21wVEI3ZTd5ZHY4N09KRWNwX3U2Z3JBeDNWakYxYXlBVE95NEpKWW5vcWFKZlA5Qkdka3hGZG9INUZtMVN2VTJhWG1TTldVSE1JVm5VaVlvcnpWRlhzX0V1NGJXZGhfMEY?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 45,
    "headline": "גוגל משדרגת את NotebookLM עם סיכומי למידה אינטראקטיביים",
    "explanation": "הכלי של גוגל לניתוח מסמכים, NotebookLM, קיבל פיצ'ר חדש שיוצר סיכומים חכמים שאפשר לשאול אותם שאלות. במקום לקרוא סיכום סטטי, עכשיו אפשר לנהל איתו שיחה ולהעמיק בנושאים ספציפיים.",
    "impact": "לפני פיתוח הדרכה על מוצר חדש, אפשר להעלות את כל המסמכים הטכניים ל-NotebookLM. הכלי ייצר סיכום אינטראקטיבי שיאפשר למפתח ההדרכה להבין את הנושא במהירות ולשאול שאלות ממוקדות.",
    "categoryKey": "learning",
    "source": "XDA",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQZXZpcWk0akhXR0xZUGR4ZEhnaklJWWtSRzRfMFRtV2hRSVA0VkJNUUZxR1RJR1lHV3ZqcWt3SGUyRUUtTFh1Zm5rdk5ZZm1iSkJZVW93SE5ULXhJWG1YRmZpeENRV215TDJMTVRYa19UMk1tQ3FFaGhiZU1DaDh3dEk2dzF4a1YwMEQ2UUxHeUFXMFhBMktJbzBkNDVsNmw4QmE0M2dwM2xWeFk?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 9,
    "headline": "קלוד הופך לחנות אפליקציות עם 2,000+ תוספים חדשים",
    "explanation": "חברת Anthropic פתחה את Claude לחיבור עם אלפי שירותים חיצוניים כמו סלאק, גוגל דרייב וזאפייר. המהלך הופך את קלוד למרכז אוטומציה שיכול לבצע משימות במערכות אחרות.",
    "impact": "רכזת הדרכה יכולה לבנות אוטומציה שבה רישום של עובד לקורס בטופס גוגל יפעיל את קלוד. קלוד יפתח אוטומטית תיקייה אישית לעובד בדרייב, ישלח לו מייל ברוכים הבאים ויוסיף אותו לקבוצת סלאק ייעודית.",
    "categoryKey": "ai_models",
    "source": "bleepingcomputer.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxOVnRqLTRpNnpkWHRHSUNSUW02UktpWjNRVXc2UVN6V2FjX2Q1cVBSMl9UUmFla3BYcVNOTS1vS2ItTVJUcjRYRFlEQTI3a1Q4T2hxY1J0bkhLWk9HcG9BaFo1cFF3WWRQWGp0aDZMVk9wcUJoUXlJM1RjYkdPVFY3YXU2SW1pbUJkTVpzR0xWUWZVUTdyV1BVZ1NmcGNlUVZaeHdWZGtuY3F2ZEQxakRmUzh4U1M0dmtSd19NLV9TYUFkYV9GdHAzVkRTN3p1OWJzMGc2emQ2Tzh4UUhxSkZWRtIB5gFBVV95cUxOU0FncnRFblBBNFktbE1CeHR4Y1lNYndMaTlKZFdnWmxMaW8yMDIzYWFZZVZYSURVeXhxZHB1TER3NXdBQ1lVb2Y0NmF0cGtjUmwyLUx4dkhXd1VQY2FyS3g4RGkzcGpRUU1XVmEzVFkxRm85TXdWRlVmRlFlbXhLdzBlNDl3WTBsOVVITVFId1JQcWVVRHZyb1Z6WHVLVzdncHI3ZS15NDdidFc5bERTclRWeTVRbnY2dEdQUFpweks1c3dGUkZMMUpLR0tQWU9mYV9JZ1MzcHhrRkdIbjlrb1NlTG1nZw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 13,
    "headline": "גוגל מפשטת את Gemini: נפרדים מ-Gems, מקבלים 'Skills'",
    "explanation": "גוגל זונחת את מערכת ה-'Gems' המורכבת לטובת 'Skills' - דרך פשוטה ואינטואיטיבית יותר להתאים אישית את Gemini. עכשיו קל יותר ללמד את ה-AI לבצע משימות ספציפיות שחוזרות על עצמן.",
    "impact": "מדריך שמלמד על תרבות ארגונית יכול ליצור 'Skill' ב-Gemini שמאמץ טון דיבור ספציפי. בכל פעם שיצטרך לכתוב תוכן לקורס, הוא פשוט יפעיל את ה-Skill כדי להבטיח שהטקסט תואם את שפת המותג.",
    "categoryKey": "language",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOLXBWbzJIY2ZWejIzajdwcVF2QTItQjZGMWxNZkdIU05GZ2RDaWVRTWJybWpNaVdONDNQZGpLVVJXWW0yR3dNX1RpNXhtbXZZWnZ1VHc2d2NjbzU0QVgxb3FZZWNKWkVBQjVxOTUwaWg5bVNaMWttN2ZoN0d3bXhWM25JaENPUjRxQVVRajZ6dXJ6Zw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 21,
    "headline": "עדכון ל-Copilot: כתיבת קוד ושימוש באפליקציות אופיס ישירות מהצ'אט",
    "explanation": "מיקרוסופט שדרגה את Copilot עם יכולת להריץ פקודות מורכבות ולכתוב קוד באמצעות חיבור ל-GitHub. בנוסף, ניתן עכשיו להשתמש בגרסאות 'מוטמעות' של וורד ואקסל מבלי לצאת מחלון ה-Copilot.",
    "impact": "מי שמלמד Excel בארגון יוכל להשתמש ב-Copilot כדי ליצור תרגילים אינטראקטיביים. ניתן לבקש מהכלי ליצור טבלה עם נתונים ספציפיים ולכתוב נוסחה מורכבת, והכל יוצג מיד בחלון הצ'אט.",
    "categoryKey": "docs",
    "source": "Cloud Wars",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWnl0VDZPbjlkX0VyejViR0RwRWsycDdON1NCNUdtZlpmNXVrT2syU2JGRVZ4dDBHTHFfVDhTYUNNbWpFaEU3RWtuYnVhWUlrSUh5MFNrS29FOEVQM1d6VzJBbU5ITlJoaHVrRWl6SmV6aEdqUXdtaDhDbGg4TG9jM0xJVnVidEhYRXFaTVpyZWNHclBGRllWVzhicFo?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 35,
    "headline": "גוגל משיקה כלי חינמי ליצירת סרטונים, אבל התוצאות עדיין בסיסיות",
    "explanation": "גוגל שחררה כלי חדש בתוך Gemini שמאפשר ליצור סרטונים קצרים מתיאור טקסטואלי. למרות ההבטחה הגדולה, הביקורות הראשונות מראות שהטכנולוגיה עדיין בחיתוליה והתוצרים לא תמיד איכותיים.",
    "impact": "למרות המגבלות, אפשר להשתמש בכלי הזה ליצירת קטעי וידאו קצרים ומופשטים להמחשת רעיונות. למשל, ביצירת לומדה על 'ניהול זמן', ניתן לייצר סרטון אנימציה קצר של שעון שנע במהירות כדי לפתוח את הנושא.",
    "categoryKey": "media",
    "source": "Android Police",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPYklQQWxhaTR6MFV2WjQzeEoxWDZJTkxEdnNLZ0lYSzZjTEVtWTlNSlp0VVZsRzRSaDlCd2c2TFNtYjNNRF9UeXQ1eEl1S1BBd2t1ZW12MnBwdEtZQmZidWRaLVJ2d3drQTBQSkhTVDZMdDBpYTBzbS1wUURSdFcxa3hSXzNiUWpXQWpXMDBXdWlwRUVOQndhVmV5YWh4MU41UndF?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 4,
    "headline": "חדש ב-ChatGPT: מדידה וירטואלית של בגדים ואביזרים",
    "explanation": "OpenAI הוסיפה יכולת חדשה המאפשרת למשתמשים להעלות תמונה של עצמם ולראות איך פריטי לבוש שונים ייראו עליהם. הפיצ'ר מיועד בעיקר לעולם הקמעונאות אך פותח אפשרויות מעניינות גם בתחומים אחרים.",
    "impact": "בהדרכת קוד לבוש לעובדים חדשים, ניתן להשתמש בכלי כדי להדגים באופן ויזואלי מה מתאים ומה לא. במקום להשתמש בתמונות גנריות, אפשר להראות דוגמאות על דמויות מגוונות ואפילו על תמונות של העובדים עצמם.",
    "categoryKey": "media",
    "source": "TechRepublic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPZDFzMFNuQVhFamU4aVV0YVdnRTJWUjBSN2dKVU9QU25PRjhsaXpjQjR1ZE9JNUxMTUR3dW50UW5fTUp5cWRNNzNFWTRpd1N4UmJwbmdQb2REamhQUTZtREdvR1BNaTdMWmdsbUhBZktleGk4M1VDSzlFUmlsaFpTZWpRZFdZS19VeDBFVg?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 10,
    "headline": "חברת Anthropic משיקה כלים אוטונומיים לארגונים",
    "explanation": "Anthropic, יצרנית Claude, שחררה סט כלים המאפשר לסוכני AI לבצע משימות מורכבות באופן עצמאי. הכלים החדשים מיועדים לאוטומציה של תהליכים עסקיים וניתוח נתונים ברמה גבוהה.",
    "impact": "צוות הדרכה גלובלי יכול להשתמש בכלים האלה כדי לנתח אוטומטית משובים מאלפי עובדים אחרי קורס. הסוכן יקרא את כל המשובים, יזהה נושאים מרכזיים, יסכם את המסקנות ויציג דוח מפורט למנהלי ההדרכה.",
    "categoryKey": "ai_models",
    "source": "Stocktwits",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxQYzBTVFhtYVNkNUMtcWZYYkV2VUhGcEV6WTB6N2htWnFJN3dibGYyUU1TOU0yUy1EWEhpampTc0c1ZWk5b3Z2a1o3b0NBTFFQenNrdkppQ3N3U0RFY3kzSElRR0xVbER3YmtRTkVIU0VldV9GSnlfbG96Zm5ORWpuU295Z1VFVE9yVnB5VlR0VDA1SlNyT1ZGdG5fTXl3VGktWVdLemMzS3NrdXU0NUJRTk05ZWZUQzRjZ1ZNSEVZOGc1RVVRQ1M1cmVkZDRkSGhxZDVFSXZKb3VFLW8yT0E?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 32,
    "headline": "שופיפיי מציגה כלי AI לעיצוב אתרים באמצעות שיחה",
    "explanation": "פלטפורמת המסחר Shopify השיקה כלי חדש שמאפשר לעצב חנויות אונליין על ידי תיאור השינויים הרצויים בשפה טבעית. במקום ללחוץ על כפתורים, פשוט אומרים ל-AI \"תגדיל את הלוגו ותשנה את צבע הרקע לכחול\".",
    "impact": "מפתחי הדרכה שיוצרים אתרי קורסים או מיני-אתרים ללמידה יכולים לעצב אותם במהירות שיא. זה מאפשר התאמה אישית של נראות הלומדה לכל קהל יעד, בלי צורך בידע בעיצוב או תכנות.",
    "categoryKey": "media",
    "source": "techradar.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQSmFkUjNTTGpKV1VzczRqOFA5NlF4QzE1Rm95bmlCekdISkJabU40QWdBYXpyQmhGY3hCM2VOTkNjV3RlbzFYLWNLZ0tuSjhDWU9zdGpNQXdrN2czV2pvWnc2MkRiRXRNVzBqWGk5ajhNTVJ3TExCNXlNd19qNU9Nbk81QUJBMEJuR3c3QjY3cF9ManRER1VodHBlV3NkYmVmS0tiVmlVMA?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 42,
    "headline": "איך לזהות תמונה שנוצרה ב-AI? 6 סימנים וכלים בחינם",
    "explanation": "כתבה מעולה ב-ZDNET מסבירה איך לזהות את הסימנים הנסתרים בתמונות AI, כמו אצבעות מעוותות או טקסט לא הגיוני. המאמר גם ממליץ על כלים חינמיים שיכולים לבדוק אם תמונה היא אמיתית או מזויפת.",
    "impact": "זהו חומר חובה לכל איש הדרכה שמשתמש בתמונות. היכולת לזהות זיופים חיונית כדי להבטיח שהחומרים הלימודיים מהימנים ולא מפיצים בטעות מידע ויזואלי שגוי או מטעה.",
    "categoryKey": "learning",
    "source": "ZDNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1PVk9pMEhaWUlPY3BmaDhxa0ViN2sxaHlLUWJKVktHakNoLUE4OHdzUFFMX1N0eUZfVjc2dmhTRW1KLWkyNG9Rd1hueHpGSjlpVTRPbjJ2UDlOdk1UZFd6a3NYMXlSOEhxSXdCM1FPSjRBN0E?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 5,
    "headline": "ChatGPT משפר את כלי הפרסום עם יצירת מוצרים המונית",
    "explanation": "הכלי ליצירת מודעות בתוך ChatGPT קיבל שדרוג המאפשר ליצור קמפיינים למספר רב של מוצרים בו-זמנית. בנוסף, המערכת יכולה לנתח ביקורות על מוצרים וליצור מודעות שמדגישות את היתרונות שהלקוחות ציינו.",
    "impact": "צוות שיווק פנים-ארגוני של מחלקת הדרכה יכול להשתמש בזה כדי לקדם קטלוג קורסים שלם. אפשר להעלות רשימת קורסים, והכלי ייצר אוטומטית מיילים ופוסטים מותאמים לכל קורס בנפרד.",
    "categoryKey": "language",
    "source": "Search Engine Roundtable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE51NXdXSTY1alg4bXhja1NwQVV1V0Q4X2ZCQ3NpVnR6RVhobnNnVFJERXRNNFY5QmVWY3d2X2lsZzAwWFRIOFEwUXUwSDlOUTh2eV8yREpvYnZLTjlXbUMxR0t2THZDUEFDM0hoZ3NMQmR1Z1Vv?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 34,
    "headline": "10 טריקים וקיצורי דרך ב-Canva שכל משתמש חייב להכיר",
    "explanation": "הכתבה הזו מ-Lifehacker היא אוצר של טיפים שימושיים לעבודה יעילה יותר ב-Canva. היא מכסה טריקים נסתרים לעריכת תמונות, אנימציות מהירות ושימוש חכם בתבניות.",
    "impact": "כל מפתח הדרכה שיוצר מצגות או חומרי עזר ויזואליים ימצא פה לפחות 2-3 טיפים שיחסכו לו זמן יקר. למשל, הטריק ליישור אובייקטים אוטומטי יכול לקצר דקות ארוכות של עבודה ידנית בכל שקף.",
    "categoryKey": "learning",
    "source": "Lifehacker",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFAtVjl1VjMyU0dRMzk1YmRyNHlqa2FwcXNQRS1UMGJ3NDNBeGhORThackZ2bnFzWXh6UUZ3UFpvTlhWSTROZEY0MS15UjU1UEU4YklQazMzQQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 29,
    "headline": "Nvidia משיקה פלטפורמה למניעת 'התנהגות רעה' של סוכני AI",
    "explanation": "חברת השבבים Nvidia שחררה פלטפורמת תוכנה חדשה בקוד פתוח שנועדה להבטיח שסוכני AI אוטונומיים פועלים בצורה בטוחה. המערכת מאפשרת להגדיר 'מעקות בטיחות' כדי למנוע מהם לבצע פעולות לא רצויות.",
    "impact": "זהו צעד חשוב לקראת שימוש בטוח ב-AI לניהול תהליכי הדרכה. בעתיד, נוכל לתת לסוכן AI לנהל את מערכת הלמידה (LMS) בידיעה שהוא לא יוכל למחוק בטעות קורסים או לשנות ציונים של עובדים.",
    "categoryKey": "ai_models",
    "source": "CNBC",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE4weHBRVEI3cE1uNDdNT2VtbWxCMm9iWkpzWVY0dXc4X2hGanFpZnRVLW9JY3IzTXJtMWNFMDRaNlJKZ1BUWkNfRlp2Yk00emxRUVllS3N0NlhtM0lTRHp4WUNR0gFnQVVfeXFMTTR0S3E4cUJLNEZjYmtKT2c4Vk5kXzFXQzhVOWVzdFViUlUwYkg5Zl9kVmZzdXpXVldGdW81NHFzVVZhMWZwOXE1TVVEdkdyV1VtRFJZV1ROU3JOblA4emtyTGVoaFF0MA?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 22,
    "headline": "ה-Copilot החדש של מיקרוסופט משלב הכל במקום אחד",
    "explanation": "מיקרוסופט איחדה מספר גרסאות של Copilot למוצר אחד שנקרא 'Copilot'. הוא משלב יכולות של חיפוש, כתיבת קוד, ועבודה עם אפליקציות הבית והמשרד בממשק אחד.",
    "impact": "עבור מנהל צוות פיתוח הדרכה, זה אומר שיש כלי אחד שיכול לעזור בכל שלבי הפרויקט. אפשר להשתמש בו לסיעור מוחות, לכתיבת תסריטים, לבניית מצגות ואפילו לניתוח נתוני הקורס בסוף.",
    "categoryKey": "docs",
    "source": "TechRepublic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNbW1Vd1Q5M2draUJ3QUVLUzk4ZF91Z09kRzlUcFN5b2pJV1lHdXdqMTVFX2JMQlVEU284UjdScG5uMURNSXpmYml0NV9iMUtrM3F5UmlfMFBpbWR1LU4xMEk4eEJiQXlxTF9lOHg2SDdQX0RvMkg1aDlNNXdUemlmTGc3Q01OOVU?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 38,
    "headline": "כלי AI חדש יוצר סרטוני אנימציה של מפות פנטזיה",
    "explanation": "כלי חדש מאפשר להפוך תמונות סטטיות של מפות (אמיתיות או דמיוניות) לסרטוני אנימציה קצרים. אפשר להראות מסלולי טיול, תנועת צבאות או התפתחות של ערים לאורך זמן.",
    "impact": "בהדרכה על היסטוריית החברה, אפשר להשתמש בכלי כדי להציג את התרחבותה הגלובלית. במקום להראות מפה סטטית, אפשר ליצור סרטון קצר שמראה איך הסניפים 'צצים' במדינות השונות לאורך השנים.",
    "categoryKey": "media",
    "source": "RunPee",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOTEM2Zzlja09QdGh5V2h4bEw5N0JSU3dWRWlDVHlGOHU2V09vUFk5c1MtbHpVdGNJZTZQMHhFU0FqZm4xY051NzA0UDlzZFpmY2RYVUxZWFltNFdNcC1wanFySmlJSE0wVjhjT2JlMVVUZmw5ajBCdm01ZkJOX3AtQTJnZlhEUUFSMXJmaWdfdV8?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 43,
    "headline": "כתבה מעוררת מחשבה: AI משנה את מה שהופך מעצב ל'מעצב מעולה'",
    "explanation": "מאמר דעה ב-Core77 טוען שהכישורים הנדרשים ממעצבים משתנים בעידן ה-AI. היכולת לתת הנחיות מדויקות ל-AI ולערוך את התוצרים שלו הופכת לחשובה יותר מהיכולת הטכנית לצייר מאפס.",
    "impact": "זהו חומר קריאה חשוב למעצבי למידה. הוא מדגיש את החשיבות של פיתוח מיומנויות חדשות, כמו 'ניהול שיחה' עם כלי AI, כדי להישאר רלוונטיים וליצור תוצרים ויזואליים מרשימים וחדשניים.",
    "categoryKey": "learning",
    "source": "Core77",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOQkZPQk9qVENtSmprNjFDR2JYSDVJOGZLbFBmd242TUhyN0FiTmYybzY4dHY5cnF5SlRrd1ZOZlQ4Yi1IX2w1S01OLVlWcTJvRXN3Mmd2Zm5QdXh6aDd3YnZoM1U5Yk01Z0ZSeWItVXl1Q01fVVMtZ3dBUGVGenFtZkRiYVU?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-10-04";
