// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-06-14 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 1,
    "headline": "אפל משדרגת את סירי: העוזרת האישית שלכם הופכת לגאונה",
    "explanation": "אפל חשפה את Siri החדשה, שמשולבת עמוק במערכת ההפעלה ומבינה את ההקשר האישי שלכם. היא יכולה לסכם מיילים, למצוא תמונות לפי תיאור מורכב, ואפילו לבצע פעולות בתוך אפליקציות.",
    "impact": "מעצב הדרכה יכול לבקש מסירי למצוא את כל המסמכים והמיילים הקשורים לפרויקט הדרכה חדש, ולקבל סיכום מיידי של כל החומרים הרלוונטיים, בלי לחפש ידנית בתיקיות.",
    "categoryKey": "ai_models",
    "source": "ABC7 Bay Area",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPVnIxQ0pITmZYV1hpMFlDSFdtMnhzR2dOUW15cDhPRG56SENCcGZPUHFFUi1EcElyalhJYWlidFlZU0N1YVpQbHMya2FoMWF5dGo2QmVRTExsRXNSVDQtdXpvb0xna0tBSFJDeFRoUGZSU2UxU25mNDZRZzRGNXpROXJpTWhaRG1xVmJIUmMtOUVrbDRRYUFObTVqaGlXWm92a0gyVkFtVGZvZ2dEQ2JKZGlrWjJGRGRZeFNObjR6MXdvMVR3TFJYMXo4SEkzQVBtWFHSAdcBQVVfeXFMTV8tUFhTV2loVHFsOWN2U0V0OUtHWGFQWEZOYlkyNXZSSlZxakVCZDF3VmRoRV8zZ21xOU1ZU0ZXYi1iTXlZOGhfZVJsenFKYkhrWEgwN3ZQc2MySjloMGdCNGZXRWdqQmdXY1M5S04xVVRKbXRzVjY1NDZwR3A5UUowck05UGNaZFlJWEdPRElPT2pVT1lHV3VtNDBaQTFId0hCVEIyM3ZoNWJLMmtuWFgtWUFOX3FxbFd6Mmd3UXlHQndqa3g0RGFNc3FCbklJLWFwTTRnUjQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 25,
    "headline": "חדש מ-OpenAI: אקדמיה רשמית ללימוד AI פרקטי לעבודה",
    "explanation": "OpenAI, יוצרי ChatGPT, השיקו את \"OpenAI Academy\" - פלטפורמת קורסים חדשה. הקורסים מתמקדים בשימושים עסקיים ופרקטיים של AI, ומלמדים איך לבנות פתרונות מתקדמים בלי צורך בידע טכני עמוק.",
    "impact": "צוותי L&D יכולים להשתמש בקורסים האלו כדי להכשיר את עצמם ואת עובדי הארגון בשימוש נכון ויעיל בכלי AI, ולהפוך את כולם למשתמשי-על.",
    "categoryKey": "learning",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE04c214STNfR3hUQi10QnRUUXNDSzZidVp4VTl1dWJKVDJGT3Naem1URGkxUEk5Y0o1MTVZOERYMjU2ejlHcDBhWjJpZUppTVFCSVFnUU44UUlCTDQzd2VkdlN0d2psVy1rX3lZb29B?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 12,
    "headline": "גוגל משחררת \"סוכני חיפוש\" שיעבדו בשבילכם ברקע",
    "explanation": "גוגל משיקה יכולת חדשה בחיפוש שמאפשרת לכם לתת משימה מורכבת, וה-AI ימשיך לחפש, לאסוף ולסכם מידע עבורכם. הוא יעדכן אתכם כשימצא תובנות חדשות, גם אחרי שסגרתם את הדפדפן.",
    "impact": "במקום לבזבז שעות על מחקר רקע לקורס חדש, אפשר לתת לסוכן של גוגל משימה כמו \"מצא לי את 5 המגמות המובילות בתחום שירות הלקוחות ב-2026\", ולקבל דו\"ח מסודר אחרי כמה שעות.",
    "categoryKey": "ai_models",
    "source": "9to5Google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBDanBHMml5OG5jbktGR1lHUkFhX1BMVlZZZVVpSlpZcjRxcEVnRVNaYTBVZmpPdVF0RnhSOGZ2OXhaeU0zSlBPeFlYSmNqWWZQXzcxOW96OHU4Y0dhRF9rQjVUc0RSeHJ3TTBwTg?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 35,
    "headline": "וידאו: 9 כלים חדשים ומטורפים ב-Canva שחובה להכיר",
    "explanation": "סרטון YouTube מציג 9 פיצ'רים חדשים שהושקו לאחרונה ב-Canva. הכלים כוללים יכולות AI מתקדמות ליצירת תמונות, אנימציות אוטומטיות ועיצובים חכמים בלחיצת כפתור.",
    "impact": "מפתחי הדרכה שמכינים מצגות או חומרי עזר ויזואליים יכולים לשדרג את הנראות של התוצרים שלהם פי 10, וליצור גרפיקה מקצועית בלי שום ידע בעיצוב.",
    "categoryKey": "media",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE0yQVVMUEExN3pHU1dWTkFQT2llVHh5LW9iVlRsemhzQ2pRNklGYkxsdFowQWxiTXI5ZHJuYWU1Snp3cGxaai13azRkT2s2OGl3aWljbzJ5dnNyNXc?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 40,
    "headline": "פלטפורמת iMideo הושקה: 50+ כלי AI ליצירת סרטונים בקלות",
    "explanation": "הושק כלי חדש בשם iMideo, המרכז מעל 50 יכולות AI שונות ליצירת ועריכת וידאו. הפלטפורמה מאפשרת להפוך טקסט לווידאו, ליצור אווטארים מדברים, להוסיף כתוביות אוטומטיות ועוד.",
    "impact": "מנהלת הדרכה יכולה עכשיו לייצר סרטון \"טיפ שבועי\" קצר לעובדים תוך דקות, כולל קריינות ודמות וירטואלית, במקום להפיק סרטון יקר עם צילומים ועריכה.",
    "categoryKey": "media",
    "source": "EIN News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQNVVfY01FLXdLOUhOeFY5aTFLQjBoN2UtTlBlaTBKeFZMM0dmVnhoWEphU05ScTNxR0szcTZ4bG1ka2E4ZDBzeUlaenBxVDJfMHpybzdtUjZKZWZHYjRxNTZuRnRoVUgzUkw5Qld2bmV2c2hLTTlBSEZ0ektxSGxPR2kwRkhaNzJ6YzdHaUdpYXNQWENrV2huQWhVdnpOal8tRm1TTXFIWlJvV3ZUZUVz0gGvAUFVX3lxTFA1VV9jTUUtd0s5SE54VjlpMUtCMGg3ZS1OUGVpMEp4VkwzR2ZWeGhYSmFTTlJxM3FHSzNxNnhsbWRrYThkMHN5SVp6cHFUMl8wenJvN21SNkplZkdiNHE1Nm5GdGhVSDNSTDlCV3ZuZXZzaEtNOUFIRnR6S3FIbE9HaTBGSFo3MnpjN0dpR2lhc1BYQ2tXaG5BaFV2ek5qXy1GbVNNcUhaUm9XdlRlRXM?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 13,
    "headline": "גוגל משדרגת את NotebookLM: הפכו כל צ'אט למאגר ידע מסודר",
    "explanation": "הכלי NotebookLM של גוגל, שמאפשר לכם \"לשוחח\" עם המסמכים שלכם, קיבל שדרוג. עכשיו הוא יכול להפוך אוטומטית את השיחות והתובנות שלכם למאגר ידע מאורגן, כמו ויקיפדיה אישית.",
    "impact": "צוות פיתוח הדרכה שחוקר נושא חדש יכול להעלות את כל חומרי הגלם, לשאול שאלות ולקבל תשובות, ובסוף התהליך לקבל מסמך מסודר עם כל הידע, מוכן להפוך למערך שיעור.",
    "categoryKey": "docs",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxONUpVMTZsUHVueE5kZkhxWjMzR2NLNlExNnhseXVMQjNlU2hyZkgtRHBNamFjSGFHdm1WcV8teXc2ZEV2MTJ3M1BDaUVfRWJwYmRKQWpObkxlOUthOHlDbHRWUnE2ZEpLckJ1R2t5Q1g1M2RvTGdtb05BNjV2MFgwNVRTOUtOVFFvMDRTOFQ2VUY3X2lUUW00aEVWdUh5ZGhUeUF5U2x2U1o?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 4,
    "headline": "שדרוג הזיכרון של ChatGPT: הוא זוכר הכל, לטוב ולרע",
    "explanation": "הפיצ'ר החדש של ChatGPT מאפשר לו לזכור פרטים משיחות קודמות ולהשתמש בהם בעתיד. זה הופך אותו לאישי ומותאם יותר, אך גם מעלה שאלות לגבי הטיות שעלולות להיווצר.",
    "impact": "כשאתם מפתחים סדרת לומדות על אותו נושא, תוכלו ללמד את ChatGPT את הסגנון, המונחים והקהל שלכם פעם אחת, והוא יזכור זאת בכל פעם שתבקשו ממנו לכתוב טקסטים חדשים לסדרה.",
    "categoryKey": "ai_models",
    "source": "ZDNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPTDljU05GQ3J4alYxTG81cEozdHJkSm9PYzJOSlpNdzNTaHpoMmFPY1NBTFB5T2sxRUczX2c0M0lkNkFPcGgzNDRlQVJiVDJUcWpzX0VfOEZKUmV0OFRqbERxNTd6bHdud2RVbE1rWi1aNnNwZ0dSSTFwREcyN20zUllseXU3NEp1dTNjeFZHZ0dER1NuRkZxMG95Vll1YTJWeTRkT0xscy04TmUzeTJ2bXdzVQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 44,
    "headline": "אמזון משיקה כלי ליצירת תמונות שימצא לכם בדיוק מה שחיפשתם",
    "explanation": "אמזון הוסיפה לאתר שלה יוצר תמונות מבוסס AI. אם אתם לא מוצאים מוצר, תוכלו פשוט ליצור תמונה של מה שאתם מדמיינים, ואמזון תמצא לכם פריטים דומים.",
    "impact": "מחפשים תמונת אילוסטרציה מאוד ספציפית ללומדה (למשל, \"מנהלת מחייכת במשרד עתידני עם צמחים\")? אפשר להשתמש בכלי של אמזון כדי ליצור את התמונה ולקבל השראה ויזואלית מדויקת.",
    "categoryKey": "media",
    "source": "Retail Dive",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPRzYyV1ltbG40Vy1HeWNCVXVLMEVQMFNKNW1MNDk4SFlpSTB3YUg0UV83MThIM3lEZ3hiVTNkWFNkZWVEdDNqeFJPUmVYNE9HblF1d3gxVmVVN2pSM2pnaHdvbzlwM2Jrdy1ZcXNJNEpkVWludTQyZEgyMl9iQ29mOWluSlRpNEV6Q2JwOGU5UnpUdFNPSTRRVw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 17,
    "headline": "גוגל מציגה: תרגום קולי בזמן אמת שנשמע טבעי לחלוטין",
    "explanation": "גוגל הציגה את Gemini 3.5 Live Translate, יכולת חדשה לתרגום קולי סימולטני. הכלי לא רק מתרגם, אלא גם שומר על קצב הדיבור, האינטונציה והניואנסים של הדובר המקורי.",
    "impact": "צוותי הדרכה גלובליים יכולים להשתמש בזה כדי להעביר וובינרים חיים למדינות שונות, כאשר כל משתתף שומע את המדריך בשפתו, ובקול שנשמע אנושי וזורם.",
    "categoryKey": "language",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQYmE4REJXdHJpTzA0SVhCY3NMeTZTdGlGeVMtQUYtMFR4WnNKMWp2ZzM4Zi10UTREdGd3dzJ4X1dKN2hIWVZObkw4ZkdQX2tVdnMwRERfU0g3WG9kcGJNNUlmaDhzVER4VE9QQkJENXI2N0NhcnVCNFlpcEViNloyWG83UGlCdDFFaGt2bV9zLTdSZHBSUEUxb2xzeXE4SnM?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 37,
    "headline": "סוף סוף זה כאן: הפיצ'ר שמשתמשי Canva חיכו לו שנים",
    "explanation": "Canva הוסיפה סוף סוף את היכולת ליצור שכבות (Layers) בעיצובים, בדומה לפוטושופ. זה מאפשר שליטה מדויקת על כל אלמנט בנפרד, ומקל על עבודה עם עיצובים מורכבים.",
    "impact": "מי שמעצב אינפוגרפיקה מורכבת או דפי עבודה אינטראקטיביים יוכל כעת לארגן את כל הרכיבים בשכבות נפרדות, ולהזיז או לערוך אלמנט אחד בלי להרוס את כל השאר.",
    "categoryKey": "media",
    "source": "inc.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQUW40RldkOGdBWml2djlXeVc3ZXNQVHRKNmQ1cXhvM3RnUmVwNGs3RlNvWmszei13YkxmUThKWUVqTnJJLVF3a0FUbnprRE12R1NHQkl1b3ZQdVczWjUxTFV2ek5HbXdzbzVVMXY3U0hsckNyX1h5dTlvM3VKOTRtcFIzQWV4WW4tYjI4bzNDRlRxc1J3Mjk3czA0VXg1ZVotWHNtd2xiWTM4WVBRMHc?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 41,
    "headline": "וידאו: 8 הכלים הטובים ביותר להפיכת טקסט לווידאו ב-2026",
    "explanation": "סקירה מצוינת שמדרגת ומסבירה על 8 הכלים המובילים כיום ליצירת סרטונים מטקסט. הסרטון מראה דוגמאות מכל כלי ועוזר להבין איזה מהם מתאים לצרכים שונים.",
    "impact": "לפני שבוחרים כלי ליצירת סרטוני הדרכה, צפייה בסרטון הזה תחסוך שעות של ניסוי וטעייה ותעזור לבחור את הפלטפורמה הכי מתאימה לתקציב ולמטרות שלכם.",
    "categoryKey": "media",
    "source": "PC Tech Magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSl9EbWpyaFJna1FPRUgwWDdudW9ZVU5zcHZDejN0UTcxQS1xSnJTcWRSenUzVU9LU0IwcG5HcERYNHp3NHdCd3VOMktTekFwSmo4bmlBUnVXdDN0Sjdid1NyN3pfYnZmZ0RGTHBSSXJPd0p5LWh2V0l6WUtRNE1LWjR0azNLVnJYckR4STdweldLaUxTOVpZNlJXZ0o?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 19,
    "headline": "ג'מיני מגיע לכרום: סייען AI חכם מובנה בדפדפן שלכם",
    "explanation": "גוגל משלבת את Gemini ישירות בדפדפן כרום. תוכלו לבקש ממנו לסכם עמודים, לכתוב מיילים, או לקבל עזרה בהבנת נושאים מורכבים, ישירות מהסרגל הצידי של הדפדפן.",
    "impact": "מדריך שמפתח קורס על Excel יכול לגלוש בפורומים מקצועיים, לסמן שאלה מורכבת של משתמש, ולבקש מג'מיני להסביר את הפתרון בפשטות או להפוך אותו לתרגיל מעשי.",
    "categoryKey": "ai_models",
    "source": "Thurrott.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQWnZqZmNQUndtMFJUXzNrQjk1YVJySWNyQkxxWGpINXR5ckhmTEJXenE0SW9mU2xGWVpSS3ItaUJYNHNuVVhvVlFJUEEwcDBYM0ljZHlJZVhYbVE4ejNZakxZU3hFVTVWUGJFcW4tNy04RlA1cmFNNldnTWg1XzhNcmhoU21IcUNQX1FJZC1ZSktoY3ZXS1d0S3hBMTdkVkpzZ0l6LWVFTUZ5bFZWbnhlNlhhc3E5MG5lWGFVazVlNA?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 20,
    "headline": "מיקרוסופט משדרגת את ה-Power Platform עם עוד יכולות AI",
    "explanation": "מיקרוסופט הוציאה עדכון חודשי ל-Power Platform, שמוסיף יכולות Copilot חדשות. כעת קל יותר לבנות אפליקציות פנימיות ואוטומציות באמצעות שיחה בשפה טבעית.",
    "impact": "מנהל הדרכה יכול לבנות אפליקציה פשוטה למשוב על קורסים, פשוט על ידי תיאור מה הוא רוצה שהאפליקציה תעשה, בלי לכתוב שורת קוד אחת.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNWHoyb2ctVmk1NXpFVVU5a2Juck5wbWxrcUpkaGswWEh1cWdaSVd3VWYxbEsxaV9DbTZJTTdhNUkwRnBFb1Z5R3lkNl83azlkWTA4Mi1pVWFZWjE2U1E3WnU0T0I1ZE5QN2dTdkRwREdENEpoanFHcWtiejY5STY0MDdEYnFOTy03MUtmSlVFRmhGYzZKWi1qNXFYSmNWUjRpbU5vOUlrR2kxa3hSWS1OVkRLRXZ3Q1k?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 43,
    "headline": "וידאו: הכירו את Pika Labs, הכלי שהופך רעיונות לסרטונים מרהיבים",
    "explanation": "סרטון הדגמה המציג את היכולות של Pika Labs, מחולל וידאו מבוסס AI. הוא מראה כיצד ניתן להפוך משפט טקסט פשוט לקליפ וידאו קצר ומרשים, או להוסיף אנימציה לתמונה קיימת.",
    "impact": "במקום להשתמש בתמונות סטטיות בלומדה, אפשר להפוך אותן לסרטונים קצרים ודינמיים. למשל, להנפיש תרשים זרימה כדי להמחיש תהליך, או להוסיף תנועה לדמות מצוירת.",
    "categoryKey": "media",
    "source": "Trend Hunter",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE96cWlFVUZ0Z0ZVZWVlbXhTX0wzbGJ2YXdqRTlXSUlmMzFQQ3hJWDhWNGV3Z0FReWxNX0d6QXhQQzMwM2NzZVNscUMtUUFrQ095ZTdsWGx2cjZuUUE?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 3,
    "headline": "החזון של OpenAI: העתיד הוא לא צ'אטבוטים, אלא \"סוכני AI\"",
    "explanation": "לפי דיווח, OpenAI מתכננת לעבור ממודל של צ'אטבוט למודל של \"סוכנים\" (Agents). אלו מערכות AI שיכולות לבצע משימות מורכבות באופן עצמאי, כמו תכנון נסיעה שלמה או ניהול פרויקטים.",
    "impact": "בעתיד הקרוב, מנהל פיתוח הדרכה יוכל לתת ל-AI משימה כמו \"תכנן לי קורס חדש על ניהול זמן, כולל מחקר, כתיבת תכנים, יצירת מצגת ובניית מבחן\", והסוכן יבצע את כל השלבים.",
    "categoryKey": "ai_models",
    "source": "The Jerusalem Post",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQT2Voa2s0bVM1TzI2dFdtWHBwT1p2VzZDY0taUDMxQUNPWEJOU1JXVmRHblJra3lWTDVpc08xQnNyNXFvUEdBY3JQd255Nkh6V0ZiSUQwS0NZRFpWVVRiOHFJNTVhRkZlVXMtYmdwaHhYR2M0Rlo1R3l0dlM2TGlvWDRfNkc4Zw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 8,
    "headline": "וידאו: סקירה אמיתית ובלי הייפ של מודל Claude Opus 4.8",
    "explanation": "סרטון YouTube שמספק סקירה כנה ומעמיקה של הגרסה האחרונה של Claude. הבוחן מראה דוגמאות אמיתיות, מציין את החוזקות (כמו ניתוח מסמכים ארוכים) וגם את החולשות.",
    "impact": "אם אתם מתלבטים באיזה כלי AI להשתמש לכתיבת תכנים ארוכים או ניתוח מסמכי PDF, הסרטון הזה ייתן לכם תמונה ברורה האם Claude הוא הבחירה הנכונה עבורכם.",
    "categoryKey": "ai_models",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9OSWlKNnhvb2RSd3VCRGoxblB3RnVaU004cURJYVBPYVVQR3dqcGluTWJ4SVVhTF85RmQtSGV1aEFESnVyNFNtcHNENlhtX1ROaW9hRnJfcThwYzg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 39,
    "headline": "וידאו: כל החידושים החמים - יצירת תמונות בזמן אמת וסרטוני AI מהירים",
    "explanation": "סרטון חדשות שבועי המסכם את כל ההכרזות המעניינות בעולם ה-AI. השבוע הוא מכסה כלים ליצירת תמונות תוך כדי הקלדה, דרכים חדשות ליצור סרטונים במהירות, ועוד.",
    "impact": "צפייה של 10 דקות בסרטון הזה תיתן לכל איש הדרכה הבנה רחבה של הכלים החדשים ביותר שיצאו, ותספק המון רעיונות איך לשלב אותם בעבודה השוטפת.",
    "categoryKey": "media",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1aRWVkb2o5SU9SVlRPVDlIZkU0RHJuTTZzQlB4RGFpTG1VVlBxSHVueE9ZR3YzNkVmc2Q4LXdjcW9RX280N3lTTk9CVmk4Q3A0b29GWmtxVDZWMG8?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 45,
    "headline": "אפל מוסיפה כלי עריכת תמונות מבוססי AI למערכת ההפעלה החדשה",
    "explanation": "עם iOS 27, אפליקציית התמונות של אפל מקבלת יכולות עריכה חכמות. תוכלו למחוק אובייקטים לא רצויים מהתמונה במגע, לשפר אוטומטית את התאורה והצבעים, ועוד.",
    "impact": "צילמתם תמונה טובה לסדנה אבל מישהו נכנס לפריים ברקע? במקום להשתמש בתוכנות עריכה מסובכות, תוכלו לתקן את התמונה ישירות מהטלפון בשתי שניות ולהשתמש בה בחומרי ההדרכה.",
    "categoryKey": "media",
    "source": "Engadget",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBUYVJPandnTUZmOURzalc3VXRra3Z5OXk5UHRKZS1sX0l5T1FBOWFrU2JCSjVITlBJNmNYeVFldmRFMXJ2S3hkUWU0U1NXYnhfX2JDVE5kOEN3alIteHlldFBpeVNuWTdqelZLRnBaeTdfWTFtU0pIc1VwNGQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-06-14";
