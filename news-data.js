// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-06-01 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 15,
    "headline": "גוגל משחררת את Gemini Spark: סוכן AI אישי שיכול לבצע משימות במקומכם",
    "explanation": "גוגל השיקה את Gemini Spark, כלי AI חדש שיכול להבין מטרות מורכבות ולבצע סדרת פעולות באופן עצמאי. הוא מתחבר לאפליקציות שלכם ויכול לתכנן, לארגן ולבצע משימות שפעם דרשו שעות עבודה.",
    "impact": "מנהלת הדרכה יכולה לבקש מ-Spark 'תכנני לי סדנת מכירות של יומיים, כולל מציאת מומחה תוכן פנימי, הזמנת חדרים ומשלוח זימונים לצוות'. הכלי יבצע את כל הפעולות האלה אוטומטית.",
    "categoryKey": "ai_models",
    "source": "PCMag",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNVG5IMVp3c0F0X3JsODNfTm9HdWhUcVR2c1E4MnBHSnBTeEo3OUlrSGlQMnBwUEh1U0tpbXFvM2QxTjhsRWtSMlA4bU1HOUR4cC1GYlZzQm8wakI0S3YyVjdfREJkbm9yRk83T1BDX1ZwenpuWExuQU12R2R3R0ctaHAxNG1lRTQ?oc=5",
    "timeAgo": "לפני 2 ימים",
    "trending": true
  },
  {
    "id": 7,
    "headline": "קלוד החדש (Opus 4.8) מגיע עם יכולות אוטומציה מתקדמות",
    "explanation": "אנת'רופיק שחררה גרסה חדשה לקלוד עם יכולות \"סוכן\" משופרות, המאפשרות לו לבצע משימות מורכבות יותר. הוא יכול כעת לתכנן ולבצע שרשרת של פעולות כדי להשיג מטרה שהגדרתם לו.",
    "impact": "מעצבת למידה יכולה לתת לקלוד מסמך Word עם תסריט לקורס ולבקש ממנו: 'הפוך את התסריט למצגת PowerPoint, צור שאלון קצר בגוגל פורמס על הנושאים המרכזיים, ושלח לי טיוטת אימייל להשקת הקורס'.",
    "categoryKey": "ai_models",
    "source": "9to5Google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNNzQwVG9MWVozU3lRY2JjMGVXbVRORDdOV3lsRDJFeUZwVzREWjhWUGUzdjVoaHBCOFZ4dTlqSGJubG13YmhXVUNhUUdsZEZMdmdIdjBNT3oxNk4xdmVrUmdaSVo2WTJhdzJya3FxV3RaeUw3OG1VTktWRDVHZERPeGFBYlVJWm5rOElheTFPY1FWb3hZWW5ldE9YSVR1cTRfTEVMdTRJVQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 19,
    "headline": "מיקרוסופט משדרגת את Copilot: עכשיו הוא יכול לשלוט במחשב שלכם",
    "explanation": "העדכון החדש של Copilot מאפשר לו לבצע פעולות ישירות על המחשב, כמו לפתוח אפליקציות, לנהל קבצים ולשנות הגדרות. בנוסף, הוא מציע חווית שיחה קולית טבעית ורציפה בזמן אמת.",
    "impact": "במקום להסביר למשתתף בקורס איך להגיע להגדרות מסוימות בתוכנה, מפתח ההדרכה יכול ליצור סרטון קצר בו הוא מבקש מ-Copilot בקול: 'העבר את הקובץ הזה מהורדות לשולחן העבודה ושנה את שמו ל-דוח סופי'.",
    "categoryKey": "ai_models",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi_AFBVV95cUxOMzRXYTJzR1J2dW1PQml3RHJCeU1BN2x5UDRObmVEYnM5WENwTDZ4eVFYZDlxVUptRW05ZU01MHR5UkkyS3F0LXVQc29JRklBeDBuajN2eTNCazlCZnJ4Q1JvdTM5MUdPdndkOHBaOFU3amNQQ1N2Smstd2xhUGFSZVpBdjhFSkltZ0lNT3NzdFRiVTNhYUVjVjZyNVdqVGVhWGVaZklNYVlYNVNZMmN5LTJIQTFwZmRVUWlyZFdvY3dZNFEzUlFSdDhrVkhVYmUyNVhqM1ZxUjJONDRrT05ORUk4V2VWRDhwWU1PNVNqV0tGOWdncjJIbnVCMzA?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 45,
    "headline": "גוגל NotebookLM מסתנכרן אוטומטית עם הדרייב שלכם",
    "explanation": "כלי המחקר של גוגל, NotebookLM, קיבל פיצ'ר המאפשר לו להתחבר לתיקייה בגוגל דרייב ולהתעדכן אוטומטית. כל מסמך חדש שתוסיפו לתיקייה יהפוך מיד לחלק מבסיס הידע של ה-AI.",
    "impact": "צוות L&D שמפתח קורס חדש יכול ליצור תיקיית דרייב משותפת. כל חבר צוות שמוסיף מאמר, מחקר או סיכום פגישה לתיקייה, מעדכן מיד את ה-AI שיודע לענות על שאלות ולסכם את כל חומרי הקורס.",
    "categoryKey": "docs",
    "source": "EdTech Innovation Hub",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPWkF6aFJoTzg2a2tzMExVX0xwS2dGV3E4X0xvck5vY0hQczQ4R3BNQXZnWkRaT0FDa1U1ZGx3Tkc2bk5QSHZTNVdVMVNTY2FsT2Zud3I0Mnd2Vm5wNUt0dGFfWXExUVV6cENxdGNiNjJBV08zRVRxdlY5TnZmZEJZVklkTExqUkhzZFd6elVxNEVQaEdla01qaVp4RHdJbmF5ZXhJRDJnSFp0T2JOTG80eTVLcWt6dVE?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 18,
    "headline": "עכשיו אפשר לשתף שיחות Gemini ישירות לגוגל דרייב",
    "explanation": "גוגל הוסיפה אפשרות לשמור ולשתף את היסטוריית השיחות שלכם עם Gemini ישירות כמסמך בגוגל דרייב. זה מקל על שיתוף פעולה ותיעוד של סיעורי מוחות או תוצרים שנוצרו עם ה-AI.",
    "impact": "מפתחת הדרכה שנעזרת ב-Gemini כדי לנסח מטרות למידה לקורס חדש, יכולה לשתף את כל השיחה עם מנהל הצוות שלה בלחיצת כפתור, במקום להעתיק ולהדביק את התוכן.",
    "categoryKey": "docs",
    "source": "The Verge",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNY3c3NUdNYVEtT29YazliZ3FHMW11Uy1JLWt2QjJlNXpoQklQNm5sZmFYWmFyQXI2cFI0Zk9nTERYVHhBOEhhcy1JQ0xSNXVEYS1tdkNQc1RZZ0RXT2hwM0JQRXJFcXlhWUxGX3VuZjRQV1UxREJiLVAxeHZpamJFYTc3Sy1kNC03SURid0oxRDZHbDFpRGdkSWtMMVd1MUo5YmllQl9UOUlKZVk?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 39,
    "headline": "כלי חדש יוצר קליפים מוזיקליים עם סנכרון שפתיים מושלם",
    "explanation": "הושק כלי חדש בשם ChatArt שמתמחה ביצירת סרטוני מוזיקה מונפשים. הוא יודע לקחת שיר וליצור דמות אנימציה ששפתיה מסונכרנות באופן מדויק למילים, וכל זה בלחיצת כפתור.",
    "impact": "מי שמפתח קורס על שירות לקוחות יכול ליצור ג'ינגל קליט, ולהפוך אותו לסרטון אנימציה קצרצר עם דמות שמסבירה את כללי הזהב של השירות, מה שיהפוך את התוכן לוויראלי וזכיר יותר בארגון.",
    "categoryKey": "media",
    "source": "The Norfolk Daily News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijwJBVV95cUxQTUZjMU9JZ19DOS1nZXloV0JFU3lpc25EbnZRTkxLQWd0VXBBelFpaGxfbEJwWU5US19kTWlRRC1UaFRrRzlQb1VMXzBoUE11VFY5UTdPcEk0dEpxdU9PcXEtQXhiVVFiWDc2VEFUaXR0RGV1aGg5TjJxRjRmd2dVQjV5cVBlVU84UkxTdnpBUmV1ODJBMnVvanlpY1J3cmk3dDBTeW9sWEZPdl8zWUlCdjdBN3B6R2RVUl80OEpMUWxGeUhfQjNOSGhVRzh0X3hFc05uT3VOQjFXWENtWTZSYUZ2ckdiRDhyd3p6SjBpQUNCVjRiVXRMc3RLOUdOQnBVbU1FcklGc2xCU290MGlJ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 41,
    "headline": "המתחרה הסיני של Sora: הכירו את Kling, שמייצר סרטונים מדהימים",
    "explanation": "חברת Kuaishou הסינית השיקה את Kling, כלי ליצירת וידאו מטקסט שמציג יכולות מרשימות. הוא מצטיין ביצירת תנועות מורכבות וסצנות ריאליסטיות, ומסתמן כמתחרה חזק לכלי יצירת הווידאו המובילים.",
    "impact": "במקום להשתמש בתמונות סטוק גנריות, מעצב למידה יוכל לייצר סרטון קצר וייחודי המדגים סיטואציה מורכבת במפעל, כמו אינטראקציה בין עובד למכונה, ולהטמיע אותו בלומדת הבטיחות.",
    "categoryKey": "media",
    "source": "South China Morning Post",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNcDFoaVhXT1EyYzlZMXNnaHpqOWc2WHo1WXBkaE5fOTJpTVFRaEN2RXZTbnkzWFczR3ZfZl9aZXhEbDFHUHY0Mk9iRzg4eFhwQmticW1PWGtHTlE0SFI5am5zVW83ZmtXcDZyT0hKQUZHbW9pcGNEbi0yOE03ZWtjSEpNZjdzekM4TnR2OThVZkRLMHdKaFlVQ2g0aG9peHdYX05HTGJ4NFRfdkV5alJR0gGvAUFVX3lxTE01RkRKLWNSY0RyTVAxX0pNZWk0d0J6T3ZaTUtuRXV5NVRFMUFXWEpNS1FhWlZhbXQ3b09HR1Jzd0tERnAzaDhaWFlWYmZhaXdhd3A4NEJ3YWxWMUtJbVhIZWhlRzFhNXh3aTdFQzZSUWlTRjJfX2VFNGVrX3NtVWM3b1RLWlRMTVdIYThfTVV2VHhBNXNoREk5ZGR6b1VSN2x1LXk1c25lSl9ZeVJnWHM?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 36,
    "headline": "Canva מוסיפה כלי עריכה חכמים שימנעו מכם טעויות עיצוב מביכות",
    "explanation": "Canva שחררה עדכון עם כלי עריכה חדשים, כולל תצוגה מקדימה חכמה שמונעת חיתוך לא נכון של תמונות. בנוסף, נוספו אפשרויות תשלום וכלים נוספים שמקצרים את תהליך העיצוב.",
    "impact": "צוות הדרכה שמכין חומרים שיווקיים לקורס חדש יכול להשתמש בתצוגה המקדימה כדי לוודא שהבאנר נראה מושלם בכל הפלטפורמות, מלינקדאין ועד למערכת ה-LMS, וחוסך זמן יקר על התאמות.",
    "categoryKey": "media",
    "source": "Digital Trends",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPTTJkRlZGYXNDNGNSU0V6RWhCTUpkZGw5ZUhySDRFZ3VxUVpWSExNZ1R3YklGSUVHWEJ5bHpiT2VTNk82M29DQ1ZGVkFPV0NjNzg4OUpBZkFhbWU0UXJLVUpyR2Utd3kzN2xUWTh6OGUzb1NxSWcxZURoZHRRNjg2TmRLY2djU01ZNUQ0SjNWVDRxYlljX2Z2d0NOa0IzTGhmUURWbV9pSnRpS0hZbXFzQjN4RmU3RWp5YVRrZmYwTkNlUm5rRnc?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 1,
    "headline": "ניסיתי את העדכון החדש של ChatGPT, והוא שינה את כל חווית השימוש",
    "explanation": "העדכון האחרון של ChatGPT מציג שינויים משמעותיים בממשק ובחוויית המשתמש, שהופכים את האינטראקציה לאינטואיטיבית ומהירה יותר. השינויים משפיעים על האופן בו מקבלים תשובות ומנהלים שיחות ארוכות.",
    "impact": "מדריך שמפתח סימולציות מורכבות של שיחות מכירה ב-ChatGPT יגלה שהממשק החדש מאפשר לו לעקוב טוב יותר אחר ענפי השיחה השונים ולזקק את התוצרים הסופיים בצורה יעילה מאי פעם.",
    "categoryKey": "language",
    "source": "vocal.media",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQTTdDcm9YUElqWkRxd2ZIeU9uUGhfVEFPc1RRU203aF9mUTk5LWFFY190TlR0TVhOWmFTTnlBcjBKVUhUZlp2NmpjMUZoSjdGbmx6SjJMWl9MbzFmZDNuYkZoblRWNzktNkEyNjFYOTZWbHR0c1MyX0JCbHFuc1RWWWZZZmFlMjM2cXZrVThWMnUzdXJN?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "ChatGPT בסמארטפון יכול עכשיו להתחיל משימות קוד במחשב שלכם",
    "explanation": "עדכון חדש מאפשר לאפליקציית ChatGPT באייפון או אנדרואיד להתחבר ל-Windows ולהתחיל משימות תכנות. אפשר לבקש מהנייד לכתוב קוד, והוא יתחיל לעבוד על זה ישירות במחשב.",
    "impact": "מפתח הדרכה טכנולוגי שנמצא בפגישה יכול לבקש מהטלפון שלו: 'כתוב לי סקריפט פייתון שמייצא נתונים ממערכת ה-LMS לקובץ אקסל'. כשיחזור למחשב, הקוד כבר יחכה לו מוכן.",
    "categoryKey": "language",
    "source": "9to5Mac",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQREhqcndYMXk2Z1VBY1FXQ3hVMVJVOXh5RzN6a19vd1N1WGJjQXl5eEMybktGTW9yMGl1UUlpUzRRVFg5aUZjQTFuZldscVRuaFJ0b3MzZDcyQ2dNVUFUT2dXeUk0VlAtMzhqVExURW4tVGM0NmU3NGVKX0lINWFCaHliYmhsUllnNVF3?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 5,
    "headline": "הצצה ראשונה לסירי החדשה: אפל בדרך להתחרות ב-ChatGPT",
    "explanation": "הדלפות מראות שאפל עובדת על גרסה חדשה וחכמה משמעותית של סירי, שתשלב יכולות שיחה מתקדמות. המטרה היא להפוך את סירי לעוזרת אישית שמבינה הקשר ויכולה לבצע משימות מורכבות.",
    "impact": "בעתיד הקרוב, עובד יוכל פשוט לומר לאייפון שלו: 'סירי, תרשמי אותי לקורס ניהול הזמן הבא במערכת הלמידה ותוסיפי לי אותו ליומן'. זה יקצר משמעותית את תהליך הרישום לקורסים.",
    "categoryKey": "language",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPNHRQUjJjb1drcHlWenRoNlVRTGF2a2NMczMyZWVOUF9qT1o5dVdVdF9SeXdweENzWFBtVks5emNGOV80ZmpvYmJqVENZelJtZTgtTzZZRlpkRzFnLTNVRWZGd2cxeUt4VEUxUE9EZS0zSmZPejExTTdrZUVfd0t2N0puOHZUanpwVU4xNXJ0bHdOcDc2cHdvUDdiQWF4U0RjVWo5M3gwNkdMV3puTzZz?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 20,
    "headline": "מיקרוסופט חושפת עיצוב חדש ונוח יותר ל-Copilot ביישומי Office",
    "explanation": "מיקרוסופט הציגה עיצוב חדש ל-Copilot בתוך Word, Excel ו-PowerPoint. העיצוב החדש נועד להפוך את השימוש בכלי ליותר אינטואיטיבי ומשולב בזרימת העבודה הטבעית של המשתמש.",
    "impact": "מי שמלמד Excel בארגון יוכל להדגים איך לבקש מ-Copilot, ישירות מהסרגל החדש, 'צור לי טבלת ציר שמציגה את המכירות לפי רבעון', מה שיהפוך את ההדרכה על תכונות מתקדמות לפשוטה ונגישה יותר.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNRjdjUHR6OUY0MGdQSm1NbjkwVzlEN01ibEZqd1VxaVBOT0ZwdDlEdENMbUFEdGZ1bk5CU3FmeDZRVXFkY0hZOExuSzNlRHFLeVlkNlR6OV82Q0wwcHNaMTNsMmowY3FPcTBfRXBuOFVDbmF4V0t0VkpEbm84dzFCXy04eEV2UC1tOUc5NzZLT3piQlBna0hNUUU4bXA4eGdQbmZzamt1WklCc3M0S2ZKWExYbw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 23,
    "headline": "מה חדש ב-Copilot Studio? כלים מתקדמים לבניית בוטים מותאמים אישית",
    "explanation": "מיקרוסופט עדכנה את Copilot Studio, הפלטפורמה לבניית צ'אטבוטים וסוכני AI. העדכונים מקלים על יצירת בוטים מותאמים לארגון, שיודעים להתחבר למערכות מידע פנימיות ולבצע אוטומציות.",
    "impact": "צוות הדרכה יכול לבנות בוט ייעודי שיודע לענות על שאלות נפוצות של עובדים חדשים, כמו 'איפה מוצאים את מדיניות החופשות?' או 'איך נרשמים לקורס חובה?'. זה יפנה זמן יקר למדריכים.",
    "categoryKey": "learning",
    "source": "Redmondmag.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQQWpXVDFCT1BBVkd3eU4wdkdmQU5mZDlZUWpmNkpkM0RKOE1CNjhtc0c4NFY1QU5oQ0VWVVZmZFlqTVBDMWwtZi1sZUFEc2dTNUJsWTlHUVpzdUlGSmpmYm9wZ2U5VHJNTlJCU0FlWWRiaHE4eUR5d3NaeUpSel9iRWhrM0ppSnVQTXhfS2tvQVRCN0NRNERV?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 35,
    "headline": "חברת Canva עצרה את כל העבודה לשבוע שלם, רק כדי ללמד את העובדים AI",
    "explanation": "בפעם השנייה, Canva הקדישה שבוע שלם בו כל 5,000 העובדים הפסיקו את עבודתם השוטפת ועברו הכשרות AI. המהלך נועד להטמיע את השימוש בכלי AI בכל תחומי הפעילות של החברה.",
    "impact": "זהו קייס סטאדי מעורר השראה למנהלי הדרכה: במקום קורס של שעה, אפשר לייצר אירוע 'שבוע חדשנות AI' בארגון, שבו כולם מתנסים בכלים חדשים ומשתפים רעיונות לשיפור תהליכים.",
    "categoryKey": "learning",
    "source": "HR Grapevine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPX2Q0RzAxMkRkeFh6RF9nRTNiRTQ1cEJjSHhBYW0zcnYwbmpmOE80ejcwNmhQLWE0VkhyVk5vSkNGNDlabUVCOS01T25Pc25IQTBJdFREeTladEVKNFVOcUt0MDVxdlRFcXdQemF6NkJqMXN3dC0yYlI2a25iMFNtTjZuU29GdmNhaFAteVgyUFhoWG4zVDV6blpuYnE3bTdBdUdNd0tUdk5CTE4xM0NyMTZ2TGpaeDdNY1JKQ1RmSQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 30,
    "headline": "כלי AI חדש מ-Workday הופך תהליכי תכנון פיננסי לאוטומטיים",
    "explanation": "חברת Workday השיקה כלי AI חדש שמטרתו להקל על תהליכי תכנון וניתוח פיננסי (FP&A). הכלי מבצע אוטומציה של משימות שגרתיות ומסייע בקבלת החלטות מבוססות נתונים.",
    "impact": "מנהלת הדרכה שאחראית על תקציב המחלקה יכולה להשתמש בכלי כדי לנתח את עלויות הקורסים השונים, לזהות חריגות ולקבל המלצות אוטומטיות לחיסכון, במקום לבזבז ימים על ניתוח טבלאות אקסל.",
    "categoryKey": "learning",
    "source": "CFO Dive",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPM1pCMGlUaFF0N2hHWGl1aUhvMDlFWTlCRThVRC1odU0tcDZWQ2tKSnh5amM2bHljMWtiaVdmNXRDdC1nN01BVkphei1JRmcyMENhRGtEdno5VlU3QTB6blZ0dG5SamlpRTZjYXotNGNTd1hzODlnLXUxTktibFV1UllVYnFiWko0eURrTnNZbHk5Zw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 14,
    "headline": "לראשונה מזה 25 שנה, גוגל משנה את תיבת החיפוש בזכות ה-AI",
    "explanation": "גוגל החלה לשלב תשובות מבוססות AI ישירות בתוצאות החיפוש, מה שמשנה את חווית החיפוש הבסיסית. במקום רשימת קישורים, המשתמשים מקבלים סיכומים ותשובות ישירות לשאלותיהם.",
    "impact": "עובד שמחפש מידע לצורך הכנת הדרכה לא יצטרך יותר לקפוץ בין עשרה אתרים שונים. הוא יקבל סיכום מקיף ומדויק כבר בעמוד הראשון, מה שיקצר דרמטית את שלב איסוף החומרים.",
    "categoryKey": "language",
    "source": "The New York Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPVzZ0WC1UelpJRkNTMldfbkcwaW43MDJ3cXh2elVTLVBhUHZBeTFWYWNXT3NHWjlPcFJ5SjZkOTdOZ21BdEJpeFE5NlE4ZUhpQllLcWEtM0RtTlJhdE9yOUdEajRELTR3ZVFpbXBrbVg3cUVVSGFyc1hTRERfZHhUbg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 28,
    "headline": "מיסטרל הצרפתית מאתגרת את OpenAI עם כלי AI חדשים לתעשייה",
    "explanation": "חברת Mistral AI האירופאית השיקה מוצר חדש בשם Vibe ומרחיבה את פעילותה לתחום ה-AI התעשייתי. המהלך נועד להתחרות ישירות בענקיות כמו OpenAI וגוגל.",
    "impact": "זהו איתות חשוב לשוק: בקרוב נראה יותר כלי AI ייעודיים לתעשיות ספציפיות, כמו ייצור או לוגיסטיקה. צוותי הדרכה בארגונים כאלה יוכלו להשתמש בכלים האלה כדי ליצור סימולציות הדרכה מדויקות וריאליסטיות.",
    "categoryKey": "ai_models",
    "source": "Venturebeat",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxObC1qZWhMeGttVV9CZ0kycnVLZlRaOUljLU1nTlRxcUF3TTY3MkZYNjJhWWxVVFdjcEZRX2VYZjczYklJc0RETzA2cURqb2pIR2JVVFh6a0hjUkpoXzQ3VGx4cnFGcG9WLWpWaWp3MDZDT0xGT3hHbVNsazJxaFBBVTk5X0ZCcUpidXBBXzQ2ZTdJMXMzRDNTaWM5Skp4RGc0N0dibUdHVXhRVU10UmVHNUZTUFpnSkw2R0tCUHpfQVdUM3E4b09PR0hERnpNVXZfM2Nz?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 37,
    "headline": "ארבעה כלי AI שהופכים תוכן כתוב למגזין דיגיטלי מעוצב",
    "explanation": "כתבה זו סוקרת ומדרגת ארבעה כלים שיודעים לקחת תוכן קיים (כמו מאמרים או פוסטים) ולהפוך אותו אוטומטית לקובץ PDF מעוצב שנראה כמו מגזין מקצועי. הכלים מטפלים בעיצוב, עימוד והוספת תמונות.",
    "impact": "במקום לשלוח לעובדים סיכום קורס כקובץ וורד משעמם, אפשר להפוך את כל חומרי הקורס למגזין דיגיטלי מרשים ויזואלית. זה ישפר את חווית הלמידה ויגרום לחומר להיראות מושקע ומקצועי.",
    "categoryKey": "docs",
    "source": "TechRadar",
    "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQTUU3UnZZd3pXc0FKSThuWjEyZUlZLUtWcGFUeno4V2NjYjZudjR5T3FFOWhLanZvc0hsbWI4N0Vfb3NONVdtOVV2YnlxQTNmZTFDV1dnRF81QmlTVzE4RDAyZ1RpRlJncmo0cndwY24wREFKWGxlamNVc1pJLU95WXhKbw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-06-01";
