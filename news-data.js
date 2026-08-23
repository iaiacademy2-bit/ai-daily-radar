// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-08-23 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 16,
    "headline": "גוגל משדרגת את Gemini עם כלי למידה שישנו כל הדרכה",
    "explanation": "גוגל שחררה חבילת כלים חדשה ב-Gemini ובחיפוש שנועדה במיוחד ללמידה. הכלים החדשים יכולים ליצור מדריכים אינטראקטיביים, לסכם מסמכים מורכבים ולייצר שאלות ותשובות מכל טקסט.",
    "impact": "מעצבי למידה יכולים להעלות ל-Gemini מסמך נהלים יבש בן 50 עמודים ולקבל ממנו תוך דקה מערך שיעור אינטראקטיבי, כולל חידון וסימולציות לתרגול.",
    "categoryKey": "learning",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPY3V6UVYwYVZlaHE2Y05hR1NRM2lDYzdZYnhEaVhUN0NSeTFpOHZnYlJxbnY3bFJ1bHNFZkRHQ2RCaG1YLU1jWmRyNlhENVJVTXQxa0JsRjNGUndHcmd6WUt3OG1KUVVuelZPdm9KNXVhMHZPTHd5LVJRcDJCelJhektBMm5RaVV3YzdoZ1l4LU1VWk5UeGtCS3M1S2g1eTFCSGxsazlrRQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 4,
    "headline": "הפיצ'ר החדש של ChatGPT זוכר הכל והופך לעוזר האישי שלכם",
    "explanation": "OpenAI השיקה יכולת זיכרון חדשה ל-ChatGPT במחשבי Mac, המאפשרת לו לראות ולהבין כל מה שקורה על המסך שלכם. הוא לומד את סגנון העבודה שלכם ומציע עזרה רלוונטית בלי שתצטרכו להעתיק ולהדביק כלום.",
    "impact": "במקום לבזבז שעות על תיעוד תהליכים, מפתח הדרכה יכול פשוט לבצע תהליך במערכת הארגונית, ו-ChatGPT יכתוב עבורו אוטומטית מדריך למשתמש מפורט, כולל צילומי מסך והסברים.",
    "categoryKey": "ai_models",
    "source": "PCWorld",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQMzJXYmlWSlpydTEySUg0YmYxczBxc2pWTDE2M3d3LUJSRXNscFAyNmI2ZGVSQldBejJReFUyXzVVaGl2Q21qeGg0TVVVNV9DUlJOUTZpODZfSXVoblZJTjhPWU9XdkpGc1ZrWjNrQUtTbnRSWlgzYVliQ2tvZDVLTDNQaHlzYUJFV1Z1UUNGaHZRTnduUVRIa1EzZ0wzVXpMb0t4ZXVac1Z2S3ZQVnFZ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 42,
    "headline": "כלי AI חדש הופך תמונות מוצר פשוטות לסרטוני הדרכה שיווקיים",
    "explanation": "חברת Designkit השיקה פלטפורמת וידאו חדשה שמנתחת תמונות סטילס של מוצרים ומייצרת מהן סרטונים דינמיים. הכלי מוסיף אוטומטית תנועה, כיתובים ומוזיקה כדי להפוך כל תמונה לסרטון מוכן לשימוש.",
    "impact": "צוות L&D שמשיק קורס על מוצר חדש יכול להשתמש בכלי הזה כדי ליצור בקלות סרטוני טיזר קצרים ומושכים. פשוט מעלים תמונה של המוצר ומקבלים סרטון מרשים לקידום הקורס בערוצים הפנימיים.",
    "categoryKey": "media",
    "source": "GlobeNewswire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxPYXlWOElVcmVyMkpIbjl4bDRqelVnMjgyQlVUVy1BMzZjVUprbFdnSTMxMlFMYzc4UnhPSWVZWXhLbGQ1LWsweFJYZVN3UVItY0gzNEdhZ2hwNlNQUVlUdmY1anR6Z1A4ZmlKbFZKLW1ieW54YmhIdjNXM0VtQzBRbGJTbHNYemZhclREaWxsM01leEJ0X0F2cHpsdF94OGJVNklaUkh1dFRMb0wtWGY0UFhrbG9OclNFTWNuNUszTEdMUTg5bVNCbTFvbjd4ejJ2aHZxODR0bXJabkwyU3VtVVhNdk1QczhsSjUyS3BFUmFoWktOZjlld1VQbw?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 2,
    "headline": "OpenAI משיקה את ChatGPT לבני נוער, עם דגש על למידה בטוחה",
    "explanation": "זוהי גרסה חדשה של ChatGPT המותאמת במיוחד למשתמשים צעירים, עם מנגנוני הגנה ובטיחות מוגברים. היא נועדה לסייע בהכנת שיעורי בית, לחקור נושאים חדשים ולפתח מיומנויות בצורה מבוקרת.",
    "impact": "מפתחי הדרכה בארגונים המעסיקים עובדים צעירים או מפעילים תכניות התמחות, יכולים להמליץ על הכלי הזה כמשאב בטוח ללמידה עצמית ולפיתוח אישי.",
    "categoryKey": "learning",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFA0cUR0RW5xRGlscjVXNFNha1UtNnd1NVQ0dS12UFptZGd5OGVWSHBzZXpvRlM2LS1ja1dYZnR0X2ZFdjRVSXlHckhRRWQ3UnlZcGtrN1l3?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 12,
    "headline": "גוגל מכניסה את Gemini ישירות לדפדפן כרום באנדרואיד",
    "explanation": "מעכשיו, משתמשי כרום באנדרואיד יכולים להשתמש ביכולות של Gemini ישירות מתוך הדפדפן, בלי לעבור בין אפליקציות. אפשר לבקש ממנו לסכם כתבות, לכתוב מיילים או לקבל רעיונות על בסיס הדף שבו גולשים.",
    "impact": "עובד שנמצא בשטח וצריך להבין נוהל חדש שפורסם באינטרא-נט, יכול פשוט לבקש מ-Gemini לסכם לו את עיקרי הדברים בנקודות. זה חוסך זמן קריאה יקר ומאפשר יישום מהיר של ההנחיות.",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNM0M2aGdWbjh2YUhZREtxbGdfTjBJTmt5cDc4TUFhYllJVkZHY3ltWnoySktWbnFhcm5yMEZaZERaZHdqcmZ2RzktWFdVVHJFYkpkSkhLa19IZnJqZElHaUVIcWlsV2RUX3JabkMzcXNiRHNRVVhTWXZvTzcwMms4d05wN01YczA0THdUbEJOMG8wd2RtNTdSMzZ6OGU?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 33,
    "headline": "תומסון רויטרס משיקה כלי AI שמנתח מסמכים משפטיים לעומק",
    "explanation": "CoCounsel Legal הוא כלי AI חדש שנועד לסייע לעורכי דין ואנשי מקצוע בתחום המשפטי. הוא יכול לסרוק חוזים, לאתר סעיפים בעייתיים, להשוות בין מסמכים ולסכם פסקי דין ארוכים.",
    "impact": "מנהלת הדרכה בחברה גדולה יכולה להשתמש בכלי כדי לסרוק את כל חוזי ההעסקה של העובדים ולזהות במהירות פערים או סעיפים הדורשים הבהרה. על בסיס הממצאים, ניתן לבנות הדרכה ממוקדת למנהלים על תהליכי קליטה ועזיבה.",
    "categoryKey": "docs",
    "source": "Thomson Reuters",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxOMHQzX1h5Nk9KbTNIeEYySlUyRWhzVHJQNmhPVnNLVEdidTEtVHJPQ2dsbUI3bmlmc3NNZWllR09YWFYyREtZUkJ6R3pSRkNvWWU0dmt4YmdkSkttNmNSbU1xUkNpdHlNZjJGQzQwbXBYeTZrVy1rMExGQXY1V1REd0VLaE1Pc080UVVQZlQwMG9KVC1WaXZUOW4tUi1RTGRUNkZyMkpDVTNra0dabm5tRTY5ZjFBalVVNndZdFozcDQxd3dBWjdwMHJiRnc1cGFLVE5wbl9aTGJaRlAwNEVEdFhXSE5pVW5ucVRGTGZOcW1TVGdyYTdjYmJCcw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 21,
    "headline": "מיקרוסופט מאחדת את כל אפליקציות Copilot לחוויה אחת",
    "explanation": "מיקרוסופט מפסיקה לפצל את Copilot לגרסאות שונות ומשיקה אפליקציה אחודה שתעבוד בכל מקום. המטרה היא ליצור חוויה רציפה ועקבית, בין אם אתם משתמשים בו בווינדוס, באופיס או בדפדפן.",
    "impact": "מדריך שמפתח קורס על שימוש יעיל בכלי מיקרוסופט יוכל כעת ללמד על ממשק אחד אחיד. זה מפשט את תהליך הלמידה ומאפשר לעובדים ליישם את מה שלמדו בכל סביבת עבודה של מיקרוסופט.",
    "categoryKey": "ai_models",
    "source": "Campus Technology",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOaGc4UVVmb1hWMFM0SF9samZ2Qmg1NTNRNkpfZWFoUHRzWGpuV1M1QXh5SG15a0J2ZWdjR3V4bW84MlNkRzFLUUJVM1dHZVlaVGZmeUU5bVdmbUt1dHZQWjJHTGE4Rmk4OWEtT0dyZlU4YmJCcHpTOVhhQzVJZkVWZndFaEpqbUdhaE81R3hsV3V1Rjd0eUp4MVlOa1JjUlA3SEVDcVZYa3F1dEo2bEJQSU05VQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 25,
    "headline": "סיפור לקוח: ChatGPT Work קיצר תהליכי השקה ב-68%",
    "explanation": "חברת Stampli מדווחת כי אימוץ ChatGPT Work, הגרסה הארגונית של הכלי, חסך להם מאות שעות עבודה. הצוותים השתמשו בו ליצירת חומרי שיווק, תיעוד טכני ותכני הדרכה באופן אוטומטי.",
    "impact": "הנתון הזה הוא קייס סטאדי מצוין שכל מנהל הדרכה יכול להציג להנהלה. הוא מדגים איך השקעה בכלי AI יכולה להביא להחזר השקעה (ROI) מהיר ומשמעותי, ולשחרר את צוות ההדרכה למשימות אסטרטגיות יותר.",
    "categoryKey": "learning",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiSEFVX3lxTE5XYTJZcnp3a2JjdXJmcjFvdFRQQTJKV2hKOE9KR0ZBQ19qV09WYjVENXpKdzdQTkNPQ0VoSXdzc1lNZlFFWjI2dg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 43,
    "headline": "מחולל הווידאו Seedance 2.5 משתדרג עם יכולות יצירתיות חדשות",
    "explanation": "הגרסה החדשה של Seedance, כלי ליצירת וידאו מטקסט, מציעה שליטה טובה יותר על תנועת המצלמה וסגנון הוויזואלי. עכשיו אפשר ליצור סרטונים שנראים מקצועיים יותר ופחות גנריים.",
    "impact": "מי שמפתח לומדה על תרחישי שירות לקוחות יכול להשתמש ב-Seedance כדי ליצור סרטוני סימולציה קצרים. במקום להסתפק באיורים סטטיים, אפשר להפיק סרטונים המציגים את האינטראקציה בצורה מציאותית ומרתקת.",
    "categoryKey": "media",
    "source": "NewsGram",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOVUs4cHZreVZ5QU1BR0JMa29IMVRnWlVmMEcxYVhyWVdCMUt1M0VPMVFtYUhhMDZ6ejVIMUVaSnRQNWgyaERQUHVYTmVncnpuemRLbXlfbkZhTDZkYXlBSU9aYzM4R2wzN2tXTlFoMHFSLUZRQ3lwdU9IOERsVjdHc3pKUnd2ODVSdE5YUVNrTnluZTZ4TWszZnRzWXd4eEh3ZzdCeGpWRThiM3QwRmt4aG5DbHBjZkhNNG5OZk4xN0VGWG05MVFFRnh0ZE9KMDTSAdwBQVVfeXFMT1dLSUxqR09FX1hPMWFSeGdkQl8tLUZFZ3lTdWJZRE5LQ0NoSFVPQzV3bHJxOThJUHFFdzJheTQ4YW5SdEE1Q1hmcEpkaDFORlFCZWU4SS1fS3NfSGQxdHYtWVhYcWNER0Z2YTNmRVUtVDhfWmIzWEtGQ0U3eC1vdm5yWVctU1lUbjlVZXZRZFlseVNZaVhyQUstc1Vxd24yekpKem92Tk5wVXdwZEhFWlF6bktleUwzZkxrbFBsQUJJZmFsY3IxX29TeG5MaU9IOVpJcEkyeGRvRXFnSQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 1,
    "headline": "חידוש מסעיר: ChatGPT יכול כעת לשלוט ב-iMessage באייפון",
    "explanation": "עדכון חדש מאפשר ל-ChatGPT להתחבר לאפליקציית ההודעות של אפל ולקרוא, לנתח ואף לשלוח הודעות בשמכם. היכולת הזו פותחת אפשרויות חדשות לאוטומציה של תקשורת אישית וארגונית.",
    "impact": "מנהל צוות יכול להגדיר אוטומציה שבה ChatGPT מזהה שאלות נפוצות בקבוצת הווטסאפ (או iMessage) של הצוות. הצ'אט יענה אוטומטית עם קישור למאמר הרלוונטי במערכת ניהול הידע (LMS), ויחסוך זמן יקר לכולם.",
    "categoryKey": "language",
    "source": "Bloomberg",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPZmJTdG02MFkyLUt3TWZGSFBTSG5hMm96SEo0Z3dwRWlILXg4SVBxVFhHODNEZVltR0c2LUwtWnNqSkR4LU1LSmpPZVgtVnpqZU5kbmhuX29BOUM1bWREbk56RlhVa1RGdDZ3NnRQbTdNVjExVmE3akxJQTd5RExsUmxqclIzbjFVZ1Z3enBzV19HVXNBdjFJV0JtWTNQa3hRX3BSM01rR0F4WUN3UWZCQzJ6OFRvek9RTGV1TGlPZjRmVEVJ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 6,
    "headline": "קלוד מטמיע \"סימן מים\" בלתי נראה בכל טקסט שהוא מייצר",
    "explanation": "חברת Anthropic הודיעה שכלי ה-AI שלה, קלוד, יוסיף באופן אוטומטי סימן זיהוי סמוי לכל תוכן שהוא יוצר. המטרה היא לאפשר זיהוי של טקסטים שנכתבו על ידי AI, כדי להילחם בדיסאינפורמציה.",
    "impact": "בעת בניית מבחנים או מטלות הערכה, צוותי הדרכה יכולים להיות רגועים יותר. אם יעלה חשד שהוגשה עבודה שנוצרה כולה על ידי AI, ייתכן שבעתיד יהיה ניתן לבדוק זאת טכנית ולהבטיח למידה אותנטית.",
    "categoryKey": "ai_models",
    "source": "Mashable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTFB3QXVSLWxia3VqbkVfbkgtbGVENU1ERjRqMnotR0w1bklDS2xXRHFzTG9JNFNsenBMRVpMb2t5aWVmR1VYNjduTTlfclRCdE5qZlhxRVFSTTNSd3V6dlN3NTdEOFlabjByZmRWZlpCekkxSmtOejN2Mw?oc=5",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 14,
    "headline": "גוגל משיקה את Antigravity, כלי אוטומציה חדש למשתמשי Gemini בארגונים",
    "explanation": "Antigravity הוא פיצ'ר חדש ב-Gemini Enterprise שמאפשר לחבר את ה-AI למערכות ארגוניות שונות. הוא יכול לשלוף נתונים, לבצע פעולות וליצור תהליכי עבודה אוטומטיים בין אפליקציות.",
    "impact": "רכזת הדרכה יכולה לבנות אוטומציה שבה בסיום קורס חובה, Antigravity יבדוק אוטומטית מי סיים, יעדכן את הסטטוס במערכת ה-HR, ויישלח למנהל הישיר אימייל סיכום עם רשימת העובדים שעמדו בדרישות.",
    "categoryKey": "docs",
    "source": "IT Brief Asia",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPUmd6bkh0dDh3eE4yTWp1U3JLRGJMV1BKWFNGVFQ0cENBT1dmVVJfVWJGVktzdGw5dHlvcFo2XzdCQjBCSlJ0a0ZNV1ZfaTRseVlMZGE0SFdfTFFuVW1tZjNGTXNEUXMzREd1NXhNV195TTRLUF9CVHhzQ05kWDhtNERZSFFYQjVPNHNQMk13?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 30,
    "headline": "אוניברסיטה באיווה פיתחה מאגר כלים פתוח לשימוש ב-AI בכיתה",
    "explanation": "מה שהתחיל כפתרון פנימי לכיתה, הפך למשאב ציבורי המרכז כלים ושיטות עבודה מומלצות לשילוב AI בהוראה. המאגר מציע מדריכים, דוגמאות ורעיונות לשילוב טכנולוגיה בתהליכי למידה.",
    "impact": "כל איש הדרכה שמחפש השראה יכול להיכנס למאגר הזה ולקבל רעיונות פרקטיים. למשל, איך להשתמש בכלי AI ליצירת תרגילי סימולציה מותאמים אישית או לבניית משחקי למידה אינטראקטיביים.",
    "categoryKey": "learning",
    "source": "Iowa State University",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOTRPUzJVUVZiNTRYQVdKRDRYcVZyLThaeTVNdzBNVUNiU1MtUEJJMUNST3IweTM2NFJEbzlyTGRoaUd2bWNPbEhPdlRxRmlwbEVLN2oxY0hPbEh5MGhOSGdGaUkwNWZySFN0SnFEc2JXRnFvbHdyTjhDamVHajZFMGZaTGNhQ1p6WW1yYVY5SzE5cEljT0lXZjdpSVU?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 44,
    "headline": "Runway מפרסמת מדריך: איך ליצור תמונת AI מדהימה ב-6 צעדים פשוטים",
    "explanation": "המדריך החדש של Runway, אחת החברות המובילות בתחום יצירת המדיה, מפרט שלב אחר שלב איך להפיק את המיטב ממחוללי תמונות. הוא כולל טיפים לכתיבת תיאורים מדויקים ושימוש בהגדרות מתקדמות.",
    "impact": "מעצב למידה שצריך תמונות ייחודיות לקורס חדש ולא מוצא כלום במאגרי התמונות, יכול לעקוב אחר המדריך. כך הוא ילמד לייצר בעצמו תמונות מקוריות שמתאימות בדיוק למסרים ולמיתוג של ההדרכה.",
    "categoryKey": "media",
    "source": "Runway",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1uZzNoZUhMM3RTdlZaa1dhZ3NXdzFWNWxiSlhKUXdMMlhPQThLMUthSVJ0emtuS2phUFhZSWFMYmZfU01QRUZJQlVCUXBTbWl0R0FtSmJFTzJNVnk5bWdr?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 10,
    "headline": "חברה יפנית מטמיעה את Claude כסוכן AI לניהול חוזים אוטומטי",
    "explanation": "חברת Sansan שילבה את מודל ה-AI של קלוד בתוך מערכת ניהול החוזים שלה, Contract One. הסוכן החדש יכול לקרוא חוזים, לזהות סיכונים, לסכם את הסעיפים המרכזיים ולענות על שאלות לגביהם בשפה טבעית.",
    "impact": "צוות הדרכה שאחראי על קורס בנושא רכש והתקשרויות יכול להשתמש בכלי דומה כדי ליצור תרחישים מציאותיים. הלומדים יוכלו להתנסות בניתוח חוזים בעזרת ה-AI ולקבל משוב מיידי על הבנתם.",
    "categoryKey": "docs",
    "source": "International Business Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTFBKcEZYX2dvLWRLS0E1UHU3cTRfb3JtdE9pbGlYNm5nWkRudDVRY1BwbDdmelZEZTdkS0ZkZ2FsNFdZRjV2dEF2QnFwdGw5dmlJc1BuSmVNX3pyNGdFQVBCMnkyX1JKbVNaaFRPd3pMRGhqRVdxazNKLW5R?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 38,
    "headline": "Canva נאבקת בשימוש לרעה בקרדיטים ליצירת תמונות AI",
    "explanation": "Canva הודיעה על צעדים חדשים למניעת הונאות ושימוש לא חוקי בקרדיטים הניתנים למשתמשים ליצירת תמונות AI. החברה משפרת את מנגנוני הזיהוי כדי להבטיח שימוש הוגן בפלטפורמה.",
    "impact": "עבור צוותי הדרכה המשתמשים ב-Canva ליצירת חומרים, הידיעה הזו מהווה תזכורת חשובה. חשוב לוודא שהשימוש בכלי נעשה בהתאם לתנאי השירות, במיוחד כשמדובר ביצירת תכנים בכמויות גדולות עבור כלל הארגון.",
    "categoryKey": "media",
    "source": "Information Age | ACS",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQWUxPbTA4dzZZVE5FQTRZQ25fck9OaGQ0NC0zSldoOEZBMkxPMC12NGNURFBXRktIR3ZCVGdfeTNyb0Z2ZnBoQU1Pd2ZSeWVEalp0UndDOVZjdW9HOFYzZXZCblZVZzlWd0FnY2ZkeUV0SzMxczBxZ1pQaGc0eVR5ZXpn?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 29,
    "headline": "סקירה שבועית: כלי ה-AI החדשים ביותר שיצאו השבוע לשוק השיווק",
    "explanation": "אתר MarTech פרסם סקירה מקיפה של כל כלי ה-AI החדשים שהושקו השבוע ונועדו לאנשי שיווק. הסקירה כוללת כלים ליצירת תוכן, ניתוח נתונים ואוטומציה של קמפיינים.",
    "impact": "מפתחי הדרכה יכולים למצוא בסקירה הזו כלים שימושיים גם לעולמם. למשל, כלי שיווקי ליצירת ניוזלטרים מותאמים אישית יכול לשמש ליצירת תקשורת אפקטיבית יותר עם הלומדים בקורסים דיגיטליים.",
    "categoryKey": "language",
    "source": "MarTech",
    "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBra2tjM1Z6R0tQZmxSUHdPTFNsNlczNWdlUjRLVFFMUEtBMHlTSnJxTnJ5dUNPMFNFeXFzdkxDV25pX0l1eWp3bXJSOTZyRzlORm9CaU05S25iMVUzdVMxTHZzeGc5eFNOTDVHRHpxZVkwY09hWEtn?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 41,
    "headline": "המדריך המלא: 15 הכלים הטובים ביותר ליצירת וידאו עם AI",
    "explanation": "סקירה מקיפה שפורסמה באתר incrypted מדרגת את 15 מחוללי הווידאו המובילים כיום. הכתבה משווה בין כלים כמו Google Veo, Runway ו-Seedance, ומסבירה את היתרונות והחסרונות של כל אחד.",
    "impact": "לפני שבוחרים כלי ליצירת סרטוני הדרכה, כדאי לקרוא את הסקירה הזו. היא תעזור לכל מנהל הדרכה לקבל החלטה מושכלת ולבחור את הפלטפורמה שהכי מתאימה לצרכים, לתקציב ולרמת המורכבות הנדרשת.",
    "categoryKey": "media",
    "source": "incrypted",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5idjhUQlhtRUxxek9UZTdZTVd6dllJVXY4WUJOY2V1SEIycnV6MGs3Um1ESm8wZFRWV3p3d2JHWlJPS0ZLd1lhUEhreE1FUEFLV2xDNUw5ejVGRUpidUVMNg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-08-23";
