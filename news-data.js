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
    "id": 2,
    "headline": "OpenAI שדרגה את ChatGPT: הכירו את מודל по-5.5 המהיר כבררת מחדל",
    "explanation": "המודל החדש, GPT-5.5 Instant, הוא עכשיו ברירת המחדל ב-ChatGPT והוא מהיר משמעותית מקודמו. הוא תוכנן לתת תשובות כמעט מיידיות, מה שהופך שיחות ארוכות לחלקות וטבעיות יותר.",
    "impact": "מעצבי למידה יכולים עכשיו לעשות סיעור מוחות בקצב שיחה אמיתי, ולקבל רעיונות למערכי שיעור או שמות לקורסים בלי לחכות לטעינת התשובה.",
    "categoryKey": "ai_models",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQZmdrS2FJU0s3NDdOSDZ3T0Q0Ny1JUzdzUXllNWlUblhZVnBMWklVZlpTMTRJci1QX1JRSnNSVWtkSjVGcFQxRkczcE92VFZfY3I3RkZsbjBGQkE0YzlkSnE1TnpCUVVwVVc4X241MExzSU9oeDRPTlVobEpUSnNrb09OQkZzTGo0UVhFQ1dLQVFVS09mZlpFeURIWEJ2dkk?oc=2",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 8,
    "headline": "קלוד החדש בונה תהליכי עבודה אוטומטיים שיחסכו לכם שעות",
    "explanation": "קלוד Opus 4.8 מציג כלי חדש בשם 'Dynamic Workflow' שמאפשר לו לבצע משימות מורכבות בכמה שלבים באופן אוטומטי. פשוט תארו לו את התוצאה הרצויה, והוא יבנה ויריץ סדרת פעולות כדי להגיע אליה.",
    "impact": "במקום להעביר ידנית משובים מעובדים לקובץ אקסל ואז לסכם אותם, אפשר לבקש מקלוד לבנות אוטומציה שתקרא את כל המשובים, תקטלג אותם ותפיק דוח מסכם.",
    "categoryKey": "ai_models",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQQ2taMVlYMlJRZlBOc3dLU0trM1h4djVWRTFuSkkxckJTdTlVTWNDLUhwNlRWb19YclM5SHM0NU1JRi0zNlVqa3JQeElMT0xsMFV6Y2czVFpYTENFamxVbEpmSURMMHhyNGt4ZUdfUzhRLVRtYkVlWFo2bEtoY3p3Q2loTjBWaFo4dVEwZ0RIeE1GUnFNUjQxcQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 29,
    "headline": "Canva משתדרגת: צ'אט AI חדש שיעצב לכם מצגות תוך כדי שיחה",
    "explanation": "Canva הציגה את Canva AI 2.0, שדרוג ענק שמוסיף צ'אט AI ישירות לפלטפורמה. עכשיו אפשר לבקש ממנו בעיצובים בשפה טבעית, כמו \"תכין לי מצגת על בטיחות אש עם תמונות של כבאים\".",
    "impact": "צוות L&D שמפתח קורס על שירות לקוחות ישתמש בזה כדי ליצור אינפוגרפיקות מותאמות אישית תוך דקות, במקום לחפש תבניות מוכנות במשך שעות.",
    "categoryKey": "media",
    "source": "Forbes",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQQVJIZGlGVThLYnItTGhObGo4UUxhZjdPaVdCcVR5VU1La1hDUU91VDdOSldDLWxQZ2JjNHlLeXlJLWVxUHRXc3FPQUliLVlwLXE1RXF4T1pBRnRoNzYtM1RMQUJxa0M4aVR6RHlLLTdqT3JWNzJVSG4tWWlycFB3REFPd1Y5THNaUjg0Ti13ajhDYzBiOEdNMXFfVUxsc2RvZVJPa044Y3E0bVhNLTZNT2hHRQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 4,
    "headline": "מחולל התמונות של ChatGPT השתדרג: יותר שליטה, פחות טעויות",
    "explanation": "OpenAI שחררה את ChatGPT Images 2.0, גרסה חדשה ומשופרת ליצירת תמונות. הגרסה החדשה מבינה טוב יותר הוראות מורכבות, מצליחה לשלב טקסט בתמונות בצורה מדויקת ומאפשרת לערוך חלקים ספציפיים בתמונה.",
    "impact": "מפתחי הדרכה יוכלו ליצור תמונות מורכבות ללומדות, כמו תרשים זרימה עם כיתובים ברורים בכל שלב, או תמונה של סביבת עבודה עם דגשים על ציוד בטיחות ספציפי.",
    "categoryKey": "media",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE96QnVnaXU0bWFnZF9MMVBROVpXeXVtSHBDSE1kc0k1cXMzdG1uLUJIT2U2Rk9jVVJNV2FzNzA4VFhrUkNqNi1janYtNzNneXZIWURncGNiZGdSWU1HVkxCN2tBYVZuWWc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "גוגל הופכת את המסמכים שלכם לסרטוני וידאו קולנועיים",
    "explanation": "כלי ה-NotebookLM של גוגל קיבל פיצ'ר חדש ומדהים: הוא יכול לקחת את המסמכים והסיכומים שלכם וליצור מהם סרטון וידאו קצר בסגנון קולנועי. הסרטון מסכם את הנקודות המרכזיות עם קריינות, מוזיקה ותמונות מתאימות.",
    "impact": "מנהל הדרכה יכול עכשיו להפוך נוהל בטיחות יבש בן 10 עמודים לסרטון טיזר מרתק של דקה, ולשלוח אותו לעובדים כדי לעורר עניין לפני ההדרכה המלאה.",
    "categoryKey": "learning",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOMDEwN0FHaUpaOV9Md3k4T3ZCQTloSDlBOUpTdHFtZjEtc0lWcUM2eTJBVlZiY0lpQ1JPMS16ZzZzcHpwbkRWXzMyNlBlaXJYT1lpTExxNk1GQV9IOTdUU25PZWNjSDQ4R2tJSlNZbHVQRHBYTkNLUXotdVI1V2pDZ3VkckN6WXlpQU12cGRNaDlfbFl1UDdTU3ZVWHpxYmY0TlFMVVZfVnFzTi16eTM0R2ZfVVNrUUk?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 12,
    "headline": "העוזר האישי של ג'מיני הגיע: סוכן AI שינהל לכם משימות",
    "explanation": "גוגל חשפה סוכני AI אישיים בתוך ג'מיני שיכולים לבצע משימות מורכבות עבורכם. למשל, תוכלו לבקש ממנו \"תמצא לי קורס אונליין על ניהול זמן ותשווה מחירים\", והוא יבצע את כל החיפושים וההשוואות לבד.",
    "impact": "מי שמתכנן סדנת מנהלים יוכל להטיל על הסוכן משימה כמו \"מצא לי 3 מאמרים ו-2 סרטונים על מנהיגות מעצבת וסכם אותם בנקודות\", ולקבל חומרי גלם מוכנים להדרכה.",
    "categoryKey": "ai_models",
    "source": "CNBC",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTE1oM0xhc3gzR1phR242UDVKSjFyN2pIQXZ2VHRobVNVVElHVWVFbG5hVGF3Q0VUWGliZDhLemdWa1ltRmZ2TlBuTVFOX2hyZ0JaRzhZSXFlRWtZcHZuZ043c1JIUWdlOHRtVmxrVGZCdlBzTUpwMnlUdk9B0gF_QVVfeXFMT09kbmg3TlRTbllJdGJVbF8xRzd3T2lUYV9ycmxBYnN4azJjOThzWXFvU2NBV1JNMktOOEtDUm9xb3V4d2pVVTRCNTVNcVc3UlhHNUk3bWhBVTl6YkxVeU91U25lVmJuWEVCRzBwcGFITkNmYi1UdVBlbVo5dUVmZw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 17,
    "headline": "מיקרוסופט משחררת את Copilot לשלוט במחשב שלכם",
    "explanation": "ה-Copilot של מיקרוסופט יכול עכשיו לבצע פעולות ישירות על המחשב שלכם, כמו לפתוח תוכנות, לארגן קבצים ולשנות הגדרות. בנוסף, הוא יכול לנהל שיחות קוליות בזמן אמת ולהבין את ההקשר מהמסך.",
    "impact": "מדריך טכני שמלמד תוכנה חדשה יוכל להשתמש בזה כדי ליצור סרטוני הדרכה מורכבים, על ידי דיבור אל המחשב ומתן הוראות ל-Copilot לבצע את כל הפעולות הדרושות.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi_AFBVV95cUxOMzRXYTJzR1J2dW1PQml3RHJCeU1BN2x5UDRObmVEYnM5WENwTDZ4eVFYZDlxVUptRW05ZU01MHR5UkkyS3F0LXVQc29JRklBeDBuajN2eTNCazlCZnJ4Q1JvdTM5MUdPdndkOHBaOFU3amNQQ1N2Smstd2xhUGFSZVpBdjhFSkltZ0lNT3NzdFRiVTNhYUVjVjZyNVdqVGVhWGVaZklNYVlYNVNZMmN5LTJIQTFwZmRVUWlyZFdvY3dZNFEzUlFSdDhrVkhVYmUyNVhqM1ZxUjJONDRrT05ORUk4V2VWRDhwWU1PNVNqV0tGOWdncjJIbnVCMzA?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 35,
    "headline": "המחולל החדש Seedance 2.0 יוצר סרטונים כל כך ריאליסטיים שהוליווד בלחץ",
    "explanation": "יצא כלי חדש ליצירת וידאו מטקסט בשם Seedance 2.0, והתוצאות שלו נראות מציאותיות באופן חסר תקדים. הכלי מצטיין ביצירת תנועה אנושית ופרטים קטנים, מה שהופך אותו למתחרה רציני בתחום.",
    "impact": "דמיינו שאתם יוצרים סרטון סימולציה של שיחת משוב קשה בין מנהל לעובד, עם הבעות פנים ותנועות גוף אותנטיות, מבלי לצלם שחקנים או לצאת מהמשרד.",
    "categoryKey": "media",
    "source": "The Guardian",
    "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxPZmh0RWhITmRETndIUlNQcVY1eWUzRlhaVElKckh0RFpCNzFBZFRuZ1RYSTZWMDFJZUpUdFVaUDZxaW5zNG9GemhXa0c5R1ZjR281VkRVQ0E4TFpUbUh5ZG9TemE3LUU4amlQN2JBZ3FZckN4b3d2alJ5aDY3TUw4cm1MMmlzbmwza2JRZXpJY3Z0LWxYdWh6dWpDcjRhZw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 1,
    "headline": "עכשיו אפשר להתחיל לכתוב קוד במחשב ישירות מאפליקציית ChatGPT",
    "explanation": "עדכון חדש מאפשר להתחיל משימות קידוד מורכבות במחשב (Windows) ישירות מהאפליקציה של ChatGPT בנייד. זה מאפשר למפתחים להתחיל עבודה בדרכים ולהמשיך אותה בצורה חלקה במחשב.",
    "impact": "צוות פיתוח הדרכה טכנולוגי יכול להשתמש בזה כדי לבנות במהירות אבות-טיפוס של סימולציות אינטראקטיביות או מיני-משחקים לימודיים, גם כשהם לא ליד המחשב.",
    "categoryKey": "language",
    "source": "9to5Mac",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQREhqcndYMXk2Z1VBY1FXQ3hVMVJVOXh5RzN6a19vd1N1WGJjQXl5eEMybktGTW9yMGl1UUlpUzRRVFg5aUZjQTFuZldscVRuaFJ0b3MzZDcyQ2dNVUFUT2dXeUk0VlAtMzhqVExURW4tVGM0NmU3NGVKX0lINWFCaHliYmhsUllnNVF3?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 22,
    "headline": "ChatGPT נכנס לעולם הפיננסים ויעזור לכם לנהל את הכסף",
    "explanation": "OpenAI משיקה גרסה של ChatGPT המיועדת לפיננסים אישיים, שתוכל להתחבר לחשבונות הבנק שלכם. היא תאפשר לכם לשאול שאלות כמו \"כמה הוצאתי על מסעדות החודש?\" ולקבל תשובות מבוססות נתונים.",
    "impact": "מי שמפתח קורס על אוריינות פיננסית לעובדים יוכל לבנות תרגילים וסימולציות ריאליסטיות, בהן המשתתפים מתנסים בניתוח דפוסי הוצאות על בסיס דאטה לדוגמה.",
    "categoryKey": "language",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNdFBfTXUxSDUyLUFUcnVFbEVfWlZuRGhiaURGem9NUm5VUkpsalpLeGVjWG1CQVd2RVVFTnZ6SnVVeEVYMVhhWl9KSV9BVmFrYXhzRUFYVzJyTmxNS2UwYmIzMWF1NGZkemdMOW1sSXpDekFxR2plYkFuN3FMeHRsWjZIbURTQjRLbDkyNlIzU0s1Z3VQUTB5SlJvaXFiUzZWRm15M1Vrc01qQnVWVHBXenhQMks?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 39,
    "headline": "גוגל משיקה מחולל תמונות חדש ומטורף בשם Nano Banana",
    "explanation": "לפי הדיווחים, גוגל שחררה כלי חדש ליצירת תמונות בשם Nano Banana שמייצר תוצאות מדהימות וריאליסטיות. הכלי מצטיין ביצירת פרטים קטנים ומורכבים ברמה גבוהה במיוחד.",
    "impact": "במקום להשתמש בתמונות סטוק גנריות, מעצבי הדרכה יוכלו ליצור תמונות אולטרה-ריאליסטיות של תרחישים ספציפיים לארגון, כמו 'עובד מרכיב חלק מסובך במכונה X'.",
    "categoryKey": "media",
    "source": "Medium",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPSUVPYkd6amhraFJ1RXlMd1VwbHowU1BqNmk0Zlp0TE5KRzBPbWU4cVNrS09JUkR1ZHlfTFpQdWdPWkFNbDU4aEVxZ3c3NmJpbVg2b01WOXRVOVhQMlN6cnJpYUtYWVBhc0NQbHlNYXhIRWFhNm9IQWU3YUxyaWNzZGtzdmp0bGhqa000dDJ3MXprS0RmOHcyaUJVLWlVVGpLUGpfXzFn?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 18,
    "headline": "מיקרוסופט מעצבת מחדש את Copilot באופיס: פחות הסחות דעת, יותר יעילות",
    "explanation": "ה-Copilot בתוך יישומי אופיס 365 קיבל עיצוב חדש ונקי יותר. המטרה היא להפוך את השימוש בו לאינטואיטיבי יותר ולהסיר כפתורים מיותרים שהפריעו לזרימת העבודה.",
    "impact": "עכשיו קל יותר מתמיד להדריך עובדים כיצד להשתמש ב-Copilot כדי לסכם מסמכי Word ארוכים או להכין טיוטה למצגת PowerPoint, בזכות הממשק הפשוט והממוקד.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNRjdjUHR6OUY0MGdQSm1NbjkwVzlEN01ibEZqd1VxaVBOT0ZwdDlEdENMbUFEdGZ1bk5CU3FmeDZRVXFkY0hZOExuSzNlRHFLeVlkNlR6OV82Q0wwcHNaMTNsMmowY3FPcTBfRXBuOFVDbmF4V0t0VkpEbm84dzFCXy04eEV2UC1tOUc5NzZLT3piQlBna0hNUUU4bXA4eGdQbmZzamt1WklCc3M0S2ZKWExYbw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 11,
    "headline": "אפליקציית ג'מיני מתעדכנת כדי להתחרות ראש בראש ב-ChatGPT וקלוד",
    "explanation": "גוגל שחררה עדכונים משמעותיים לאפליקציית המובייל של ג'מיני, עם יכולות חדשות וביצועים משופרים. המטרה היא להפוך אותה לתחרותית יותר מול המתחרים הגדולים בשוק.",
    "impact": "אנשי הדרכה שנמצאים הרבה בדרכים יכולים כעת להשתמש באפליקציה כדי לנסח במהירות מיילים, לכתוב ראשי פרקים להדרכה או לקבל רעיונות לפעילות תוך כדי נסיעה ברכבת.",
    "categoryKey": "ai_models",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNaXhyRzNKVGVjZWlaYXU2QWFWSmREdkt0djBLcWRWa2ItcEdZZUNhUjFPRlpDZzJVdmJuNDgxSnBvdlYtc21YOUJIVjlUbmZoMTBLMU1XOVdqTHFXVDl5NkhBTVpuTWNSYVFDcE5STHFWZm1TbFNEcm0wVXFSN2RUWEwzWmk4WHBiQlBjQ0ItLUpEbVNsT1lHQXgxNHJUVVhZMFV4Wld1UFE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 31,
    "headline": "Figma, כלי העיצוב הפופולרי, מוסיף עוזר AI משלו",
    "explanation": "פלטפורמת העיצוב השיתופית Figma השיקה עוזר AI מובנה. העוזר יכול להציע הצעות עיצוביות, ליצור רכיבים באופן אוטומטי ולעזור למעצבים לייעל את תהליך העבודה.",
    "impact": "מעצב למידה שבונה אב-טיפוס ללומדה חדשה ב-Figma, יכול לבקש מהעוזר ליצור 5 וריאציות שונות לכפתור 'הבא' או לארגן מחדש את כל המסכים לפי סדר הגיוני.",
    "categoryKey": "media",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOQlpnTklqZkpMVXkzcVN6Z3pWS0NjUm5jYmhlZ1dhMVpncEdSdDRKNVJHRHVxMzJIWDJweGd6Z3NWVVhnenE3aW91U1JiRVV4aHBKZFV3eThseHhMVDI4MnpURjV3eHdRRm92VGNFdXl4anhxcTBOX1NBT0RFQnBXQmwxUzZJZ2ZGMnFxTlpya2g0NlE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 25,
    "headline": "חובבי גולף? כלי AI חדש יענה לכם על כל שאלה לגבי החוקים",
    "explanation": "ארגון הגולף האמריקאי (USGA) השיק צ'אט AI שיודע לענות באופן מיידי על שאלות מורכבות לגבי חוקי המשחק. פשוט שואלים אותו שאלה בשפה טבעית והוא מספק תשובה מדויקת המבוססת על ספר החוקים הרשמי.",
    "impact": "זהו מודל השראה מעולה לפיתוח הדרכה: אפשר לבנות צ'אט דומה על בסיס נהלי החברה, שיאפשר לעובדים לשאול שאלות כמו \"מה המדיניות לגבי עבודה מהבית בימי ראשון?\".",
    "categoryKey": "learning",
    "source": "USGA",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQa0RyRFhrbW8tRm1lWWhYNFZzOHk2SWdKdFlHWFhEbXR4TWU0ZHMyV0JnRUdzZFdxZUJ4SWxqTzEtbHBZOFdWOG9KZDh5Uno1d3d3TzdtTjFuVGJPUy1rRjRQUF81SjVOMlNkRFZSZlFBOHpkNWNFMkJkOUpBc0Y3NGVzYzRMUkpFV0Rkdkh0eDlKUFRsNnRCVGNNS1g5R1hQYzBSbGtkTXFlOFBSNGJxM0JYbDBjTTFNaG9lY3BoZEo1UTFKNGc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 13,
    "headline": "גוגל מביאה את ג'מיני לטלוויזיה שלכם עם פיצ'רים חדשים",
    "explanation": "Google TV מקבל שדרוג עם שלוש יכולות חדשות המבוססות על ג'מיני. בין היתר, הוא יוכל לתת לכם המלצות צפייה מותאמות אישית על בסיס שיחה, ולסכם עבורכם את עלילת הסרט.",
    "impact": "אפשר לקבל השראה מהפיצ'ר הזה ולפתח בוט הדרכה פנימי שימליץ לעובדים על קורסים רלוונטיים בארגון, על בסיס תפקידם, תחומי העניין והקורסים האחרונים שלקחו.",
    "categoryKey": "learning",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPUEFIbWlGbERpeU9FSVdfa3NEY0dnV0g5YU93QjZ2bjh3WEVMRW9lTVBGeVJSM2tVY2gwWUhVYUVvSGduTlJfel9LeEJiNW44c2ZpT1dEUTNpM1dsa3l4cGczazFzTzliUGc4NjQ1aTBOUExINGZzbFZXY01TMDRYNTA4UmxOSTVhelptanRqZkRKUk9vU1N3SldR?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 34,
    "headline": "כלי חדש בשם AI Inspo הופך כל אחד ליוצר סרטוני טיקטוק ויראליים",
    "explanation": "הושק כלי חדש בשם AI Inspo שמתמחה ביצירת סרטונים קצרים וקליטים המותאמים לרשתות חברתיות כמו טיקטוק ורילס. המטרה היא לאפשר גם למשתמשים ללא ניסיון בעריכה ליצור תוכן ויראלי בקלות.",
    "impact": "צוותי הדרכה יכולים להשתמש בכלי הזה כדי להפוך טיפים יבשים מתוך קורס מכירות לסדרת סרטונים קצרים וממכרים, שיחזקו את הלמידה ויופצו לעובדים בערוצים הפנימיים.",
    "categoryKey": "media",
    "source": "24-7 Press Release Newswire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQRVptc21KM1lSSDBGaWFacUVTdy1JNDhZdzNmY2I4XzIzbDFkVzhNRjlzQlRxa2xsSzdSaFQ0X0c5a2xBc1RLdWpKOFpERE5CRHhEaUtNZ3VBbHI4T3VyMXVWekR5U0U2YTFsOTR2RlM2X05KOXNfYnVia3dXLTU4d3dzUnZtTGRFUjNtejNwMWN2WkpfaVFmaXA2cjRON1ItZk8tTUtLUG1haGZvYjFiTUpuWVZab1dZT0o0VW1qbkxWQ0VPcy04VlBmS0k2OE1XOHlWZFJVWE5ZWDg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 5,
    "headline": "אנת'רופיק מציגה את Claude Opus 4.8, הדור הבא של המתחרה ב-ChatGPT",
    "explanation": "הגרסה החדשה של מודל הדגל של אנת'רופיק, Opus 4.8, שוחררה עם שיפורים ביכולות ההבנה והסקת המסקנות. החברה טוענת שהוא טוב יותר בניתוח מסמכים ארוכים ומורכבים וביצוע משימות הדורשות חשיבה רב-שלבית.",
    "impact": "מי שמלמד Excel בארגון יוכל להעלות לכלי מדריך מורכב של 200 עמודים, ולבקש ממנו להפיק 10 תרגילים מעשיים ברמות קושי שונות עבור סדנה למתחילים.",
    "categoryKey": "ai_models",
    "source": "Anthropic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBVeFZoaVpfX1hnTlJPS05nQWZYRnB6bUdOc3pzSmlyX3dpN3BleUlVQm53Z3Bxd29JOUw1MENDMWk5VF9CX1VSU0Q2eV9zMXZWNUVOb2V4N2VaUQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-05-31";
