// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-06-07 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 1,
    "headline": "וואו: ChatGPT זוכר עכשיו הכל מהשיחות הקודמות שלכם",
    "explanation": "OpenAI השיקה פיצ'ר חדש בשם 'Dreaming' שנותן ל-ChatGPT זיכרון ארוך טווח. הוא לומד את סגנון הכתיבה שלכם, את תחומי העניין שלכם ואת הפרויקטים שאתם עובדים עליהם כדי לתת תשובות אישיות ומדויקות יותר.",
    "impact": "מעצבת למידה יכולה לבקש ממנו 'תכתוב לי סיכום למודול על בטיחות אש, בסגנון הקליל שכתבנו יחד לקורס הקודם', והוא יבין בדיוק למה היא מתכוונת ויחסוך לה שעות של תיאומים.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBOd2FyMkVXZ01LRFZHMHZ2Wk1HeTlSOEMtNGd0azhKMi1tT0JZWkZVaHR3UUdFS0NMUzZpNEtIcExsaVo3Y1BON3ExVWR6a3F3bkp6Y1FvV2s0bGZCWFE?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 21,
    "headline": "מיקרוסופט חושפת את Scout: סוכן AI אישי שעובד בשבילכם ברקע",
    "explanation": "מיקרוסופט הציגה את Scout, סוכן AI שתמיד פועל ברקע המחשב כדי ללמוד את הרגלי העבודה שלכם. הוא יכול לסכם פגישות שהחמצתם, למצוא קבצים רלוונטיים לפרויקט ואפילו להכין לכם תוכנית עבודה יומית באופן אוטומטי.",
    "impact": "במקום לבזבז את הבוקר בחיפוש מיילים ומסמכים, מנהל הדרכה יכול פשוט לשאול את Scout 'מה הדברים הכי דחופים שאני צריך לעשות היום בפרויקט ההכשרה החדש?' ולקבל רשימת משימות מסודרת.",
    "categoryKey": "learning",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPV05vaTgybEpsRVBhZGFEai12SHFkYWZiZjRSR1VaMXFJckxYRnU5MHc2Q3QzTVFqVklRb21qck80M0I0VEZQQjBKS2tuQ2l6bURRQ2NhYkwwTnQya3d5OGsyMTU1V3gtd3ZtZ2F4b3JFTXdoY0N1YXJ4eUthalkyTUg3N2RaR3NzYVZyNEZlRkRMUUROMmV3c1ctN3htRklTdmdTeTVLOFQxNmhwOVNJU2k5WFNfbFNJWWhVSQ?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 11,
    "headline": "גוגל משחררת את Gemini Spark: סוכן AI שמבצע משימות מורכבות בעצמו",
    "explanation": "גוגל השיקה את Gemini Spark, כלי AI חדש שיודע לקחת משימה גדולה, לפרק אותה לשלבים ולבצע אותה באופן עצמאי. למשל, תוכלו לבקש ממנו 'תכנן לי סדנת מכירות של יומיים' והוא יבנה את המצגת, יכתוב את התרגילים ויכין את החומרים הנלווים.",
    "impact": "צוות L&D שמפתח קורס חדש יכול להטיל על Spark משימה כמו 'מצא 5 סרטונים מעולים על ניהול זמן וכתוב לכל אחד מהם 3 שאלות למבחן', והכלי יבצע את כל המחקר והכתיבה לבד.",
    "categoryKey": "ai_models",
    "source": "The Verge",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNSjd4YkhxRnRmSXRfS2xEZ2VPM1YxZ1hyS3BKQTVTNjU3X2xHUUxScEdwUHNBWE84RFl2dy11c3pIelRUcFV3STZOc1RfdExJN0dpbzJKdEwxekNXUVJxVjg4VWp5MFowYmVNU0QxZlo3emhLeWdhYWpIUVQ5M1RmVzRrX1lER0c5MWlhYV9VRml6SFczXzJsTF9B?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 27,
    "headline": "OpenAI הופכת את Codex לכלי חובה לכל עובד משרדי",
    "explanation": "OpenAI שדרגה את Codex, שהיה במקור כלי למתכנתים, והפכה אותו לכלי אוטומציה לכל אחד. עכשיו הוא יכול לכתוב נוסחאות מורכבות באקסל, לבנות דוחות אוטומטיים ואפילו ליצור סקריפטים פשוטים לאוטומציה של משימות יומיומיות.",
    "impact": "מי שמלמד Excel בארגון יוכל להשתמש ב-Codex כדי ליצור תרגילים מורכבים ודוגמאות מותאמות אישית למחלקות שונות, בלי צורך לדעת לתכנת בעצמו.",
    "categoryKey": "docs",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBJbzdPX3duRDNSb3Z4bHJ1SlcwRzlmT3UyMkl5Ny12QmNoVDZCNjZZeVBwTVFrUk1iVmhXY181dXB1VmJ0SlcyalE4WWtEZVlRbHVaVDN4a0dqb3RYYm9z?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 38,
    "headline": "Canva ו-Perplexity משתפות פעולה ליצירת תוכן ויזואלי חכם יותר",
    "explanation": "Canva חברה למנוע החיפוש החכם Perplexity כדי לשלב מחקר ונתונים בזמן אמת ישירות בעיצובים. תוכלו לבקש מ-Canva 'צור לי אינפוגרפיקה על 5 הטרנדים החמים ב-AI' והיא תמצא את הנתונים העדכניים ותעצב אותם אוטומטית.",
    "impact": "מפתח הדרכה שיוצר חומרי למידה על השוק הנוכחי יכול לייצר שקפים ואינפוגרפיקות מעודכנות תוך דקות, במקום לבזבז שעות על מחקר ועיצוב ידני.",
    "categoryKey": "media",
    "source": "t2ONLINE",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOVV9ZcUU2U2lFb09CRHlWcGdUaV81TGVTanB2UUw0TUR3R1hMbGZZUTdHSzVWOUd3clRlcDExNWQ4a0t6N3FQMzlIcllCSGZKek12M3RDcjZRRDE4TkpCVUZYUU0zcWlNRDdwTFZfYnlWQzY4LXlvem1IZkgzTXVJSXpoeTdQRDEwMHc2Y0pObEFLbnUxWDZ4Mk1QdEljVFRVbXhGeWRoWnlrRS1LWnViWFJRdw?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 10,
    "headline": "קלוד Opus 4.8 החדש של אנת'רופיק מגיע עם יכולות ניתוח משופרות",
    "explanation": "אנת'רופיק שחררה את הגרסה החדשה של המודל המתקדם שלה, Claude Opus 4.8. הגרסה החדשה מצטיינת בניתוח מסמכים ארוכים ומורכבים, זיהוי ניואנסים והבנת הקשרים עמוקים בתוך טקסט.",
    "impact": "מנהלת הדרכה יכולה להעלות לקלוד את כל משובי העובדים מהשנה האחרונה ולקבל סיכום תמציתי של נקודות החוזק והחולשה המרכזיות שעלו, כדי לתכנן את תוכנית ההדרכה לשנה הבאה.",
    "categoryKey": "ai_models",
    "source": "MSN",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPcElOOFpOWlhTUTlWem9YSUhjb1Q3SkhKVWlOUlJtTjhYdjNSZEVEODRXSVBrYjBoLVgwMkI1dlZ4QnBZTm5YUmMtWGhzS2RMQTlZUkxkeGc4SnNVWVFCdTg1Zy1DRm5mTGpTdEQwZEFRMGR0MTJiRHo3QllsdkMtWExsOXhtRi1YU2lNUTJRdFFFd0JSS0xLRGpqVi1QSkRYa3hJR0RaQ3NmNGhKMUNNMjJBUnFWZ3B2TlBPWTQtN1RFNGJMY0QxMVRFZDNzUEltVHl6WFEyQVZPVjBaNXc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 18,
    "headline": "כלי חדש מגוגל הופך תמונות שלכם לדמויות מצוירות להדרכות",
    "explanation": "גוגל השיקה את Dreambeans, כלי AI כיפי שיודע לקחת תמונות של אנשים אמיתיים ולהפוך אותם לדמויות מצוירות בסגנונות שונים. אפשר להשתמש בו כדי ליצור אוואטרים, דמויות לקורסים או איורים ייחודיים.",
    "impact": "במקום להשתמש בתמונות סטוק גנריות, אפשר עכשיו לצלם את מנהלי הצוותים בארגון ולהפוך אותם לדמויות מצוירות שיובילו את הלומדה. זה יוצר חיבור אישי ומיתוג פנימי חזק.",
    "categoryKey": "media",
    "source": "HotHardware",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxObWlTY1l2QlZGWDJtWUtQeDVFU0pxSzhXcFZNZDJlRTFIalNXRmpyV3V1bjN0aGZFemVnSndvdzBkbVRHWHcySFNxbERXT3V0VS10MUp4SFY2NDZNTjRuVEo0akJnbHdhU0RMRGNUYU5kUDFpbGdHLW0taWVJenR6R0pOUVJVVkk?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 33,
    "headline": "Filevine משיקה מערכת AI ליצירת הדרכות משפטיות אוטומטיות",
    "explanation": "חברת Filevine, המתמחה בטכנולוגיה לעורכי דין, שחררה מערכת AI שיודעת לסרוק מסמכים משפטיים ולהפוך אותם לחומרי הדרכה. היא מזהה את הנושאים המרכזיים, בונה תרחישים ומייצרת שאלות לבחינת הידע.",
    "impact": "צוות הדרכה במשרד עורכי דין יכול להשתמש בכלי כדי להפוך פסק דין חדש ומורכב לקורס קצר ואינטראקטיבי עבור המתמחים, תוך שעה במקום שבוע של עבודה.",
    "categoryKey": "learning",
    "source": "Law.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNRWlFUGxCQmlnUHZQdWNpVXFGcm9zOVZ0aXRid3hjUUlyOTRIUVNNbmstWEFHY0c2cmttR0ZsNnRoYm9EM0p1NmV5T0s3RzEyaGpwNWI4UUgzT2cwUXh0UDl0bzlGdTR4di16NTRxVkpDOXJ2aXRFdUdIZlNjdmlSWm1qbVo0Q2NTUTZDN0d5Q0JWLUlxTmtlRE1oWTU2UFRLRkQtTDFqQXNMUmd5MGFHcU1QaG4zd09scDNXU3VpdG1TODdpT0lDUktFeXN3b2UyeXM4alhn?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 19,
    "headline": "בקרוב: ג'מיני 3.5 פרו ינתח מסמכים של 1,500 עמודים ברגע",
    "explanation": "גוגל הודיעה על השקה קרובה של Gemini 3.5 Pro עם יכולת חסרת תקדים לעבד 2 מיליון 'טוקנים', שזה בערך 1,500 עמודי טקסט. בנוסף, הוא כולל יכולת 'חשיבה עמוקה' לפתרון בעיות מורכבות.",
    "impact": "מעצב למידה יוכל להעלות לג'מיני את כל ספר ההדרכה הטכני של מוצר חדש, ולבקש ממנו 'צור לי 10 סרטוני הדרכה קצרים שמכסים את הפונקציות הכי חשובות למשתמש חדש'.",
    "categoryKey": "ai_models",
    "source": "Tech Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPc2VxZWZ3WGhXY2gtZXN3SVpJTU9sYTNfNGhiRER6THdpaUV5UGExR1pydHgwRHBwNWxxMEJOODFLTEItdFdCSUtnbHc1QzlmeERnM0dOVVdwb3dKYVB2NFRTZ3gyMGk5b1JTOUdMSXMtQmRHUmRRcnVkMEhlaHZ5dUxWUVgxUUJ4X3Z2Z0xxODhJOUVjb2Zzc1B3WTFCOUxtcTJrZVdIanhsRHhPakV0QjBTNWM5RFJkWDl3UV8xd0V6ZEhUX0g5RFpSc3l6V3VFTEVaTA?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 42,
    "headline": "מחוללי וידאו מטקסט משנים את כל מה שידענו על יצירת תוכן",
    "explanation": "כתבת סקירה מעולה שמסבירה איך טכנולוגיית טקסט-לווידאו מתפתחת במהירות מסחררת. היא מציגה את הכלים החדשים ביותר ומסבירה איך הם מאפשרים לכל אחד ליצור סרטונים באיכות גבוהה בלי צורך בידע טכני.",
    "impact": "לפני שאתם מתחילים פרויקט וידאו חדש, שווה לקרוא את זה כדי להבין מה אפשרי היום. אולי במקום לצלם סרטון הדרכה יקר, אפשר פשוט לייצר אותו מטקסט תוך כמה דקות.",
    "categoryKey": "media",
    "source": "Cybernews",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQVnRJT1h5M2hxWHNyTHctVXFuTnJGOWhWbUFfcmItTmVyZVUzRTllT1EzNU1oT1h6cURGZ0RBQzdWa085M3NvbUYzVUxvWUhoRlprWUNndmg3Y2E3a05vbmRiRVpYbmJwZ1Q2bmhpNkd4RW1jTV82Q3phUURJYkczemx4MGJ4b0trUjdQVVprcG8tdTA2cGR0U1VadlBBVFZObkMtc3hMM0FCT3IzcHVEbjNyNWFFVG83STc4cjM2T3VOT1lwVzF2S01WWG9FZWNweHc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 36,
    "headline": "איזה כלי AI הכי טוב ליצירת מצגות? מבחן השוואתי של 8 כלים",
    "explanation": "סקירה מקיפה שבוחנת 8 מהכלים הפופולריים ביותר ליצירת מצגות בעזרת AI, כולל Canva. המאמר משווה את היכולות, קלות השימוש והתוצאה הסופית של כל כלי, ועוזר לבחור את המתאים ביותר לצרכים שלכם.",
    "impact": "אם אתם צריכים להכין מצגת למנהלים על תוכנית ההדרכה השנתית, הכתבה הזו תחסוך לכם זמן ותעזור לכם לבחור את הכלי שייצר את המצגת הכי מרשימה ומשכנעת.",
    "categoryKey": "docs",
    "source": "2 Urban Girls",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOSzdoY1prMzNpM1VzTUpXTzF5S2RONjd0dng3U1VFenVXdlRyZG81b1ljVVB4bVUtd0FNSzNjNjA3VWNUcFdxQXBoUWF4YXExcGo2NWNQUHA3NDdUYmE1ZU84RnpTeFAzVnBBa3BLYXpyZHhjMXVKZGxhQlRMX1RzanpoWVNKMndqX1U4ampOUWhLOGhKSzZGWXgxdVotdUxWOHc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 5,
    "headline": "מדריך למתחילים: כל מה שצריך לדעת על ChatGPT ב-2026",
    "explanation": "מדריך מקיף ועדכני שמסביר בצורה פשוטה איך להוציא את המקסימום מ-ChatGPT. הוא מכסה את כל הפיצ'רים החדשים, כולל טיפים וטריקים לכתיבת הוראות יעילות יותר כדי לקבל תוצאות טובות יותר.",
    "impact": "זהו חומר חובה לכל עובד חדש בצוות ההדרכה. במקום להסביר לכל אחד מאפס, אפשר פשוט לשלוח לו את המדריך הזה כדי שילמד את הבסיס ויתחיל לייצר ערך מהר יותר.",
    "categoryKey": "learning",
    "source": "ZDNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNeWhtX2JIbGN0Y0o4V090dTFORGpPZl82UG5HSnNRNGJ0RU4tbHhaUU9jckZ6anF3RS1LMTg0enFITnZZcEF6R3JlYmRoT05vcFN4SHJnaF9TZFdEb3NxZTl1T1Nlb3JZRFJqRDVLLTBLZnVQLXVlaHYzbUtTU09JRVBB?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 8,
    "headline": "וידאו: סקירה אמיתית ובלי הייפ של Claude Opus 4.8 החדש",
    "explanation": "סרטון יוטיוב שמראה בפועל מה הגרסה החדשה של קלוד יודעת לעשות. היוצר בוחן אותה במשימות אמיתיות, משווה אותה למודלים אחרים ומראה את היתרונות והחסרונות שלה בלי פילטרים.",
    "impact": "לפני שאתם מחליטים אם לשדרג או לעבור להשתמש בקלוד, צפו בסרטון הזה. הוא ייתן לכם תמונה ברורה אם היכולות החדשות באמת רלוונטיות למשימות של פיתוח הדרכה.",
    "categoryKey": "ai_models",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9OSWlKNnhvb2RSd3VCRGoxblB3RnVaU004cURJYVBPYVVQR3dqcGluTWJ4SVVhTF85RmQtSGV1aEFESnVyNFNtcHNENlhtX1ROaW9hRnJfcThwYzg?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 39,
    "headline": "וידאו: איך ליצור סרטון הדרכה ארוך מהוראת טקסט אחת בלבד",
    "explanation": "מדריך וידאו מדהים שמראה איך להשתמש בכלי AI חדש ליצירת סרטונים ארוכים ורציפים מהוראת טקסט בודדת. היוצר מדגים איך לתאר סצנה מורכבת והכלי מייצר סרטון שלם, כולל תנועה ועלילה.",
    "impact": "דמיינו שאתם יכולים ליצור סרטון סימולציה של שיחת שירות לקוחות מורכבת פשוט על ידי תיאור השיחה בטקסט. הכלי הזה פותח אפשרויות חדשות ליצירת תרחישים מציאותיים להדרכה.",
    "categoryKey": "media",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9wa0RRNE9tTW5IVDRleE9rRWJWeGZFelE1LXlNbno0ZUR2WjZwRlVqLWN2ZFdmWW0wc3JEMDJXQWItRzA4RTNESndxMXItb0FaYmdWZ2tVNXBTWFk?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 43,
    "headline": "וידאו: כך תהפכו תמונות סטילס לסרטונים ויראליים לרשתות החברתיות",
    "explanation": "סרטון הדרכה פרקטי שמדגים איך להשתמש בכלי AI כדי להפוך תמונות רגילות לסרטונים קצרים ודינמיים. זה מושלם ליצירת טיזרים לקורסים, סרטוני 'הידעת?' או קידום של הדרכות ברשתות החברתיות הפנימיות.",
    "impact": "צוות הדרכה יכול לקחת תמונות מאירוע חברה או מסדנה ולהפוך אותן לסרטון סיכום קצר וקצבי שיגרום לעובדים אחרים לרצות להירשם להדרכה הבאה.",
    "categoryKey": "media",
    "source": "findarticles.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQVUJhR0tuMG54cHZscUt4WHZZNHlHMzloS2w3SUJiYXBjd1hCdmZUdWJhSHc5RER3NnNtTmt3WkM3SjNhM3pxZXdRUFZmY1hLWFJXZkszb2JyeUxndG1HbUtFeGtiU3Jwa2ZVMmRJRHJ0aWNFQzFrYjRmeWVPLVVudGlVQTdCUTBDSzl4WTBGMndFanpTLThlUjlhVmRaMHozeEo00gGrAUFVX3lxTFA2YjFPbFM1VHZLYUdjQTJPWHNpUHR4aVI1Q3F5aFpZRWlmRWpGaGhMUG43RmI1d3hLYm9NUXRyY0RENDdjX2lialJyd0tmXzJTOTBaLUNkMWFIYzhWSVlSU0N6cThMaGNwMWxLTzZVaTM4WWFGUi1iYW1zbEprU1BTbFVybzR0cmdWZ3RvcGNvZEtMZGJRYzBkS1VuNklEOUVmOWY0TkFOMTNXWQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 37,
    "headline": "וידאו: בניתי את אותו הפורטפוליו ב-Claude, Gamma ו-Canva — מי ניצח?",
    "explanation": "יוצר תוכן תיעד את התהליך של בניית תיק עבודות ויזואלי באמצעות שלושה כלי AI שונים. הסרטון מראה את החוזקות והחולשות של כל פלטפורמה ומספק תובנות מעולות על איזה כלי מתאים לאיזו משימה.",
    "impact": "לפני שאתם בוחרים כלי ליצירת חומרי הקורס הבא שלכם, צפו בזה. זה יכול לחסוך לכם המון זמן ולהבטיח שתבחרו בפלטפורמה שהכי מתאימה לסוג התוכן שאתם רוצים ליצור.",
    "categoryKey": "docs",
    "source": "MakeUseOf",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxOWmtEdWVDMTR5d0hUanhURXN1N1JQd210clBsUXdBMU1KVEhJNVNSYjNOYi1JZmhhaVdDOWJxQ2lBZXZrZEhFZGNBaVhzOUIyemd4bXBuWWhzR0Ixa0stTUNhUHRqcWgzYkM5Z0tCUXVWLU0zU011X3BqTnA5OWM0NUJ3NC03dw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 7,
    "headline": "קלוד יכול עכשיו לנהל מספר 'סוכני AI' שעובדים במקביל",
    "explanation": "אנת'רופיק הוסיפה לקלוד יכולת חדשה לתיאום 'סוכנים' - תוכנות AI קטנות שמבצעות משימות. עכשיו אפשר לתת לקלוד משימה מורכבת והוא יפעיל במקביל סוכן למחקר, סוכן לכתיבה וסוכן לבדיקת עובדות כדי להשלים אותה מהר יותר.",
    "impact": "מפתח הדרכה יכול לבקש 'צור לי מערך שיעור על בינה מלאכותית יוצרת', וקלוד יפעיל סוכן שימצא את הטרנדים האחרונים, סוכן שיכתוב את התוכן, וסוכן שימצא תמונות וסרטונים רלוונטיים - הכל בו זמנית.",
    "categoryKey": "ai_models",
    "source": "infoq.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE13TV9oS3VyZE1WVkhjWHdteXQ1MGdtT1ZxdHVLbks1dms3RGdhQXlEWlNQd0g4c2otSEs3ZU52bTRWUzRJYlpHRHI4NzdzM0dfWXV1b3FPWHQ2RzZKQl9OVWdUcFNoNWFlb1BwYkxSZ1ZlLW8?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 28,
    "headline": "דיווח: OpenAI מתכננת את העדכון הגדול ביותר ל-ChatGPT מאז השקתו",
    "explanation": "לפי דיווח ב-Financial Times, חברת OpenAI עובדת על שדרוג מאסיבי ל-ChatGPT. הפרטים עדיין חסויים, אבל הדיווח רומז על שינויים מהותיים בממשק וביכולות שיאפשרו לו לבצע משימות מורכבות יותר בעולם האמיתי.",
    "impact": "שווה לעקוב אחרי זה מקרוב. אם השמועות נכונות, ייתכן שבקרוב נוכל לבקש מ-ChatGPT לא רק לכתוב לנו תוכן, אלא גם להעלות אותו ישירות למערכת הלמידה הארגונית (LMS).",
    "categoryKey": "ai_models",
    "source": "Financial Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNNGJ0WEREdmV6SGUyOG5rbWU2ZFA5Z2Z4Wjg5MTZiQ0V5SGk5RFVHYnZuSXJ3QjZpQXpvRXNwN2s3bXNBZlNkRThwc2hxTG1oQnBkakxnOHBuOUE0NGN3Y0h0R084ZXRKeTBOM1BUaTg1TXRHX1BOU3M4TWFnOHR2bW1ER1Y?oc=5",
    "timeAgo": "היום",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-06-07";
