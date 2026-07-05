// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-07-05 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 3,
    "headline": "קפיצת מדרגה ל-ChatGPT: מודל 5.4 החדש זמין לכולם",
    "explanation": "השבוע שוחרר GPT-5.4, הגרסה החדשה והחכמה יותר של המנוע מאחורי ChatGPT. הוא מבין הקשרים מורכבים טוב יותר, כותב בצורה טבעית יותר ומסוגל לנתח נתונים ברמה גבוהה מאי פעם.",
    "impact": "מעצבי למידה יכולים עכשיו להשתמש בו כדי ליצור סימולציות שיחה מורכבות ומציאותיות יותר עבור קורסי שירות לקוחות או ניהול, עם דמויות AI שמגיבות באופן אמין למצבים עדינים.",
    "categoryKey": "ai_models",
    "source": "Mashable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1jYzBBX0IzYWVJRUd5UUkwOXg1S2VxZ1JUMVh4LTBYNUxvb0ZRRlNPZFpiV1ZYeC1YX1g3a1RjN3lNcUMwOEZXMDY1WEktS1Nfbl9kam4wbndKWWVyRFExT0VMNXQ3RC1POXM2TkFlSzNGVlU?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 8,
    "headline": "קלוד הופך לעוזר אישי: עכשיו הוא שולט לכם על המחשב",
    "explanation": "עדכון דרמטי ל-Claude מאפשר לו לבצע משימות ישירות על המחשב שלכם, כמו לסדר קבצים, למלא טפסים או לחפש מידע באפליקציות שונות. אתם נותנים לו הוראה, והוא פשוט מבצע אותה במקומכם.",
    "impact": "דמיינו שאתם מפתחים מצגת הדרכה חדשה. במקום לחפש ידנית תמונות, נתונים ומסמכים רלוונטיים, אפשר פשוט לבקש מ-Claude: \"מצא את כל החומרים על פרויקט X, סכם את המסמכים, וארגן את התמונות בתיקייה חדשה\".",
    "categoryKey": "ai_models",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBWbWR4bGJOVzRZYUlvNUY2aEhWTTNPX0JfdG5UanNOSUdvbWR2S2M1R2xCcHpXcUpxamJDenpId2tlWllsemhkODVhSzFxcVA1ejF4X2FyQjd4SUpLSFhtWQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 11,
    "headline": "גוגל משחררת את Gemini Spark למחשבי מק, עם חיבור לאפליקציות שלכם",
    "explanation": "העוזר החכם של גוגל, Gemini Spark, זמין עכשיו כאפליקציה למחשבי מק. הוא יכול להתחבר לאפליקציות צד שלישי, מה שמאפשר לו לבצע משימות מורכבות שדורשות מידע מכמה מקורות במקביל.",
    "impact": "מנהלת הדרכה יכולה לבקש מ-Spark: \"סכמי את המשובים על קורס המכירות האחרון מה-Google Forms, השווי לנתוני המכירות מהחודש האחרון ב-Salesforce, והכיני לי טיוטה למייל סיכום לצוות\".",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPbWxWcGdmdnNYR2cxaExuaEFuX3Z0ZE1Idl9FX2phaHJGeVhUbTJiVmRPX1g5aHBvb2hnb0JXellQREN3aGItbG4ySDVWLU1WNElWclVzT2pERnB1RjlTY19mUWNpcmFVbmlyM0NNZXg0dUh6eXN2aXRPSEpkNE5fNGJZd1h4ZFJ1dC1McnA0bnI4OEU?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 17,
    "headline": "מהפכה ב-Google Docs ו-Sheets: ג'מיני מובנה עכשיו בכל מקום",
    "explanation": "גוגל הטמיעה את יכולות הבינה המלאכותית של Gemini ישירות בתוך Docs, Sheets, Slides ו-Drive. עכשיו אפשר ליצור טקסטים, לסכם מסמכים, לנתח נתונים וליצור מצגות בלי לצאת מהאפליקציה.",
    "impact": "צוות L&D שמפתח קורס חדש יכול להשתמש בזה כדי להפוך מסמך תכנון ארוך ב-Docs למצגת מרשימה ב-Slides בלחיצת כפתור, כולל הצעות לתמונות ועיצוב.",
    "categoryKey": "docs",
    "source": "Mashable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNNXhlbTU5d2NUTnBHSERUczAyNVV0S3BVTUZubDVoRFhvU2dQUWp2TElwdDF2WDAzN1BfMmxXRGE0dnRtSHpRczJ3UVRIbzVBNm9UUHRTTEp4T0FORzhDTGRKa2swVXVXSWpETzI5NFVfWWUwTHNXTzh1RkExUXpzMkppLV81djBmV1hDLWkyWQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 21,
    "headline": "מיקרוסופט משדרגת את Copilot: הכירו את \"סוכן השירות\" האוטומטי",
    "explanation": "מיקרוסופט שחררה יכולת חדשה בשם Service Agent ל-Copilot ב-Microsoft 365. זהו בוט חכם שיכול לטפל באופן אוטומטי בפניות שירות ותמיכה, לענות על שאלות נפוצות ולפתור בעיות פשוטות בעצמו.",
    "impact": "במקום לענות שוב ושוב על שאלות של עובדים לגבי תפעול מערכת ה-LMS, אפשר להטמיע את סוכן השירות שיספק תשובות מיידיות 24/7 ויפנה את צוות ההדרכה למשימות מורכבות יותר.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNNm11MlNoeVFza0ZHNjhodGhVVHh2Z0JfeEVhZFg0V2drdTg2X1pyMDJweGZVX0VSeF8xRXhla19Ka0g2cTZyLWhPQTZHLUNkUE1hYWY2MXF0QU54Rl80VUZOZy1Xemc5aktGZ0ZVVXE4VTdLUDZCbXFGNHRQOC1iNFdtLXk2R2xZOXk1VzQ3RDR4VHJ5aDFDUkNJUk9EeE1Gb1FYWkFQemxoVkYtejBKRXJB?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 44,
    "headline": "גוגל מציגה: יצירת תמונות מקצועיות להדרכה ב-4 שניות בלבד",
    "explanation": "גוגל השיקה כלי חדש בשם Nano Banana 2 Lite, שמייצר תמונות באיכות גבוהה במהירות שיא ובעלות נמוכה. הוא תוכנן במיוחד כדי להיות יעיל ומהיר, ומאפשר ליצור גרסאות שונות של תמונה תוך שניות.",
    "impact": "צריכים תמונה ייחודית לקורס על בטיחות במחסן? במקום לחפש שעות במאגרי תמונות, אפשר פשוט לתאר את הסיטואציה הרצויה ולקבל תמונה מותאמת אישית באופן מיידי.",
    "categoryKey": "media",
    "source": "TechRadar",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxPUE14NFQtT0hjd0d1ZTdzVFl0R1NLSG1ULVdkR0dHNnVzdGxJWldZOHhxeHpYODdGaUQtLTZDdS1vc1N5WnhKeHRPa2RwVVZsOE1idjdCWmFJcC0wV1FGcFNVMVZyS0dDMUhsNWtyYUx3T1hCMFJTbXl6UXlIWHZOYnBFRkxGd1BLTmlLMmJiSldVWlFkc2puQUZLTEY2VXR5MkszMFVLaVpHWXJNX3pBY1JvZEloMnFtX1VNV0ZSeV96WWhmMGVEaVo2aU5WS1k2cW90RkRrQ2hqN1NmTnFWXzNLRmc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "רוצים ליצור סרטוני הדרכה קצרים? CapCut הוא הכלי בשבילכם",
    "explanation": "אפליקציית עריכת הווידאו הפופולרית CapCut זוכה להכרה בזכות כלי ה-AI החדשים שלה. היא מאפשרת להפיק סרטונים קצרים ודינמיים במהירות, עם כתוביות אוטומטיות, אפקטים חכמים ויצירת סצנות מטקסט.",
    "impact": "מי שמעביר הדרכות תוכנה יכול להקליט את המסך, ובאמצעות CapCut להוסיף אוטומטית כתוביות, זום-אין על אזורים חשובים, וקריינות שנוצרה מטקסט - הכל בכמה קליקים.",
    "categoryKey": "media",
    "source": "Yahoo Finance",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPQnp2VmlsTm4tRTVfVVREV1VaWk9PS081NnIxZUR0N2k5SGptallwdzNuTFA3ZThKVnZubE05eVB1dW4ySEZsVXpSTzF4UThTMmRGSTFUUGFNWnB0MnhubnlEcFRESWN1dWNVbGFNenZ6cHZ2Qlp0TlZwZTBZb3VKbmpSVlVmRnZONTRhOXFHYVNGS2dvLWhMTQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 33,
    "headline": "מיקרוסופט משיקה חבילת כלי AI חדשה במיוחד לעולם הלמידה",
    "explanation": "מיקרוסופט הודיעה על השקת כלים חדשים המיועדים ספציפית לאנשי חינוך והדרכה. הכלים נועדו לסייע ביצירת מערכי שיעור, הערכת התקדמות לומדים והתאמה אישית של תכנים.",
    "impact": "מפתח הדרכה יכול להשתמש בכלים החדשים כדי להעלות חומרי גלם של קורס ולקבל אוטומטית הצעות למבחנים, פעילויות אינטראקטיביות ומסלולי למידה מותאמים לרמות שונות של עובדים.",
    "categoryKey": "learning",
    "source": "425business.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPTEwzZEtnY2oyZXNHcmsxbFdsWC1Ba2JTNjd0cV91dUxTVU1aMW1xUGJ0MktQMmVRRlJaSFVTTU9fSHloR3ZMSFFKYWtFSHVvQzdQTlJieGNhOTV2UFoySmdOcVJFOE4zLXMyRWstdl9mbVJ3YzcxTnQ2cVU5bzhWSUFKazJscWZITmFuMzJwY1ZwSm1aOUFoN0V1cWpva3FzcERxZFpqYUYzWUpoS2dkTXRuR2tvQ2c1NW1mM1gtRQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 6,
    "headline": "הכירו את Claude Sonnet 5: מודל חדש, מהיר וחכם יותר",
    "explanation": "חברת Anthropic שחררה את Sonnet 5, גרסה חדשה ומשופרת של מודל ה-AI שלה. הוא מהיר משמעותית מהגרסאות הקודמות, ומצטיין במשימות הדורשות הבנה עמוקה של הקשר וסיכום מידע רב.",
    "impact": "במקום לבזבז שעות על קריאת מחקרים ארוכים או מסמכים טכניים כבדים, אפשר להעביר אותם ל-Sonnet 5 ולקבל סיכום תמציתי ומדויק של הנקודות החשובות תוך דקות.",
    "categoryKey": "ai_models",
    "source": "Anthropic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE94UjQ1SEhHSWRtZUVlMlZDdHJBbDU1aEFlbzJpV3A1V19NVF9sLVNnbjlkSEcwMV9vZTBUZ0dGdUFybWhHRmRkUVlyVzFTdWo3aFlIaU5wbzlOZw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 1,
    "headline": "ChatGPT נכנס לעובי הקורה: יכולות ניתוח פיננסי מתקדמות",
    "explanation": "OpenAI מרחיבה את יכולות ניתוח הנתונים הפיננסיים של ChatGPT למשתמשים נוספים. כעת ניתן לחבר את חשבון הבנק (במדינות נתמכות) ולקבל ניתוחים, המלצות ותובנות על הוצאות והכנסות.",
    "impact": "צוות הדרכה יכול להשתמש ביכולת הזו כדי ליצור תרחישים ריאליסטיים לקורסי אוריינות פיננסית לעובדים, על בסיס דאטה אנונימי, ולהדגים ניתוח תקציב בצורה אינטראקטיבית ומעניינת.",
    "categoryKey": "language",
    "source": "9to5Mac",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOLTRTN2dra0Q2V1hHUmxZNmdUNGFCUW9zRnlMSkVHTTFwb1d1czhjWG1BRExjNi1tb3ZaOGNkN2Ywd1BkTUU2ZHhCUlpmU0VZam1vMzRIYVZrMmNXbGl2a0Y3RDVnNDJhbTF0RGp4TDdURkdrUzJIWlVKTE0yNmpFdEYtYi1wN1BMY0tuakl3T1hvanNPOGVxYzAxenYtVkJmb3c4TTVicw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 9,
    "headline": "כלי AI חדש למדענים: Claude Science זמין לשימוש",
    "explanation": "חברת Anthropic השיקה את Claude Science, סביבת עבודה ייעודית למדענים וחוקרים. הכלי מסייע בניתוח מאמרים, סיכום מחקרים, כתיבת קוד לניתוח נתונים ואפילו העלאת רעיונות לניסויים חדשים.",
    "impact": "מפתחי הדרכה בתחומי הפארמה או ההייטק יכולים להשתמש ב-Claude Science כדי להבין במהירות מאמרים מקצועיים מורכבים ולתרגם אותם לחומרי הדרכה נגישים וברורים עבור עובדים שאינם מומחים בתחום.",
    "categoryKey": "learning",
    "source": "Anthropic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE81R0J0dXluYzJGcmxVb3dDY0Z2UjVYT2I5ZkYwSVRrWTBSUm5HZXpWRkFsQ2k5bm1jbVU5cENOY0xkX0tybV9FbnhRcFVac1dncWtqTF85OTZyd3o1dlRXenJkd1h3T1pTSGc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 20,
    "headline": "משתמשי מק? Gemini Spark מאפשר אוטומציה של קבצים מקומיים",
    "explanation": "הגרסה החדשה של Gemini Spark למחשבי מק כוללת יכולת לגשת ו לעבד קבצים שנמצאים ישירות על המחשב. זה מאפשר לבצע אוטומציות מורכבות על מסמכים, תמונות ונתונים אישיים בלי להעלות אותם לענן.",
    "impact": "מי שאחראי על עדכון חומרי הדרכה יכול לבנות אוטומציה: בכל פעם שנוסף קובץ PDF עם עדכון מוצר לתיקייה מסוימת, Gemini יסרוק אותו, יחלץ את השינויים ויכין טיוטת עדכון למצגת ההדרכה הרלוונטית.",
    "categoryKey": "docs",
    "source": "MacRumors",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTFBCZmRNS1JEbVJzdFA2MVFwb0FKWUU4MWpPTnkzTW12bGo5dllCZ2puamlqUXlDal9udzBWajRzVWFSN1YwMFpYLS1DN1dSNlNqRVc3QzZ1ajVKQklyb3RicExuWTgxQ0k4VXVScGdSUFBqajlDRkRGY013?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 24,
    "headline": "מיקרוסופט משחררת את Copilot Cowork לשימוש כללי",
    "explanation": "הכלי Copilot Cowork, שנועד לשפר שיתוף פעולה בצוותים, זמין כעת לכלל המשתמשים העסקיים. הוא מאפשר ל-AI להשתתף בפגישות, לסכם דיונים, לעקוב אחר משימות ולהציע רעיונות בזמן אמת.",
    "impact": "במהלך פגישת אפיון לקורס חדש, Copilot Cowork יכול לתעד את כל הרעיונות שעולים, להפוך אותם לרשימת משימות מסודרת ב-Planner, ואפילו להציע מבנה ראשוני לקורס על בסיס הדיון.",
    "categoryKey": "docs",
    "source": "Petri IT Knowledgebase",
    "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1odjFEV215N1hvVWlqZnFuV3BSMWVsVnlDU3B2QmVOMzFrV2ZsOGZxeTRJdjdLeS1UNlo3cHBfY3pNNFJHS3hMUDFubmFPM0VWY0RUYkRjcG9JOTlCLUQzN3RfaEpqeEpPNHBWSGlxSHo?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 39,
    "headline": "קרב הענקים של יוצרי הווידאו: Veo, Sora ו-Kling ראש בראש",
    "explanation": "מאמר השוואתי סוקר את שלושת הכלים המובילים כיום ליצירת וידאו מטקסט. הוא מפרט את החוזקות והחולשות של כל אחד מהם, ועוזר להבין איזה כלי מתאים לאיזו משימה.",
    "impact": "צוות הדרכה ששוקל להפיק סרטוני אנימציה קצרים יכול להשתמש בסקירה הזו כדי לבחור את הכלי הנכון: האם הם צריכים ריאליזם מדהים (Sora), יצירתיות וגמישות (Kling) או אינטגרציה עם כלי גוגל (Veo)?",
    "categoryKey": "media",
    "source": "tech-insider.org",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1JeFBPV1Bib0FKdjROSTIyVERwRF9qSU5KTy10b2lPNmprSUxrQ1pKQUY4RWFXYmZvUVQ0dE91alRDMkVQRElYUm11TUtMMXNIQjZmWmdDdFAxbWFWUnl2X0k1TU4?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 42,
    "headline": "Vidu AI: הכלי החדש שיוצר סרטונים מרובי דמויות",
    "explanation": "כלי חדש ליצירת וידאו בשם Vidu AI צובר תאוצה בזכות יכולת ייחודית. הוא מאפשר להגדיר מספר דמויות קבועות ולהשתמש בהן בסצנות שונות, תוך שמירה על מראה עקבי לאורך כל הסרטון.",
    "impact": "זהו פתרון מושלם ליצירת סדרת סרטוני הדרכה עם דמויות קבועות (למשל, \"דנה המנהלת\" ו\"יוסי העובד החדש\"). כך ניתן ליצור עלילה מתמשכת ועקבית שמלווה את הלומדים לאורך מספר שיעורים.",
    "categoryKey": "media",
    "source": "WKOW",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilAJBVV95cUxPUHp4MEQxbnBYQmFVZ0xnbGUxOFhNekZkbzU5NThjakF1Y1lKQmJ0bTdiZmNIVHM2TDRkOURQNm5zczFnV21iRDQ2d2pON19yRFFPekNORUY1eFlWb3ZNNmpDZTE4ZFJaRnd2SjRIWmRUcFlldHdGUHBQRlFydnF6T1NjOEZmekhLdHVSbG5teVBGU3lTQWFOa2pyQy1fYVBuWEJUOGlHeGRSdlNJV3otR2xlU1JoTXJQLTBzWnUteUxHZ1ZPVGpaXzdNRGRyTXpDNGNYM2tvM1dPNjc0d1FOalI4SVhsRWY1TWZNd3gwZlhsREVfMlBQMDJuSkhNVUEzcUpuUGUyYVVQUG1vWEgxYmtYc0M?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 43,
    "headline": "מחפשים ליצור תמונות לקורסים? CapCut נבחר לכלי המומלץ",
    "explanation": "אפליקציית CapCut, המוכרת מעריכת וידאו, זוכה לשבחים גם על כלי יצירת התמונות שלה. היא מאפשרת ליצור ויז'ואלים מרשימים בקלות, עם מגוון סגנונות ואפשרויות התאמה אישית.",
    "impact": "מעצב למידה יכול ליצור סדרת איורים בסגנון אחיד עבור קורס שלם, מה שמבטיח שפה עיצובית עקבית ומקצועית בכל השקפים והחומרים הנלווים.",
    "categoryKey": "media",
    "source": "Yahoo Finance",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQeks0UXNjUVFGR3E1bmx3UkRwdWstRFpLQ2taR1ZibWFHdHZSSWgxWEJpeE1oYnEyOVlwSzhldXV2azJTLTBseU1nYnJIMGlNS3p6cGlmNUoyT3BwY0djZFJJQmtzdl84ZEJMRThHaUVkdGxtQy1ZSmExSjdiSmttVHpRYWI4WlZGdWpoQjJCQXlKODBObmZZbQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 7,
    "headline": "קלוד ממשיך לעבוד גם כשהמחשב כבוי",
    "explanation": "עדכון חדש ל-Claude מאפשר לו להמשיך לבצע משימות ארוכות ברקע, גם אחרי שסגרתם את האפליקציה. הוא יכול לנתח מסמכים גדולים, לכתוב קוד או לעבד נתונים, ויודיע לכם כשהוא מסיים.",
    "impact": "צריכים לתמלל ולסכם הקלטה של סדנה בת 3 שעות? אפשר לתת את המשימה לקלוד, ללכת הביתה, ולמחרת בבוקר לקבל את הסיכום המסודר מוכן לעבודה.",
    "categoryKey": "ai_models",
    "source": "Mashable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5CM0dZcm9VT2U0Y0FYemhfNEh5bC04SkNEU01HRWJzUF9pQU93dkZBVURxbV95S2NwUkZpc1FOUV8yN3VpR0tVdXVFeE5Va1V3dHAxRlJab2VsUWRY?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 10,
    "headline": "נקבע מודל ה-AI הטוב בעולם (נכון להיום): Claude Opus 4.8",
    "explanation": "על פי מדד ביצועים מוביל, הגרסה החדשה ביותר של קלוד, Opus 4.8, עקפה את כל המתחרים והוכתרה למודל הבינה המלאכותית החזק ביותר. היא מצטיינת במיוחד במשימות מורכבות הדורשות היגיון, יצירתיות והבנה עמוקה.",
    "impact": "כשצריך לפתח תוכן הדרכה חדשני ומקורי מאפס, למשל קורס מנהיגות המבוסס על פילוסופיות שונות, Opus 4.8 הוא כנראה הכתובת הטובה ביותר לקבלת רעיונות עמוקים ומבנים לוגיים מתוחכמים.",
    "categoryKey": "ai_models",
    "source": "tech-insider.org",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE53TjF4aHI3c3JhbHRIbU94WV9PWGxZQmd1ZERERWkwVWhUOFh6YkUzNVpUT25RbzdydDVuSVhfLXVDY0tBOGZ2MHE5bXNQQkVyT1YySmlSTlhwS214bFE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-07-05";
