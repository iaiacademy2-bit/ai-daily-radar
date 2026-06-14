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
    "id": 16,
    "headline": "אפל חושפת את Apple Intelligence: ה-AI שישנה איך אתם עובדים באייפון",
    "explanation": "אפל שילבה AI עמוק בתוך מערכת ההפעלה של האייפון, האייפד והמק. העוזרת האישית סירי הפכה לחכמה משמעותית ויכולה להבין הקשרים מורכבים ולבצע פעולות בתוך אפליקציות.",
    "impact": "מעצבת למידה תוכל לבקש מסירי למצוא את כל המסמכים והמיילים הקשורים לפרויקט הדרכה חדש, לסכם אותם, ולהכין טיוטה ראשונית למצגת הפתיחה – הכל בפקודה קולית אחת.",
    "categoryKey": "ai_models",
    "source": "Apple",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQaXdfbGlYZjJ5THltOHRXN25yak93TXQ5RHAydHVWMHl6WF9ycFhCVThUVUpJUHFXa0hfU1dycU5VSmlaTFE2R0tLdmM2MndVVDhzY3AtYUZRMjJMTHE4R2cxR19Ic3doOWwyRHNDRHFMS3Z4ZXJ1aEtiVnlGd2p3eElPaldranF0b18wdmI1M05qN2s3SXdyTElZbDZOZWdLeWtyMjlMZkk0dnplZ21BMWJ2UVRPVEE?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 25,
    "headline": "קורסים חדשים בחינם מ-OpenAI: למדו ליצור כלים מותאמים לצוות שלכם",
    "explanation": "חברת OpenAI, היוצרת של ChatGPT, השיקה סדרת קורסים חדשים באקדמיה שלה. הקורסים מלמדים איך לבנות בוטים ועוזרים חכמים המותאמים אישית לצרכים של הארגון, ללא צורך בידע טכני.",
    "impact": "מנהל הדרכה יכול לעבור את הקורס ובסופו לבנות בוט פנימי שמקבל שאלות מעובדים חדשים על נהלי החברה ועונה להם מיידית, ובכך מפנה זמן יקר למדריכים אנושיים.",
    "categoryKey": "learning",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE04c214STNfR3hUQi10QnRUUXNDSzZidVp4VTl1dWJKVDJGT3Naem1URGkxUEk5Y0o1MTVZOERYMjU2ejlHcDBhWjJpZUppTVFCSVFnUU44UUlCTDQzd2VkdlN0d2psVy1rX3lZb29B?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 3,
    "headline": "המהפכה הבאה של OpenAI: סוכני AI שיבצעו משימות במקומכם",
    "explanation": "לפי דיווחים, OpenAI מתכננת להפוך את ChatGPT מצ'אט פשוט ל'סוכן' אוטונומי. במקום רק לענות על שאלות, הסוכן החדש יוכל לבצע עבורכם משימות מורכבות הדורשות מספר שלבים.",
    "impact": "דמיינו שאתם מבקשים מהסוכן 'תכנן סדנת מכירות', והוא לא רק יכתוב את התוכן, אלא גם יזמן את המשתתפים ביומן, יכין את חומרי העזר וישלח תזכורות אוטומטיות.",
    "categoryKey": "ai_models",
    "source": "The Jerusalem Post",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQT2Voa2s0bVM1TzI2dFdtWHBwT1p2VzZDY0taUDMxQUNPWEJOU1JXVmRHblJra3lWTDVpc08xQnNyNXFvUEdBY3JQd255Nkh6V0ZiSUQwS0NZRFpWVVRiOHFJNTVhRkZlVXMtYmdwaHhYR2M0Rlo1R3l0dlM2TGlvWDRfNkc4Zw?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 36,
    "headline": "יוטיוב חובה: 9 כלים חדשים ומטורפים ב-Canva שיחסכו לכם שעות",
    "explanation": "סרטון YouTube חדש מציג 9 יכולות AI שהתווספו ל-Canva ממש לאחרונה. בין היתר, תראו שם איך ליצור מצגות שלמות אוטומטית, לערוך תמונות בצורה קסומה ולייצר אנימציות מורכבות בקליק.",
    "impact": "במקום לבזבז שעות על עיצוב כל שקף בנפרד, מעצבי למידה יכולים לצפות בסרטון וללמוד איך להפוך מסמך טקסט פשוט למצגת הדרכה מעוצבת ומקצועית תוך דקות ספורות.",
    "categoryKey": "media",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE0yQVVMUEExN3pHU1dWTkFQT2llVHh5LW9iVlRsemhzQ2pRNklGYkxsdFowQWxiTXI5ZHJuYWU1Snp3cGxaai13azRkT2s2OGl3aWljbzJ5dnNyNXc?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 40,
    "headline": "פלטפורמת וידאו חדשה הושקה: 50+ כלי AI ליצירת סרטוני הדרכה",
    "explanation": "חברת iMideo השיקה השבוע פלטפורמה חדשה שמרכזת מעל 50 כלי AI שונים ליצירת וידאו. הפלטפורמה מאפשרת להפוך טקסט לסרטון, ליצור אווטארים מדברים, להוסיף כתוביות אוטומטיות ועוד.",
    "impact": "צוות L&D שמפתח קורס על שירות לקוחות יכול להשתמש בכלי כדי ליצור סדרת סרטוני סימולציה קצרים עם דמויות וירטואליות, מבלי להזדקק לשחקנים או ציוד צילום יקר.",
    "categoryKey": "media",
    "source": "EIN News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQNVVfY01FLXdLOUhOeFY5aTFLQjBoN2UtTlBlaTBKeFZMM0dmVnhoWEphU05ScTNxR0szcTZ4bG1ka2E4ZDBzeUlaenBxVDJfMHpybzdtUjZKZWZHYjRxNTZuRnRoVUgzUkw5Qld2bmV2c2hLTTlBSEZ0ektxSGxPR2kwRkhaNzJ6YzdHaUdpYXNQWENrV2huQWhVdnpOal8tRm1TTXFIWlJvV3ZUZUVz0gGvAUFVX3lxTFA1VV9jTUUtd0s5SE54VjlpMUtCMGg3ZS1OUGVpMEp4VkwzR2ZWeGhYSmFTTlJxM3FHSzNxNnhsbWRrYThkMHN5SVp6cHFUMl8wenJvN21SNkplZkdiNHE1Nm5GdGhVSDNSTDlCV3ZuZXZzaEtNOUFIRnR6S3FIbE9HaTBGSFo3MnpjN0dpR2lhc1BYQ2tXaG5BaFV2ek5qXy1GbVNNcUhaUm9XdlRlRXM?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 13,
    "headline": "גוגל משדרגת את NotebookLM: הפכו שיחות צ'אט למאגר ידע מסודר",
    "explanation": "הכלי NotebookLM של גוגל, שמאפשר 'לשוחח' עם המסמכים שלכם, קיבל עדכון משמעותי. כעת, הוא יכול לקחת את התובנות משיחות הצ'אט וליצור מהן אוטומטית מאגר ידע מסודר, כמו ויקיפדיה אישית.",
    "impact": "מפתח הדרכה שחוקר נושא חדש יכול להעלות 20 מאמרים, לשאול את הכלי שאלות, ובסוף התהליך לקבל מסמך מסכם ומובנה שיהווה בסיס לכתיבת מערך השיעור.",
    "categoryKey": "docs",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxONUpVMTZsUHVueE5kZkhxWjMzR2NLNlExNnhseXVMQjNlU2hyZkgtRHBNamFjSGFHdm1WcV8teXc2ZEV2MTJ3M1BDaUVfRWJwYmRKQWpObkxlOUthOHlDbHRWUnE2ZEpLckJ1R2t5Q1g1M2RvTGdtb05BNjV2MFgwNVRTOUtOVFFvMDRTOFQ2VUY3X2lUUW00aEVWdUh5ZGhUeUF5U2x2U1o?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 44,
    "headline": "אמזון משיקה כלי ליצירת תמונות שישנה איך אתם מחפשים חומרי הדרכה",
    "explanation": "אמזון השיקה כלי AI חדש המאפשר למשתמשים ליצור תמונות כדי לדייק את החיפוש שלהם. במקום לתאר במילים, אפשר פשוט ליצור תמונה של מה שאתם מחפשים ולקבל תוצאות ויזואליות דומות.",
    "impact": "כשמפתחים לומדה וצריך תמונה מאוד ספציפית (למשל, 'מהנדסת מרכיבה משקפי מגן במעבדה נקייה'), אפשר ליצור אותה עם הכלי החדש במקום לחפש שעות במאגרי תמונות.",
    "categoryKey": "media",
    "source": "Retail Dive",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPRzYyV1ltbG40Vy1HeWNCVXVLMEVQMFNKNW1MNDk4SFlpSTB3YUg0UV83MThIM3lEZ3hiVTNkWFNkZWVEdDNqeFJPUmVYNE9HblF1d3gxVmVVN2pSM2pnaHdvbzlwM2Jrdy1ZcXNJNEpkVWludTQyZEgyMl9iQ29mOWluSlRpNEV6Q2JwOGU5UnpUdFNPSTRRVw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 5,
    "headline": "הזיכרון החדש של ChatGPT: עוצמתי, אבל דורש תשומת לב",
    "explanation": "הפיצ'ר החדש שמאפשר ל-ChatGPT לזכור שיחות קודמות שלכם הופך אותו לאישי ויעיל יותר. עם זאת, חשוב לנהל את הזיכרון שלו כדי למנוע ממנו 'להתקבע' על מידע ישן או שגוי.",
    "impact": "מי שמשתמש ב-ChatGPT כדי לפתח סדרת הדרכות, יכול ללמד אותו את הסגנון והטרמינולוגיה של הארגון פעם אחת, והוא יזכור זאת בכל פעם שתבקשו ממנו לכתוב תוכן חדש.",
    "categoryKey": "language",
    "source": "ZDNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPTDljU05GQ3J4alYxTG81cEozdHJkSm9PYzJOSlpNdzNTaHpoMmFPY1NBTFB5T2sxRUczX2c0M0lkNkFPcGgzNDRlQVJiVDJUcWpzX0VfOEZKUmV0OFRqbERxNTd6bHdud2RVbE1rWi1aNnNwZ0dSSTFwREcyN20zUllseXU3NEp1dTNjeFZHZ0dER1NuRkZxMG95Vll1YTJWeTRkT0xscy04TmUzeTJ2bXdzVQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 12,
    "headline": "גוגל משיקה סוכני חיפוש שיעבדו בשבילכם ברקע",
    "explanation": "גוגל החלה לשלב במנוע החיפוש שלה 'סוכני AI' שיכולים לעקוב אחר נושאים מורכבים עבורכם. הסוכנים יאספו מידע באופן רציף ויציגו לכם סיכום מקיף כשהם יסיימו.",
    "impact": "מנהלת הדרכה שצריכה להכין סקירה על 'מגמות חדשות בניהול' יכולה להפעיל סוכן כזה, והוא יסרוק את הרשת במשך שעות ויגיש לה דוח מרוכז עם כל המידע הרלוונטי.",
    "categoryKey": "ai_models",
    "source": "9to5Google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBDanBHMml5OG5jbktGR1lHUkFhX1BMVlZZZVVpSlpZcjRxcEVnRVNaYTBVZmpPdVF0RnhSOGZ2OXhaeU0zSlBPeFlYSmNqWWZQXzcxOW96OHU4Y0dhRF9rQjVUc0RSeHJ3TTBwTg?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 17,
    "headline": "כלים חדשים ב-Gemini של גוגל שיעזרו לכם לחסוך זמן",
    "explanation": "גוגל השיקה סט כלים חדש ב-Gemini שמטרתם לעזור לעסקים קטנים ולצוותים להיות יעילים יותר. הכלים כוללים יכולות אוטומציה מתקדמות, ניתוח נתונים פשוט ויצירת תוכן שיווקי.",
    "impact": "צוות הדרכה קטן יכול להשתמש בכלים החדשים כדי ליצור אוטומטית 'טיפ יומי' בנושא מקצועי, להפיץ אותו במייל לכלל העובדים, ואפילו לנתח את אחוזי הפתיחה – הכל ממקום אחד.",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNZjFxSTRfR3JkbVVkWmc4Vi04TElHOWM3SE1ad0I0U2x3UkhYV2FraEZvdnR0LUl2TDRKWGlSemJOVkpEOWdlaTAzTzZSbUlZdFZwRzJvR3ZEckhkV3M1N3I4QzI4b0JMOTVSVjNfOGRrUUxSeHF4TDBkaUZlQ3lRUFBmNFF1MmFIQ3JXeXRTcXIyRFE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 41,
    "headline": "סרטון חובה: 8 כלים מומלצים להפיכת טקסט לווידאו ב-2026",
    "explanation": "סרטון YouTube חדש סוקר 8 מהכלים הטובים ביותר בשוק שהופכים טקסט פשוט לסרטוני וידאו מרשימים. הסקירה משווה בין היכולות, המחירים וקלות השימוש של כל כלי.",
    "impact": "מי שמלמד נושאים 'יבשים' כמו נהלי בטיחות, יוכל לבחור מהרשימה כלי מתאים ולהפוך את הנהלים הכתובים לסרטונים קצרים וקליטים שיגבירו את מעורבות העובדים.",
    "categoryKey": "media",
    "source": "PC Tech Magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSl9EbWpyaFJna1FPRUgwWDdudW9ZVU5zcHZDejN0UTcxQS1xSnJTcWRSenUzVU9LU0IwcG5HcERYNHp3NHdCd3VOMktTekFwSmo4bmlBUnVXdDN0Sjdid1NyN3pfYnZmZ0RGTHBSSXJPd0p5LWh2V0l6WUtRNE1LWjR0azNLVnJYckR4STdweldLaUxTOVpZNlJXZ0o?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 20,
    "headline": "מיקרוסופט משדרגת את ה-Power Platform עם יכולות AI חדשות",
    "explanation": "מיקרוסופט הוסיפה יכולות AI מתקדמות לפלטפורמת האפליקציות העסקיות שלה. העדכון מאפשר לבנות בקלות אפליקציות ודוחות חכמים יותר, עם פחות צורך בקוד.",
    "impact": "מנהל הדרכה יכול כעת לבנות אפליקציה פנימית פשוטה למשוב על קורסים, שתנתח אוטומטית את התגובות המילוליות של העובדים ותציג תובנות מרכזיות באופן ויזואלי.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNWHoyb2ctVmk1NXpFVVU5a2Juck5wbWxrcUpkaGswWEh1cWdaSVd3VWYxbEsxaV9DbTZJTTdhNUkwRnBFb1Z5R3lkNl83azlkWTA4Mi1pVWFZWjE2U1E3WnU0T0I1ZE5QN2dTdkRwREdENEpoanFHcWtiejY5STY0MDdEYnFOTy03MUtmSlVFRmhGYzZKWi1qNXFYSmNWUjRpbU5vOUlrR2kxa3hSWS1OVkRLRXZ3Q1k?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 42,
    "headline": "צפו: כלי ה-AI של Pika Labs יוצר סרטונים מדהימים מטקסט",
    "explanation": "הכלי Pika Labs ממשיך להשתפר ומאפשר כעת ליצור סרטוני וידאו פוטו-ריאליסטיים מתיאורי טקסט פשוטים. הסרטון מדגים איך רעיונות יצירתיים הופכים לקטעי וידאו קצרים ומרשימים.",
    "impact": "במקום להשתמש בתמונות סטוק גנריות, מדריך יכול ליצור סרטון פתיחה ייחודי לקורס שלו, למשל 'נמלה סוחבת עלה בתוך יער גשם', כדי להמחיש נקודה על עבודת צוות.",
    "categoryKey": "media",
    "source": "Trend Hunter",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE96cWlFVUZ0Z0ZVZWVlbXhTX0wzbGJ2YXdqRTlXSUlmMzFQQ3hJWDhWNGV3Z0FReWxNX0d6QXhQQzMwM2NzZVNscUMtUUFrQ095ZTdsWGx2cjZuUUE?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 8,
    "headline": "סקירת וידאו: איך המודל החדש של Claude עובד במשימות אמיתיות",
    "explanation": "סרטון YouTube חדש בוחן לעומק את הגרסה האחרונה של Claude, המתחרה של ChatGPT. הסוקר מראה דוגמאות חיות לשימוש בכלי במשימות יומיומיות, ללא הגזמות או הייפ.",
    "impact": "הסרטון יכול לעזור לצוותי הדרכה להחליט איזה כלי AI מתאים יותר למשימות שלהם – האם היצירתיות של ChatGPT עדיפה, או יכולות הניתוח המעמיקות של Claude.",
    "categoryKey": "ai_models",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9OSWlKNnhvb2RSd3VCRGoxblB3RnVaU004cURJYVBPYVVQR3dqcGluTWJ4SVVhTF85RmQtSGV1aEFESnVyNFNtcHNENlhtX1ROaW9hRnJfcThwYzg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 39,
    "headline": "חדש ביוטיוב: מחולל תמונות בזמן אמת, וידאו מהיר ומוזיקת AI",
    "explanation": "סרטון סיכום שבועי מציג מספר חידושים מרתקים, כולל כלי שמייצר תמונות תוך כדי שאתם מקלידים. בנוסף, הוא מראה כלים חדשים ליצירת וידאו מהירה וליצירת מוזיקה ישירות מהטלפון.",
    "impact": "מדריך שמעביר סדנה יכול להשתמש במחולל התמונות בזמן אמת כדי להמחיש רעיונות של המשתתפים על המקום, וליצור חווית למידה אינטראקטיבית ודינמית.",
    "categoryKey": "media",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1aRWVkb2o5SU9SVlRPVDlIZkU0RHJuTTZzQlB4RGFpTG1VVlBxSHVueE9ZR3YzNkVmc2Q4LXdjcW9RX280N3lTTk9CVmk4Q3A0b29GWmtxVDZWMG8?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 45,
    "headline": "אפל מוסיפה כלי עריכת תמונות מבוססי AI למערכת ההפעלה החדשה",
    "explanation": "עם העדכון החדש ל-iOS, אפליקציית התמונות המובנית באייפון מקבלת יכולות עריכה חכמות. תוכלו למחוק בקלות אובייקטים לא רצויים מהתמונות, לשפר צבעים אוטומטית ועוד.",
    "impact": "מעכשיו, כל אחד בצוות ההדרכה יכול לצלם תמונות במהלך סדנה, ולתקן אותן בקלות ישירות מהטלפון לפני שמעלים אותן למצגת הסיכום, בלי צורך בתוכנות עריכה מסובכות.",
    "categoryKey": "media",
    "source": "Engadget",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBUYVJPandnTUZmOURzalc3VXRra3Z5OXk5UHRKZS1sX0l5T1FBOWFrU2JCSjVITlBJNmNYeVFldmRFMXJ2S3hkUWU0U1NXYnhfX2JDVE5kOEN3alIteHlldFBpeVNuWTdqelZLRnBaeTdfWTFtU0pIc1VwNGQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 22,
    "headline": "מיקרוסופט ו-KPMG משיקות 'סוכני AI' לארגונים גדולים",
    "explanation": "שיתוף פעולה חדש יאפשר לארגונים לבנות 'סוכני AI' מותאמים אישית על בסיס Copilot של מיקרוסופט. סוכנים אלו יוכלו לבצע משימות מורכבות בתחומים כמו כספים, מיסוי וביקורת.",
    "impact": "בעתיד הקרוב, מחלקת הדרכה בארגון פיננסי תוכל להשתמש בסוכן כזה כדי לדמות תרחישי ביקורת מורכבים עבור רואי חשבון, וליצור סביבת אימון מציאותית ובטוחה.",
    "categoryKey": "ai_models",
    "source": "Microsoft Source",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxQd2I2a1N0emY0M0s5QmlreWxzRmx6YWNFcTJDa18zTTJzMFRacUV6dkliRVIycTNOSjV4Vy1rRHFDaXZrS0cwM2JWbWx4UlBiVlVLRGF6TWtmRzU0Wm03QWdGdzh4aHhJTnJVNXNBVXNWekFNYXJFWVFDSlZaVmJBcTVyLXRTZExNaTRPTEpRRE1MUGhfT1JGZVR2ZU9qQkdvaktMaXd4X0JjOGtEOEdnZklFM0V2Ql84VHVGMWpfNGdocldmQVdHa2RURVhoX2pzNGZxZHZ6UVhwUkVPanZ5U0R2WWM0SEk?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 38,
    "headline": "הפיצ'ר הסודי ב-Canva שרוב האנשים מפספסים (והוא לא עיצוב)",
    "explanation": "כתבה חושפת יכולת פחות מוכרת אך שימושית להפליא ב-Canva: יצירת אתרי אינטרנט פשוטים של עמוד אחד. הכלי מאפשר להפוך כל עיצוב או מצגת לאתר אינטרנטי חי בכמה קליקים.",
    "impact": "במקום לשלוח למשתתפים קובץ PDF כבד עם חומרי הקורס, אפשר ליצור ב-Canva דף נחיתה מעוצב עם כל הקישורים, הסרטונים והמסמכים, ולשתף איתם לינק פשוט ונוח.",
    "categoryKey": "docs",
    "source": "MakeUseOf",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBZa2p6bFZEX3pScWQyck5qaDQtd3E2azZyQ01oczFWcnA0RXh5RktWSUhKa3RvZVZQTjhKTEdqSnBYTHVuc1F0TV9QaTRlQks4c3VKdWc2XzFGNFVkMUFJZWRfTzJ6ZDlzUTRKZkZR?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-06-14";
