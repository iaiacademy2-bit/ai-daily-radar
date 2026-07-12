// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-07-12 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 3,
    "headline": "OpenAI חושפת את GPT-5.6: מודל ה-AI החזק ביותר עד כה",
    "explanation": "הגרסה החדשה והעוצמתית ביותר של המנוע מאחורי ChatGPT הושקה השבוע. היא מבינה הקשרים מורכבים יותר, מבצעת משימות רב-שלביות ומסוגלת לנתח כמויות מידע אדירות.",
    "impact": "מעצבי למידה יכולים כעת להזין את כל חומרי הגלם לקורס חדש – מסמכים, מצגות וסרטונים – ולקבל מהכלי טיוטה ראשונית מקיפה של מערך השיעור, כולל הצעות לפעילויות.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiSEFVX3lxTE1pWmhBYnBfLXg2OGhrbmlYM2FobFBJanp6RHFiZ1lIa1BSSE1CTnNYSExtRW1USTFWbDloOUxIS3FKY2hXbm5ULQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 4,
    "headline": "ChatGPT משיק סוכן אוטונומי שמבצע משימות עבודה עבורכם",
    "explanation": "הכירו את ChatGPT Work Agent, כלי חדש שלוקח הוראות מורכבות ומבצע אותן באופן עצמאי. הוא יכול לחפש מידע, לסכם אותו, ליצור מסמכים ולשלוח אותם במייל – הכל לבד.",
    "impact": "מנהל הדרכה יכול לתת לסוכן משימה כמו \"מצא את 5 המאמרים המובילים על מנהיגות היברידית, סכם אותם למצגת של 10 שקפים ושלח לי טיוטה\".",
    "categoryKey": "ai_models",
    "source": "MacRumors",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBqRGh5eDg0WEdUc1RqQWNHVlRSTW13d3NnS0tJMFJYRzVWaFpfLWRWbFVPS0JfX0xzU3Y2U0tVUUxQd1piNDJJTDdPcEV1OHpacXhxU0JsUUY5OGd2dl9xNTNWQ3YxTGNT?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 30,
    "headline": "מטא (פייסבוק) משיקה את Muse: כלי חדש ליצירת תמונות וסרטונים מדהימים",
    "explanation": "מטא נכנסת לזירת יצירת המדיה עם Muse Image ו-Muse Video. הכלים מאפשרים ליצור תמונות וסרטונים ריאליסטיים או אומנותיים מטקסט פשוט, באיכות גבוהה במיוחד.",
    "impact": "במקום לחפש שעות תמונות מלאי גנריות, צוות פיתוח יכול ליצור תמונות ייחודיות ומותאמות לקורס, כמו 'עובדת מחייכת במשרד ישראלי עתידני'.",
    "categoryKey": "media",
    "source": "AI at Meta",
    "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBLOV9WdnUwRW1WTVZjVm9UaC1xeTV6eEFVV1hYOTRRMVZNV2lScWctc2NOR3B5ZWNEcmNaMmpNSkFTWHkwYlV1V1ZJejYyRFRqUjJmcW45VGItRXJ1bi1EVlc5R1Z3anFRNzBWM1ZzT2w?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 16,
    "headline": "גוגל ג'מיני מציג 'מחברות למידה' ליצירת חומרי הדרכה אינטראקטיביים",
    "explanation": "פיצ'ר חדש באפליקציית Gemini מאפשר לארגן מידע, סיכומים, תמונות וקישורים למחברת דיגיטלית חכמה. הכלי יכול להפוך את המחברת למצגת, חידון או דף עבודה בלחיצת כפתור.",
    "impact": "מפתחי הדרכה יכולים להשתמש בזה כדי לבנות במהירות 'ערכת לומדה' דיגיטלית על כל נושא, ולאחר מכן לייצא אותה בפורמטים שונים עבור העובדים.",
    "categoryKey": "learning",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPdm11WVU2dmYxMjd1aFFBOGtfMk85WEhUcnhJR1dvWWFETWl3RmVSRHlWSUQzSHNFd0duVmJfSF9IVjR6MFpyMEZya1BrdmRaMUdYYmp4dUd6TndRNVdYRjJqWXRtby1Id0FFM19DSTFzZWVUNWZlNG5mSlJoS1ZjSEE5eDVJdG16WVNkTW9xOG0ybTFjZlh0Sg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "הקול של ChatGPT נשמע אנושי מתמיד ומאפשר שיחות טבעיות בזמן אמת",
    "explanation": "OpenAI שחררה מודלי קול חדשים שמשפרים דרמטית את יכולות השיחה של ChatGPT. הקול החדש מבין ניואנסים, מגיב בזמן אמת ללא השהיות ומנהל דיאלוג שנשמע טבעי לחלוטין.",
    "impact": "אפשר ליצור סימולציות הדרכה מציאותיות לשיחות מכירה או שירות לקוחות, בהן העובד מתרגל שיחה עם בוט שנשמע כמו לקוח אמיתי, כולל הבעות רגש בקול.",
    "categoryKey": "language",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNWGFnMjFvVFZQejlWdFNQQkdmQ2U3T24xeHd4bFhZWFhBanlnOUxKVzZiei1ubmJTYU9XREU0N2taTjZnbUZBbUw4Q3VkMDZFcmxUT1NlemZobWY5QmR2QVR5LVEyVnhOQ2NSa2dqdW8yZmpKTHV6VkU2bkVWeWVxakdVb2liMG84TTM3Unp3MW5jaVE2enN2eHBrTzVUZXBsaXdwOFV3?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 8,
    "headline": "העוזר החכם של Claude זמין עכשיו גם באפליקציה לנייד",
    "explanation": "חברת Anthropic שחררה אפליקציה רשמית ל-Claude, המתחרה הגדול של ChatGPT. עכשיו אפשר להשתמש ביכולות המתקדמות שלו לניתוח מסמכים ויצירת תוכן ישירות מהטלפון.",
    "impact": "מדריך שנמצא בסדנה יכול לצלם את הלוח בסוף היום, להעלות את התמונה לאפליקציה ולבקש ממנה לסכם את כל הנקודות המרכזיות ולשלוח למשתתפים במייל.",
    "categoryKey": "ai_models",
    "source": "WIRED",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQUUhySFRHNFhoWEhKQWJCaDYtR2hZbEZZS0dlNlctTjRtZ21KY1N4UVFGb21KdnFfUkJEUi1XTURfQzJ0VUhRYmlPZEJxUW9Ud2ZrMVZZeWQzSU01cEFpa3o5VXVpc0FtOW5ybjBwNFEtbEpUOXVuYk9QSnlqZXhmWXgwX0JYTXVPNnFBWUlMTm40UVdtTVVXX1BERlVKdEw5Z2c?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 9,
    "headline": "פיצ'ר 'שיקוף' חדש ב-Claude מראה לכם איך להשתמש בו טוב יותר",
    "explanation": "קלוד מציג כלי ניתוח חדש בשם 'Reflect' שמנתח את היסטוריית השיחות שלכם. הוא מזהה דפוסים, מציג באילו נושאים אתם הכי מתעניינים ומציע דרכים לשפר את השימוש שלכם בכלי.",
    "impact": "צוות L&D יכול לראות אילו סוגי בקשות נפוצים בצוות (למשל, יצירת תסריטים או סיכום מאמרים) ולהפיק תובנות שיעזרו לשפר את תהליכי העבודה עם AI.",
    "categoryKey": "learning",
    "source": "Mashable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE95dFNCNl83ZEpCclpYdzROOGt3XzFhOUl3U3lUQmt5MjdHci0yYmJlcERlTmUyTTczcXBCdGJUczY2TnlFczJINjh6cVdVZ0l3eWxUX2JyUDE3SGJYQlJURi1qa0xMQlB6ZmNyNTNSTXM?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 18,
    "headline": "גוגל תמונות משיק כלי AI חדש שעורך לכם סרטונים באופן אוטומטי",
    "explanation": "הכירו את 'Video Remix' ב-Google Photos. הכלי החדש לוקח את הסרטונים והתמונות שלכם, מזהה את הרגעים המעניינים ביותר ועורך אותם אוטומטית לסרטון קצר וקצבי עם מוזיקה.",
    "impact": "בסיום יום גיבוש מחלקתי, אפשר להעלות את כל התמונות והסרטונים ולקבל תוך דקות סרטון סיכום מרגש ודינמי לשיתוף עם כלל העובדים, בלי צורך בעורך וידאו.",
    "categoryKey": "media",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPQnR6akNtWEtWUHVBZnhWV2M2UGtaVEZ1WW9SYTl3RFJQckNpaWtQOFNwaEtJTUY0UUdWS1lQVFoxTE4tYnV6aTNRbWw1S2RKNXc1Ym5BQVRFd1VJRU90NThtZXJwNFRTOGFyRkNVOFlXREhxbWVQQVVzdHA4RHJJT19KRWNIdw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 21,
    "headline": "מיקרוסופט משדרגת את Copilot במערכת Office עם המנוע החדש GPT-5.6",
    "explanation": "כל כלי ה-Copilot ב-Word, Excel, PowerPoint ו-Outlook פועלים מעכשיו על המודל החדש והחזק ביותר של OpenAI. זה אומר שהתשובות, הסיכומים והיצירות יהיו מדויקים ואיכותיים יותר.",
    "impact": "מי שמפתח הדרכה על Excel יכול לבקש מ-Copilot ליצור טבלאות נתונים מורכבות לדוגמה, לכתוב נוסחאות מסובכות או להפיק גרפים מתקדמים, והתוצאות יהיו מקצועיות מתמיד.",
    "categoryKey": "docs",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5kYWhpU0pHLVpwM0RlNzgxX1JGRlVaSmxPelVHcXJXQmFYZGszLUp4Nmw0SlRGbTBiUnR5emtEaURDXzBUUDBIWEI4Y0Q0SWZZdGNoeGxLNTZZS1BxUEdQcGduSFFlNjRTdVRxMDZiSVNtTWJSNHZfRWptNA?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 33,
    "headline": "Canva שמה דגש על אוטומציה של תהליכי יצירה בעזרת AI",
    "explanation": "קאנבה מתמקדת בשיפור כלי ה-AI שלה כדי להפוך תהליכי עבודה יצירתיים לאוטומטיים. המטרה היא לאפשר למשתמשים ליצור קמפיינים שלמים של חומרים ויזואליים בכמה לחיצות בודדות.",
    "impact": "לפני השקת קורס חדש, אפשר להגדיר תבנית עיצובית אחת ו-Canva תיצור אוטומטית את כל החומרים הנדרשים: מצגת, דפי עבודה, פוסטים לרשתות החברתיות ובאנרים למייל.",
    "categoryKey": "media",
    "source": "SiliconANGLE",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTE5nT3BDWFZSYXgyQThTQktxTzZEdVcwVzNUajFhdXNJWTJneHhfdWZDNlhVWG11VDB5RjRhZ3pMbmlkeEJfdXFyaXBrZlBOaGpnVmN1RlFvLU5PNlVWQWQ3X1hMZjJGMzFydVRHYl8tVW1XMGFQY1VvaVZn?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 44,
    "headline": "הסוד הגדול של NotebookLM נחשף: כלי חובה לכל איש הדרכה",
    "explanation": "הכלי החינמי של גוגל, NotebookLM, מאפשר להעלות את כל חומרי הקורס שלכם ו'לשוחח' איתם. הוא יכול ליצור מתוכם שאלות, סיכומים, ואפילו להסביר מושגים מורכבים על בסיס החומרים שלכם בלבד.",
    "impact": "מעצב למידה יכול להעלות 20 מאמרים על בינה מלאכותית ולבקש מהכלי: \"צור לי חידון של 10 שאלות אמריקאיות על בסיס המאמרים האלה, כולל הסבר לתשובה הנכונה\".",
    "categoryKey": "docs",
    "source": "Android Police",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNRXhSV0dRcm5kaXp0cTdhMF9TNDk0Z1FBTTU3MG0xczhTeDQ5REIwN2ZTaTVmS3FlMTRHeWxpNmhtaFZsYV9KZVFjY0xOOUdTTURROXZaWHNTdlFUMnlvZjd4ajNHWWdYZ2dTSFBfenZxeGVYRkNXS1VRRVFJLTVKTXR1dUhDZzJ4azdsaEpla1RSYk9ER05vLUZYZkg1NHNSS25ESkNLbC0yYW96UDliOVNpTmJYMEg3d1lQZ3d1VlJMd0ptbTMw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 5,
    "headline": "וייבר משלבת את ChatGPT ישירות באפליקציה",
    "explanation": "מעכשיו אפשר להשתמש ב-ChatGPT ישירות מתוך שיחות ב-Viber. הבוט החדש יכול לעזור לנסח הודעות, לתרגם טקסטים, או לענות על שאלות בלי לצאת מהצ'אט.",
    "impact": "מנהל צוות יכול להשתמש בבוט בקבוצת הוייבר של הצוות כדי לקבל סיכום מהיר של דיון ארוך או כדי לנסח הודעת עדכון מקצועית וברורה לכל חברי הצוות.",
    "categoryKey": "language",
    "source": "PR Newswire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxOM2YzVmMxbWp2c3gxaXdWdG04TG9QQUtieE1UVV9GaXl0WkRycFB5bm9KdkVBM2EwODdNcGVCWEFJYjl5ZmpqTUFXVEdET1AtbGd1a1NfYXZEQlZxOXg4ZnI2ZnphVFVyLXhlV0VkS1ZCZEgyRVd4U09XeXk3VVJLZE0xc2ZwQQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 13,
    "headline": "גוגל מציגה את Android Halo: עוזר AI אישי שחי בתוך הסמארטפון",
    "explanation": "גוגל חשפה מערכת AI חדשה לאנדרואיד שתפעל ברקע ותלמד את הרגלי המשתמש. היא תוכל לבצע משימות באופן יזום, כמו להזמין מונית כשהיא מזהה פגישה ביומן או לסכם שיחות שלא נענו.",
    "impact": "בעתיד הקרוב, העוזר האישי יוכל להזכיר לעובד להשלים קורס חובה לפני הדדליין, ואפילו להציע לו את השעות הנוחות ביותר ביומן כדי לעשות זאת.",
    "categoryKey": "ai_models",
    "source": "TweakTown",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPZjdiNGlZQkhodFhZbGc4RGstZ3JMcXZuS1hZREdQbjNjX05UaGVjZmIydlRONlJFZ0didlFQeUszY0s1QWM1dWhJRGV6VzZtS0pDWWRFS0dlRWpFaUQ1ZS04c29vekpLZmE2UmNjS0RZVEN5RG1lTU5vTHg1YjlNUGloaTBacGJxQjRCS05iajJ4TElUSjdQRExIZ21UcWVmbGNGWmFDbDgydW5jbFUxeDdOZlpadm9DdzhjZmEwSTR3X2NnclRF?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "המתחרה של Sora? בייטדאנס (טיקטוק) צפויה לשחרר מחולל וידאו חדש",
    "explanation": "חברת האם של טיקטוק עומדת להשיק את Seedance 2.5, מודל חדש ליצירת וידאו מטקסט. לפי השמועות, הוא צפוי להיות תחרותי מול הכלים המובילים בשוק כמו Sora של OpenAI.",
    "impact": "דמיינו שאתם יכולים ליצור סרטון הדרכה קצר על 'עבודת צוות יעילה' פשוט על ידי כתיבת תיאור הסצנה, במקום לצלם ולערוך במשך ימים.",
    "categoryKey": "media",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPSTRjblpRcEJHSUs1OHhuSVg2c19sSk9OX01ua09PdkRiSk5aUXBiMFBMLWJHdHV5WkJFNm1vU0VjNDF0ZW5tay1DazNoZVlfSGRFcFBNakRVQTJ3OThENHhlaFlVM0lFQmxXUTBjTjFnb2loTG1mbGdETkloOEh2dHpjcWlHbjdWbm5sNkxQTEdyZGcyczd2LS1XYnRPcFE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 15,
    "headline": "סוכני ה-AI של גוגל משתלבים בחיפוש ומבצעים משימות עבור מיליארד משתמשים",
    "explanation": "החיפוש של גוגל הופך להיות אקטיבי יותר. במקום רק להציג קישורים, סוכני AI חדשים יכולים לבצע עבורכם משימות כמו תכנון טיול, השוואת מוצרים או מציאת מתכונים שעונים לדרישות ספציפיות.",
    "impact": "איש הדרכה שמחפש חומרים לקורס חדש יכול לבקש מגוגל: \"מצא לי 3 סרטונים, 2 מאמרים ופודקאסט אחד על ניהול זמן, וסדר לי אותם בטבלה לפי תאריך פרסום\".",
    "categoryKey": "learning",
    "source": "tech-insider.org",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBMQ0VGZ2FxZWRaOXhta3JLalYxZGpFZ1JpWFM0SGhMSEM4TWdqVDBBSTZnMHFxTklWMW1OT0Q1Y2diS2h3YUxMQTc5UkRNMUJzSmZFZHJtYjItcFUwZ0lsakVhZkUwV2st?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 20,
    "headline": "מיקרוסופט מציגה סוכני AI שישפרו את חווית הלקוח והמכירות",
    "explanation": "מיקרוסופט משלבת את Copilot עמוק יותר במערכות ניהול קשרי לקוחות (CRM). סוכני AI חדשים ינתחו אינטראקציות עם לקוחות, יציעו את הפעולה הבאה ויסייעו לאנשי מכירות ושירות.",
    "impact": "צוות הדרכת המכירות יכול להשתמש בזה כדי לבנות סימולציות בהן ה-AI מגלם לקוח עם התנגדויות שונות, והמערכת נותנת פידבק בזמן אמת לאיש המכירות על התשובות שלו.",
    "categoryKey": "learning",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxPZV9EQ2x1M1MxYmhKX1dhVTNQRDA5RkNKTWdqSHE3SDNTem1NX3dNREtnU0REVi1IZUdULTJBa0k0Q1Nua1ZFZ3U4bTNYU3VCY3JuMThQQ0JxVm9Nc2NrRGlsSGtkTnI5MllSWXpIOThMT3ZlTGxHR21FcllBYWNKM19sendQUnVpUmc2TXRsamlDMVV1OU5QNE1mTlgwdnZNYVlCbk8yeUNZT1NaeG56TzB5aF9yTmpKbENBRndYR2lrSmlYT0hMOGxRNGw0TFF3eTZlVDlvbVk3cm8tMXRUQTNUV19HdUlrWHZCWFBLaDBfRmRlYlZFNVhn?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 28,
    "headline": "ה-ChatGPT שהכרתם מת: OpenAI הופכת אותו ל'סופר אפליקציה'",
    "explanation": "העדכון האחרון של ChatGPT הוא לא רק צ'אט, אלא פלטפורמה שלמה. הוא משלב בתוכו יכולות של סוכנים אוטונומיים, יצירת מדיה מתקדמת וחיבור עמוק יותר לשירותים חיצוניים.",
    "impact": "זה אומר שבעתיד נוכל לבקש מ-ChatGPT לא רק לכתוב תוכן לקורס, אלא גם לעצב עבורו מצגת, להזמין חדר ישיבות לסדנה דרך היומן הארגוני, ולשלוח זימון למשתתפים.",
    "categoryKey": "ai_models",
    "source": "inc.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPTUhrV0tPUWdaalhDc2tMal9MWlR3SFlQdHdUZUMxaWszYTN4ZFlBMDdhZzJHa1JPVlRlbml2S3RmMHA1NnFFV3Z1WTBLR0YzMHhLRVY2U0lrdUVfLWdIRFdBWTJ5cG5Nb2xiRnQyZFFOQl9pME5rckl3RXplUnYzeGxyLS05eHFsZ3lxUGg1dzJRQQ?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 36,
    "headline": "אינטגרציה חדשה מחברת את Canva ישירות למערכות תצוגה ארגוניות",
    "explanation": "חברת Korbyt מאפשרת עכשיו לשלב עיצובים מ-Canva ישירות על מסכים דיגיטליים במשרדים. כל עדכון עיצוב בקאנבה יסתנכרן אוטומטית למסכים ברחבי הארגון.",
    "impact": "צוות ההדרכה יכול לעצב ב-Canva שקף 'טיפ שבועי' או להודיע על קורס חדש, והעיצוב יוצג אוטומטית על כל המסכים במשרד, בקפיטריה ובמעליות.",
    "categoryKey": "media",
    "source": "Business Wire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxNN0JwX3FocTJxQW5NeU9pNmlvZTJzR3U2VExfYzFqdUFnNmhwWl9nUGNhYlhZWWxrcEI0X0R2eVJSNmRoNDNIUFhPalBWNC0xaTVIcEdMTUhaVy1WcEdJZG44YXk5VW85ZGVrWFY2NkxSVlRyREMzR2owT1pFa0tHZlNVbXFVZEJsQnZuY0RoVGd4QU5CN3B1U0l5bVE1MGxuQ0RWS01mREZISGYxOGgxRXRTR0poLTEzeTlZTnY1b19fZkREM0k0Rm1HX3hQWGJwTzVQUWNLYnZzbEZhLVNXM2pyWThyLXJvalUyaHJOVUM4WjE1ZGJQQ3lGZw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-07-12";
