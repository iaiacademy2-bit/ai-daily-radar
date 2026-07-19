// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-07-19 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 13,
    "headline": "גוגל השיקה כלי שמייצר סרטוני הדרכה מדהימים תוך שניות",
    "explanation": "גוגל שחררה את Google Vids, כלי חדש שהופך מסמכים ותסריטים לסרטוני וידאו מקצועיים באופן אוטומטי. פשוט כותבים את הרעיון, והכלי מייצר את הקריינות, הסצנות והעריכה לבד.",
    "impact": "מנהלי הדרכה יכולים עכשיו להפוך מדריכי PDF יבשים לסדרת סרטוני מיקרו-למידה מרתקים, בלי צורך בצוות וידאו או שעות עריכה.",
    "categoryKey": "media",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNUFZFQkptVXVxRjl4dTBtQk5RRU1zRFQ2SEhja0E1MHZFXzVVWlc3ck5WM2hvaUhxdFdEdDQ4dHNwWElyenQzUGxVeF8wbGh1Ui1IcjRZc2N0TU02ZG9VUlZRQmNkaDE5LWt4RHNZWEllakg3OTVLWkc5RlZpbUFKSnFWcnA2VDZmbnhQUWVKOFE5dXBhM2c?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 36,
    "headline": "Canva מאפשרת לכל אחד לבנות אתרי קורסים אינטראקטיביים בחינם",
    "explanation": "קנבה שחררה את Code 2.0, כלי חדש שמאפשר לבנות אתרי אינטרנט ואפליקציות פשוטות באמצעות AI, ישירות מהממשק המוכר. הכלי זמין עכשיו גם למשתמשים בגרסה החינמית.",
    "impact": "מעצבי למידה יכולים לבנות דף נחיתה מעוצב לכל קורס חדש, כולל סילבוס אינטראקטיבי וטופס הרשמה, תוך דקות ובלי לכתוב שורת קוד אחת.",
    "categoryKey": "learning",
    "source": "VentureBeat",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOYXc5MVo2WjdLbDJuQkQyODFkQ2VYb1ZrNTZiMmowOWUyNS1WbWFnSjJpNXdLVnlTTUw1YUlRWFU0ZmFJWGlkNHBkeGhtVW85NUVIVGltcGcxZEsxaWZDdzJQcnU3MTBvTUZUVksybHZldDFQVl9FRURKdjFSTi02c1RwZ1BMa1hCQ1l2M1VKTVlpMnVlWkhZckIxSUgwZVF1cl9CVW80VHpXdHR5cXNaZ2dPMmMxbzJ2b3hSSUl0ckU3OGc?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 8,
    "headline": "קלוד מציג: פיצ'ר חדש שמנתח את שיחות ה-AI שלכם כדי לשפר תוצרים",
    "explanation": "קלוד השיק את 'Reflect', כלי שמנתח את היסטוריית השיחות שלכם ונותן לכם תובנות על איך אתם משתמשים בצ'אט. הוא מראה לכם דפוסים, מציע דרכים יעילות יותר לשאול שאלות, ועוזר לשפר את התוצאות.",
    "impact": "במקום לנחש איך לכתוב הנחיות טובות יותר, כלי זה מראה לצוות ההדרכה בדיוק אילו סוגי שאלות מניבים את התוצרים האיכותיים ביותר ליצירת חומרי למידה.",
    "categoryKey": "ai_models",
    "source": "Mashable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE95dFNCNl83ZEpCclpYdzROOGt3XzFhOUl3U3lUQmt5MjdHci0yYmJlcERlTmUyTTczcXBCdGJUczY2TnlFczJINjh6cVdVZ0l3eWxUX2JyUDE3SGJYQlJURi1qa0xMQlB6ZmNyNTNSTXM?oc=5",
    "timeAgo": "היום",
    "trending": true
  },
  {
    "id": 4,
    "headline": "סרטון חובה: כל עדכוני החיפוש וה-AI הכי חמים של השבוע ב-15 דקות",
    "explanation": "הסיכום השבועי של Search Engine Roundtable מכסה את כל מה שחשוב: עדכונים בגוגל, פיצ'רים חדשים ב-ChatGPT למפרסמים, ותמונות שנוצרו על ידי AI בתוצאות החיפוש. זהו סרטון וידאו מהיר שמסביר הכל בצורה ויזואלית וברורה.",
    "impact": "צפייה מהירה בסרטון הזה תיתן לכל איש הדרכה הבנה רחבה של המגמות הנוכחיות, ותעזור לו לחשוב איך לשלב את החידושים האחרונים באסטרטגיית הלמידה הארגונית.",
    "categoryKey": "learning",
    "source": "Search Engine Roundtable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBSRnlEVVVGdWhZSG1DaE1JUFpUM3htMVJ6Q0ZaMFRYbndsdnMzR1RZUDVUVWI0UFVEdHRDQlNHVmUxMy0yQWI5cGY4Mk1heXViVU1aQUhXS0hCVkM2SVVTUkJBWHBqa3M?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 7,
    "headline": "בשורה למורים ומדריכים: גישה חינמית לגרסה המתקדמת של Claude",
    "explanation": "חברת Anthropic פתחה את כל יכולות הפרימיום של הצ'אטבוט קלוד בחינם למורים ואנשי חינוך. זה כולל יכולות ניתוח מסמכים מתקדמות, חלון הקשר גדול יותר ותגובות מהירות יותר.",
    "impact": "מדריכים יכולים כעת להעלות לקלוד ספר הדרכה שלם בן 200 עמודים ולקבל ממנו סיכומים, הצעות למבחנים, או אפילו תסריט לסרטון הדרכה המבוסס על התוכן.",
    "categoryKey": "ai_models",
    "source": "9to5Mac",
    "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQUk9UdVdjQmxCU0dsWEZfWndpN3d5YnBWa1RiVDl3b2x6R3U3czJ6SkR1anFRM2xxVEFmVVRpTE51LUd6OWFYTnc2OFJZYjFubDh5MWxuWFBVb3Q2WExQaTdiVVhUOS1jSlZKMnlZZHpUejRWdkdkckJXeFVnMy1tNWFBNjlHbjFRZktkSDkya0Jqc2J0Mko2OHVsQWtEVGlHZWFGZFNKQVZTOXVIbmdXdldB?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 11,
    "headline": "ג'מיני משתדרג: כלי AI עוצמתיים חדשים מגיעים לגוגל Workspace",
    "explanation": "גוגל הודיעה על שדרוגים משמעותיים ל-Gemini בתוך כלי Workspace (ג'ימייל, דוקס, סליידס). העדכון כולל יכולות מתקדמות יותר ליצירת תוכן, סיכום פגישות וניתוח נתונים אוטומטי.",
    "impact": "צוות L&D שמפתח קורס חדש יוכל להשתמש בזה כדי להפוך פרוטוקול של פגישת אפיון למצגת הדרכה ראשונית, כולל הצעות לתמונות וגרפים, ישירות מגוגל סליידס.",
    "categoryKey": "docs",
    "source": "9to5Google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTFB4blN0c3lvWEV2Q1poY05zQTNFYVV1ZnhPNkotbVZpLTJiSVM3d18zUXFJNjJOTnFpRzlWRy1neEtndVYyelFKM1VaYVFzV2hERllEVHhjejE0RnRYb2lwRC00bE5MdkZEZVRIZmRYS1Bnd3Bx?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 24,
    "headline": "קופיילוט יודע עכשיו לפתור לכם בעיות במחשב ולענות על שאלות טכניות",
    "explanation": "מיקרוסופט שדרגה את Copilot כך שהוא יכול לסרוק את הגדרות המחשב שלכם ולענות על שאלות לגביהן. אפשר לשאול אותו למה ה-WiFi איטי או איך לשנות הגדרת תצוגה, והוא יסביר ואף יציע לבצע את הפעולה.",
    "impact": "במקום לכתוב מדריך PDF ארוך על 'איך להגדיר את המיקרופון במחשב', אפשר פשוט להנחות את העובדים לשאול את קופיילוט, שמספק תשובה מותאמת אישית למחשב שלהם.",
    "categoryKey": "ai_models",
    "source": "ZDNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE1XRHlIanJZd0FwcjRQc3NNZDZiSkZWNXRXZHJGN3AxOGxHUXFUSDNSd3U4YVotYkVobm9vVGY3aTdkRDNJeFFpR25WQWdhQmJ2azJWZ01XVDhCSUdENkx0TV8tYm5reEsxdzc3aVQyVlo0UQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "אפל שחררה גרסת בטא חדשה ל-iOS עם פיצ'רים מבוססי AI",
    "explanation": "אפל שחררה את גרסת הבטא הציבורית של iOS 27, וכל אחד יכול להתקין אותה. הגרסה כוללת שדרוגים משמעותיים לסירי, יכולות סיכום חכמות, ויצירת תמונות ישירות מהמקלדת.",
    "impact": "מי שמפתח הדרכות מובייל יכול להתחיל לבחון איך הכלים החדשים משפיעים על חווית המשתמש, למשל, איך אפשר להשתמש בסירי החדשה כדי להדריך משתמשים בתוך אפליקציה ארגונית.",
    "categoryKey": "ai_models",
    "source": "Yahoo Tech",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNYmpjeHUtaTlkelB3WWdndWV2U1I2RmxPWElpZTNMRm1MWjVFN2Z3eEthajdULVBpOGVvelBNazhDZ0VudGRSYkJ5MFZVblMteVp6U1hzQ2U4YkFNaEFZeVhaTHprTUYtbGdKU1NZMWJmTkhVc2NUT21wY2JuV0RTcW1QbmcwRGRUb3pfUkJHdGwxYTRMVnhQYi14RGpSUnU5OWdoOC1xUmtpQ0luSEE1N2ZzanBHWFN4NkkwMy1PemNBWXFWRnBj?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 3,
    "headline": "ספוטיפיי משיקה עוזר AI אישי שבונה לכם פלייליסטים לפי מצב הרוח",
    "explanation": "ספוטיפיי הוסיפה לאפליקציה שלה צ'אט AI חדש שיודע ליצור רשימות השמעה לפי בקשות מורכבות. אפשר לבקש ממנו \"מוזיקה רגועה לריכוז בזמן עבודה על פרויקט חשוב\" והוא יבנה פלייליסט מושלם.",
    "impact": "צוותי הדרכה יכולים להשתמש בזה כדי ליצור בקלות פלייליסטים ייעודיים לליווי סדנאות, למשל מוזיקת רקע ממריצה לסדנת חשיבה יצירתית או מוזיקה שקטה לתרגילי מיינדפולנס.",
    "categoryKey": "media",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOM3g1X0hpTmNoN1d6ZHphMjN0ZmxRZFdrUEZhQnZWQU9TeGtnUm1PTnpSclRJS2J1NGZJMUpBZnI1VEN4M2tQd1lxekVUT2xkcW5YdWhJd1VQREI3alF3VDZlUGt5bC1jT2dvX3RyaXVleUVkYllBSDkwMlh5ZHl5czVLS0gxNFVsWm5vN0xBcGpKYmVfUlFxY3F3dXFzQm8?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "צפו: סרט שלם שנוצר כולו על ידי AI בעלות של כמה אלפי דולרים",
    "explanation": "במאי קולנוע הציג טריילר לסרט חדש בשם \"אודיסיאה\" שנוצר כמעט כולו באמצעות כלי AI ליצירת וידאו. הפרויקט מראה את הפוטנציאל המדהים של הטכנולוגיה ליצירת תוכן ויזואלי באיכות קולנועית ובתקציב נמוך.",
    "impact": "זה מדגים איך בעתיד הקרוב, צוותי הדרכה יוכלו להפיק סרטוני תדמית או קדימונים לקורסים באיכות גבוהה, בלי להזדקק לחברת הפקה חיצונית יקרה.",
    "categoryKey": "media",
    "source": "The Hollywood Reporter",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQa1duODVhYkxhczRsRldnMUVBdWhzdDVrZFVIOE0yUmRKajVoRXV0eDJIQ1lUaUpwa3JncVUyNFJnRFdPUjl4WG5VNU9VamJJcXUzQUNrdjRoRzRTdTJPb3FhSHlwMXRLMF9abmo1cUMwZTk1eEVrc0NiVW1aXy1SRVNYQUxDUEFCTkhDaVVtTnJSeUZlOW50cnBPdkFnWHhtSWpN?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 43,
    "headline": "וידאו: דירוג הכלים הטובים ביותר ליצירת סרטוני שיווק באמצעות AI",
    "explanation": "מייסד של סטארטאפ סוקר ומדרג בסרטון את כלי ה-AI המובילים ליצירת סרטוני וידאו שיווקיים. הוא משווה בין הכלים השונים, מראה דוגמאות ומסביר איזה כלי מתאים לאיזו מטרה.",
    "impact": "מי שצריך לבחור כלי ליצירת סרטוני הדרכה קצרים, יקבל בסרטון הזה סקירה מעולה שתחסוך לו שעות של מחקר ותעזור לו לבחור את הכלי הנכון ביותר לצרכים שלו.",
    "categoryKey": "media",
    "source": "Startup Fortune",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQZlJweTRhOHJkVVhMNlVmNzliXzZwOFhxT1lmancyV2NCRkpCMGU0VHNHNnl1V1BIcENXeno1ZmQtdmlpY2xZSkVONERkamQ5TEtCamhoUk1Wa2FWZzUyOTVsQ0pIRXd1bkhHeG95UV91T05BSGtYR3kwVXZWR0NHR3dkUk05aFdXQmxlY2FmM25SQ2JkSzFMMg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 39,
    "headline": "וידאו: סקירה והשוואה של מחוללי התמונות הטובים ביותר כרגע",
    "explanation": "אתר CNET מפרסם סקירת וידאו מקיפה שבוחנת את מחוללי התמונות הפופולריים ביותר, כולל ChatGPT, Adobe Firefly ועוד. הסקירה משווה את איכות התמונות, קלות השימוש והיכולות הייחודיות של כל כלי.",
    "impact": "מעצב הדרכה שצריך לבחור כלי ליצירת תמונות לקורסים שלו, יכול לצפות בסקירה הזו כדי להבין במהירות את היתרונות והחסרונות של כל פלטפורמה ולבחור את המתאימה ביותר לסגנון העיצובי שלו.",
    "categoryKey": "media",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTFBZNWxfdUZFQ1lfVF93UUVIYlVucmJoMWRpQUw4Mm1mazFUM24tRVk0S0pfUkg3SDd0T0ZvYjZ1UlJkWGUyNGk5OGJhM2JLNjZENy04OGpoQXVKT1BZbmdVZ3F5c2hIQ1ZNb3VGTnZMRXlTYUREblRfcEc2LWw1QQ?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 41,
    "headline": "וידאו: כך כלי AI ליצירת וידאו משנים את עולם הקליפים והשיווק",
    "explanation": "כתבה זו, המלווה בדוגמאות וידאו, מראה כיצד אמנים משתמשים במחוללי וידאו מבוססי AI כדי ליצור קמפיינים ויזואליים שלמים לשירים שלהם. הסרטונים מדגימים איך אפשר להפוך רעיון פשוט לסרטון מרשים תוך זמן קצר.",
    "impact": "אפשר לקבל מהסרטונים האלה השראה ויזואלית אדירה ליצירת טיזרים וסרטוני פרומו לקורסים חדשים, ולהבין איך להשתמש בטכניקות דומות כדי לעורר עניין וריגוש בקרב הלומדים.",
    "categoryKey": "media",
    "source": "Illustrate Magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxOMEZfWDhEajNaeERIRVN4NVp3U0JaNmJBOHNZVXRrM2h4MzJwcXlxaGtKSVRMRTBWc2pGOGJYMnRVbEZJcGFnUmppM2FTMkF6SkEzVmxtdm1WcEg2b2U5VkJ2QzRnVVlJR2Zac0ROMTZzOWI2MHNUNzhocXAtOEZuSm40WDNCNmFYRVhiWVk3aEo1SDltOTlMVnFTRzNFb2g2Z2VWSXg3RE5HbVV0OHJ5cEZvbW0tWWNBRWgzSFNxTTJvWEdLLS1FbTlaOVVSeHVD?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 16,
    "headline": "Waze משתדרגת עם יכולות AI חדשות של ג'מיני",
    "explanation": "אפליקציית הניווט Waze קיבלה עדכון שמשלב את יכולות הבינה המלאכותית של ג'מיני. העדכון מאפשר תכנון מסלול חכם יותר, התראות מותאמות אישית ויכולות חדשות להתאמת הממשק.",
    "impact": "זהו מקרה מבחן מעולה לאופן שבו ניתן לשלב AI כדי לשפר חווית משתמש באפליקציה קיימת, ומדגים רעיונות שניתן ליישם גם באפליקציות למידה ארגוניות.",
    "categoryKey": "learning",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9UQzg5TzBLZmpySnhPQWlaTkVGRmJCcllzR2I4RnZMRGxkYzV3MjFCWHJIQWJfTlB5R3JBeEZPSUM0amV3eFhNUnFldEk0NnNOd0lyQ191TjF6dmlmMkw0eHd0M2Zqem5qQWVRTnJ3?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 5,
    "headline": "סירי החדשה היא כמו ChatGPT, אבל לאנשים שלא אוהבים AI",
    "explanation": "העדכון הגדול של סירי הופך אותה להרבה יותר שימושית וחכמה, עם יכולת להבין הקשר ולבצע פעולות מורכבות. המטרה של אפל היא לשלב את העוצמה של AI בצורה טבעית ואינטואיטיבית, בלי להרגיש שאתם מדברים עם רובוט.",
    "impact": "הגישה של אפל מראה איך להנגיש טכנולוגיית AI מורכבת לקהל רחב, ומהווה שיעור חשוב למפתחי הדרכה על איך לעצב חוויות למידה מבוססות AI שירגישו טבעיות ולא מאיימות.",
    "categoryKey": "ai_models",
    "source": "Macworld",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOczVWb1A3bWpZNmJERVZ5NU92T2l0dnFkSnVzdXlSck41LVoycWN3X1JidkRhUDNHMWZibjVPRjc0Q2tmVW94NU0wUlZSRHhrclpaWGwzMWN1Y3MtdGFMS3pNOTV5OXN5T2tLY1NXUXhMYUMySHZDb0VfaTRBY1JBeGFRTWY4LTZ4Nk9fY0xiYW1iaHJZZjZj?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 21,
    "headline": "מיקרוסופט משדרגת את קופיילוט עם יכולות אוטומציה לשירות לקוחות",
    "explanation": "מיקרוסופט הוסיפה ל-Copilot ב-Dynamics 365 כלים חדשים שיודעים לא רק לענות על שאלות, אלא גם לבצע פעולות. למשל, הוא יכול לזהות בקשה של לקוח ולהציע לנציג השירות לבצע החזר כספי או לשלוח מוצר חלופי בלחיצת כפתור.",
    "impact": "מי שמפתח הדרכות לאנשי שירות או תמיכה, יכול לקבל השראה מהכלי הזה ולחשוב איך לבנות מערכי שיעור אינטראקטיביים שבהם ה-AI לא רק מלמד, אלא גם מדגים ומבצע פעולות בזמן אמת.",
    "categoryKey": "learning",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOcjRwRV9xQnZMWGdhV0FqYlAwRE45aE5oME5pNkNiQ25NRVpJZ0wxVmNWdU1pekY4RU5VbERjdmZkeERKTGdNT3VPX0hYR0hmcl9fdVlFWHluaU1TbGJmWlVpeVhSbzlEbnFLUzBOOGtWTXVRZTY1dXQyajlYSUphcXJnTHo0emY4RE1sYUtEQWFXWHVYWGdsNGx4SmNCSDRoWlVXbkVacTA0WlBYX2R0dmFIQVVhNXlCVE9mcXl4N25xNDBIckU0aDBn?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 35,
    "headline": "אינטגרציה חדשה: גוגל מאפשרת ל-AI שלה להתחבר ישירות לקנבה",
    "explanation": "גוגל הודיעה על שיתוף פעולה המאפשר ל-Gemini להתממשק ישירות עם Canva. זה אומר שאפשר לבקש מהצ'אט של גוגל ליצור עיצוב, והוא יפתח את קנבה עם תבנית מוכנה לפי הבקשה שלכם.",
    "impact": "במקום להתחיל עיצוב מאפס, מפתח הדרכה יכול לבקש מג'מיני \"צור לי אינפוגרפיקה על חמשת שלבי המכירה\", והוא יקבל תבנית מעוצבת בקנבה שאותה רק צריך להתאים ולדייק.",
    "categoryKey": "docs",
    "source": "Engadget",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNeDBnbGJCZ25rV3l6OFBhVGdnRXVNdUNIOHUyOTMzaGQ4NXpYcExQRDczc3hzR2V5NDl2TFZFWmZXbldxTjZkMEdLSzNrNXdJSzVFZ3JmcV9QZ1pUWTlpWXdyR0p1R0xmc1pPdFZtWTU2ZFJYNmttZFhOLXdlUDNnWWtxT2M0TlZOSHdxUV9pUXFZaXdlTHRJOG9SYVpyOXhXWmdEZA?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 1,
    "headline": "OpenAI מחזירה ל-ChatGPT את היכולת להיות... ChatGPT",
    "explanation": "לאחר תקופה של תלונות על ירידה באיכות התשובות, OpenAI שחררה עדכון שאמור \"להחזיר עטרה ליושנה\". העדכון מתמקד בשיפור יכולות ההיגיון, הדיוק והיצירתיות של המודל, כדי שירגיש שוב כמו הגרסה החכמה והמועילה שהכרנו.",
    "impact": "זהו תזכורת חשובה לצוותי הדרכה שתמיד כדאי לבדוק מחדש כלים קיימים, כי עדכון קטן יכול לשנות דרמטית את איכות התוצרים וליצור הזדמנויות חדשות ליצירת תוכן הדרכה.",
    "categoryKey": "ai_models",
    "source": "spyglass.org",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBSaGRGR2V6eWgxZ3BkSF8zeVdVQS1jSWlMUmtCTGZ2MEM4RWN4dE9sRnhPczhhMUx3TldHTngxQ2FNdWJjel9DOEFNb0w3elctS0FJTElTQW1kMS05QUE?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-07-19";
