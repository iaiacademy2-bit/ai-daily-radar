// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-08-09 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 5,
    "headline": "ChatGPT משתדרג: הכירו את GPT-5.6 עם יכולות חשיבה מתקדמות",
    "explanation": "OpenAI שחררה גישה למודל החדש והחזק ביותר שלה, GPT-5.6, שמציג שיפור דרמטי ביכולות ניתוח והסקת מסקנות. בנוסף, נוספו ל-ChatGPT תכונות חשיבה חדשות שהופכות אותו למדויק ואמין יותר.",
    "impact": "צוותי פיתוח הדרכה יכולים להשתמש בזה כדי ליצור סימולציות מורכבות של שיחות מכירה, שבהן ה-AI מגיב בצורה ריאליסטית להתנגדויות ומספק פידבק מנומק למשתתפים.",
    "categoryKey": "ai_models",
    "source": "Benzinga",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOdVNqZTluTEdWejY5Nk1XZGNqY04yT0hELWZaaFJJLVVmQ3dmNnJLRDVXa0puOGNPcFRIOWRETWhPbmNqTUt5SnVDUTIyd1NtNTQyTlJmOXNqeGhBVFhlUjQwdzAyVjhyV09JY0lEekJPUHhFclFUdzNDMUN2TFFrZFVldDdybjFQVGMtZnBmdlh0UjVsS0tKbER6TnpWTmlHZFpGTHBrT3ZzMGFsaV9LMjFqbVRCWTJOcFJGNFJ6enJCeV94TUswNE1NOE0?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 17,
    "headline": "גוגל שיטס ו-Gemini: ניתוח נתוני הדרכה הופך לקל מתמיד",
    "explanation": "גוגל שילבה את Gemini ישירות בתוך Sheets, ומאפשרת לנתח נתונים וליצור תרשימים באמצעות שיחה פשוטה בעברית. לא צריך יותר נוסחאות מסובכות כדי להבין את המספרים.",
    "impact": "מנהלת הדרכה יכולה להעלות את נתוני ההשתתפות בקורסים ולשאול: 'הראי לי בתרשים עוגה את התפלגות המשתתפים לפי מחלקות', ולקבל ויזואליזציה מיידית לדוח הבא.",
    "categoryKey": "docs",
    "source": "Android Police",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQc2hkaTc4YXZERXlOMmo4UDFwRkZWejVPWjZyTm1nWjJyYlQ1Vkh3WDBrdVFLekZ1NEhheHlxR0ZMek53a3NVZ2FHZGd4VkpJTDhSZ2k1cTdUcm5TZmJpcVFwS3hrQnozRUR2WXRjeS0zM3AyVF9yTm8wUkMwcGJTWXA0M3dpMnNPSVkyS3NhR0ZFcmxfbFFHdzRnV01Ra09EbXFiRA?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 9,
    "headline": "המתחרה של מיקרוסופט: Claude משיק את Cowork לארגונים",
    "explanation": "אנת'רופיק השיקה את Claude Cowork, סביבת עבודה חכמה שמאפשרת לצוותים לשתף פעולה עם AI על מסמכים, ניתוחים ופרויקטים. הכלי זמין עכשיו גם במובייל וגם בדפדפן.",
    "impact": "במקום לנהל תהליך פיתוח תוכן במיילים ובמסמכים נפרדים, צוות יכול לעבוד יחד ב-Cowork כדי לכתוב מערך שיעור, לקבל פידבק מה-AI ולתקן גרסאות במקום אחד.",
    "categoryKey": "ai_models",
    "source": "tech-insider.org",
    "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9RbFVNVXJ0WTlRUW1pTGVpeUVReThWTDdmNXVKa3JqQ01YWlZWN2NLVGVqbWxtT2RDTUJOY1hEQnlSMVN2VTF4bjdZOFNndEpkcXpUajJxZVA3WG45Y2RaUGJnSWNLSmMwei1qQWJmc2Z6amM?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 3,
    "headline": "כפתור 'חשוב' חדש ב-ChatGPT יספק לכם עובדות אמינות יותר",
    "explanation": "גרסה חדשה של ChatGPT כוללת כפתור 'Think' שמנחה את ה-AI לבצע בדיקת עובדות מעמיקה יותר לפני שהוא עונה. המטרה היא להפחית טעויות ולהגביר את אמינות התשובות בנושאים מורכבים.",
    "impact": "מעצבת למידה שבונה קורס על רגולציה חדשה יכולה להשתמש בכפתור הזה כדי לוודא שהמידע שהיא מקבלת על סעיפים בחוק מדויק ועדכני, ולחסוך שעות של הצלבת מקורות.",
    "categoryKey": "ai_models",
    "source": "AppleInsider",
    "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOck01RGdmU0FybTdxUTBOY2UxaVlvSEpQRzB1T1VxOUdOZDdwLWRnS2puSk4tQTAxYllZV3I3cUZUTUxkeEVaVTVvZzEwaVpzUTVpX0ZVbGRSRDZKT3Eyb20wbTFYZDhnbmJpTE1rVmI3cjdzT1lhUXRhSUpqWXZXSmNUREJaNGVtNkJMcWw3a1RDQVFlUmJVZTZhZ01oaUJVd0Ridkp0cTVpYXA3NkFrRA?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "מהפכה בחינם: ChatGPT מסיר את מגבלת השימוש למשתמשים חינמיים",
    "explanation": "OpenAI הודיעה שמשתמשים בגרסה החינמית של ChatGPT יכולים כעת לשלוח הודעות ללא הגבלה. השדרוג הזה פותח אפשרויות שימוש נרחבות לכל מי שלא משלם על מנוי.",
    "impact": "מדריכים חדשים בארגון יכולים כעת להתאמן על בניית מערכי שיעור, סיעור מוחות וניסוח תכנים ללא חשש שיגיעו למגבלה היומית, מה שהופך את הכלי לנגיש יותר להכשרה שלהם.",
    "categoryKey": "ai_models",
    "source": "inc.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNaHB3Y1B6TlpoTDlsNDUyV3lQRXAtVjc2dmlZM0JNY3M5dTFObmtmVnlWTXAwYXBtWF9MMVZaUEI0RDlkYWtZS1Z2SzV1VV94bTVKMU9ua0JLdkt6N0hiUzdLc19HR0Qwdy1uYjRMdl9SN0V1TWVNcW5tU3o3UlYzOVJieUxVTV9yd1RTNGtxb2JlNE9vOXBYMl9sU1JKNWNfNXotbElMaXN2Wm5SQjVrcUFVWFA0UkFMVExJb0FDbGNRcnlo?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 16,
    "headline": "גוגל מפות מציגה: הזמנת אוכל אוטומטית בעזרת סוכן AI",
    "explanation": "פיצ'ר חדש במפות גוגל מאפשר לסוכן AI לבצע עבורכם הזמנת אוכל ממסעדות. הסוכן החכם מנהל את כל תהליך ההזמנה באופן אוטונומי, מה שהופך את החוויה לפשוטה ומהירה.",
    "impact": "אמנם זה להזמנת אוכל, אבל זו הצצה לעתיד: דמיינו סוכן AI שירשום עובדים לקורסים, יתאם הדרכות ביומנים ויזמין חדרי ישיבות באופן אוטומטי לחלוטין.",
    "categoryKey": "learning",
    "source": "Lifehacker",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBmWUotR0daM3g2ejZfbFRQZVhoUkg2V05LTkpaaTBUOUhEd1J6RnRld3VRU3pmVFBicGhYLTRPMlYyWDZRbVhHVEs2RTRIZXk4M1lhT2pEa2Q5UFAxTHE3WkpzMHVkLWpETUljZ1pB?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 22,
    "headline": "מיקרוסופט משדרגת את Copilot עם Cowork לשינוי תהליכי עבודה",
    "explanation": "מיקרוסופט הציגה את Copilot Cowork, כלי חדש שנועד לשנות את האופן שבו צוותים משתמשים ב-AI בארגונים. הוא מאפשר אוטומציה של תהליכים מורכבים ושיתוף פעולה בין עובדים לבין סוכני AI.",
    "impact": "צוות L&D יכול להגדיר תהליך עבודה אוטומטי: ברגע שמנהל מאשר צורך הדרכתי, Cowork יתחיל מחקר ראשוני, ינסח טיוטה למערך שיעור וישלח אותה לאישור מפתח ההדרכה.",
    "categoryKey": "docs",
    "source": "BizTech Magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQa2s3NmpTWnU2X1FLVmFQcW40NjB6SERBY2FTeTFabDZ5T1FSS0xUZVFuWkl5Vi1OR1VHTFhjcTh1UEtib3dVOWxtQThXOWtWampBcS1qVFdGS2RlZzZfLTdXTmd6dW9hM3FZTjVwLXJjd0l5ckZrY1pzM21PVTJvQTkxS2JVQzZuU1p5ekoxeThxOFBpZGdLNWxWZmxXd0M0ZmswaWxSWQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 8,
    "headline": "קלוד מתחזק: אנת'רופיק משיקה כלים אוטונומיים לארגונים",
    "explanation": "חברת אנת'רופיק, יצרנית קלוד, מרחיבה את היצע הכלים שלה לארגונים עם יכולות אוטונומיות חדשות. הכלים החדשים מאפשרים לבצע משימות מורכבות יותר עם פחות התערבות אנושית.",
    "impact": "דמיינו כלי שיכול לסרוק את כל מערכת ניהול הלמידה (LMS), לזהות קורסים עם נתוני השתתפות נמוכים, ולהציע באופן אוטומטי תוכנית שיווקית פנימית לקידום שלהם.",
    "categoryKey": "ai_models",
    "source": "Stocktwits",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxQYzBTVFhtYVNkNUMtcWZYYkV2VUhGcEV6WTB6N2htWnFJN3dibGYyUU1TOU0yUy1EWEhpampTc0c1ZWk5b3Z2a1o3b0NBTFFQenNrdkppQ3N3U0RFY3kzSElRR0xVbER3YmtRTkVIU0VldV9GSnlfbG96Zm5ORWpuU295Z1VFVE9yVnB5VlR0VDA1SlNyT1ZGdG5fTXl3VGktWVdLemMzS3NrdXU0NUJRTk05ZWZUQzRjZ1ZNSEVZOGc1RVVRQ1M1cmVkZDRkSGhxZDVFSXZKb3VFLW8yT0E?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 1,
    "headline": "OpenAI מציגה דרכים חדשות ללמד וללמוד עם ChatGPT Work",
    "explanation": "החברה חשפה כלים ומתודולוגיות חדשות המיועדות ספציפית לאנשי חינוך והדרכה. הכלים החדשים ב-ChatGPT Work נועדו להקל על יצירת חומרי לימוד אינטראקטיביים ומותאמים אישית.",
    "impact": "מדריך יכול להשתמש בזה כדי להפוך מסמך PDF יבש של נהלים לתרחיש אינטראקטיבי, שבו העובד מתמודד עם דילמות מהעולם האמיתי ומקבל משוב מיידי על החלטותיו.",
    "categoryKey": "learning",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9GV1MyNmtiTnBOV2JLaWpxQWJad2doUFB3ZmRVLUlOdUVrSkE5bDNGblNWZklQNDBiOGo3NGpTNTZ1YVZJMHBPRU5YNExpbWNzeG9kazh5MFNydUY5UGdFOExQby03SEU?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "טיקטוק נכנסת לתחום יצירת הווידאו עם מודל Seedance AI",
    "explanation": "טיקטוק השיקה כלי AI חדש בשם Seedance שמייצר סרטוני וידאו קצרים ודינמיים. הכלי מתמחה ביצירת תוכן קצבי ומושך, בסגנון המוכר מהפלטפורמה.",
    "impact": "במקום להפיק סרטון טיזר יקר לקורס חדש, אפשר להשתמש ב-Seedance כדי ליצור פרומו קצר ומגניב של 15 שניות, שיופץ בערוצים הפנימיים של הארגון ויעורר עניין.",
    "categoryKey": "media",
    "source": "almcorp.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQVThWOVlFOEtJYUhaQ0ZuZnY4QmN2R0V3Uy1rRGVUQnVZZXpJdDdaZ20zWFVKN000TkplWFhwVnZGMmVja1kwWlh2cl9aT1dDZk5oX0dXQUdZMmlCdGNpRUxtR054dVQxaV82MHppOVkwLWQ1cU8xV0xjeDQzdGJuSFFGUQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 27,
    "headline": "המוצר הבא של OpenAI: מכשיר חכם קטן לבית ולמשרד",
    "explanation": "פרטים חדשים דלפו על מוצר חומרה ראשון מבית OpenAI, מכשיר עגול וקטן שיתחבר לשירותי ה-AI של החברה. המכשיר צפוי לתפקד כעוזר חכם ופרואקטיבי שיסייע במשימות יומיומיות.",
    "impact": "בעתיד, מכשיר כזה בחדר הדרכה יוכל לתמלל את השיעור בזמן אמת, לזהות שאלות שעלו מהקהל, ובסוף ההדרכה לייצר אוטומטית מסמך שאלות ותשובות לכל המשתתפים.",
    "categoryKey": "learning",
    "source": "New York Post",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPakpUWExmcnppbExQaUEyYTljT0Q5MDZ3YUtXeW5ZOWszTWV5bU5lOVR0VUk3VTA3OWVRTkhhdF9GNUd4aDFFYnVOQ3hrTmRqaS00dDdtNjBUOVVEaGluSTVNelJNUktYZG9QbzBmTnNiT1QzXzc3bWpiclo0Mm0zeFY4MHZmbTExUlcxOE02Tm9Qazc4R0RxREF5N0I5dEZIZ19VZFRpN0JqRzJYQS1lSDRFcXNza01ZWU5WUEZVWGlGdEFXVnQ0QzI3QTdjOV9q?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 38,
    "headline": "כלים חדשים ליצירת סרטוני הדרכה ארוכים בעזרת AI",
    "explanation": "סקירה חדשה מציגה את הכלים המובילים ליצירת סרטונים ארוכים (Long-Form Video) באמצעות AI. כלים אלה מאפשרים להפוך תסריט או מסמך לסרטון הדרכה מלא בן מספר דקות.",
    "impact": "מי שמפתח קורס על תוכנת Excel יכול להזין לכלי כזה מדריך כתוב, והוא ייצר סרטון הדרכה שלם, כולל קריינות והדגמות על המסך, ובכך לחסוך ימי צילום ועריכה.",
    "categoryKey": "media",
    "source": "Technology Org",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOY1Y1Mm5JcXNzbDkyakZBamluZlZrSGZySTdKcktKbjhWMHJ6U3h5a1RHdnJyQnNHY01fSnk3QUxvUXl6bktJcTZQTHpWMjN0QVF2SzJGOXhQeGFwV09OYWtLLVg5S0hNUWstRGlNRTExMmlhZmtlMFVWWWprczZZTEtTbXR6U0hwU3ZGRFF2MUtSOUFfZE5JaWFCd1hOc2xXX1ZIbVl4WExEZw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 19,
    "headline": "מיקרוסופט משדרגת את Power Platform עם יכולות AI חדשות",
    "explanation": "מיקרוסופט הכריזה על עדכון משמעותי לפלטפורמת ה-Power Platform, עם שילוב עמוק יותר של Copilot. העדכון מאפשר לבנות אפליקציות ואוטומציות עסקיות בצורה מהירה יותר באמצעות שיחה בשפה טבעית.",
    "impact": "מפתח הדרכה ללא רקע טכני יכול לבנות אפליקציה פנימית פשוטה למשוב על קורסים, פשוט על ידי תיאור מה האפליקציה צריכה לעשות, בלי לכתוב שורת קוד אחת.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPS2VLd2w4Ry1jdkRNTGtaNkRIbzVjYkR4Zk5ZdXJrMjMxTFNhN0c5eWhMMXdxNDlBbFBHa1Q4Mk9CdE5oU1ZZWk1BSzdWRWptcW9QN1UwU3A0X1NFQTY5MkJDbk1UaG9ENThiNURjUHkyeGRMMWR5LU16T2ZnLUJHaFpzQjhpdGtLTnc0cm5JZHE0U2NYa0tLNUdyekg0Y21ZSENQMUZPdmFoSjQyUTRBMVJrRXF4R1BMZmc2SjZyXzk?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 33,
    "headline": "Canva מתמודדת עם אתגרי AI וממשיכה לחדש",
    "explanation": "למרות דיווחים על עלויות גבוהות ותחרות מ-ChatGPT, קאנבה ממשיכה להשקיע ולהוסיף כלי AI לפלטפורמה. החברה מתמקדת בשיפור הכלים הקיימים ליצירת מצגות, תמונות ועיצובים.",
    "impact": "זה אומר שהכלים המוכרים והאהובים ב-Canva, כמו Magic Write ו-Magic Design, ימשיכו להשתפר. מעצבי למידה יכולים לצפות לאפשרויות חדשות ליצירת ויזואליות מרשימה לקורסים שלהם.",
    "categoryKey": "media",
    "source": "The Information",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOcmRQWUt1cHBoOTR1Y3ZkeTR2WGZaS0wzRW02OVVrX09RN2RVNENBamlxbHBBWkN0bXE3NGZpTzZIeVRHaUdKM045MDI5enI0Qnh4Q2V0RHRyb1pTcXA3TWVhU2RmeEVMc3ZJSjF1NzRtYnZoOHE1WVVLc0xrQ0FiRlJkRUtUbnc5T0Y3RmM5NDYxQzg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 30,
    "headline": "הזדמנות לחדשנות: חיל הנחתים האמריקאי עורך 'האקתון' AI להדרכה",
    "explanation": "חיל הנחתים יקיים אירוע מיוחד לפיתוח אבות-טיפוס של כלי AI שישמשו לאימון וחינוך. המטרה היא למצוא פתרונות יצירתיים שישפרו את תהליכי הלמידה וההכשרה של החיילים.",
    "impact": "זוהי דוגמה מצוינת להשראה: ארגונים יכולים לאמץ את הרעיון ולקיים 'האקתון' פנימי, בו עובדים ממחלקות שונות יציעו רעיונות לשימוש ב-AI לשיפור ההדרכה בארגון.",
    "categoryKey": "learning",
    "source": "DefenseScoop",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQbmlsUHQwMGdjdWFhMUF0VktGenZvNjV2WDk3UUtBY3Rka0dQcjNITE9DTDl3WGUzV2pOMl8tbDV5Mzk0aWU2SmZQLWZqSGREcGczeXVlTUs2RTIyNDd3RHFKVnVlTEQ2MGZWNlgtcFBXMHJNVjg2MHFBeWxFNkVjX1VDX0NBQmlT?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 43,
    "headline": "האם מחולל התמונות של גוגל נחלש? השוואה מול ChatGPT",
    "explanation": "משתמשים טוענים כי איכות התמונות שמייצר ה-AI של גוגל ירדה לאחרונה, והן נראות 'שטוחות' ו'מצוירות'. כתבה חדשה בוחנת את הטענות ומבצעת השוואה ראש בראש מול מחולל התמונות של ChatGPT.",
    "impact": "לפני שאתם בוחרים כלי ליצירת תמונות לקורס הבא, כדאי לבדוק את ההשוואה הזו. היא יכולה לעזור להחליט איזה כלי ייתן את התוצאות הוויזואליות הטובות ביותר עבורכם כרגע.",
    "categoryKey": "media",
    "source": "TechRadar",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiugJBVV95cUxPV3haQUFGeVV1TXNtVHVVS3ptQ1FNS2xORGF4bER4S1F0WTBWN3drcE5jYlE0YmZnamlkNjE4RmZGb0dTcUFRa0NPTzlHVm9qV0pqdVh2Y2hlNnI4dXNpUXYxUzE4eEtGTkxHTVdZeWV1TWl1WWRaMVR0WHhHZ01BX0VGRTJFcG0yUXRwa3hsT2ZUYWxmU29sRXk2TFIzb0FoSUpHZnVrYVB1cnJZckVtaGVCVWxXeXhxOW9TVGtYazZVVFNMVUxmLWt1MFk3ZC1KMlpDR19GME5zSy1HY2ljLUpIenJDVWtxeF9vRndxUXl6aVJtSWdxZlVaeFh3dnp4NmtWT3RmOTdtWmFZc2VqbGpQVm5DVnNMUm94VzZ5d200UWUzTUhmVmFDdU5hdnAweWRfUGJtUkJIdw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 7,
    "headline": "קלוד מול ChatGPT: מה ההבדלים ומי מתאים יותר למשימות הדרכה?",
    "explanation": "מאמר חדש מנתח את ההבדלים המרכזיים בין שני צ'אטבוטי ה-AI המובילים, קלוד ו-ChatGPT. הניתוח מתמקד בחוזקות ובחולשות של כל אחד מהם במשימות שונות.",
    "impact": "הכתבה הזו חיונית לכל איש הדרכה, כי היא עוזרת להבין מתי להשתמש בקלוד (למשל, לסיכום מסמכים ארוכים) ומתי עדיף לפנות ל-ChatGPT (למשל, לסיעור מוחות יצירתי).",
    "categoryKey": "ai_models",
    "source": "Engadget",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNSVdtVE9ITUFfRi1mMjlKMmx4bkhXc2NLcTNGUklLenhYTU95OGVGQ2tIbzVUY1l6YS1ZdkJUSjhPT2tXRWJrbkZDNTMtcmNQNjhMX0tCako2b0ZPWTZab2pPVVlHdFpNSVoxbXBIaGozYjVUZkI4ZWxvdG9aZTU1NGt3?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 24,
    "headline": "הצצה ראשונה ל-GPT-5.6 Sol: הדור הבא של OpenAI",
    "explanation": "OpenAI פרסמה מאמר המציג לראשונה את היכולות של מודל הדגל הבא שלה, GPT-5.6 Sol. המודל החדש צפוי להיות קפיצת מדרגה משמעותית ביכולת להבין הקשרים מורכבים ולבצע משימות מרובות שלבים.",
    "impact": "זוהי הצצה לעתיד הקרוב של פיתוח הדרכה. דמיינו כלי שיוכל לקחת את מטרות הקורס, לבנות לבד את כל מערכי השיעור, ליצור את המצגות, לכתוב את המבחנים ואפילו להפיק את סרטוני ההדרכה.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9BR2ZzcDRMbGphY1pfMF9mVWVCZGUyV25mbHpZMnRjQUxWWWgtWGZqSk93eXEweHNlOU1MTW85d2hLc3NvT2E4Znd4ZG5DR1diQTZPcFExTi1wcC1t?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-08-09";
