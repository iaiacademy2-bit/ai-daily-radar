// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-09-27 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 3,
    "headline": "OpenAI חושפת את GPT-6: שני מודלים חדשים, Sol ו-Luna, משנים את המשחק",
    "explanation": "הדור הבא של מנוע ה-AI הפופולרי בעולם הוכרז, עם שני מודלים חדשים. Sol מתמחה ביצירתיות ורעיונות, בעוד Luna מיועדת לניתוח נתונים ודיוק לוגי.",
    "impact": "מעצבי למידה יכולים כעת להשתמש ב-Sol כדי לקבל רעיונות מקוריים לקורסים, וב-Luna כדי לבנות תרגילי נתונים מורכבים ומדויקים למנהלים.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFB4SldKWWgzNDExSThTZW9MRTQ5WHE3VFRZMl9oSjIzaVhuZEZaY1ZSUTFxZTJFaFpUanlncTQySUg5SlRGVnNkQXZ0S3IxLWJScXNkLXY2Z3Jzbk5WR0UwSFp0NmUxN3c?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 11,
    "headline": "גוגל מציגה את Gemini Live: דמות וירטואלית (Avatar) שתדריך את העובדים שלכם",
    "explanation": "גוגל שחררה את Gemini 3.8 Live, שמאפשר ליצור דמות וירטואלית שמדברת ועונה לשאלות בזמן אמת. הדמות מסוגלת להציג מצגות, להדגים תהליכים ולנהל שיחה טבעית.",
    "impact": "צוותי הדרכה יכולים ליצור מדריך וירטואלי אישי לקליטת עובדים חדשים, שיענה על שאלות נפוצות 24/7 ויפנה זמן למנהלי ההדרכה.",
    "categoryKey": "learning",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNMVR6bVg0OGpENG9SaWNDa3FnQWVxV2xwSjAxOXRXN09GcWxvbURoaTZVNkl0THIzX01rNnpEWkFuMGtpV2JPZXlJTmpLekZLeUF5Um5qWnlpaVYwNUZfOWdMcFlVd1dkeU1XVTItOEZ5eXRQRDJhWnlZMlVYbjFIV09kdTFEQUtTMU1HMFMxTVdENU5CajZqeTZwblBqd1JJc3Z2bi15amE?oc=11",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 40,
    "headline": "גוגל פתחה לכולם בחינם את כלי יצירת הווידאו שלה",
    "explanation": "כלי יצירת הווידאו המתקדם של גוגל, שהיה זמין עד כה למספר מצומצם של משתמשים, פתוח עכשיו לשימוש חופשי. הוא מאפשר להפוך טקסט פשוט לסרטונים קצרים ומרשימים באיכות גבוהה.",
    "impact": "במקום לחפש שעות סרטוני סטוק, אפשר עכשיו לייצר סרטון הדגמה ייחודי על 'עבודת צוות היברידית' תוך דקות, שיתאים בדיוק למצגת שלכם.",
    "categoryKey": "media",
    "source": "Digital Trends",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNRXZHVmc0Y3UwRWZYQW1HSDZ1WUhucjBDRTV5Z1hiaWdGT1A0QU1fMk5raGtJeExtWVB6V0h2MW9VbkR3UEstVUpiMUtxWGhxMDJvMEVTdG1TdGM0R290SE5ZSk9QRmtLYlJHRWVPaEttWlpJT0FYckNpZGx4Y1BzZnJWNWd2OVdNYmtkNG1EakdWeHVBcnFSV005X1REM1d1WlJkT0tHUXRmQlU?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 45,
    "headline": "כלי המחקר של גוגל מתחבר ליוטיוב והופך סרטונים למדריך למידה",
    "explanation": "ה-Gemini Notebook של גוגל יכול עכשיו להתחבר לרשימת הצפייה שלכם ביוטיוב. הוא צופה בסרטונים, מסכם אותם, ומארגן את המידע למסמך למידה מסודר עם שאלות ותשובות.",
    "impact": "מפתח הדרכה שאוסף חומרים לקורס חדש יכול לתת לכלי רשימת סרטונים ולקבל תוך דקות סיכום מקיף של כל הנושאים המרכזיים, במקום לצפות שעות.",
    "categoryKey": "learning",
    "source": "androidpolice.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNYkhYYmRGcGFOdEdMZjNpRDU2OTVuYVduOVY3aXRCZUZmNzF5bG11WlROR0xmczZHcUNxYlYtYUJDelNCejZaZVh3ZDVXam8zSDRRMWJTUlZTUlRZb3Y0LVF4MkxkLXJpaEF4anZ5U2FuQTBhbE1LOG5Ec2RhaFg0WmQweklKbXFCMm02OVV2WFd1RzdHa3RTT2ZrNDl2aTBpcS1TbDZBTVNTZFJN?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 19,
    "headline": "יוטיוב משיקה כלי AI חדשים שיהפכו כל אחד ליוצר תוכן מקצועי",
    "explanation": "יוטיוב שחררה סט כלים חדש המופעל על ידי AI כדי להקל על יצירת סרטונים. הכלים עוזרים בכתיבת תסריטים, עריכת וידאו, ואפילו יצירת מוזיקת רקע מקורית.",
    "impact": "מדריך טכני שצריך להכין סרטון הדרכה על תוכנה חדשה, אבל אין לו ניסיון בעריכה, יכול להשתמש בכלים האלה כדי להפיק סרטון שנראה מקצועי בלי ידע מוקדם.",
    "categoryKey": "media",
    "source": "YouTube Official Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQQVQ2dVk0b2FRbThjU1k3RXFDellhU3JxTlBOR2oxTnNvOXM4c05ncllSZENZTUJDUTVoLXdFSmJ4WjllSW5BNTZaVkpDUHN3Z2xycGo0N0pKNkJNSUVVcjllUklIemc4Um9lampvckdUYmxaclZKTUJJRXVSaTdxSGp3amhpWVFZSWpFTWhsaw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 17,
    "headline": "חדש ב-Gemini: ה-AI יתקשר ויחכה על הקו בשבילכם",
    "explanation": "גוגל בודקת פיצ'ר חדש שמאפשר ל-Gemini להתקשר בשמכם לעסקים, כמו מסעדות או מוקדי שירות. ה-AI ינהל את השיחה, יקבע תור, ואפילו יחכה על הקו אם יש צורך.",
    "impact": "מנהלת הדרכה שצריכה לתאם סדנה חיצונית מול ספק יכולה לבקש מ-Gemini להתקשר, לבדוק זמינות ולקבל הצעת מחיר, וחוסכת לעצמה את זמן ההמתנה והתיאומים.",
    "categoryKey": "language",
    "source": "The Verge",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNRTNwMXQ4a0NQYXc4aUlDaW5OUkF4UGVnQ25Uc1NOTU5BeVN2ZUMzTi1XSHR6a0oxQ3hMYm03dnFoaHZXT09jNFdfcFMyWjlfRmRZUmN3d1dvb2ZrbFJXSDA3dndlNXJyRU5OOG05cHAxVFVzeUJYTmNsbVNxdmRYeUpnSFZTa3J4OXRpb1dqeEQ5QTVvRHpUdW53?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "ChatGPT מתחבר למייל, ליומן ולסלאק שלכם",
    "explanation": "הגרסה הקולית של ChatGPT קיבלה שדרוג המאפשר לה להתחבר לחשבונות המייל, היומן והסלאק שלכם. עכשיו אפשר לבקש ממנו בקול לסכם מיילים או לקבוע פגישות.",
    "impact": "במקום לעבור על עשרות מיילים בבוקר, מנהל צוות פיתוח הדרכה יכול פשוט לשאול את ChatGPT: 'מהן שלוש הבקשות הדחופות ביותר מהשטח?' ולקבל סיכום קולי.",
    "categoryKey": "docs",
    "source": "tech-insider.org",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTE9YOG5NdzVkWTdJNy12WW1hbVptUmZfdFFTakk3M3JObDY3WXh1WHptQndmOVdWXzRndndNR0J2UnZyOW10SHJOLVVjdEJrR2s2eTZPVVRRWnN3c2hoR2dzdFctQWo0cXgxUlBVODVkRDFHMHlOS1pWdlB1Z1g?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 1,
    "headline": "מיקרוסופט משדרגת את Copilot עם מצב 'טייס אוטומטי'",
    "explanation": "העוזר החכם של מיקרוסופט, Copilot, קיבל עדכון משמעותי עם מצב 'טייס אוטומטי' חדש. במצב זה, הכלי יכול לבצע משימות מורכבות מרובות שלבים באופן עצמאי, כמו מחקר נושא ויצירת מצגת שלמה.",
    "impact": "צוות L&D שמפתח קורס על ניהול זמן יכול להנחות את ה'טייס האוטומטי' לאסוף נתונים, לבנות שלד למצגת, ואפילו להציע פעילויות למידה מתאימות.",
    "categoryKey": "docs",
    "source": "The Official Microsoft Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQdnBldHlfWlM4TjV6Y2NWTlNMUjFzQ0ZUa2M5MTkwX2pkaHNhbXc0TDJJbUs4bmxHZ3RSXzQ3SlFXd3VuemZFaWJFekFneHRNUDBNb2ZyTmgxVWFqR1BySzZRelo1ZjdTWXhuYjlGc1dOQm9JNTJMWHNlSHY0Z2FxS3hhMnp1OGVqWFdMTGlFYXZoZV9mc29ySDhGdUlZOW1RM3Rv?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 6,
    "headline": "המתחרה של ChatGPT מציג: Claude Opus 5.5 החדש",
    "explanation": "חברת Anthropic שחררה גרסה חדשה ומשופרת למודל ה-AI שלה, Claude. הגרסה החדשה, Opus 5.5, מציגה ביצועים משופרים בהבנת הקשר, הסקת מסקנות ויצירתיות.",
    "impact": "מי שצריך לכתוב תסריט ללומדת סימולציה מורכבת יגלה שהגרסה החדשה של Claude טובה יותר ביצירת דיאלוגים אמינים ועלילות מסתעפות.",
    "categoryKey": "ai_models",
    "source": "Anthropic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE9xbTN1a0tOdm9kT0JxbVBHMU9XYUhpUjd0MHNFYm8yd2pRMnhjdEYzdjF3ckZEY1V0a2ZQTXlyRUhteVozMlhDbVQ3Mm1KWlRYbUVF?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 4,
    "headline": "ChatGPT זוכר אתכם: פיצ'ר הזיכרון החדש משנה את כללי השיחה",
    "explanation": "מעכשיו ChatGPT יכול לזכור פרטים משיחות קודמות שלכם ולהשתמש בהם כדי לתת תשובות מותאמות אישית. אפשר ללמד אותו על סגנון הכתיבה המועדף עליכם או על פרויקטים שאתם עובדים עליהם.",
    "impact": "מעצב הדרכה יכול ללמד את ChatGPT את כללי המיתוג והכתיבה של הארגון פעם אחת, ומאותו רגע כל תוכן שייוצר יהיה תואם למדריך הסגנון הארגוני.",
    "categoryKey": "language",
    "source": "The Tech Buzz",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQamdydnJtdTFaM01QR1FaUVczbTFsR2E2Mm1hTHVNY1JuM0dfb0oyRjR5b1RUU0p4eEpIUERCNWtRelY1c1NuajM0OV9kcDF3Q3dyZFVYbnp0eVhfY0pIdlRsYWYzOTRUeUZhTTlsTW5rVVNJSjNFaC1DaFlzUE51QW12Wk51R0ppVVQ0OW0zWDYtdw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 37,
    "headline": "חברת Xelta משיקה מחולל וידאו שמכוון להפקות קולנועיות שלמות",
    "explanation": "כלי חדש בשם Xelta שואף לקחת את יצירת הווידאו מ-AI לשלב הבא. במקום ליצור קליפים קצרים, הוא מאפשר להפיק סצנות ארוכות ומורכבות עם שליטה על דמויות ועלילה.",
    "impact": "לצורך הפקת סרטון תדמית פנימי על ערכי החברה, ניתן להשתמש ב-Xelta כדי ליצור סצנות מותאמות אישית המציגות את הערכים בפעולה, במקום להסתמך על צילומים גנריים.",
    "categoryKey": "media",
    "source": "natlawreview.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPbXVKYURFV3lBblFsXzQ2OHo1OUdvaFBWYTlHVW5yclhXeXlDbVhQaXhIYTFjSFZPNWtwVGstNFQzZlR6Si1ENlZlUTNlUU1OV2ZjZ0RBQUt1WkVtNlhReWpIZWlCSmZkNWN0M3RtV0JLcktISVc0ckRfX3hVTTFTWnJaaDJtdmRoeWdSQmx1cHA2NUZPMzBRbmRQWjBlc0RGU0oxRjFyQ2I3Xy1O?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 21,
    "headline": "מיקרוסופט אורזת את כל כלי ה-AI שלה לאפליקציה אחת מאוחדת",
    "explanation": "מיקרוסופט משיקה אפליקציית Copilot חדשה שמאחדת את כל יכולות ה-AI שלה למקום אחד. האפליקציה תוכננה במיוחד עבור שימושים עסקיים ומציעה ממשק משתמש פשוט ואינטואיטיבי.",
    "impact": "מנהל הדרכה יכול כעת להשתמש באפליקציה אחת כדי לנתח משובים מקורסים, לכתוב תוכנית הדרכה שנתית וליצור מצגת להנהלה, בלי לקפוץ בין כלים שונים.",
    "categoryKey": "docs",
    "source": "GeekWire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNMHk5VWlTZGRDSnh4UVpoMTV4aWxVazJOZ0M2ZlFrM3B4cFBZb0hFeUZSRTctc3ZCejE5QXlPckIxSVQxQUFsTnd2eFVQZ0NFcEdYd2MwZEk0TG5JdVNuUnc1eGh2UEUtcVNuVU1sSFQySmJDTjBHc3BRUllXc1dNOG90QnBiWWdSWHAwQWNZUUhvdEMzM2t1Z1RoSURCeXF4YmpZMDRiWmlwdzhYMkcyNUpaenR6X04yNkhsYVdGSXlQZ2ZsSnpnRWN0czI?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 42,
    "headline": "כלי חדש בשם xTool מציע חבילת יצירה ב-AI לעבודות יד ואומנות",
    "explanation": "חברת xTool השיקה חבילת תוכנה חדשה שמשלבת AI בתהליכי יצירה פיזיים. היא מאפשרת למשתמשים לעצב דגמים דיגיטליים בעזרת AI ולשלוח אותם ישירות למכונות חיתוך בלייזר או מדפסות תלת-ממד.",
    "impact": "בסדנת מנהלים חווייתית, ניתן להשתמש בכלי כדי לאפשר למשתתפים לעצב במהירות אב-טיפוס פיזי לרעיון שלהם, מה שהופך את הלמידה למעשית ומוחשית.",
    "categoryKey": "media",
    "source": "PR Newswire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxQeTFkM3NtZmhiTU82bVJCS29KUklaMi1rSkx4WWtaNUdRbU1rYnlFbmE4engyVVotd1FLMGVQTC04WEtMZmg0dDZLX3VKQXpNWGpVVFhYOTlqRW03VTlUdGxmN0czMDZnNDdUYWZXOGlqM1BrR3JtamxLSklqUnRtSnFHcUp1NkgydlVpTnkweG1pREVrdUFhX1lBQUhrUWJoYXptSHh1TGVMS2c0U2daNW9FaHFqckhzYm9ubVFJY0lLOElyWUR4dWVMUnFaRkxadFJzWGNNdHgwcmctYWFfcms2SEF0bm13?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 38,
    "headline": "מדריך וידאו: איך להפוך תמונות לסרטונים באמצעות כלי AI בחינם",
    "explanation": "סרטון הדרכה חדש מסביר צעד אחר צעד כיצד להשתמש במחוללי וידאו מבוססי AI כדי להפוך תמונות סטילס לסרטונים דינמיים. המדריך מתמקד בכלים חינמיים וקלים לשימוש.",
    "impact": "מי שמפתח קורס על תולדות החברה יכול לקחת תמונות ארכיון ישנות ולהפיח בהן חיים, וליצור סרטון היסטוריה מרגש במקום מצגת סטטית.",
    "categoryKey": "media",
    "source": "FinancialContent",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPaE13N1BYVEtWT0hRMTQxRjNVZmM5djlfNjBFMnRvSG8tb1lKd0ZKemlhOFZUc0xhRHhHX014ZnU3aTBXMFZ0NVpHcTZadDJLM1hrWWZZQTBoQ0tmTVVxQTRaYVpmQW1Ja3l0ZmQ4ekFWZk5VWkZxUmwtYkQyWXI1dzExQU1iQkZiVTBlc2ZyWnRtMk9oNWt1VUVLNXkwVmo4NThqZnNxT3ppQ1NpdndoTUhsc2pGWktEZG5QVXM3RmhLcUt1QXU4dXFoNHdCV0hjYUdzSlJ3?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 32,
    "headline": "עורך התמונות החדש של גוגל קורא תיגר על Canva ופוטושופ",
    "explanation": "גוגל השיקה כלי חדש לעריכת תמונות מבוסס AI, המשלב את הפשטות של Canva עם יכולות מתקדמות שמתחרות בפוטושופ. הכלי מאפשר לבצע עריכות מורכבות באמצעות פקודות טקסט פשוטות.",
    "impact": "במקום לבקש מהגרפיקאי עזרה, מפתחי הדרכה יכולים עכשיו להתאים תמונות לקורסים בעצמם, למשל 'להחליף את הלוגו על החולצה של המצולם ללוגו שלנו'.",
    "categoryKey": "media",
    "source": "Lifehacker",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNNnpTSlNERGhELUtOUjlIQXJ4UXFybUtET0RxWGJyRWluNndjV0xUcjUxRTFrSFBic0hPWHkyTy1CWGFoVVlKVXVTMmxPTjBDMlp3UGEtTW1JWXlXVjlKbVgxNUJ0VnN3d1AtX3o0SmJ2WDgtVFU3a1JzSG5GdGJXREt3WGhpS1NmX3JqYWpkWHNtVHo4?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 28,
    "headline": "הכירו את Muse: סוכן ה-AI החדש של מטא (פייסבוק) צובר תאוצה",
    "explanation": "מטא השיקה סוכן AI חדש בשם Muse, שזוכה לפופולריות רבה. הכלי מתמקד ביצירת תוכן ויזואלי וטקסטואלי עבור רשתות חברתיות, ומציע אינטגרציה עמוקה עם פלטפורמות כמו פייסבוק ואינסטגרם.",
    "impact": "צוות הדרכה שרוצה לקדם קורסים חדשים בקהילות הפנימיות של הארגון יכול להשתמש ב-Muse כדי ליצור פוסטים וסרטונים קצרים המותאמים לכל פלטפורמה.",
    "categoryKey": "language",
    "source": "CNBC",
    "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTFB2MWNvQml5ZUQzbFhpU1lMenVhSHNTN2pPWDd3cHhSdTZ0enFlaXdEWThSODNpX0RlUno4TFJXSXlYVmwyX3J5bFNVdXZ4b3dFMHloR3AzeDZaMmxDQjd5SXhNQUZNM2xoak9NSWlEUG0yZU4xLW9TcVZqSC1KVzTSAYQBQVVfeXFMUDhTVzJFMThuYm0tUlNDTGFzeTdiTkJ0MWtjbkpLVVpuM3UtUVl0RDlmQmh5R08wZ3B0R0tGTjNuYmpPUlZuTWJuNUF4Z0F3NU0tbVN2X1k3bVh0aklkSkJVX08yaGt1NC0wSnpRd0hsMEwtQm5nRlYxMEU0eWlFenRfVVpI?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 26,
    "headline": "OpenAI משיקה את GPT-6 Sol ו-Luna עם מחירים נמוכים ב-50%",
    "explanation": "לצד ההכרזה על המודלים החדשים, OpenAI הודיעה על הוזלה משמעותית של 50% במחירי הגישה למפתחים. המהלך נועד להאיץ את האימוץ של הטכנולוגיה החדשה ולאפשר ליותר חברות לבנות כלים מבוססי GPT-6.",
    "impact": "הוזלת העלויות עשויה לאפשר למחלקות הדרכה עם תקציב מוגבל לפתח כלי AI פנימיים, כמו בוט שיענה על שאלות עובדים בנוגע למערכת ה-LMS.",
    "categoryKey": "ai_models",
    "source": "Pulse 2.0",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1wdTN1MVdkb2tJZGZldm1KNFhaQUt5bUJPbU1zTDkyeTR2U0R2Nzh1ZXpIZ3lhSTBMSVJJSlM5ZFhRY2Z5UTNJSXpnQm42aEl4QlM4a1RNMnZVaTYzX1pwTlNYZknSAWpBVV95cUxNNjhkNkJFaGlrV2RWb1ZfSF9yOTJCWEhzS2F4dFdUZi0xR2N4dTNDRnctdFp6eXk1SHpwYmxMOFM3UV9ERkRXNlJwUUphVFp3Ti1ONzBlTFVVRS1RN3V4aUZIblFKNU42eDh3?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 36,
    "headline": "Canva משתפת פעולה עם EY ליצירת פלטפורמת AI לאנשי מכירות",
    "explanation": "חברת הייעוץ EY, בשיתוף עם Canva, משיקה פלטפורמה חדשה המשתמשת ב-AI כדי לתזמר תהליכי מכירה. הכלי מסייע ביצירת חומרי שיווק מותאמים אישית ובניהול אוטומטי של התקשורת עם לקוחות.",
    "impact": "מחלקת הדרכת מכירות יכולה להשתמש בפלטפורמה זו ככלי למידה, המאפשר לאנשי מכירות חדשים להתאמן על יצירת הצעות מחיר ומצגות מנצחות בסביבה מבוקרת.",
    "categoryKey": "learning",
    "source": "EY",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijwJBVV95cUxOVnkyN3hHSTJ1eVBUVHlqZjVSWGZfbVdQeDBGa0YwN2dSYmx6elB6d210d1oybUFRTjl5a0NNSGxXeTd6XzFYRDdiR0MyQ2d5RGVqV1kzdG5OcEZBN3JHQ1FoaF8yeURHU1plU2d2WklIcGgtN205YUNYTWI2Q3FkTTg5YVBPTENycS0zdjdyV3lLRzYwM0UtMlJheWwwMFBRWEJCSEJEUnhnWjVXVXlPUTBhQ3dOaGVEMk54OHJwMzEzdE9RV0RHc0h2Z0JHY3BRczFyUEY4MUF5UFBla3BZWGxGUEpLVlppQ2cweUtQVE9uN185X1l6N0pZcFRxYzktWFVIazJLbHVZYk1SZF9F?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-09-27";
