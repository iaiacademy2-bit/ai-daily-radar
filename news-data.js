// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-08-16 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 26,
    "headline": "הצצה ראשונה ל-GPT-5.6: המודל החדש של OpenAI שישנה את כל מה שהכרתם",
    "explanation": "חברת OpenAI חשפה השבוע את הדור הבא של מנוע ה-AI שלה, GPT-5.6 Sol, שמבטיח להיות חכם, מהיר ויצירתי משמעותית מכל מה שקיים היום. הוא מציג יכולות הבנה והיגיון ברמה חדשה לחלוטין, כולל מצב 'אולטרה-מהיר' שעובד עד פי 14 מהר יותר.",
    "impact": "דמיינו בניית סימולציית שירות לקוחות מורכבת תוך דקות, עם דמויות AI שמגיבות באופן ריאליסטי ומפתיע לכל תרחיש. הכלי הזה יכול להפוך כל תרגול למפגש חי ודינמי.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9BR2ZzcDRMbGphY1pfMF9mVWVCZGUyV25mbHpZMnRjQUxWWWgtWGZqSk93eXEweHNlOU1MTW85d2hLc3NvT2E4Znd4ZG5DR1diQTZPcFExTi1wcC1t?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 1,
    "headline": "ה-ChatGPT שלכם על המק עכשיו רואה ולומד כל מה שאתם עושים",
    "explanation": "עדכון דרמטי לאפליקציית ChatGPT למחשבי מק מאפשר לה (ברשותכם) לעקוב אחר כל הפעולות שלכם על המחשב. הכלי יוצר ציר זמן של העבודה שלכם, זוכר מסמכים שפתחתם ואתרים שגלשתם בהם, כדי לתת לכם עזרה מותאמת אישית.",
    "impact": "מעצב למידה שעובד על מצגת חדשה יכול פשוט לשאול את הצ'אט 'תעזור לי לסכם את שלושת המאמרים שקראתי היום בבוקר על ניהול זמן'. הכלי ימצא אותם אוטומטית ויפיק סיכום מדויק.",
    "categoryKey": "ai_models",
    "source": "Lifehacker",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPTU9YanY4THFFbHI4RUJwQXdQUjVIQ2FQRHRkRjFRMFdUN2hBZmw4RW54aVBfYThFRHJrbnY2dVFDUGxoLXhRaGFYT2R2LXVHdHJRMXFBd3BXTGJlUldmazVzMzlPUVJJcU1JYTVjQnBiNk9GSzVzOC1TNk1TYmJCNm4tVEN5ZDhU?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 11,
    "headline": "גוגל מציגה את Gemini 3.7 Flash: מנוע AI מהיר במיוחד למשימות אוטומציה",
    "explanation": "גוגל שחררה גרסה חדשה ומהירה במיוחד של מנוע ה-AI שלה, שתוכננה במיוחד לבניית 'סוכני AI' שיכולים לבצע משימות מורכבות. המודל החדש זול יותר ומתמחה בביצוע תהליכים אוטומטיים כמו ניתוח נתונים או כתיבת קוד.",
    "impact": "מנהל הדרכה יכול עכשיו לבנות 'סוכן AI' שיסרוק את כל משובי העובדים על קורס מסוים, יזהה את התלונות הנפוצות ביותר, ויציע אוטומטית 3 שיפורים למערך השיעור הבא.",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOZnVHS2RsOVpIeE9xTGhZMUZHbWRtVi1IVHpZcFQ3RExDV1N2c3l2c1o2OW9iazVBQXRTaEpfRFU1UEdlZ3VYNGl6TFZYQTBoNENJRFd4dUNFTE9vYU5mYk05ZFJBWDhIRXE0T0xUQ1hrUzFuSzNPM0tTaGNTWTZyM1V5SzcxcGRLek5tUUZOYnhFSUFZanRnUDFMdGVKUkd2NDNR?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 21,
    "headline": "מיקרוסופט מאחדת את כל כלי ה-Copilot שלה לאפליקציה אחת חכמה",
    "explanation": "נמאס לכם מגרסאות שונות של Copilot? מיקרוסופט הודיעה שהיא מאחדת את כל אפליקציות ה-AI שלה (האישית והעסקית) לתוך 'סופר-אפליקציה' אחת. המטרה היא לספק חוויה אחידה ורציפה בכל מקום בו תשתמשו בעוזר החכם.",
    "impact": "במקום לחפש מידע בנפרד ב-Teams, Outlook ו-Word, תוכלו לשאול במקום אחד: 'מה הנקודות המרכזיות שעלו בפגישת ההדרכה אתמול ומה המשימות שקיבלתי במייל בעקבותיה?'.",
    "categoryKey": "docs",
    "source": "The Verge",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNQmpleXNsa2QzS3dnal9fNkJoV0ZKdl9zdllIOFQtUU1hTzAtSVdRRk5iQWRuSTg2NFdjODE2SHFJeEdSNDRKUEZhSGVFQ2dpLTZObXlGMWlPWnRNeUV0U0Y0MXBLMFByWEdXa0F0SmhZM0ZFdEpVLWxRRGpWeklGUEFDdm5tVVJ6?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 8,
    "headline": "זהירות, רמאים: Claude מטביע 'סימן מים' בלתי נראה בכל טקסט שהוא מייצר",
    "explanation": "חברת Anthropic הוסיפה פיצ'ר מהפכני למתחרה של ChatGPT: כל טקסט ש-Claude מייצר יכלול מעתה 'סימן מים' דיגיטלי סמוי. זה יאפשר לזהות בקלות אם טקסט נכתב על ידי AI, גם אם שינו בו כמה מילים.",
    "impact": "צוותי L&D יכולים להשתמש בזה כדי לוודא שעבודות הגשה או מבחנים בקורסים דיגיטליים נעשו על ידי העובדים עצמם ולא הועתקו במלואם מה-AI. זהו כלי חשוב לשמירה על יושרה אקדמית בארגון.",
    "categoryKey": "ai_models",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQeTVhQkpPVGFnb3lvVXZ1UHRHOXFVNTB5eVIxUXc4b2xiNFpOVFY1QVBpN18tMm1sVDdwSTlGcEljQ2tIazZkMFlWZjM1bURnT2xmT0s4UWJlWTdVUHVTQ2ZtcVI5UW5FVkluZGpVREFoT29SMGNMaVlYRUVPZDFnX2hVdVlCQ2FBWVVnRTk4MGgyOXZFdmFXa2E0U1p1YmdLSDQ2bEFWTzJ2MDdoQnhvVUd2bVp3dFdu?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 20,
    "headline": "הפיצ'ר החדש של גוגל בטלפון יגרום לכם להישמע שוטפים בכל שפה",
    "explanation": "גוגל הציגה בטלפוני הפיקסל החדשים יכולת AI שמתרגמת את הקול שלכם בזמן אמת לשפה אחרת, תוך שמירה על טון הדיבור והאינטונציה המקוריים שלכם. זה מרגיש כאילו אתם באמת מדברים את השפה, לא כאילו מכונה מתרגמת אתכם.",
    "impact": "מפתחי הדרכה שיוצרים סרטוני הדרכה קצרים יכולים להקליט אותם בעברית, והכלי יפיק אוטומטית גרסאות באנגלית, ספרדית או צרפתית שנשמעות טבעיות לחלוטין. זה חוסך עלויות תרגום וקריינות אדירות.",
    "categoryKey": "language",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMie0FVX3lxTE96SGlaMlV6U0w0dUQ2YVo2OWVVX0VxRm93ejhmLVN3MzhnQmhPaHExNGkxT1JTbWQ0cnJNWVhiVFJsQ3kza1VNVzlBZ1Z4b0lnSm5MWXdaTFJ2ZmRtUkNibHF4NVZ6TEdxVElZU0paSFN0Q0hHNVg2a3JEaw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 36,
    "headline": "גוגל שיטס הופך לקנבס: צרו ויזואליזציות מדהימות ישר מתוך הגיליון",
    "explanation": "גוגל שדרגה את Sheets עם פיצ'ר חדש בשם 'קנבס' המאפשר להפוך טבלאות נתונים משעממות לאובייקטים ויזואליים אינטראקטיביים. אפשר לגרור ולהדביק נתונים, להוסיף תמונות וליצור דשבורדים דינמיים בלי לצאת מהמסמך.",
    "impact": "מי שמלמד Excel או ניתוח נתונים בארגון יוכל לגרום לתכנים שלו 'לקפוץ מהמסך'. במקום להראות טבלאות סטטיות, אפשר לבנות יחד עם הלומדים דוחות אינטראקטיביים שמגיבים לשינויים בזמן אמת.",
    "categoryKey": "docs",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQVkxwYzJ5NnUtdVJaeDJLNWEzclZXSDhOQmVzNjhlcjR4bUFmMmhaTUhibTI5WFJrdzR4TWx4TmlXNjBjeWZiSXJfVndXUUJiQjVsVTNlcXE0d2YtZTdGaHRvSk9ZWUxrMGJvY2lrcnhRZ0swZnBZSlBnSWR0OU5UajI0U2FhdnNCWW1MU0JCaERjQ2MxWDg5YWxuVGxDY0JUWFZoNHRKZ2Z5aTA?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 24,
    "headline": "מיקרוסופט מפרסמת מדריך פשוט: כך כל אחד יכול לבנות 'סוכן AI' משלו",
    "explanation": "מיקרוסופט שחררה מדריך ידידותי למתחילים שמסביר צעד אחר צעד איך לבנות 'סוכן AI' אישי. סוכן כזה יכול לבצע עבורכם משימות אוטומטיות, כמו למצוא מידע, לסכם פגישות או לנהל את היומן.",
    "impact": "צוות הדרכה יכול לבנות 'סוכן' שבודק כל בוקר את מערכת הלמידה (LMS), מזהה עובדים שמתקשים בקורס מסוים, ושולח להם אוטומטית מייל עם חומרי עזר נוספים או הצעה למפגש תמיכה.",
    "categoryKey": "learning",
    "source": "Microsoft Source",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBOY3otWnlnb3JFLXVBbjR0YUNmNTMzd3FLMlRib0lZMFAtYW16VFlQS0dZamQ4MVJMOTRad3IzbF9DbzhiU1lSZkkwVGJJRXFmdXhqSUEwUlR5Q1l2M0xHeHNXU1V0UmNvbG9zSHFtR3J1MTJwVlBSdG01eFBFYkE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 45,
    "headline": "מחוללי תמונות AI הם לא רק לכיף: כך הם משדרגים תהליכי עיצוב מקצועיים",
    "explanation": "כלים ליצירת תמונות AI הופכים לחלק בלתי נפרד מעבודתם של מעצבים מקצועיים. הם מאפשרים לייצר במהירות מגוון רחב של סקיצות, לבדוק קונספטים ויזואליים וליצור נכסים גרפיים ייחודיים בזמן שיא.",
    "impact": "במקום לבזבז שעות בחיפוש תמונה מתאימה במאגרים, מעצב הדרכה יכול לתאר למחולל בדיוק מה הוא צריך: 'איור בסגנון קו נקי של צוות מגוון שעובר הדרכת בטיחות במפעל מודרני'. תוך שניות, הוא מקבל תמונה מקורית ומושלמת.",
    "categoryKey": "media",
    "source": "INQUIRER.net USA",
    "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTFA1QnBZTTVqajNTTnE2NHJidHNVMjd6Qmc5RFY2TGdoMko0NE4xNFdVejA2M0RYVDZWREx0eVMzRE4zM2lRNzZfVXVPVkRKbDFhN0RzQ1E5aGo3VDFPaU5tUU5fT2J3Rl9FN3p2SG85eW5CaGpv?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 43,
    "headline": "כלי AI חדש יוצר סרטוני לופ מושלמים לרשתות החברתיות",
    "explanation": "מחולל וידאו חדש מתמחה ביצירת סרטונים קצרים שמתנגנים בלופ (לולאה) אינסופי בצורה חלקה. הכלים האלה אידיאליים ליצירת תוכן קליט ומושך תשומת לב לפיד של טיקטוק, אינסטגרם או רשתות חברתיות פנימיות.",
    "impact": "צוות L&D שמשיק קורס חדש יכול ליצור טיזרים קצרים וממכרים לקידום הקורס. למשל, סרטון לופ של דמות מצוירת ש'נתקעת' על שאלה קשה, עד שהיא נרשמת לקורס ופותרת אותה בקלות.",
    "categoryKey": "media",
    "source": "Yonkers Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxONmNFZm5uMWZTaWdxS2FmbjdMalhjYlhNYi1GbWpWV2ZJaVU1enFjNzBScGZ0STBfamE3SzVIeTBKNktPdUNjMDBRaVpJNENSMzEyNnFBZTBibjJiU01vY1VTNmt6a3VXbXAzeE5BS3NIcEJxUkQ2MWlFa2p4WVAydlhldW5nSmJwbUN1S28zeTg1a1pjdmc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 16,
    "headline": "גוגל משלבת את Gemini עמוק בתוך הטלפונים החדשים שלה",
    "explanation": "באירוע ההשקה השבוע, גוגל הציגה שורה של יכולות AI חדשות במכשירי הפיקסל, המופעלות על ידי Gemini. הפיצ'רים כוללים סיכום אוטומטי של שיחות, תרגום קולי מתקדם ויכולות צילום ועריכה חכמות.",
    "impact": "מדריך שטח שנמצא בהדרכה מחוץ למשרד יכול להקליט את המפגש, ובסופו לקבל סיכום כתוב ומסודר של כל מה שנאמר, כולל זיהוי הדוברים וחלוקה לנושאים. כל זה קורה ישירות על הטלפון, בלי צורך במחשב.",
    "categoryKey": "language",
    "source": "siliconangle.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNZEhBb29QaWZqRTBMQmhNeEw3Y3JwWFgwYUxqYlRKVlp0YXh4X1dhY0V1QmpDcTRWUGJyVnpnSEE2MkpiWXh5cHVhWkZrN1l3aVJieHFETVZxb24zTzA4ZGtlaVVxLXJNZjJSd013QmxOUzhvM1NjS1dRVXJwQnpaeGJqZm5NZ1dZMzR1MjZ3cjQxdmNGQ1c4dk9IN1NScGdFWjMzWGFoR2FDSVdkLVVF?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 29,
    "headline": "יבמ ו-OpenAI משתפות פעולה כדי להביא AI מאובטח לארגונים גדולים",
    "explanation": "שתיים מהענקיות בתחום, יבמ ו-OpenAI, הכריזו על שותפות אסטרטגית. המטרה היא לשלב את המודלים של OpenAI בפלטפורמות הארגוניות המאובטחות של יבמ, ולאפשר לחברות גדולות להשתמש ב-AI המתקדם ביותר בלי לחשוש מזליגת מידע.",
    "impact": "זה פותח את הדלת לשימושים רגישים יותר ב-AI בתחום ההדרכה. למשל, ניתוח ביצועי עובדים על בסיס נתונים פנימיים ורגישים כדי להמליץ על מסלולי הכשרה אישיים, בסביבה סגורה ובטוחה.",
    "categoryKey": "ai_models",
    "source": "IBM Newsroom",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOR3p4N3M0WXh3TEJGWUxEMDVucXFKc0lfSW9Qa19WeE9FUXowbTB4ZXdra1U0dlJic2o3dlJkMExvV3dWN1ZfM3VuTmd4TWI3OFF3S3o4aG9Yb09QZG1fUDBmWUo4eEpfMFh5cFZud3ZOS05FcnlnMGpoTGUxWndpcTl6OHRWcl9ucENIN0RjTS1tRzB6eEpNSjREXzJWdnQyeXpxdXpnMzJsMS1La0FHSmUycllIQTlhc3hUM1BjZTk1STJIcGR4WjMxcWs4UlE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 34,
    "headline": "OpenAI משיקה מודל AI חדש שמתמחה באיתור מתקפות סייבר",
    "explanation": "בתגובה לעלייה במתקפות סייבר מבוססות AI, חברת OpenAI שחררה מודל ייעודי שמטרתו לזהות ולהתגונן מפניהן. הכלי החדש מאומן לזהות דפוסים של פעילות זדונית ויכול לסייע לאנליסטים לאבטחת מידע.",
    "impact": "מפתחי הדרכה בתחום הסייבר יכולים להשתמש בכלי הזה כדי ליצור סימולציות מציאותיות של מתקפות. הלומדים יוכלו להתאמן על זיהוי ניסיונות פישינג או פריצה שנוצרו על ידי AI, בסביבה בטוחה ומבוקרת.",
    "categoryKey": "learning",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPRUlDV19rQi1xNjJxVWFVeGVEV1NEdDNpNWRLa01uOWV3VUNJaEdVWUhsV0RRVXN2U2otbmlPNHd6TThJbjJRTEFVTlR6Y3VDcTlvRVJxd1AwQllaLUhGeV9KYWMyZEVIWkVEMFlRUUNTOXdKd19hV2k4dEVGeC1KdlVFcURvM2EtUU4yeDRRQlhtY282Mk5IN1REYw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 41,
    "headline": "סקירה: 5 מחוללי הוידאו הטובים ביותר ליצירת קליפים מוזיקליים ב-2026",
    "explanation": "כתבה חדשה בוחנת ובודקת חמישה כלים מובילים ליצירת וידאו-קליפים בעזרת AI. הכלים האלה יודעים לנתח שיר וליצור עבורו ויזואליה מתאימה, לסנכרן תנועה עם הקצב ולהפיק סרטונים מרשימים מטקסט פשוט.",
    "impact": "אפשר להשתמש בטכניקה הזו כדי להפוך חומרי הדרכה יבשים למשהו קליט וזכיר. למשל, לקחת את 5 כללי הזהב של שירות לקוחות, להלחין אותם עם כלי AI אחר, וליצור ג'ינגל הדרכה עם קליפ אנימציה ייחודי.",
    "categoryKey": "media",
    "source": "NoHo Arts District",
    "sourceUrl": "https://news.google.com/rss/articles/CBMidkFVX3lxTFAwNjJhTWQzWHJOOHhpZU4yR1h4Q1lCSk4xcjJPM19FQ2I2WHFVWkxqMHh1UVRNbDdTTF9fUWNpdVdialhrTUQxOXBXV2RHaHZLbG82X0Q2Q1gwQnB1dHNhUWxNSGk5eExERFNRdU0wR2lYdVEya0E?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 19,
    "headline": "אפליקציית Gemini של גוגל חוצה את רף מיליארד המשתמשים",
    "explanation": "פחות משנה אחרי השקתה, אפליקציית Gemini למובייל הגיעה למיליארד משתמשים, מה שהופך אותה לאחת האפליקציות הצומחות בהיסטוריה. הזינוק מראה עד כמה צ'אטבוטים חכמים הפכו לחלק משגרת היום-יום של אנשים.",
    "impact": "הנתון הזה הוא קריאת השכמה לכל מי שעוסק בהדרכה. העובדים שלכם כבר משתמשים בכלים האלה ביומיום, והם מצפים שגם חומרי הלמידה בארגון יהיו חכמים, אינטראקטיביים ומותאמים אישית.",
    "categoryKey": "ai_models",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPS3V6Z3Nrc3ZmdUNDbjI4WEcxZFFSYnU4MWduRHp4R09ZZEJyYmp2UXRsNGhMNFdRbmlJNkROZ2NIUC1jUmpfeVhfeHhsUkd3dHhGRW8zbVU2YnV6X2MzYTczYnBIVU0xQXlvUG5ETlIwaThYVDZueVdRR0N2ZU14TG96UEJHemo1?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 35,
    "headline": "האם עלויות ה-AI יפגעו בצמיחה של Canva?",
    "explanation": "למרות ההתלהבות, פיצ'רי ה-AI החדשים של Canva עולים לה המון כסף, מה שגרם לחברה להנמיך את תחזיות הצמיחה שלה. הכתבה חושפת את האתגר הכלכלי שעומד בפני חברות המשלבות AI במוצרים שלהן.",
    "impact": "זו תזכורת חשובה למנהלי הדרכה: כשבוחנים כלי AI חדש, חשוב לבדוק את מודל התמחור לעומק. כלים שנראים זולים בהתחלה עלולים להתייקר משמעותית ככל שהשימוש בהם גובר בארגון.",
    "categoryKey": "learning",
    "source": "fortune.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPWVRMdTJScVdXdFpIV1dLVDJwaU5ETTlnSTFwY1lMeFl1c2RQYnV1SHp1M1pKSG5zbmtwMHZ0NjBqNEZ6LVRubDJ3eS1rekxNQWhTX3VNX2VCajFoNGh5cHBBaldCbDJaZ2VBRVFlMGpfczJxd0VqM0tqOU5hcXo3S0NhQzZnT19NWlVaMWZ3VWg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "איך חברת WD-40 השתמשה ב-AI ליצירת פרסומות וידאו מוצלחות באמזון",
    "explanation": "יצרנית ספריי השימון המפורסם השתמשה בכלי AI ליצירת סרטוני פרסומת קצרים וממוקדים עבור אמזון. המערכת יצרה וריאציות רבות של מודעות, בדקה איזו מהן עובדת הכי טוב, והביאה לשיפור משמעותי בביצועים.",
    "impact": "באותו אופן, ניתן להשתמש בכלים דומים כדי ליצור סרטוני מיקרו-למידה. אפשר לייצר 10 גרסאות שונות של סרטון הדרכה קצר על מוצר חדש, ולתת למערכת לבדוק איזו גרסה גורמת לעובדים להבין את הנושא בצורה הטובה ביותר.",
    "categoryKey": "media",
    "source": "MediaPost",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPOENORS1ZbW51NUtpQjJQUEhhRlQ3LWVjck0zQXRPNVdXdEtqLTZwcFJMcF8zWDdFVTZmaVhqdnZkOVoyVnowQmlabV9Pc0JWVGlJNDJSMnhxSmJXMnUtdm85S1Z3V2VNOUx6YXpPYWhMTC1SSWNJNldobFNwTV9FcUs3U0xfU0hXdXg3MTEwTkt2WEwzVlJkNE84WFhJS2pRLUdkNjRUYlMxRFBocmc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "מודעות למלונות שנוצרו עם ChatGPT: הצצה לעתיד השיווק",
    "explanation": "מאמר חדש מדגים כיצד ניתן להשתמש ב-ChatGPT כדי ליצור קמפיינים שיווקיים שלמים עבור בתי מלון. הכלי יכול לכתוב מודעות, פוסטים לרשתות חברתיות, ואפילו להציע רעיונות לקונספטים ויזואליים.",
    "impact": "מנהלי הדרכה יכולים לאמץ את הרעיון כדי לשווק קורסים פנימיים. אפשר לבקש מהצ'אט: 'כתוב לי 3 גרסאות של מייל קצר וקליט שמזמין את עובדי המכירות לקורס החדש שלנו על טכניקות סגירת עסקה'.",
    "categoryKey": "language",
    "source": "hospitalitynet.org",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTE84YU9mMndkZ2ZZc1U4SkNTb1A2UDZTRXR0VVpEcElTa1F0SGdIc29XOXlnWWsydndBNUtKSWhoR0ozOGRNUDRmOTNUOS1mWXVnNzg0UXpyV2VYdUVFbUlDTnhwSzNnak0yaUNuZWRBTHFNYUVwU19SSnE3UlI?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-08-16";
