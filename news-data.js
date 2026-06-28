// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-06-28 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 4,
    "headline": "קלוד משתלט על המחשב שלכם ומבצע משימות במקומכם",
    "explanation": "המתחרה של ChatGPT, קלוד, קיבל יכולת חדשה: הוא יכול לשלוט ישירות באפליקציות על המחשב שלכם. אתם נותנים לו הוראה, והוא מבצע אותה בעצמו, כמו עובד אנושי.",
    "impact": "מעצב למידה יכול לבקש ממנו 'מצא את כל המצגות בנושא בטיחות, סכם אותן ל-5 נקודות עיקריות, ושלח לי במייל'. המשימה כולה תתבצע אוטומטית, בלי לפתוח אפליקציה אחת.",
    "categoryKey": "ai_models",
    "source": "Fathom Journal",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9OZnkxQ25HWkJsYXBCVkpGTk83U1oyNDk1NEc2SldmWXBYdC10eFNHWlRpUEJGUk1nZ1UwaDdTRFBSOVJnMkNrYl91WXdZSE9HcjV0TWlpX3hUSWRTRmJCMzB3VzE?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 42,
    "headline": "כלי חדש יוצר סרטונים באיכות 4K עם דמויות וירטואליות שזזות",
    "explanation": "חברת LumeFlow השיקה גרסה חדשה של יוצר הווידאו שלה, Seedance 2.0. הכלי מאפשר ליצור סרטונים קצרים באיכות קולנועית (4K) וכולל דמויות וירטואליות שמסוגלות לרקוד ולנוע באופן ריאליסטי.",
    "impact": "צוות L&D שמפתח קורס על שפת גוף במכירות יכול ליצור סרטוני הדגמה קצרים שמראים 'עשה' ו'אל תעשה', עם דמויות שמציגות בדיוק את התנוחות הרצויות.",
    "categoryKey": "media",
    "source": "Northeast Mississippi Daily Journal",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijwJBVV95cUxOOGVKdXZpdkptXzctWlctb0t5Vm1MLUVKUkNCX3Z2LW9RM2xaQUk4ZWNuclB3UlU4S093ajBWZW5Oa3ljdmNJWld0V1VYVVdaa3dTdlpCNWdvRkpzUExDRmZMUFFPeVE5bHFZMDZCTWNQXzVDOXl4OTF1ZzRQTWl3RDdBUkFPZFZEZC1mMHJMUHY2dllKUUNnamMtUFAxZ1pPMGVqeUFlVndIT1dSWGdUSGhJTzFlUjcxUVdKLTFGc0NBUzM5aFVOVGI5ZU1OZnVwUTU5UDFCaWk4eHFpSkZjb3hSOG5oN1NqcEVSN1JGV3ZjX0RMcF9fMUV4aUtmNE92Y0otSmZwUGFXejFJbkJB?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 1,
    "headline": "הכירו את הסוכנים של OpenAI: בוטים שיעבדו בשבילכם 24/7",
    "explanation": "OpenAI מציגה את הדור הבא של ChatGPT: 'סוכנים' אוטונומיים שמקבלים משימות מורכבות ומבצעים אותן לבד. הסוכנים יכולים לגלוש באינטרנט, להשתמש באפליקציות ולבצע שרשרת של פעולות כדי להגיע למטרה שהגדרתם.",
    "impact": "מנהלת הדרכה יכולה להטיל על סוכן משימה כמו 'מצא את 5 המומחים המובילים בעולם בנושא X, בדוק אם יש להם קורסים אונליין, והשווה ביניהם בטבלה'.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE4wMHNYTEZhLU5SOXBrb1BCR1ZyUFdoVmhCVVZkdDdLd1ppekRnZkE5M1otaGxUVTZqSjlwZTk3WmJCYzE3ekctSW9MNEFZSXM1RmR1Wmlya3VXdkZjZGtJRkZIaXFFbk8wUEE?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 19,
    "headline": "Copilot בתוך Excel: ניתוח נתונים הופך לשיחה פשוטה",
    "explanation": "מיקרוסופט שדרגה את העוזר החכם שלה בתוך Excel. עכשיו אפשר לבקש ממנו בעברית פשוטה לבצע ניתוחים מורכבים, ליצור גרפים מתקדמים ולזהות מגמות בנתונים, בלי לכתוב נוסחה אחת.",
    "impact": "מי שמלמד Excel בארגון יוכל לגרום לתכנים שלו להיראות כמו קסם. במקום ללמד נוסחאות מסובכות, הוא ידגים איך לבקש מה-AI 'תראה לי את הקשר בין שעות הדרכה לביצועי עובדים' ולקבל גרף תוך שניות.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPU1cySGtaUU5Pc01ucVhnMTZjVVphc2NtdVQxbnBzQUplU2w2MWhrdE5OeDNLZ2NKTEtOeV9pVVFxc1Z0MmFDSzV6ZXBHUVJPdWpqR09TeFI1aXNZNGg0YXZKUnl3N1prNnF4ZW82bDdHXzhGdmpjb3BvdmNmZ18wUGVScTZoMFozRUExUV9DbzJseDc4cjc4ZUFJNjR6X2ZOQ1g0a2hnWDdKUnllN3l6dV81eGU5a0o3?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 17,
    "headline": "גוגל הופכת את Gemini למורה פרטי עם 'מחברות למידה'",
    "explanation": "אפליקציית Gemini של גוגל השיקה פיצ'ר חדש בשם 'מחברות למידה'. הכלי מאפשר לכם ללמוד כל נושא בצורה אינטראקטיבית, עם סיכומים, שאלות ותשובות, ותרגילים שה-AI מייצר במיוחד עבורכם.",
    "impact": "מפתח הדרכה שצריך ללמוד במהירות נושא חדש לקראת פיתוח קורס, יכול להשתמש במחברות כדי לקבל 'שיעור פרטי' מ-Gemini, כולל מבחנים קצרים לבדיקת הבנה.",
    "categoryKey": "learning",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOR1JmSFJPZHEwYk9DX1NNYWkxbXRCV0J5YmhPN2xaMm04NWRBeE1sTHRmZzl2R01hRjBZOGdWeFNRQWc3eVctdlQ5Y0NCVUdsaEZHVEtwcW8yZUVvMl9WZTlBclBmSDR1WUU1WGEwX0tydFEwY2l5RUZXdUEyZlNhV25aenoyRUdM?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 39,
    "headline": "טיקטוק חושפת AI שמייצר סרטונים באורך 30 שניות מתיאור טקסט",
    "explanation": "חברת האם של טיקטוק, ByteDance, הציגה מודל וידאו חדש שיכול ליצור סרטון רציף באורך 30 שניות מתיאור טקסט בודד. זהו שדרוג משמעותי לעומת הכלים הקיימים שמייצרים קליפים קצרים של 4-5 שניות בלבד.",
    "impact": "במקום לחפש שעות סרטוני סטוק גנריים, אפשר יהיה לייצר סרטון פתיחה ייחודי לקורס, כמו 'עובד במפעל הולך במסדרון ומחייך למצלמה באור שקיעה', ולקבל תוצאה מותאמת אישית.",
    "categoryKey": "media",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPSTRjblpRcEJHSUs1OHhuSVg2c19sSk9OX01ua09PdkRiSk5aUXBiMFBMLWJHdHV5WkJFNm1vU0VjNDF0ZW5tay1DazNoZVlfSGRFcFBNakRVQTJ3OThENHhlaFlVM0lFQmxXUTBjTjFnb2loTG1mbGdETkloOEh2dHpjcWlHbjdWbm5sNkxQTEdyZGcyczd2LS1XYnRPcFE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "ChatGPT יכול לשלוח לכם תדריך בוקר אישי ומותאם",
    "explanation": "פיצ'ר חדש ב-ChatGPT מאפשר לו לפעול כעוזר אישי אמיתי ולשלוח לכם תדרוך בוקר. הוא יכול לסכם מיילים חשובים, לעדכן על פגישות קרובות ולהזכיר משימות דחופות, הכל בהודעה אחת.",
    "impact": "מנהל צוות הדרכה יכול להתחיל את היום עם סיכום אוטומטי של כל בקשות ההדרכה החדשות שהגיעו, סטטוס פרויקטים של הצוות, ו-3 המאמרים הכי חשובים בתחום ה-AI שיצאו אתמול.",
    "categoryKey": "language",
    "source": "TechRadar",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxPTG1SNWhZYnNjdjNNaXE5US1NOTE5SVB0THVkTE1TVEEwTkt2M2VYQ3FoSEZDeE1jUG1OcHpoTFdsUm1XSFl4aVlGM3Z1UWVWR2lackpjVW5Obk5tUFRJNHpRSGhTUzEyaWthd3h5amx6ZTNHTW9ERUdYZ0Zlc3Nuck9mRkh1cXJta0FQcE5zMlphN3VwQWtDOGxZTlNtNE00UWVJTlBhWjJqTnN1NGo4LThwZUFFRmxyWHpYUUZoeDlUcGtaajB1OHZwcWhRbDBFSmpvRVBUOTkwVlNQb21zQ0FqamlaY2M?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 9,
    "headline": "קלוד לומד את הארגון שלכם דרך סלאק והופך למומחה פנימי",
    "explanation": "אנת'רופיק השיקה את 'Claude Tag', פיצ'ר שמתחבר לסלאק הארגוני ולומד את הז'רגון, הפרויקטים והאנשים. הוא הופך למאגר ידע חכם שיודע לענות על שאלות ספציפיות לארגון שלכם.",
    "impact": "עובד חדש בצוות פיתוח הדרכה יוכל לשאול את הבוט 'מי איש הקשר לנושא הדרכות סייבר?' או 'תסכם לי את עיקרי פרויקט 'למידה 2026'', ולקבל תשובה מיידית ומדויקת.",
    "categoryKey": "learning",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNYVQ5VktmelZuekFOV3k5TDBQN3E0VHpCNnVqOExoTDNLUzlqTGJfemlja1ZVMU4tdFh0WDc2VFRaY1BYODNyb1VBcVJhMTZvMnl0LVFaN0R1ODZ5SHRHSDdwaW4wRFJwS0t6N3RkN3hEZ053RDA0VEhndzJCNjZCWVZtSnN2VkFIY2NZdDA0RVNDeXlVV0EwaDBLeTF2SlhWYldvaldZWTFnUXByYlE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 36,
    "headline": "Canva משיקה כלי ליצירת קמפיינים שיווקיים מקצה לקצה",
    "explanation": "Canva השיקה את Grow 2.0, חבילת כלים חדשה שמאפשרת לא רק לעצב מודעות אלא גם להריץ ולנתח קמפיינים שלמים. הכלי עוזר לטרגט קהלים, לנהל תקציב ולמדוד תוצאות, הכל במקום אחד.",
    "impact": "צוות L&D שרוצה לשווק קורס חדש לעובדים יכול להשתמש בכלי כדי לעצב באנרים, לכתוב טקסטים שיווקיים בעזרת AI, ולהפיץ אותם בערוצים הפנימיים של הארגון.",
    "categoryKey": "media",
    "source": "Business Wire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNaUxjcUs0d1o5bXJUdTg1dzlQYjhkSkxINU52MkV2cHdqVGlGblU3aGRVZHE3TEJyZ2tGRU9zeHhiSFpnVFd1c01McE8wUm9iTkV3enN1RWRjd041aF8xX3dXb0ZyQ1U0YTBFN090SFJWT2hzWWVseWpuOXIyNm5vVzE2VlVSTXlUeW5KTWh4b05NTE1fVE1iWW8yaTJkOFpFNk10OWJVeGRDbnM3M0ZUNlg5eVZEOHJGekEwRkFjdjk4M01YOEE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 3,
    "headline": "OpenAI משחררת את GPT-5.6, גרסה חדשה וחזקה יותר של ChatGPT",
    "explanation": "גרסה חדשה ומעודכנת למנוע של ChatGPT, בשם GPT-5.6, שוחררה השבוע למספר מצומצם של משתמשים. לפי הדיווחים, היא מציגה שיפור משמעותי בהבנת הקשר, ביצירתיות ובפתרון בעיות מורכבות.",
    "impact": "זה אומר שבקרוב נוכל לבקש מ-ChatGPT משימות כמו 'כתוב תסריט לסרטון הדרכה קצר על ניהול זמן, בסגנון של סטיב ג'ובס, ושלב בו 3 טיפים מפתיעים', ולקבל תוצאה מתוחכמת ואיכותית בהרבה.",
    "categoryKey": "ai_models",
    "source": "9to5Mac",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQUW90aU9TbC1xNFpkM0doX2xPWFprR1JtYXJaYVU0N3lITDdJS0JNZVlQeHR4WmdZdmZVaDQtczV0N1pLQVE4cDhVUmJqWlJlX2x4ZXRYenVWSjJNUWFBWkJzMGhhY0xYcWFCN1JyOEZZUkpoUEdOdVJ6azIyUVRfYmlhNHVMb2pUQWFkVWFaLURWdWgtUzBlUmpLX2YzYmhPZ3RraS1qd1VsSGNycHc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 30,
    "headline": "חברת 3M משיקה בוט שיודע לענות על כל שאלה טכנית",
    "explanation": "ענקית התעשייה 3M השיקה כלי AI חדש בשם 'Ask 3M'. זהו בוט חכם שאומן על כל הידע הטכני והמדעי של החברה, ומסוגל לספק תשובות מדויקות ומהירות לשאלות על מוצרים וחומרים.",
    "impact": "דמיינו כלי דומה בארגון שלכם: מפתח הדרכה יוכל לשאול 'מהי מדיניות החברה בנושא עבודה מהבית?' ולקבל תשובה מסוכמת ומדויקת, במקום לחפש במסמכים אינסופיים.",
    "categoryKey": "learning",
    "source": "PR Newswire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPWGJHbk9PRXNrX3o0dWZuTV90WDJ6b3NSVC1VMVJaeHFLb1ktcjkwTHlPeU1QSzhacjFnbFZuZGkzNWpaY3BneGl0d0VtZHEwNDc3RUNwdjFCdVdUMGVjZUR6dmQ5UG1YRXhTaGVjcnllejBPNVpvOVZ4aVJjcGNBbHJjQ0pPZ1dIMDVaWkVTWndJbnlQS0VJM0F3cTFkQnUtU2d3VlZtMlZSSDB5WGZMSkxqS0NnMmdsZW8zUFhfYl81SFpVZFBVQm9MMDhPMFU?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 11,
    "headline": "גוגל מציגה דרך חדשה לדבר עם Gemini וליצור אוטומציות",
    "explanation": "גוגל השיקה את 'Interactions API', ממשק חדש שמאפשר למפתחים לחבר את Gemini לאפליקציות אחרות בקלות. זה פותח את הדלת ליצירת בוטים וסוכנים חכמים שיכולים לבצע משימות מורכבות בכמה מערכות במקביל.",
    "impact": "בעתיד הקרוב, נוכל לבנות אוטומציה שתקבל בקשת הדרכה במייל, תפתח משימה במערכת ניהול הפרויקטים, ותשריין פגישת אפיון ביומן של מפתח ההדרכה הרלוונטי - הכל אוטומטית.",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxObk5aTGR6dzNhLXZBWEpOY3Q2bHBDNk92amdBSXVmS1B6aVB3akFfd1VadWxUQk50bHl6Y2ZwNkdTaFNjclc1cmhDcjk2UG14VUZhM1MtaG42TUJEakZqZWkxelpGdS1YUEJGMkhBWUpPWjlLRnhHMHpXRUZRQnZDU19SdU51QnZmYURMejFtZ2lKWERCUks3OHNnLW93b1kyaEF3UHg4OA?oc=5",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 16,
    "headline": "15 יכולות שימושיות של Gemini שכדאי לכם להכיר",
    "explanation": "מגזין PCMag ריכז רשימה של 15 פיצ'רים ב-Gemini של גוגל שיש להם ערך אמיתי ביום-יום. הרשימה כוללת יכולות כמו סיכום סרטוני יוטיוב, תכנון פרויקטים, ועזרה בכתיבת קוד.",
    "impact": "מדריך טכנולוגי יכול להשתמש ב-Gemini כדי לקחת סרטון הדרכה ארוך באנגלית על תוכנה חדשה, ולבקש ממנו 'סכם לי את 5 השלבים העיקריים להפעלת הפיצ'ר החדש בעברית'.",
    "categoryKey": "learning",
    "source": "PCMag",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPS1NyMXdnUEN1YzZpbHRPV01JdEhTQTBkalZ4UnFNS1NqRVJjODFUV0ZSOEtQU3lJVTJFem5tTDJ0NUJVd2tIVjFGV2htTXM5YWdLa1hFYkFfOTRLMk5pc3A2dWxzRk42OWdtZXlmS19TcHRKN3BLWWVhYUJXblh0N0E3MjRWUTkwUzhnVUFaazZMdTIxRkd3MjlDY04?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 44,
    "headline": "סקירה: מחוללי התמונות הטובים ביותר לשנת 2026",
    "explanation": "מגזין PCMag UK פרסם את רשימת מחוללי התמונות המומלצים ביותר לשנה זו. הסקירה משווה בין כלים כמו Midjourney, DALL-E ו-Stable Diffusion, ומסבירה את היתרונות והחסרונות של כל אחד מהם.",
    "impact": "לפני שאתם בוחרים כלי ליצירת תמונות לקורסים שלכם, הכתבה הזו תעזור לכם להבין איזה מהם הכי מתאים לסגנון הוויזואלי של הארגון ואיזה נותן את התמורה הטובה ביותר למחיר.",
    "categoryKey": "media",
    "source": "PCMag UK",
    "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBkMW8xdENLb0JsdzJmWDNKSHozQTJ0YXJnQTAtNVNkaWRZMnl2R1lWbUhtOGo3MURLVzgtczdIOFZWODIxcUdYaENPX0thcFBoMF9vQlZJZU1rSk5hZk9hR0ZHRXdfQ1o2UXZB?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 5,
    "headline": "ChatGPT משתפר בהבנת בקשות מורכבות וקניות אונליין",
    "explanation": "OpenAI שחררה גרסה משופרת של המנוע המהיר שלה, GPT-5.5 Instant. הגרסה החדשה טובה יותר בהבנת הוראות עם מספר אילוצים, כמו 'מצא לי מלון בתל אביב, בפחות מ-200 דולר, עם בריכה וביקורות טובות'.",
    "impact": "זה יאפשר למפתחי הדרכה לבנות תרחישים וסימולציות מורכבות יותר. למשל, ליצור בוט שמשחק לקוח עם דרישות מאוד ספציפיות, כדי לאמן אנשי שירות לקוחות.",
    "categoryKey": "ai_models",
    "source": "VentureBeat",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi-AFBVV95cUxQanMySVQtdjFGRHN5ZnVFQzhGeXBmTGJJSWFZaUIwSTQ4WlBiT3FQaHpBcVM0NHJXUmMtQ1dHX0wyUDJZREN0VG05OFRtWWNNLUxmcmVWQ0VvZDNSbDVKVzJ6eXBaaDVGLTZGN0lSZUhQaHRld2N0VlA2b1hEWFhCSnM0dm1rcXh5b04zOWlnQmdCbGtTazFzWEN4OGtZZlR5TzJEemNWd2hDVzctampzOS1RdDBqeVctQkNZbFB3bktjZnp2d1l4NjJTSDI5ZEZHaW9lY2xab1ZYRWVGQ0prc3FtT1NwQThzVks2S2F4bndibzFPQlJxbA?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 34,
    "headline": "42 דרכים יצירתיות להשתמש ב-AI כבר עכשיו",
    "explanation": "המגזין Fast Company אסף 42 שימושים פרקטיים ומפתיעים בכלי AI שונים, שכל אחד יכול לאמץ. הכתבה מלאה ברעיונות קונקרטיים, החל מניהול המטלות ועד ליצירת תוכן מקורי.",
    "impact": "צוות הדרכה יכול לעבור על הרשימה הזו בפגישת הצוות הבאה ולבחור 3-4 רעיונות חדשים לנסות. למשל, להשתמש ב-AI כדי ליצור שמות קליטים לקורסים חדשים או לכתוב את תיאור הקורס במערכת הלמידה.",
    "categoryKey": "learning",
    "source": "Fast Company",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxOVnVUTlpDbjk3bEMybWZpRkZ0LThfN3NpczdpNGFPbzhDQ1lmZkpMVVpSVV92Ym0yRzFoLS1BT0kzbE5qNXVkaC1BalBaTG1xTEZ0NFNZSzNiR3RITlQ4NXFxaktTaUFMTGxhRHI4S0JCTXEwbUpyS2J2Vlo0bjM5SE9LaVpJYWdfTmJIOHdIVm1MQ0pidzEwZkJKU1NCcDZ4VDlOMjlLZWxlZmJjM1pTUWs4ME9HVHpUQ2ROWlJsZEplbXdBREdJNU5Qd1hwU0JsUUthRHoydjRuSVlqeEdlYkgyYw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "המדריך המלא: מחוללי הווידאו הטובים ביותר לשנת 2026",
    "explanation": "מגזין PCMag UK סוקר את הכלים המובילים ליצירת וידאו באמצעות AI. הכתבה משווה בין היכולות, המחירים וקלות השימוש של הכלים הפופולריים ביותר בשוק.",
    "impact": "אם אתם שוקלים להשקיע בכלי ליצירת סרטוני הדרכה, המדריך הזה הוא נקודת פתיחה מצוינת. הוא יעזור לכם להבין את ההבדלים בין הכלים השונים ולבחור את זה שהכי מתאים לצרכים ולתקציב שלכם.",
    "categoryKey": "media",
    "source": "PCMag UK",
    "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9qR2tWYXZuR2gzOUJ1VXJMdFQ3QTZnNXNwblltQ3NtM01MR3BhQU5Jc0NpcGdqbXJDUnM0SmduZVVIZmU2X2VaZ095YmVzVGNQa1dXbkdERjZSSUt5S1RaOUREa0N1dnRCZ2Jj?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 6,
    "headline": "קלוד מציג 'תגים': דרך חדשה לארגן ולמצוא ידע ארגוני",
    "explanation": "אנת'רופיק השיקה את 'Claude Tag', יכולת חדשה המאפשרת לבוט לתייג מידע חשוב בשיחות. זה יוצר מאגר ידע חכם ומאורגן, שמקל על מציאת מידע קריטי שהוזכר בעבר.",
    "impact": "במהלך סיעור מוחות על קורס חדש, הצוות יכול לבקש מהבוט 'תייג את כל הרעיונות הטובים שעלו'. מאוחר יותר, כל אחד יוכל לבקש 'הצג לי את כל הרעיונות הטובים מפגישת האפיון' ולקבל רשימה מסודרת.",
    "categoryKey": "docs",
    "source": "Anthropic",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9iZjJCVWRWdnpWLWtMTGVEcy1RbmFuWGY3UHhfVmFlQkRZalpoOFZMMzhLeEZhYVBTcjhKR0FZaEF5QlpNVzB2bXVIczF0X0RWbmN4NDM4VmUtZGxyU2dHbGRSWQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-06-28";
