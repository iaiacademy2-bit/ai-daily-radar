// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-07-26 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 7,
    "headline": "קלוד צופה בכם עובדים ולומד לבצע משימות במקומכם",
    "explanation": "הפיצ'ר החדש של קלוד, Cowork, מאפשר לו לצפות בהקלטת מסך שלכם מבצעים משימה, ולהפוך אותה לאוטומציה. הוא לומד את השלבים ויכול לחזור עליהם בעצמו בפעם הבאה שתבקשו.",
    "impact": "מעצבת למידה יכולה להקליט את עצמה פעם אחת מעדכנת נתונים במערכת ניהול הלמידה (LMS), ומהיום קלוד יעשה את העבודה השחורה הזו עבורה באופן אוטומטי.",
    "categoryKey": "ai_models",
    "source": "PCMag",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQOXNZMzVWRlZ2S08xVVBwclJrVXl5R2hrNnZRa2V4cm5ubHRzSldHN1FvUENPdFVmazdsX19oWDlCOWJremZmUzVpZEQwR0dEa1J1bnIxTmVHaVBNV1NSWTVETkZxdTY2WEdOZlUyZFNxckVvRHNMMFNwdDI0OVU0ZzB3TmxpMG54OTIybGNQZw?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 2,
    "headline": "עכשיו אפשר לדבר עם ChatGPT ישירות מהמחשב, בלי להקליד",
    "explanation": "OpenAI שחררה את מצב הקול החדש והמתקדם שלה לאפליקציית הדסקטופ של ChatGPT. מעכשיו אפשר לנהל שיחה קולית רציפה וטבעית עם הבינה המלאכותית ישירות מהמחשב הנייד או הנייח.",
    "impact": "במקום להקליד סיכום ארוך של פגישת אפיון, מנהל הדרכה יכול פשוט 'לספר' ל-ChatGPT את עיקרי הדברים ולקבל מסמך מסודר תוך דקה.",
    "categoryKey": "ai_models",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPQ2ZGQ2VYN19sTzYzdHREdUJ0RFM2eGczR2FhRFdweHZZa0tjSC1mMWxVbjEtWmh5WjFpNDBnemszbFFZOWE0STJRSmdWNlk3UXdEOUE3SWlRV1VYYmNuWm42eXBGcnlmWlotYUxWVGhkb0tKSk51amZGUWFhdWpsdjVNRmNuclQ2OFAzUl9vUXRyZjRYV3JaZw?oc=5",
    "timeAgo": "לפני יומיים",
    "trending": true
  },
  {
    "id": 38,
    "headline": "כלי וידאו חדש יוצר סרטונים כל כך ריאליסטיים שתתקשו להאמין",
    "explanation": "מחולל וידאו חדש מציג יכולות מדהימות ביצירת קטעים קצרים מתיאור טקסטואלי פשוט. התוצאות נראות מציאותיות, עם תנועה חלקה ופרטים עשירים שהיו קשים להשגה עד היום.",
    "impact": "צוות L&D שמפתח קורס על שירות לקוחות יכול לייצר בקלות סרטוני סימולציה קצרים המציגים אינטראקציות שונות עם לקוחות, במקום לצלם ולהפיק אותם.",
    "categoryKey": "media",
    "source": "Yahoo",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPdWlkTzVBZ1BfSlk2bUtsaEYydGZrcXN5M1pCTnhGV1Y0OVNYRUp6UHRVMFZTXzJzMjM3SFJ0azNBT3pTd0RwXzNaZnU0dDhJLUJ0ZFVTcnpqX2hDTU9DWmR6d0I2OVJJY3djOWNvOTFPVGNBWkZuZHZ1aHFlbGxZTUcxLUc?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": true
  },
  {
    "id": 35,
    "headline": "סרטון חובה: כל מה שחדש ב-Canva לשנת 2026",
    "explanation": "סרטון הדרכה מקיף שמסביר את כל הפיצ'רים החדשים והיכולות המעודכנות של Canva. הוא מדגים צעד אחר צעד איך להשתמש בכלים החדשים ליצירת מצגות, סרטונים וחומרי למידה.",
    "impact": "מי שרוצה לשדרג את נראות חומרי ההדרכה בארגון, ימצא בסרטון הזה השראה וטכניקות פרקטיות ליישום מיידי שיקפיצו את רמת העיצוב.",
    "categoryKey": "media",
    "source": "Mshale",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE44N3VkRzlZa2ctVzctQXM1VEVsZ05hWjdjWHlUaVhUNmozcmpLU3BmdzN3RXFZcXlZLUpHS2ZyN0xzamxYLWswTFBlNUtyUFBFeUVhUnZ6U1JHMUU?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 6,
    "headline": "אנת'רופיק משחררת את Claude Opus 5, גרסה חזקה ומהירה יותר",
    "explanation": "המתחרה הגדול של ChatGPT משתדרג עם מודל חדש וחזק יותר בשם Opus 5. הוא מבטיח הבנה טובה יותר של משימות מורכבות, מהירות תגובה משופרת ויכולות ניתוח מתקדמות.",
    "impact": "לצורך בניית תוכנית הדרכה שנתית, אפשר להזין ל-Opus 5 את כל יעדי החברה, סקרי פערים ומשובי עובדים ולקבל טיוטה מפורטת ומנומקת תוך דקות.",
    "categoryKey": "ai_models",
    "source": "Anthropic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9iczRhdUZaZWkyQ2RXakhsM1ViSF8wclZFX25KdEF6WU1UTEtMQXJhYnpiZnJRUWd2LXNoSkF0TnFQWEpBZzN2b0Z5TmhNZExyTVJUZDR3cw?oc=5",
    "timeAgo": "לפני יומיים",
    "trending": false
  },
  {
    "id": 27,
    "headline": "OpenAI משיקה את Presence: פלטפורמה לבניית בוטים קוליים חכמים",
    "explanation": "Presence היא פלטפורמה ארגונית חדשה המאפשרת לחברות לבנות, לנהל ולפרוס סוכני AI קוליים וצ'אטבוטים בזמן אמת. הכלי נועד להקל על יצירת אוטומציות מבוססות שיחה לשימושים עסקיים.",
    "impact": "צוות הדרכה יכול לבנות בעזרת Presence בוט אינטראקטיבי לתרגול שיחות מכירה. עובדים חדשים יוכלו להתאמן מול הבוט בסימולציות מציאותיות ולקבל משוב מיידי.",
    "categoryKey": "learning",
    "source": "VentureBeat",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxONWRmT2UwdXduVGFBNFVJRTRwQ19uMEJuZGZ4TmxjQ3RBWExKcTdRclhyeVBPWkxQMWZTdUh3aGowNTVqbl9oVWNhMjZ6RmxVTC1UbXkwRTRETjQ0b21WTm5kMzlQMDVjdzEzUktjdkNvZ2hXeWxGN3k0bTVFNUF0UElZRDVoNkZDbEdYbVRBanlVWTY5a1pNekE1N2VSVTUtdWhNb05uaExlaF95RlVmOGo4V1g5QU1vT1ppVGhuWDBfVTU0Q3NvTW5iNTJ3ZzRFSWZyQjN6c09za1hUR21PdXRPWmVJUQ?oc=5",
    "timeAgo": "לפני 4 ימים",
    "trending": false
  },
  {
    "id": 19,
    "headline": "גוגל מפות מקבל שדרוג ענק עם יכולות AI של ג'מיני",
    "explanation": "גוגל משלבת את ג'מיני עמוק בתוך אפליקציית המפות הפופולרית. העדכון יאפשר לקבל המלצות מותאמות אישית, לתכנן מסלולים מורכבים בשיחה טבעית ולגלות מקומות חדשים בצורה אינטואיטיבית.",
    "impact": "מדריכים המעבירים סדנאות שטח או סיורים לעובדים חדשים יוכלו לתכנן מסלול מורכב הכולל מספר נקודות עניין, הפסקות ופעילויות, ולקבל מסלול אופטימלי מותאם אישית.",
    "categoryKey": "ai_models",
    "source": "autoevolution",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPM3lKbklIR3lENUxxMjFpWHVZdlVVQVVBRE1mbkNMb0N0cm84RU9WeHBaUzVDWjFaeVlpYW92OVV2N1lqSXdlWU15N1dsblkzZER0YVlZTXhLS0JwRkE0UGF4MDVyb2dZbTN6WWVqeG0zTXRCVGVwSnF0a290OW8tNE90NGN5dk9WRW5SaU5Ra2M1UGh5aDUtNElfUk9DT1N4eTluTFpZLU9UR3gwRGJ1cnpDejBaRU5ya2Vkcnpjb2w1Vy1SaGRsazVEYjM?oc=5",
    "timeAgo": "לפני 4 ימים",
    "trending": false
  },
  {
    "id": 40,
    "headline": "טיקטוק משיקה כלי AI חדש ליצירת סרטוני פרסום בקלות",
    "explanation": "טיקטוק הכריזה על כלי AI שיסייע למפרסמים ועסקים ליצור מודעות וידאו במהירות. הכלי יוכל להפוך תמונות וטקסטים לסרטונים קצרים וקליטים המותאמים לפלטפורמה.",
    "impact": "מנהלת הדרכה שרוצה לקדם קורס חדש בתוך הארגון יכולה להשתמש בכלי כדי ליצור טיזר וידאו קצר ומושך, ולהפיץ אותו בערוצי התקשורת הפנימיים.",
    "categoryKey": "media",
    "source": "Mashable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9PX3lETjh0a0pSNVpuVC1ObElDZmRWRjRVM08xdUlZX2pYVHlBbVQ0VlBTNi12cC1Lb2dDMF9jcGhiR0dxblllR0ZlWVpEc2UzckFRUDFVMFRVdGlwSTZYX0J0MnBxMk5HeGZ0eA?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 43,
    "headline": "מדריך וידאו: כך תיצרו תמונות מדהימות עם AI בתוכנת Filmora",
    "explanation": "הסרטון הזה מדגים איך להשתמש במחולל התמונות החדש המובנה בתוכנת עריכת הוידאו Filmora. הוא מראה כיצד להפוך רעיונות פשוטים לתמונות ויזואליות מרשימות שניתן לשלב בסרטוני הדרכה.",
    "impact": "במקום לחפש שעות תמונות סטוק גנריות, מעצב למידה יכול לייצר תמונות ייחודיות ומדויקות ללומדה שהוא בונה, למשל, תמונה של 'מהנדסת בודקת שרת במפעל ישראלי'.",
    "categoryKey": "media",
    "source": "Breaking AC News",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQM1ZuMHFmaGFJMUt1SW9Wa25COFJaX1RXOFJqLXB2Q1g3V0RiNW9fUHhHYTY2dDlMLXc4b09Hc1IwTG9XTUtOZTdpUmppSUlEN0dVelNtN0hDZDhTWlFfeUh3Rzl2RFhBU2l4Tk1OY0FmTzlmM1RhVWlLa1JqYjFCQ1pBa1Rxd2RybEdOdF84RkFCcW9NWWlKR3g4ald0NHNncHZ0TC0yNVdzSUZlakQ1eXRIMHUyamUzczFUc3IxQU9YMjJ5YjlxQg?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 20,
    "headline": "מיקרוסופט משדרגת את Copilot החינמי עם מנוע GPT-4 Turbo",
    "explanation": "מיקרוסופט מעניקה למשתמשי הגרסה החינמית של Copilot גישה למודל GPT-4 Turbo המתקדם. זהו שדרוג משמעותי שמביא יכולות גבוהות יותר ללא עלות נוספת.",
    "impact": "כל איש הדרכה בארגון, גם ללא תקציב, יכול כעת להשתמש בכלי חזק יותר כדי לנסח מיילים, ליצור רעיונות לסדנאות, או לסכם מאמרים מקצועיים בצורה טובה יותר.",
    "categoryKey": "ai_models",
    "source": "Mashable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5UUUEwT3QwWHU1cjZQcmQyUnBOOU9sdlNYbl9rSFlLZWxnbHpSWW5HeExpRXJsTW9ZSUJFRlFTQzRFYXBXa2RQc09IbjdIZlV3UFVVaG1uWG4xbG9jajlraG4ySVpmSzh1QlE?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 1,
    "headline": "חדש ב-ChatGPT: יכולות ייעודיות לתחום הבריאות",
    "explanation": "OpenAI משיקה את 'Health in ChatGPT', גרסה מיוחדת של הצ'אט המיועדת לסייע לאנשי מקצוע בתחום הבריאות. הכלי נועד לעזור במשימות כמו סיכום מידע רפואי והכנה לפגישות.",
    "impact": "צוות הדרכה בבית חולים יכול להשתמש בכלי החדש כדי ליצור תרחישי סימולציה מורכבים ומציאותיים להכשרת צוותים רפואיים, תוך שמירה על סטנדרטים גבוהים של דיוק.",
    "categoryKey": "learning",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1SZ20wcWdqZlZXdjZSYXpVcHNtS1R5cVFydGdYRnpLSVV5R1pLUXRDR1hQOWpjaFRBcktWNGhjWVlxcUtRY1BjYmZBVDZtRThCWFVBY0pn?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 34,
    "headline": "מדריך וידאו: כך בונים קמפיין פרסומי שלם עם ה-AI של Canva",
    "explanation": "סרטון הדרכה מפורט המדגים את כל שלבי העבודה עם 'Canva Grow AI Ad Generator'. הוא מראה איך להגדיר קהל יעד, ליצור ויז'ואלים, לכתוב טקסטים ולהרכיב מודעה שלמה.",
    "impact": "מפתחת הדרכה שצריכה לשווק קורס ניהול חדש למנהלים בארגון, יכולה לעקוב אחר המדריך וליצור תוך שעה סדרת מודעות פנים-ארגוניות מקצועיות ומושכות.",
    "categoryKey": "media",
    "source": "quasa.io",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPRWxPVUFtVGJJQTRoREdmVnI3YzhHSHJJaS1JMHkwVF82cDViRUMxSS1vaVJpV25FZDk5Y0R3MjZUM2k0SEotNVBQcUZ6RW03ZDRwSVdPcUxDSVpRR1V2MXdEcS04UV9ibU1oa1lCUDNrMVMxaXpFRmtyWW9ZbEFLejktcXEwNThTbHlz?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 4,
    "headline": "בדרך לעבודה? דברו עם ChatGPT ישירות ממערכת הרכב",
    "explanation": "הגרסה הקולית של ChatGPT זמינה כעת דרך Apple CarPlay. זה מאפשר לנהגים לנהל שיחה עם הבינה המלאכותית, לשאול שאלות ולקבל תשובות בלי להוריד את הידיים מההגה.",
    "impact": "מדריך שנמצא בנסיעה לסדנה אצל לקוח יכול לנצל את הזמן כדי לעשות סיעור מוחות קולי עם ChatGPT על רעיונות לתרגילים, או לקבל סיכום מהיר על החברה שאליה הוא נוסע.",
    "categoryKey": "language",
    "source": "Mashable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBSSGlPU0dyYnE2Y2paQ09NOFNYVmpndjVpNF9fQTJwWExILTZWQzUtV0dKSXdGX2xId1gwRm5RYjF0X294YnNBV054Q1QzYTZTRW5DV3ptVFg0OVNrOXJVTnY0UXcyOTZwMVJuNFJLNHFsUmJ2?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 15,
    "headline": "גוגל משיקה את Gemini Spark, כלי AI חדש למשתמשי Pro",
    "explanation": "גוגל החלה להפיץ כלי חדש בשם Gemini Spark למנויי AI Pro בארה\"ב. הכלי מציע יכולות מתקדמות יותר ונועד לספק חווית שימוש משופרת למשימות מורכבות.",
    "impact": "זהו כלי שכדאי לעקוב אחריו. כשיגיע לישראל, הוא יוכל לסייע בפרויקטים גדולים כמו בניית מודל כשירות (Competency Model) שלם לארגון, על ידי ניתוח תיאורי תפקידים וזיהוי תמות מרכזיות.",
    "categoryKey": "ai_models",
    "source": "9to5Google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE5KYzQ1MEREd2NRMmNGRkp4T0xxeXI2amJsa0pCb1k1bXBFaFBaNTRkV0Q3djdzVUgzclJuVGZzU1phNWJHQzZFQUNwM2lZS1p0eDFidE9adFdyYU1mUTVYSm5VT1U0V3dlcWk4N2FQUFAtUQ?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 26,
    "headline": "OpenAI מציעה תוכנית ChatGPT מיוחדת לעסקים קטנים",
    "explanation": "התוכנית החדשה מציעה לעסקים קטנים גישה ליכולות מתקדמות של ChatGPT במחיר מותאם. היא כוללת כלים לניהול משתמשים, שיתוף פעולה ורמות אבטחה גבוהות יותר.",
    "impact": "צוותי הדרכה קטנים או יועצים עצמאיים יכולים כעת לקבל גישה לכלי עבודה שיתופי חזק, שיאפשר להם לפתח תכנים יחד, לנהל פרויקטים וליצור חומרים בצורה יעילה יותר.",
    "categoryKey": "docs",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE8wRGdxajhiVG1FbjR4eWZNV0VmMUhuZ0VtWi0zT28wMFd0VGZUZVhRZFpYSEM0Y2puWHFhWFc1bkhHcHE4V282NHZGRE9KTl9GTW50b1g0QWNJclJLcklKalh2LVhUcVEzT0NNTncxcXNuQmhIYlE4?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 41,
    "headline": "סרטון הדגמה: הכירו את FLUX 3, מחולל וידאו חדש ומבטיח",
    "explanation": "חברת Black Forest Labs חושפת את FLUX 3, כלי AI חדש שמתמקד ביצירת וידאו במקום תמונות סטילס. הסרטון מציג את היכולות המרשימות של הכלי, כולל יצירת תנועות מורכבות.",
    "impact": "מי שמלמד תהליכים טכניים או שימוש בציוד יוכל להשתמש בכלי כזה בעתיד כדי ליצור סרטוני הדגמה קצרים, במקום להסתפק באיורים סטטיים או לצלם הפקה מורכבת.",
    "categoryKey": "media",
    "source": "Decrypt",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5jQjdKdGhwQzItNDJzNkFReThPUk5iWW0wLWhoSUpJYUZBYVBLWG01QjVCUHR0WXJxTVRBSjdUR2tfTVRWOG5VaDUyQUhEenN0NlRhcFphdDd0M2ZpYlV1ZU5ucHJDQkJlUFVpamZmV2x5cU54dzBsMlRMTGFJNFXSAYcBQVVfeXFMTVczNWFYUExwOFY2VHdTUi1BVFUyYjR6b01OVGFONUpFU000MHVoTjZLMlZVWWlacFhHTDFfeFdLY0VBanFkWFFZS0pPMkdZVm5tNmNkSjdjVEptZFBrWEQzMlVrZFE2WlFERHZmMENZU0l6OV9PTnNES28wbkozLUJOLVB1WEo4?oc=5",
    "timeAgo": "לפני 4 ימים",
    "trending": false
  },
  {
    "id": 10,
    "headline": "קלוד משדרג את מצב הקול עם מודלים חזקים יותר",
    "explanation": "אנת'רופיק עדכנה את יכולות השיחה הקולית של קלוד עם המודלים החדשים והחזקים שלה. העדכון מאפשר שיחות טבעיות, מהירות ומדויקות יותר עם העוזר הקולי.",
    "impact": "מפתח הדרכה יכול להשתמש בגרסה המשופרת כדי 'להקריא' טקסטים ארוכים של לומדה ולקבל משוב קולי מיידי על בהירות, קצב וטון, ולשפר את חווית הלומד.",
    "categoryKey": "language",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPTlo0bXJZb1JaV0MteE1fQkhUNU1uRjlpN2lxcmd5aVM0eTZfbjMwYldQWXdxU2EzLWhOcXdnQkh5WnJmTzRoZEk1c3laczdESFpOQmUwRkl6SmJVTHhVYVdqS1AyTFpSVkhIdkNTMFNPQUJVNzJITU9hQzBrQnJ1cjY0cjZ0aG9VVEdCTVl6R0NjcmtSbFM0M3ZhWQ?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  },
  {
    "id": 39,
    "headline": "כלי חינמי חדש הופך תמונות מוצר לסרטוני וידאו קצרים",
    "explanation": "חברת EHunt השיקה כלי חינמי המיועד למוכרים באתרי מסחר, שיודע לקחת תמונות של מוצר וליצור מהן סרטון קצר ודינמי תוך שניות. הכלי נועד להקל על יצירת תוכן וידאו שיווקי.",
    "impact": "אם אתם מפתחים הדרכה על מערכת תוכנה חדשה, תוכלו לצלם כמה צילומי מסך מרכזיים, והכלי הזה יהפוך אותם לסרטון טיזר קצר שיציג את יכולות המערכת.",
    "categoryKey": "media",
    "source": "24-7 Press Release",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxPWDJhZVhoYzFPd2RNX05UU19hVjhseG5SMlNoejc2ZF9xMlJQejl2RHhhVFRSV1VGSVA3eUYyNEVfWVR3R2ZQcTAybWM5b0o2WUtvSldOcUk0NURGNGVqVFNqSkd0OC1idlZ2VE1NR1JtMGZ3Wl9vbnF3QnNaRmVudzJfMTRHZGVQS0pVR3N4b3N3RUQxOFVqd3pQUXo2ZTEwZEhBazNyY1c0d2hUdnZCTUloVFlUTnpEcDhvTjRFbmVPMjFTZ083Rmd1RkpJRWNhMW1GWHNpUW8yc2s0NlpoUEJXZXV5cUU?oc=5",
    "timeAgo": "לפני 3 ימים",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-07-26";
