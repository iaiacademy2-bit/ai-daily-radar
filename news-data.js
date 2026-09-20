// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-09-20 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 19,
    "headline": "גוגל משדרגת את Gemini Notebook לכלי למידה אישי וחכם",
    "explanation": "המחברת החכמה של גוגל, Gemini Notebook, קיבלה יכולות חדשות שהופכות אותה לכלי עזר מותאם אישית ללמידה. היא יכולה לסכם חומרים, ליצור חידונים ולעזור לכל אחד להבין נושאים מורכבים בקצב שלו.",
    "impact": "צוות L&D שמפתח קורס על ניהול זמן יכול להשתמש בזה כדי ליצור סיכומים אינטראקטיביים וחומרי עזר מותאמים אישית למשתתפים, מה שמעלה את האפקטיביות של הלמידה.",
    "categoryKey": "learning",
    "source": "EdTech Innovation Hub",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxNT1REdFdkRGYzSGl4aTY2OGJabGQ5TmN2NEhVYUdoblQ4N2M4NFItVHh2b0ZxSDZRUm1hZXItaW1KU2hjNmRfQU9IOVI1SGF0bklOck13SGY1b0xFQzQ1cy0xUkJZeHNEbTg0aVhyUnhRSDVYSDFoS0VVUHA2b01QTERGaG45MC1vZEFnYUxQMTdCSzJ4LUpGTmhrdnR0a0JHbWJiQklIM3JsNlU2SEpnWktOc0REWEFwQnlBY28xRmVOMjVhYjBlZ2hhSzNKWXRodTZaREl0dkZMalJ6djA5cnBKTjkyVFFpWGc?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 7,
    "headline": "קלוד מציג: עוזר AI אישי שמנהל משימות כמו ראש צוות",
    "explanation": "קלוד השיק פיצ'ר חדש בשם 'Chief of Staff' שמתפקד כעוזר וירטואלי חכם. הוא יכול לנהל פרויקטים, לתאם בין משימות שונות ולסכם כמויות גדולות של מידע באופן עצמאי.",
    "impact": "מנהל הדרכה יכול עכשיו להאציל ל-AI את המשימה של בניית תוכנית הדרכה שנתית, כולל תיאום לו\"ז, תקצוב וסיכום פידבקים מעובדים, וחוסך בכך ימים של עבודה.",
    "categoryKey": "docs",
    "source": "inc.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNM3pHb1dOeUlvQjA5T2hDSWZKWXlHel9sME90dFpfbGNfODZlajdTb2psejYwQlItcWZ2QTFvV1hncThXTHJBeldoVnJadnNkeGx1eUN4UzVHR2laVWg3TmppZi1kdmRrNi1Dd0g5d2Z6WF9sQXBuS2RpV1hwX05GbWdhUnk1cWEySXk2VFFHbHVVbDE4WVp2RXBaak1LYm45T3paT09OdzBuck9kNk5YWFRxaFVXMTg?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 44,
    "headline": "מחולל הווידאו MVLAND 2.0 נותן לכם שליטה מלאה כמו במאי קולנוע",
    "explanation": "הכלי החדש מאפשר לא רק ליצור סרטונים מטקסט, אלא לביים אותם ממש. עם 'מצב סטודיו' אפשר לשלוט בתנועות המצלמה, במיקום הדמויות ובכל פרט בסצנה.",
    "impact": "במקום להסתפק בסרטון גנרי, מעצב למידה יכול ליצור סרטון הדרכה על בטיחות בעבודה שבו המצלמה עוקבת אחרי העובד ומדגישה בדיוק את הסכנות הספציפיות בסביבת העבודה.",
    "categoryKey": "media",
    "source": "Times Argus",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwJBVV95cUxOYzVvYklDUEJJU1Q2VExGRXBMallBQ2ZmdkhLMXdGMnozUjBtQjlUMXhnczlHMDc1WS1kY0UyOVYydVlHWHJZTk9yZGlKUjBnREpSUVZEUWpSNzQzTjJ3bERraHhZTE8xSFQtUlZOaWRTMFBSVWdWM0VXbDBGZGRjQjhRLV90SWpqeklvOWdJa3RtbF8tTE9YYXp5WHJ3UlZoN0R3MEU2LVZpYThCNU1makhXV0dyeEYxakJ3TWRYQW5XQVU1SU4xZE1OcjlPdF9yR3YyZWRjX25rS2hLWnZOSEkwOG8wRmY1NlFMd3ZpNE1NZ0VvUFFCYjJ6elRfc0RQSXowaE1mV0o1TlhOYXJPdnJXNA?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 6,
    "headline": "קלוד מאחד כוחות: כל היכולות במקום אחד וכלים חדשים למסמכים",
    "explanation": "חברת Anthropic איחדה את כל הפיצ'רים של קלוד לממשק אחד ונוח. בנוסף, היא השיקה כלים חדשים שמתמחים בניתוח, סיכום ויצירת מסמכים ארוכים בצורה חכמה.",
    "impact": "מעצבי למידה יכולים להעלות מדריך טכני של 300 עמודים ולקבל תוך דקות גרסה מקוצרת, מצגת הדרכה, ואפילו שאלות ותשובות נפוצות עבור קורס חדש.",
    "categoryKey": "docs",
    "source": "Reuters",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQZy04cUpKZ1lLWHB3Zmp5N19XeEEwdi13bjBZYllISzltVk5HaDdlUnJqOEJFZUlYVjBxNzhZbUc5NDhDeWdISkUzLWw3b25ZZTYxZG4tZUFjLXU5T3F2YlZ2M1QtNDdZcDZ1anZlTVFGZzlmY2dYNGRLelY5TjRTMDU4d1QxaDRYY0JvNXBIZ0FQUWxiMVJzQlc3V0plQTd2M19oWWRVUjV3aXdvOHhXREJ0STBfdW9LZkw1QnV0Mk5MQkhRaldlQ1NsSDJHcTkt?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 16,
    "headline": "גוגל מציגה את Gemini 3.8 Live: שיחה טבעית ומהירה יותר מאי פעם",
    "explanation": "הגרסה החדשה של ג'מיני, 3.8 Live, מאפשרת לנהל איתו שיחה קולית רציפה וטבעית, כמעט ללא השהיות. פיצ'ר 'חשיבה מורחבת' מאפשר לו להתמודד עם שאלות מורכבות הדורשות תכנון רב-שלבי.",
    "impact": "אפשר ליצור סימולציות הדרכה ריאליסטיות לאנשי מכירות, בהן הם מתרגלים שיחה עם לקוח וירטואלי שמגיב בזמן אמת, מנתח את תשובותיהם ומספק משוב מיידי.",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNZTNBTjVVXzE2ZXpJdkoxcHo2cTNVVG1pZEs0dXhMU0d4dnNzcU5iZWppYkJMeVpCeWZVQ3dKSzVzZXNoeTltY3RJaXJtckQ2LXZnWlpGQ1V4Yi1HZUdjdFdPMUFua18weUpTazgweFp5YnlVTjB2RVJiTnVFMllTUThtQVlrT3liYnd1dmhfUGxiRHZOb3pub1dGR3pXbk9UMnZzV1hZdF96UUVLcTdWanZVc2YtaGtkZXNzY1ZCQQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 37,
    "headline": "Canva משיקה חבילת-על למעצבים עם 100+ פיצ'רים חדשים",
    "explanation": "Canva ProSuite היא חבילה חדשה שמאגדת כלי עיצוב מקצועיים כמו Affinity ו-Leonardo יחד עם קאנבה. החבילה כוללת מעל 100 יכולות חדשות ליצירת ויז'ואלים מרהיבים בקלות.",
    "impact": "במקום לבזבז שעות על עיצוב גרפי מסובך, צוותי הדרכה יכולים כעת ליצור חומרי קורס, אינפוגרפיקות וסרטונים ברמה של סטודיו מקצועי, והכל בפלטפורמה אחת.",
    "categoryKey": "media",
    "source": "Creative Boom",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQLTFyUzBwYW9FeF9CVF9TbGlkaGowT21oZ1g5cGhMaHlJYUYwZ1U2Yk9GQ1RubzZpOFdlRkp6T3N4TFFUcU4xWEktWnJ5bk9UTktBWUEtS0VkTTdCWEFNcy1UdWZLdWdOVUZ0M09zTkNxekJnVW5TVmdVOU5GcVdmcmNLVXdVWTE1a0VVczctcmFncXkxUm9fcU91X293enhuOFludXhRRGFocXd4MjBXb21Ta0dYUHNRVEg3TEtzUTQxVjhLZnRMbHE0VGUzdXo0WXdtRHNlZHNERmRObkFvTw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 21,
    "headline": "מיקרוסופט משדרגת את Copilot Studio לבניית צוותי בוטים שעובדים יחד",
    "explanation": "העדכון החדש מאפשר ליצור ולנהל 'צוותים' של בוטים (סוכני AI) שיכולים לשתף פעולה כדי לבצע משימות מורכבות. כל בוט מתמחה במשהו אחר, והם עובדים יחד להשגת המטרה.",
    "impact": "אפשר לבנות מערך הדרכה אוטומטי: בוט אחד יקבל פניות מעובדים, בוט שני ינתח את צרכי ההדרכה שלהם, ובוט שלישי יבנה עבורם תוכנית למידה אישית וישלח להם חומרים.",
    "categoryKey": "learning",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxPOEhaVVlGZXdKbFJkSkFIakFYVjIxWEhRUF9hNzZVblFxUjlmSGs5UHlMY1prbzhmQk5CeXhrLThuRTFvN3JzNEExaXV0dF8wd2lnaW11a1l5Z0NOeWtKb1FJS3h4OU9RY2tJVGUydTJYWkpYbzVuMHFWZDNydmhvVk1OMGVpREFSdk5HdXpCV01fSTNmVDBiR01VbHJtcTdnMDAzNk85TGVGbVh2WlZQeGdMZGxFRk0wcGlfZDQyVzJGM2lJQTV6OFUzNmZJb1hGOC05eFIyZ3pUckxacmw2S2VNRWhaNDg?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 26,
    "headline": "הצצה ראשונה ל-GPT-5.6 Sol, הדור הבא של OpenAI",
    "explanation": "OpenAI חשפה פרטים ראשונים על המודל החדש שלה, GPT-5.6 Sol. הוא צפוי להיות מהיר יותר, יצירתי יותר, ומסוגל להבין ולהתמודד עם משימות מורכבות בהרבה מהדור הנוכחי.",
    "impact": "בעתיד הקרוב, מפתחי הדרכה יוכלו לבקש מהכלי ליצור קורס שלם מאפס, כולל סרטונים, מבחנים וסימולציות אינטראקטיביות, רק על בסיס תיאור קצר של הנושא.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9BR2ZzcDRMbGphY1pfMF9mVWVCZGUyV25mbHpZMnRjQUxWWWgtWGZqSk93eXEweHNlOU1MTW85d2hLc3NvT2E4Znd4ZG5DR1diQTZPcFExTi1wcC1t?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 1,
    "headline": "אפל משחררת את iOS 27 עם סירי חכמה מאי פעם",
    "explanation": "העדכון החדש למערכת ההפעלה של אפל כולל גרסה משודרגת משמעותית של סירי. העוזרת הקולית יכולה כעת להבין הקשר מורכב יותר, לבצע משימות בתוך אפליקציות ולהיות הרבה יותר שימושית.",
    "impact": "עובדים יוכלו להשתמש בסירי כדי לתפעל אפליקציות למידה ארגוניות באמצעות הקול בלבד, למשל לבקש ממנה \"תמצאי לי את סרטון ההדרכה על Excel ותנגני מהדקה השלישית\".",
    "categoryKey": "language",
    "source": "The New York Times",
    "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTFB6d212VEx5WXNuNXh5OGlSajRvZFhHdUdBRmY5VTQxYkRUU1VzQXJ1eThzc3BSRXh3dTVJQ0VSZWU4MEczZFdGOFduWDZodkZXVEQ1UEJGLXJ5VzVIdk5ocnppMUhjbXFQN0ZaVTZjUFlUS3hwOGhZ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 24,
    "headline": "עדכוני ספטמבר ל-Teams ו-Copilot: סיכומי פגישות חכמים יותר",
    "explanation": "מיקרוסופט שחררה עדכונים חדשים ל-Teams שמשפרים את יכולות הסיכום של Copilot. הוא יודע לזהות משימות שחולקו בפגישה, להציג את דעתם של המשתתפים השונים ולייצר סיכום ממוקד ויעיל.",
    "impact": "מי שפספס ישיבת תכנון הדרכה יכול לקבל סיכום אוטומטי שמפרט בדיוק מה היו הדרישות של כל מחלקה, מי אחראי על כל חלק בקורס ומהם הצעדים הבאים.",
    "categoryKey": "docs",
    "source": "UC Today",
    "sourceUrl": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBWMzNyXzBrLW9NSUxCWjFrdENqeDZ1dVV1SFplUHgwanNuM2lxaHE0ajVxZ29Wb1hYd1RhWkllM2tiU3ZHbTlKeFFQMFpWUzB3SkdnUFlsMWtfdTYyUEY3YnNOaUw3UHNMbVZrU3BMdWVTQlhuZlkwTGtsVQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 12,
    "headline": "גוגל משיקה את CC: סוכן AI חדש שמיועד למשפחות",
    "explanation": "גוגל הציגה את CC, בוט חדש שנועד לעזור למשפחות לנהל את חייהן. הוא יכול לתכנן פעילויות, לעזור בשיעורי בית ולשמש ככלי עזר חינוכי וארגוני לכל בני הבית.",
    "impact": "זהו כלי נהדר להדרכות 'רכות' בארגונים, למשל בסדנאות על איזון בית-עבודה. ניתן להדגים איך הכלי עוזר לנהל את לוח הזמנים המשפחתי ולהפחית לחץ.",
    "categoryKey": "learning",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOQ1Yyb2o3UElpUVd5dGExbzlPaDdpakhNZl9zamk4VHl6eV94bVRleTBWaWdlcXVadDJvUkJnSGxhSDkxSzJ0SWdUQ3VJWVF0MHRxWE9IQjdQYXBSeEIzY09FZU1RNEx2a1FEVncyNzJ4NHhKXy1IYVYzQmY5SjV1N3JDZldCcFlKZjZYWkh2QU5vSFBEYkJzYQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 27,
    "headline": "OpenAI משיקה פלטפורמת AI ייעודית לעורכי דין",
    "explanation": "הכלי החדש של OpenAI מיועד ספציפית לעולם המשפט. הוא יכול לנתח מסמכים משפטיים, למצוא תקדימים, לנסח חוזים ולסייע לעורכי דין במחקר בצורה מאובטחת.",
    "impact": "ארגונים יכולים להשתמש בכלי הזה כדי להכשיר עובדים על נהלים ורגולציות. למשל, להעלות את כל נהלי האבטחה וליצור בוט שעונה לעובדים על שאלות ספציפיות.",
    "categoryKey": "docs",
    "source": "Reuters",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOaklBa3l0bXpJRlZHYW5ZUnM4d0tTRWczT1F1MTByOXk5UFBZYmdHaGFhN1d2VUY3OThBLThkTUxpOGJOQTVadzJEazBvSlNzdm0wTURBaFhyUWh1ZVdScmJWZ3p3NUZSVzBCWkt2UEpxUEJjaUxaN2U2dnFpT1E3Njc3MWRsWFpaZTZjekdlN0tUY1pudndlX081Z3k5VlVnLUVvQlVMQXNiS3RCbXVrbVlRWEQ0Q0ltdkduZC1hbGxUR28?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 45,
    "headline": "סקירה חדשה: מחוללי התמונות הטובים ביותר לשנת 2026",
    "explanation": "אתר CNET ערך השוואה מקיפה בין כלי יצירת התמונות המובילים. הסקירה בוחנת את היכולות של כלים כמו Nano Banana של גוגל, DALL-E המשולב ב-ChatGPT ועוד, ומראה את החוזקות והחולשות של כל אחד.",
    "impact": "מי שצריך ליצור תמונות ייחודיות לקורס חדש יכול להשתמש בסקירה הזו כדי לבחור את הכלי המדויק למשימה, בין אם זה יצירת תמונות ריאליסטיות או איורים טכניים.",
    "categoryKey": "media",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTFBZNWxfdUZFQ1lfVF93UUVIYlVucmJoMWRpQUw4Mm1mazFUM24tRVk0S0pfUkg3SDd0T0ZvYjZ1UlJkWGUyNGk5OGJhM2JLNjZENy04OGpoQXVKT1BZbmdVZ3F5c2hIQ1ZNb3VGTnZMRXlTYUREblRfcEc2LWw1QQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "מבחן דרכים: אלו מחוללי הווידאו הטובים ביותר כרגע",
    "explanation": "סקירה מקיפה של CNET בוחנת את מחוללי הווידאו מבוססי AI הטובים ביותר בשוק. הכתבה משווה בין המודלים הגדולים ומראה מה כל אחד מהם מסוגל לייצר.",
    "impact": "לפני שמתחייבים לכלי יקר, אפשר לקרוא את הסקירה הזו ולהבין איזה מחולל וידאו יתאים הכי טוב ליצירת סרטוני הדרכה קצרים, סרטוני שיווק פנימיים או הדגמות מוצר.",
    "categoryKey": "media",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE5vcDI4MU1MSHFzME9mSXo3aG02am9ELUJKWFFrc1lucllaN3BwdXV0ZG9pZzBCSF9RN1hmR2tQZDZ3Z3JjclU1NUZoX05KNUhRTWRqMllxcDZZZ2VlcFFxc3RJVGNxTzM1b2xGcWl3Q1ZrQmYxUXhkaHNJUzdrUQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 32,
    "headline": "מטא משיקה את Meta One: מנוי פרימיום עם כלי AI ליצירת תוכן",
    "explanation": "מטא השיקה שירות מנויים חדש בשם Meta One. המנוי מעניק גישה לפיצ'רים מתקדמים וכלים מבוססי AI שעוזרים ליצור תוכן בולט ומושך יותר ברשתות החברתיות.",
    "impact": "צוותי הדרכה יכולים להשתמש בכלים האלה כדי ליצור טיזרים ו'מיקרו-למידה' בפורמטים ויראליים, ולהפיץ אותם בערוצים הפנימיים של הארגון כדי לעורר עניין בקורסים חדשים.",
    "categoryKey": "media",
    "source": "meta.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQMjk1X0RPQVJ6YXU1a08yWGRzMEdHUjVmU3lkbjcySmZibDZ4M2dXQTVodzNrbl9jRUNaZmpHSFJqdlFRaVI5NlZFR0Zab0prdzM3NW9QVm9UM2FTSzgtZGNaTTdydTlBcUFyUHczYTlDcGZZNC15emRpN1hRQl9Dc1pxQTlVS015dldSMHJOc0dMQ2pXV0swadIBngFBVV95cUxQdGRnU0tuRTZhTUt1MVBOMUY0Z3RJWGU2WWJIcDFsT09KNzF4WHBkV1JIaXhfZk0zSUZaRmRrbE9xb1luWDYyYm0xOFFXNjMtQ3BtRUc0TkxTd2FiaUhFS3kzRHlLdWhBaTAxbXNaeTdRakp5dTZmTVFFcFkyOVNyNk9HNXA4aHRDOG5EX1BpaEdFSnkzRmZHdzZUczNwUQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 8,
    "headline": "קלוד משיק 'פרויקטים' לניהול מספר בוטים במקביל",
    "explanation": "הפיצ'ר החדש, Projects, מאפשר למפתחים לנהל מספר סוכני AI במקביל בענן. כל סוכן יכול לעבוד על משימה אחרת, והמערכת מרכזת את עבודתם במקום אחד.",
    "impact": "מפתח הדרכה יכול להריץ במקביל מספר בוטים: אחד שכותב תסריט לסרטון, שני שמייצר את התמונות, ושלישי שמתרגם את התוכן לשפות שונות - הכל תחת פרויקט אחד.",
    "categoryKey": "ai_models",
    "source": "theverge.com",
    "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNZUxTNjFoWnlrU0x5ektWaF93WEJ4U0RxbTBRMV9MVVlmQ19pS3ZnYnBsV1lLVkN4YXI4UmlrcktOMmRmRkV1cTFSUk56SkJWaWgwT2dEZ1FTeHdhUlUyVndiWWxvZ0VQZTVueE1PVWtya2ZiZ2dnUlRUUHVVbmotaUNqMExwQ1JCdWZQQWpoanRsQWc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 28,
    "headline": "OpenAI מציגה: סוכנים ממומנים אינטראקטיביים ב-ChatGPT",
    "explanation": "OpenAI מאפשרת לחברות ליצור 'סוכנים ממומנים' - בוטים מומחים שמשתמשי ChatGPT יכולים לשוחח איתם. הסוכנים האלה יכולים לענות על שאלות, להדגים מוצרים ולסייע למשתמשים.",
    "impact": "מחלקת הדרכה יכולה לבנות סוכן AI שמומחה במערכת ה-CRM החדשה של החברה. כל עובד יוכל לשאול את הסוכן שאלות ולקבל הדרכה אישית ואינטראקטיבית 24/7.",
    "categoryKey": "learning",
    "source": "TechRepublic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE40V3hOLUlQcXc5d2c5WmI1ZHdVakhPV3RyUmZNNnNnTUYtTU9UYy1BVjFROVh5NmpBUjlreGM4czhTME85MTF5a2dnYkJDdW14OUxwYkJmeG1pT1NQaTA4bGN0X2cwNklDY0k0SG1VX1cyQ01pMV9aU01YWHIzQQ?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 5,
    "headline": "פיצ'ר חדש ב-ChatGPT: הגדרת 'איש קשר' למצבי מצוקה",
    "explanation": "ChatGPT הוסיף אפשרות להגדיר 'איש קשר מהימן'. אם המערכת מזהה שהמשתמש נמצא במצוקה נפשית, היא יכולה להציע לו לפנות לאותו איש קשר.",
    "impact": "זהו כלי חשוב להדרכות בנושאי חוסן נפשי ורווחת העובד (well-being). ניתן להדגים את הפיצ'ר ולהסביר איך טכנולוגיה יכולה לשמש גם כרשת תמיכה ראשונית.",
    "categoryKey": "language",
    "source": "NPR",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBKanRzeHlIY0R0ak9nSXUzMTJlcThmMHZzRFBKQ1pMNHlTUkoxSkJfTlNFOVppd3VfSUVWWFN1aFg0MzFaTmZ2Q0IydUc2aFhNbGRSTlFzUnQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-09-20";
