// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-10-11 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 2,
    "headline": "וואו: ChatGPT מציג תשובות ויזואליות עם תמונות וגרפים",
    "explanation": "העדכון החדש של ChatGPT, המבוסס על מנוע GPT-6, משדרג את התשובות מטקסט בלבד לתשובות עשירות ויזואלית. הוא כולל כעת תמונות, גרפים, טבלאות וכפתורים אינטראקטיביים ישירות בתוך הצ'אט.",
    "impact": "מעצבת הדרכה שמכינה מצגת על ניהול זמן יכולה לבקש מ-ChatGPT להציג את 'מטריצת אייזנהאואר', ולקבל מיד תרשים ויזואלי מוכן לשילוב במצגת, במקום רק הסבר טקסטואלי.",
    "categoryKey": "ai_models",
    "source": "MacRumors",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5aWlRqTFkxNlBENTZYRC0zOFF5Zjg4b3BxR2syaTRtY1NfbTlRQXhkbkhKQWppRXRTUGFQZmM5SGJmOHJaRXRYQlN6ZFlpOWRVWlB2em5IZ1BXU19kQ01iQkVrWEdXNnRLVWZLNg?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 14,
    "headline": "גוגל משחררת 'סוכן AI' שמבצע משימות מורכבות במקומך",
    "explanation": "הכירו את Gemini Agent, כלי חדש מגוגל שיכול לבצע משימות ארוכות ומורכבות באופן עצמאי. הוא מקבל גישה משלו למייל, ליומן ולדרייב כדי לתכנן, לארגן ולהוציא לפועל פרויקטים שלמים.",
    "impact": "מנהלת הדרכה יכולה להטיל על ה-Agent לארגן יום עיון: הוא ימצא תאריך פנוי ביומנים של כולם, ישלח הזמנות, יזמין קייטרינג ויתאם עם המרצים, תוך עדכון שוטף על ההתקדמות.",
    "categoryKey": "ai_models",
    "source": "VentureBeat",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxNU0ZZSnZNWFdoU0p6bDNHb0R3Rk8xTGdSTUJfSjVlWTVhSmFQaWFocVVLTUFISlljVzVqTE9jazlBTVpiZENFWVFaWFdBYUpQME43blNrY2ljWGpJVi0xMVpMelRMck9Eb082d0dmZ2dva3NUV0hXNXJROUdSR0Roak1kTzFYVU5LQ1dhdk83NE1CeW9pWGV6MHFXbVBjTTM1N3VKUkpoc0dhVHA0R2FuaVVqU3JJX0lLMUxWdy1aTHJ6NFVDLWpycVh1WjFMXy1VRlI3dWRWSmFxUmRIelB5M0p5RndhWV9HRjFnZ2VOT1dfeXpK?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 26,
    "headline": "הדור הבא כבר כאן: OpenAI חושפת את GPT-6 בשתי גרסאות חדשות",
    "explanation": "חברת OpenAI הכריזה על מנוע ה-AI החדש שלה, GPT-6, שמגיע בשתי גרסאות: Sol (שמש) ו-Luna (ירח). הגרסאות החדשות מבטיחות יכולות הבנה, יצירתיות ופתרון בעיות ברמה שטרם נראתה.",
    "impact": "במקום לבזבז שעות על סיעור מוחות, צוות פיתוח הדרכה יכול להשתמש ב-GPT-6 כדי לייצר תוך דקות שלוש מתודולוגיות הדרכה שונות וחדשניות לקורס 'מבוא לאבטחת מידע'.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFB4SldKWWgzNDExSThTZW9MRTQ5WHE3VFRZMl9oSjIzaVhuZEZaY1ZSUTFxZTJFaFpUanlncTQySUg5SlRGVnNkQXZ0S3IxLWJScXNkLXY2Z3Jzbk5WR0UwSFp0NmUxN3c?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 4,
    "headline": "פיצ'ר הפגישות החדש של ChatGPT יסכם לכם כל שיחה אוטומטית",
    "explanation": "ChatGPT השיק יכולת חדשה המתחברת לפגישות אונליין, מאזינה לדיון, ומפיקה סיכום אוטומטי. הכלי מזהה משימות, החלטות ונקודות מפתח, ומארגן אותן במסמך ברור.",
    "impact": "אחרי פגישת אפיון ארוכה עם מנהל מהשטח, מפתח ההדרכה יקבל סיכום מיידי עם כל הדרישות והצרכים שעלו. זה חוסך את הצורך לרשום הערות ומבטיח ששום דבר חשוב לא יתפספס.",
    "categoryKey": "docs",
    "source": "Inc.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixAFBVV95cUxONldEaHl4RF81RE9QcnlxTkFOUXNmTW1UQTk2MVFXVTZmUFRnTVF2dWN2M1VFcl9vUjJtYmFiRlhyeWhFZmFjdnN2aGwxVjlmRHdFYXl4STlWZTdSQVFxR2N3X1hUdS1wenVaMkxWNEtUX1pxZk9zRXhDYkROOUU1NjRwRDNwOThxWXBkM2JYV0FlTnE2YU9QcEZVcG1sbllSbG1GdlctMXIwMWczT0M0djVCQ2l3SWRvaUhfNF9HMFpYdjVK?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 23,
    "headline": "סוף סוף: Copilot ב-Word מראה מאיפה הוא לקח את המידע",
    "explanation": "מיקרוסופט עדכנה את Copilot ב-Word, וכעת הוא מוסיף ציטוטים והפניות למקורות המידע שלו. כשאתם מבקשים ממנו לכתוב טקסט, תוכלו לראות בדיוק על אילו מסמכים או אתרים הוא התבסס.",
    "impact": "כשמפתחים לומדה על נהלי בטיחות חדשים בארגון, אפשר להיות בטוחים שהתוכן ש-Copilot מייצר מבוסס על המסמך הרשמי והמעודכן ביותר, ולא על מידע ישן או לא רלוונטי.",
    "categoryKey": "docs",
    "source": "Windows Central",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOd25OWVhibjI2Z0J5ZVNXd3NkVGhjQ0hrNFNFR2hibU9HQmJUamFfcDBqMkYtc1lQY0QxbDZBcGN4RXBQTE5rZkJ0dW1fUHNId0hVTlJsTllibVktWjFsREhqTmlYc2Y3MENISW42TXZiM1ZvaXp4Vkd4TmxZTEY2YnVwQ3VUQjczeEwwcS1QTG9CeW9FZEVzUmtiYTlscWI5cGN4YjBVa1EtNXFyTlRXU1pRc1otdnZud2Fyek96N1dfYkFpMnNSVEF1TFBMVVBsdTU0NFVSa3U0dw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 45,
    "headline": "כלי חדש יוצר סרטונים עם סאונד ותנועה מסונכרנים באופן מושלם",
    "explanation": "Kandinsky 6.0 הוא כלי קוד פתוח חדש שמייצר סרטונים קצרים מטקסט, ודואג שהסאונד יתאים בדיוק לתנועה. למשל, אם תכתבו 'גלים מתנפצים על החוף', תשמעו את רעש הגלים מסונכרן עם התמונה.",
    "impact": "מדריך שיוצר סרטון הדרכה על 'איך להשתמש במטף כיבוי אש' יוכל להוסיף קטע וידאו קצר של אש עם סאונד ריאליסטי של פצפוצים, מה שיהפוך את הסרטון לממחיש ומרתק הרבה יותר.",
    "categoryKey": "media",
    "source": "Gearbrain",
    "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPRGYxeVdUQ2pxWU5YTndmWVZMYV81cjliMHFMd0ZEcHdzUW5BREpqSjE0bzA4cUM2ZVRUYkw0c2taWHJUS2RWMmNJa3lBcnhLSTlKYktkTXV0bDA3bUdJX3hXcGFkVUd6blhLQkJBdFdFY2gzNVBYTi05TGZueW5XX0p2Y2dSZ9IBhAFBVV95cUxOMjFoU201bU80NHBzVHpCeGdQUjIyWk1PUktneDNDbklIdGpObnFZWG5hekxkdkRTbGlRWGt1bExEMVdHaWJZVWNJQnpUY2FKVFpvWldWS1VBcWhWTS1oaTZaTURjazNBNmJIMnVwa1NrNEN4NGNGcnpEWGgxNmpyWVRKY3o?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 42,
    "headline": "רוצים ליצור סרטון עם דמות וירטואלית? זה הכלי בשבילכם",
    "explanation": "כלי חדש ליצירת סרטוני אוואטר מאפשר להפיק סרטוני הדרכה עם דמויות וירטואליות שנראות וזזות באופן טבעי. המטרה היא ליצור סרטונים שנראים מקצועיים גם כשאין מנחה אמיתי מול המצלמה.",
    "impact": "צוות L&D שצריך להפיק סדרת סרטונים קצרים על תאימות (Compliance) יכול להשתמש באוואטר קבוע שיופיע בכל הסרטונים, וליצור מיתוג אחיד וזכיר לסדרת ההדרכות.",
    "categoryKey": "media",
    "source": "Greater Milwaukee Today",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxQVTE4WEowZ296OWVQVHM3aUhKM3RMQXAwb3lEOGwzVFNveXZmNVE4OHQxVVluWDdObm9PVG91TTRJMksyLXdsdzlXc3AzZlIzb3pNWVMtNXR3aHR4UGRRRUFQNHdhYUlFdmx2LTlnek5nVkxqamdkZEJEWHdJUUFqSHVvYzlIdktaQVpMNEJ0WmI3djRrcnRIYzdxV1N6REF6SkxEYkZrdDExb3VwWWNlc2xsUS1kbndKUTc5Q0hMYXM3TVpjOXVHSUtnZTVud05fNG5DdU5pR1JfMWwtOVJJajF0eUwtQWdr?oc=5",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 37,
    "headline": "Canva משיקה חבילת ProSuite עם כלי AI מתקדמים למעצבים",
    "explanation": "קאנבה השיקה את ProSuite, חבילה חדשה המאחדת את כל כלי העיצוב וה-AI המתקדמים שלה תחת קורת גג אחת. החבילה נועדה לתת למעצבים, גם כאלה ללא ניסיון, יכולות של סטודיו מקצועי.",
    "impact": "מעצב למידה יכול כעת להשתמש ב-ProSuite כדי ליצור ערכה גרפית שלמה לקורס חדש – כולל לוגו, תבניות למצגות, איורים ייחודיים וסרטוני אנימציה קצרים – והכל באותו סגנון עיצובי.",
    "categoryKey": "media",
    "source": "Small Business Trends",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPNE9LNXQ3OHRpbWs0N0ZtNm1id0tkUHIwTUI2OE5UM3ZuQXRjRkhrbU9zSnZ1NmlSQkx4STloMlkxcmtHOGNkeHd0Y2Y2T3pjV1NneTczMkUxaWJId1YwZk9vSjVETWxjOWpkRTBfTFVjWGl0dWFQR09JTTh4UWVRTDlfTlg2YXNoZU54OWQwbmh6dTltYkFTa1p3?oc=5",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 8,
    "headline": "קלוד מציג 'כלים אוטונומיים' לארגונים גדולים",
    "explanation": "חברת Anthropic, המפתחת של Claude, השיקה סט כלים חדש לארגונים. הכלים מאפשרים ל-Claude לבצע משימות מורכבות באופן עצמאי, כמו ניתוח דוחות כספיים או ניהול פרויקטים קטנים.",
    "impact": "מנהל צוות פיתוח הדרכה יכול לבקש מ-Claude לנתח את כל משובי ההדרכה מהרבעון האחרון, לזהות את הנושאים המרכזיים שעלו, ולהציע תוכנית עבודה לשיפור הקורסים הפופולריים ביותר.",
    "categoryKey": "ai_models",
    "source": "Stocktwits",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxQYzBTVFhtYVNkNUMtcWZYYkV2VUhGcEV6WTB6N2htWnFJN3dibGYyUU1TOU0yUy1EWEhpampTc0c1ZWk5b3Z2a1o3b0NBTFFQenNrdkppQ3N3U0RFY3kzSElRR0xVbER3YmtRTkVIU0VldV9GSnlfbG96Zm5ORWpuU295Z1VFVE9yVnB5VlR0VDA1SlNyT1ZGdG5fTXl3VGktWVdLemMzS3NrdXU0NUJRTk05ZWZUQzRjZ1ZNSEVZOGc1RVVRQ1M1cmVkZDRkSGhxZDVFSXZKb3VFLW8yT0E?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 11,
    "headline": "גוגל מכריזה על Gemini Agent: 'הסוכן האוניברסלי לעבודה'",
    "explanation": "גוגל הציגה את החזון שלה לעתיד העבודה עם Gemini Agent. זהו לא רק צ'אט, אלא 'סוכן' שמבין את המטרות שלך ויכול לפעול באופן יזום בתוך כלי Google Workspace כדי להשלים משימות.",
    "impact": "מי שאחראי על Onboarding בארגון יוכל להגדיר ל-Agent תהליך קליטה לעובד חדש. ה-Agent ייצור אוטומטית חשבונות, ישלח מייל ברוכים הבאים עם חומרי קריאה, ויקבע פגישות היכרות ביומן.",
    "categoryKey": "ai_models",
    "source": "9to5Google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE10b3pzV0h6VjhSd0d2bUpoaktyYmVoa1ozNW1ZbE15dUY0MkltSlhta3hDMjFTM3BVdk9UUW9mMDJMWkZMbVpxeFJsV3RYRGQ3eG82U29YVTItVXp1Zko5cTZWdGp5SkJhOHdfUQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 21,
    "headline": "מיקרוסופט מאפשרת לבנות אפליקציות וסוכני AI בקלות ב-Copilot Studio",
    "explanation": "העדכון החדש של Copilot Studio מאפשר לכל אחד, גם ללא ידע בתכנות, לבנות בוטים וסוכני AI מותאמים אישית. ניתן לחבר אותם למערכות הארגוניות וליצור תהליכי עבודה אוטומטיים.",
    "impact": "צוות הדרכה יכול לבנות 'בוט תמיכה' שיענה על שאלות נפוצות של עובדים לגבי מערכת ה-LMS. הבוט יוכל להדריך אותם איך נרשמים לקורס או איך מאתרים תעודת סיום.",
    "categoryKey": "learning",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi9gFBVV95cUxPXzRZZ01GUk9xVkNDV2E3c2ZSNkxOUjF3WWw1NVl1dlZaSTdWM2FSU25CbWxUaHVkcHA0aXZuRHpGbVk2N1BYRlA2anJTa2JjNWpSZzVVT0w0NGJqYXgyWEpHNXVwM1NhYXNBa0NaNnpYT0M2akNWUnp2emVaSUdIVERBeWszVU5hcjROU0kxWktrSVhiUm00Ukt3RjREeC1nTEJFRFZLVnQ1endrTWxyQTk3UWQ1T0VxYU9kdUY0ZW9KMTJfYVRia3hzcU1kckdHUE1DSlpEYXBhTllIek41RkRuOXl1ZWhFWEM0SG9pOXBFNVBGTmc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 34,
    "headline": "כלי חדש מלמד AI איך להימנע מ'הזיות' ומידע שגוי",
    "explanation": "חברת Hotshot השיקה קורס ייעודי שמטרתו לאמן בינה מלאכותית כיצד להימנע מהמצאת עובדות או 'הזיות'. בנוסף, חברת Ironclad השיקה סוכן AI שמנתח חוזים באופן אוטומטי.",
    "impact": "מפתח הדרכה שמשתמש ב-AI כדי ליצור שאלות למבחן מסכם, יכול להיות רגוע יותר שהשאלות והתשובות שהמערכת מייצרת יהיו מדויקות ומבוססות על חומר הלימוד, ולא יכילו טעויות עובדתיות.",
    "categoryKey": "learning",
    "source": "Law.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNUXNhN0h3V0VCaF95Zkl6ZzF1YnlzVVItdGpXb19aaEZnOWU3Z21DdHlKaEhuS3ZENmtMLUF6Y182M2JXWWY3SEdCS3Q2WVBGMWVJMjRhb09nYmJZYVcxakZrR2t3NlNXQWhTS0Z6NU1qTlVhbnNuVGdKWktxTk9YOEw2eHBLLWh6Z05HMWRMblB5amVTZ1B6UlFweDFYb1p1dWd4dnlObDJnbVU1c0UyZV9nYXlqZ1A2V1BtbERBLXEzUlhNVWZBcmlvZldoUlEzVnZNaQ?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 1,
    "headline": "OpenAI מתחילה להציג פרסומות ויזואליות בכלי יצירת התמונות שלה",
    "explanation": "חברת OpenAI הודיעה שתתחיל לשלב פרסומות ממומנות בתוך כלי יצירת התמונות שלה, בדומה לתוצאות ממומנות במנועי חיפוש. הפרסומות יופיעו לצד התמונות שהמשתמשים יוצרים.",
    "impact": "זהו שינוי מעניין שמראה את הכיוון המסחרי של הכלים. עבור צוותי הדרכה, זה אומר שבעתיד ייתכן שיוכלו לקדם הדרכות או קורסים באמצעות פרסום ממוקד בתוך פלטפורמות AI.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTFBrTGpFWUV6LXBPamVmUVVuZktVbi13bVZaVUg3NEdQWjdjcXZpNXVBNDNlRGIzRmV0ZUlBYTIzeXV1VmZBMXh0NnpkTGpCYmJrUFFhanBwY0lKVFctYWNLLUNpRzdtOXktbVVFa0x6Ry1zQQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 44,
    "headline": "רוצים להרוויח כסף מדמויות AI? פלטפורמה חדשה מאפשרת לכם",
    "explanation": "חברת Kinku השיקה כלי ליצירת תמונות וסרטונים המאפשר למשתמשים לבנות 'דמויות AI' עם אישיות וסיפור רקע. היוצרים יכולים לאחר מכן לייצר הכנסה מהדמויות שיצרו.",
    "impact": "מדריך שמתמחה בתחום מסוים, כמו מכירות, יכול ליצור 'מאמן מכירות וירטואלי' שיספק טיפים ותרגולים. עובדים אחרים בארגון יוכלו 'לשוחח' עם הדמות כדי להתאמן לפני פגישה חשובה.",
    "categoryKey": "media",
    "source": "PR.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE03VXF4OTVfTDYzT0R4aTJGN0V4NjBrTFg2VERKa181c21VOFBodzRXQ3NkLTktclBJUXY2WEJzMEtKVU5mb2t0R080YUxoNlhU?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 16,
    "headline": "גוגל משיקה אפליקציית Gemini לחלונות, אבל משתמשי מק קיבלו יותר",
    "explanation": "גוגל השיקה השבוע אפליקציית דסקטופ רשמית של Gemini למערכת ההפעלה Windows. עם זאת, נראה שהגרסה למחשבי מק, שהושקה קודם, כוללת יכולות מתקדמות יותר בשלב זה.",
    "impact": "עבור צוותי הדרכה שעובדים בעיקר על Windows, זו הזדמנות להתחיל להשתמש ב-Gemini באופן נוח יותר ישירות משולחן העבודה, בלי צורך לפתוח דפדפן בכל פעם.",
    "categoryKey": "ai_models",
    "source": "Android Police",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOU1ZTd2JiS2M1MHRGQkRJWHNXNlcyNUNOQ3dyaXZQemVfcXBxVTF5MkZpbzd4NkpUV2ItVXBhV2s4QWFzelNDOXRVTzMtVDB3V2lVYWpJTHJCUUtJMEFsRVIySGdMcVBmZnJaVjFiajNTbU9OWWlZOEFpNEt1SWFNNnBnRzhTU1JyT2JabUJYTFpCNS1mTlh1Z1ZOOG8zSHRnLWVEdg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 10,
    "headline": "רוצים לשפר את Claude? חברת Anthropic מבקשת שתשתפו את הקול שלכם",
    "explanation": "חברת Anthropic פנתה למשתמשי Claude בבקשה לשתף דגימות קול כדי לעזור לה לאמן את יכולות הדיבור וההבנה הקולית של המודל. המטרה היא להפוך את האינטראקציה הקולית עם Claude לטבעית ומדויקת יותר.",
    "impact": "בעתיד הקרוב, היכולת הזו תאפשר יצירת סימולציות הדרכה מבוססות קול. למשל, תרגול של שיחות שירות לקוחות, שבהן העובד מדבר עם בוט AI שמגיב בקול אנושי וטבעי.",
    "categoryKey": "language",
    "source": "BleepingComputer",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNYXdOQkNGN2NyMjVhNDlOZUVRTUdMWkE1OVNsaEtCQUcyS1hzQ2R3UkhLX1A4VjlWX2lOSHZXSjNSQ3NTT0g1M3ZCX0ltWHJSaGhDelJqdjJwbmVKeENqSkFIallKdzdVUWdqR0IwcndOLWhDbjdnbHN2NXFwTk1UczBMNkRoM3NVdllOcUhJUkFDZ3dWM0dfWnV4V19ldVVnS21UbEg3bnhBWV9FNzFHM3ZieWlYTy05aDJfYm9YYzZYdlJUODZBV0ZyTm3SAdIBQVVfeXFMTXhoYkFWNEtHOEVIclNCSlc0X3BsWk8yaGlGLVQyeFRZUm5rX2hNVjZtY0owZFIxZFFqdUxtbXNaQUgyR040UEpYM21Hdi1UTF9DbVJLRjRSa1RxdHA3cXNROFNtZ09ldEwtLWpSNGtJYnFqaVIta3BKdkdacXZqNFRWd0xZR0tLMUpWLVdUSUlhLUtvTUxSdGJEWS0zbEg1UkxPNHFDOURSalhKTHY5RXQ2b2xyNHRjbC1FNEMxcFR4Z1RWQnhyRVA1amZ1NHBqX1N3?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 29,
    "headline": "האם OpenAI עובדת על רמקול חכם? דיווחים חושפים פרטים ראשונים",
    "explanation": "לפי דיווחים חדשים, OpenAI עשויה לפתח את מוצר החומרה הראשון שלה: רמקול חכם מבוסס AI. הרמקול צפוי להציע יכולות שיחה מתקדמות בהרבה מהעוזרות הקוליות המוכרות כיום.",
    "impact": "דמיינו כיתת הדרכה שבה רמקול חכם יכול לענות על שאלות המשתתפים בזמן אמת, להציג מידע רלוונטי על המסך, ואפילו לנהל תרגילים אינטראקטיביים עם הקבוצה.",
    "categoryKey": "language",
    "source": "Stocktwits",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxOdmYzTEtZQk5pWFZmaHlVYmhxVGtVSno1dlYxR21PT0xBODJ1dHpucHlyRVlBcDJJMzdldmlHS1JmRTVxX0gtQm9nUy1iX1VYQzdPTTRBakZuYldTUXFLczRtc2dIOHBXdlhpN3dhdEVTQkxkWGxGZ2RnSkJ2QkU2ZTBaRFNSQ043RWszZ2FlMThCZl9MR3NxNE9mdWI2Y3JqRHJXYUYtdWVZTFh1TlVBdXFxcnoyb203MFByNEsxTjBkQ2JHT2JHXzlxLUJzTkxfNGF2ZUZHUmVIcDRLdWVHb0xpRU1yOEladmpr?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 6,
    "headline": "חברת Anthropic מבקשת מהמשתמשים: 'תפסיקו להיות רעים לקלוד'",
    "explanation": "בצעד יוצא דופן, חברת Anthropic עדכנה את תנאי השימוש שלה ואסרה על 'התנהגות פוגענית או אכזרית שלא לצורך' כלפי צ'אט ה-AI שלה, Claude. המטרה היא לקדם אינטראקציה חיובית ומכבדת עם הכלי.",
    "impact": "זוהי תזכורת חשובה עבור אנשי הדרכה שמלמדים עובדים כיצד להשתמש בכלי AI. חשוב להדגיש את החשיבות של תקשורת מכבדת ויעילה עם הכלים, כדי לקבל מהם את התוצאות הטובות ביותר.",
    "categoryKey": "ai_models",
    "source": "The Guardian",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPb2lja2Y3b2J4SGw2TDhuWUNxNmxablZvTlcwSVg4eHhuSUFwNUEzQTd0WFhOTlJMd0F5UHBDSnhxTl9nVXJlNjFrZVBSc1Zic01sZ1RuZ2tTTlQ3RVVLUEw5OFI2NDcwNzNPSVpYTUJmR1pVdmd2NWkyOUtxcTg5bC05ckRhX1pnSVRZdVhLSlQ0ckU?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-10-11";
