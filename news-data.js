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
    "headline": "קלוד משתלט על המחשב: ה-AI החדש שמבצע משימות במקומכם",
    "explanation": "אנת'רופיק הציגה יכולת חדשה המאפשרת לקלוד לשלוט ישירות במחשב, לפתוח תוכנות ולבצע פעולות. זהו צעד משמעותי לקראת עוזר AI אוטונומי באמת שיכול להשלים משימות מורכבות.",
    "impact": "מעצב למידה יכול לבקש מקלוד 'מצא לי 10 תמונות חופשיות לשימוש של עבודת צוות, שנה את גודלן ל-1080p, וארגן אותן בתיקייה בשם 'תמונות לקורס חדש''.",
    "categoryKey": "ai_models",
    "source": "Fathom Journal",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9OZnkxQ25HWkJsYXBCVkpGTk83U1oyNDk1NEc2SldmWXBYdC10eFNHWlRpUEJGUk1nZ1UwaDdTRFBSOVJnMkNrYl91WXdZSE9HcjV0TWlpX3hUSWRTRmJCMzB3VzE?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 20,
    "headline": "מהפכה באקסל: Copilot החדש מנתח נתונים ומייצר דוחות אוטומטית",
    "explanation": "מיקרוסופט שחררה עדכון משמעותי ל-Copilot בתוך אקסל, המאפשר לו לבצע ניתוחים פיננסיים מורכבים ולהפיק תובנות בלחיצת כפתור. הכלי החדש מיועד להפוך כל משתמש לאנליסט נתונים, ללא צורך בידע מוקדם.",
    "impact": "מנהלת הדרכה יכולה להעלות נתוני הערכת קורסים ולבקש מ-Copilot 'זהה את המדריכים עם הציונים הגבוהים ביותר והצג לי גרף השוואתי של שביעות רצון לפי נושא'.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPU1cySGtaUU5Pc01ucVhnMTZjVVphc2NtdVQxbnBzQUplU2w2MWhrdE5OeDNLZ2NKTEtOeV9pVVFxc1Z0MmFDSzV6ZXBHUVJPdWpqR09TeFI1aXNZNGg0YXZKUnl3N1prNnF4ZW82bDdHXzhGdmpjb3BvdmNmZ18wUGVScTZoMFozRUExUV9DbzJseDc4cjc4ZUFJNjR6X2ZOQ1g0a2hnWDdKUnllN3l6dV81eGU5a0o3?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 43,
    "headline": "יוצר הווידאו LumeFlow משיק שדרוג ליצירת סרטוני 4K מרהיבים",
    "explanation": "פלטפורמת יצירת הווידאו LumeFlow AI שחררה עדכון גדול הכולל יכולת לייצר סרטונים באיכות 4K. בנוסף, היא מציעה כלי סטודיו לשיווק שמקל על יצירת תוכן ויזואלי מקצועי לקמפיינים.",
    "impact": "צוות פיתוח הדרכה שמשיק קורס חדש יכול להשתמש בזה כדי ליצור סרטון טיזר קצר ומרשים באיכות קולנועית לקידום הקורס בערוצים הפנימיים של הארגון.",
    "categoryKey": "media",
    "source": "Northeast Mississippi Daily Journal",
    "sourceUrl": "https://news.google.com/rss/articles/CBMijwJBVV95cUxOOGVKdXZpdkptXzctWlctb0t5Vm1MLUVKUkNCX3Z2LW9RM2xaQUk4ZWNuclB3UlU4S093ajBWZW5Oa3ljdmNJWld0V1VYVVdaa3dTdlpCNWdvRkpzUExDRmZMUFFPeVE5bHFZMDZCTWNQXzVDOXl4OTF1ZzRQTWl3RDdBUkFPZFZEZC1mMHJMUHY2dllKUUNnamMtUFAxZ1pPMGVqeUFlVndIT1dSWGdUSGhJTzFlUjcxUVdKLTFGc0NBUzM5aFVOVGI5ZU1OZnVwUTU5UDFCaWk4eHFpSkZjb3hSOG5oN1NqcEVSN1JGV3ZjX0RMcF9fMUV4aUtmNE92Y0otSmZwUGFXejFJbkJB?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 18,
    "headline": "גוגל ג'מיני מציג: מחברות לימוד חכמות ליצירת מסלולי למידה",
    "explanation": "אפליקציית ג'מיני השיקה פיצ'ר חדש בשם 'מחברות לימוד' (study notebooks). הכלי מאפשר לארגן מידע, ליצור סיכומים, ולבנות תוכניות למידה מותאמות אישית באופן אוטומטי.",
    "impact": "במקום לבנות ידנית מסלול למידה לעובד חדש, אפשר פשוט להזין לג'מיני את תפקידו ואת הכישורים הנדרשים, והכלי יבנה עבורו תוכנית למידה מסודרת עם מקורות ונושאים.",
    "categoryKey": "learning",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOR1JmSFJPZHEwYk9DX1NNYWkxbXRCV0J5YmhPN2xaMm04NWRBeE1sTHRmZzl2R01hRjBZOGdWeFNRQWc3eVctdlQ5Y0NCVUdsaEZHVEtwcW8yZUVvMl9WZTlBclBmSDR1WUU1WGEwX0tydFEwY2l5RUZXdUEyZlNhV25aenoyRUdM?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 9,
    "headline": "קלוד בסלאק לומד את הארגון שלכם והופך לעוזר אישי",
    "explanation": "אנת'רופיק השיקה את Claude Tag, פיצ'ר חדש בסלאק שלומד את מאגר הידע והשיחות בארגון. הוא מאפשר לשאול שאלות ולקבל תשובות מדויקות המבוססות על המידע הפנימי של החברה.",
    "impact": "עובד חדש יוכל לשאול בסלאק 'מי איש הקשר לנושאי אבטחת מידע?' או 'איפה אני מוצא את מצגת ההדרכה על המוצר החדש?' ולקבל תשובה מיידית ומדויקת מהבוט.",
    "categoryKey": "ai_models",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNYVQ5VktmelZuekFOV3k5TDBQN3E0VHpCNnVqOExoTDNLUzlqTGJfemlja1ZVMU4tdFh0WDc2VFRaY1BYODNyb1VBcVJhMTZvMnl0LVFaN0R1ODZ5SHRHSDdwaW4wRFJwS0t6N3RkN3hEZ053RDA0VEhndzJCNjZCWVZtSnN2VkFIY2NZdDA0RVNDeXlVV0EwaDBLeTF2SlhWYldvaldZWTFnUXByYlE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 1,
    "headline": "הסוכנים של OpenAI כבר כאן ומשנים את דרך העבודה שלנו",
    "explanation": "OpenAI מציגה את הדור הבא של AI: 'סוכנים' (Agents) שמסוגלים לבצע משימות מורכבות באופן עצמאי. הסוכנים האלה יכולים לתכנן, לבצע פעולות בכלים שונים ולהתאים את עצמם למטרות המשתמש.",
    "impact": "בעתיד הקרוב, מפתח הדרכה יוכל להגיד לסוכן: 'צור קורס קצר על ניהול זמן, כולל מצגת, סרטון הדגמה קצר ושאלון בקיאות', והסוכן יבצע את כל המשימה לבד.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE4wMHNYTEZhLU5SOXBrb1BCR1ZyUFdoVmhCVVZkdDdLd1ppekRnZkE5M1otaGxUVTZqSjlwZTk3WmJCYzE3ekctSW9MNEFZSXM1RmR1Wmlya3VXdkZjZGtJRkZIaXFFbk8wUEE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 37,
    "headline": "Canva משיקה כלי חדש ליצירת קמפיינים שיווקיים במקום אחד",
    "explanation": "Canva הציגה את Grow 2.0, פלטפורמה חדשה המאפשרת ליצור, להשיק ולנתח קמפיינים פרסומיים במקום אחד. הכלי מפשט את תהליך יצירת המודעות והתאמתן לפלטפורמות השונות.",
    "impact": "צוות L&D יכול להשתמש בזה כדי ליצור בקלות קמפיין פנימי לקידום שבוע למידה בארגון, כולל באנרים לאינטראנט, פוסטים לרשת החברתית ומודעות מותאמות למובייל.",
    "categoryKey": "media",
    "source": "Business Wire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNaUxjcUs0d1o5bXJUdTg1dzlQYjhkSkxINU52MkV2cHdqVGlGblU3aGRVZHE3TEJyZ2tGRU9zeHhiSFpnVFd1c01McE8wUm9iTkV3enN1RWRjd041aF8xX3dXb0ZyQ1U0YTBFN090SFJWT2hzWWVseWpuOXIyNm5vVzE2VlVSTXlUeW5KTWh4b05NTE1fVE1iWW8yaTJkOFpFNk10OWJVeGRDbnM3M0ZUNlg5eVZEOHJGekEwRkFjdjk4M01YOEE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "ChatGPT הופך לעוזר אישי אמיתי עם תדרוך בוקר אוטומטי",
    "explanation": "פיצ'ר חדש ב-ChatGPT מאפשר לו לספק תדרוך בוקר מותאם אישית, הכולל סיכום חדשות, עדכונים מהיומן ומשימות יומיות. משתמשים מדווחים שזו הפעם הראשונה שה-AI מרגיש כמו עוזר אישי של ממש.",
    "impact": "מנהל צוות הדרכה יכול להגדיר תדרוך בוקר שיסכם עבורו את סטטוס הפרויקטים, יזכיר לו פגישות חשובות ויציע נושאים רלוונטיים לשיחת הצוות השבועית.",
    "categoryKey": "ai_models",
    "source": "TechRadar",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxPTG1SNWhZYnNjdjNNaXE5US1NOTE5SVB0THVkTE1TVEEwTkt2M2VYQ3FoSEZDeE1jUG1OcHpoTFdsUm1XSFl4aVlGM3Z1UWVWR2lackpjVW5Obk5tUFRJNHpRSGhTUzEyaWthd3h5amx6ZTNHTW9ERUdYZ0Zlc3Nuck9mRkh1cXJta0FQcE5zMlphN3VwQWtDOGxZTlNtNE00UWVJTlBhWjJqTnN1NGo4LThwZUFFRmxyWHpYUUZoeDlUcGtaajB1OHZwcWhRbDBFSmpvRVBUOTkwVlNQb21zQ0FqamlaY2M?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "יוצר הווידאו של ByteDance מייצר קליפים באורך 30 שניות מטקסט בלבד",
    "explanation": "חברת ByteDance (החברה שמאחורי טיקטוק) חשפה כלי AI חדש שיכול ליצור סרטונים באורך 30 שניות מפסיקה אחת של טקסט. זהו שיפור משמעותי לעומת כלים קיימים שמייצרים קטעים קצרים בלבד.",
    "impact": "מעצבת למידה תוכל ליצור סרטוני הדגמה קצרים לתהליכים מורכבים, כמו 'הראה לי סרטון של עובד המבצע הערכת ביצועים למנהל שלו בצורה בונה וחיובית'.",
    "categoryKey": "media",
    "source": "CNET",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPSTRjblpRcEJHSUs1OHhuSVg2c19sSk9OX01ua09PdkRiSk5aUXBiMFBMLWJHdHV5WkJFNm1vU0VjNDF0ZW5tay1DazNoZVlfSGRFcFBNakRVQTJ3OThENHhlaFlVM0lFQmxXUTBjTjFnb2loTG1mbGdETkloOEh2dHpjcWlHbjdWbm5sNkxQTEdyZGcyczd2LS1XYnRPcFE?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 3,
    "headline": "OpenAI משחררת את GPT-5.6 העוצמתי, אך בגישה מוגבלת",
    "explanation": "OpenAI החלה לשחרר גרסה חדשה ומתקדמת במיוחד של מנוע ה-AI שלה, GPT-5.6. הגרסה החדשה מציגה יכולות משופרות בהבנת הקשר וביצוע משימות מורכבות, אך זמינה כרגע למספר מצומצם של משתמשים.",
    "impact": "כאשר יהיה זמין לכולם, כלי כזה יוכל לנתח תמליל שלם של סדנת הדרכה בת 4 שעות, לזהות את נקודות המפתח, ולהפוך אותן אוטומטית ללומדת 'מיקרו-למידה' של 5 דקות.",
    "categoryKey": "ai_models",
    "source": "9to5Mac",
    "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQUW90aU9TbC1xNFpkM0doX2xPWFprR1JtYXJaYVU0N3lITDdJS0JNZVlQeHR4WmdZdmZVaDQtczV0N1pLQVE4cDhVUmJqWlJlX2x4ZXRYenVWSjJNUWFBWkJzMGhhY0xYcWFCN1JyOEZZUkpoUEdOdVJ6azIyUVRfYmlhNHVMb2pUQWFkVWFaLURWdWgtUzBlUmpLX2YzYmhPZ3RraS1qd1VsSGNycHc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 31,
    "headline": "חברת 3M משיקה בוט חכם שעונה על שאלות טכניות מורכבות",
    "explanation": "ענקית התעשייה 3M השיקה כלי AI פנימי בשם Ask 3M. הכלי מאפשר לעובדים לקבל גישה מהירה למומחיות טכנית מתוך מאגרי הידע העצומים של החברה.",
    "impact": "דמיינו כלי דומה בארגון שלכם: מפתח הדרכה יוכל לשאול 'מהי מדיניות החברה לגבי עבודה מהבית?' ולקבל תשובה מסוכמת ומדויקת במקום לחפש במסמכים ונהלים.",
    "categoryKey": "learning",
    "source": "PR Newswire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPWGJHbk9PRXNrX3o0dWZuTV90WDJ6b3NSVC1VMVJaeHFLb1ktcjkwTHlPeU1QSzhacjFnbFZuZGkzNWpaY3BneGl0d0VtZHEwNDc3RUNwdjFCdVdUMGVjZUR6dmQ5UG1YRXhTaGVjcnllejBPNVpvOVZ4aVJjcGNBbHJjQ0pPZ1dIMDVaWkVTWndJbnlQS0VJM0F3cTFkQnUtU2d3VlZtMlZSSDB5WGZMSkxqS0NnMmdsZW8zUFhfYl81SFpVZFBVQm9MMDhPMFU?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 17,
    "headline": "15 יכולות שימושיות בג'מיני של גוגל שאשכרה תשתמשו בהן",
    "explanation": "כתבה זו מרכזת את הפיצ'רים המעשיים ביותר של ג'מיני, מעבר ליכולות השיחה הבסיסיות. הרשימה כוללת כלים לסיכום מסמכים, יצירת תמונות, תכנון פרויקטים ועוד.",
    "impact": "זהו מקור השראה מצוין לצוותי הדרכה. לדוגמה, ניתן להשתמש בג'מיני כדי ליצור תרחישי סימולציה מורכבים להדרכות שירות לקוחות, כולל דמויות לקוח שונות ותגובות אפשריות.",
    "categoryKey": "learning",
    "source": "PCMag",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPS1NyMXdnUEN1YzZpbHRPV01JdEhTQTBkalZ4UnFNS1NqRVJjODFUV0ZSOEtQU3lJVTJFem5tTDJ0NUJVd2tIVjFGV2htTXM5YWdLa1hFYkFfOTRLMk5pc3A2dWxzRk42OWdtZXlmS19TcHRKN3BLWWVhYUJXblh0N0E3MjRWUTkwUzhnVUFaazZMdTIxRkd3MjlDY04?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 5,
    "headline": "ChatGPT משתפר בהבנת הוראות מורכבות וצרכים עסקיים",
    "explanation": "OpenAI שדרגה את מנוע GPT-5.5 Instant, והוא כעת טוב יותר בהבנת בקשות מורכבות עם מספר אילוצים. השדרוג כבר זמין למפתחים וצפוי להגיע בקרוב לכלל המשתמשים.",
    "impact": "במקום לבקש 'כתוב לי שאלון על בטיחות' ואז לערוך אותו, אפשר יהיה לבקש 'כתוב שאלון של 10 שאלות אמריקאיות על בטיחות במחסן, ברמת קושי עולה, עם 3 תשובות שגויות והסבר לתשובה הנכונה'.",
    "categoryKey": "ai_models",
    "source": "VentureBeat",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi-AFBVV95cUxQanMySVQtdjFGRHN5ZnVFQzhGeXBmTGJJSWFZaUIwSTQ4WlBiT3FQaHpBcVM0NHJXUmMtQ1dHX0wyUDJZREN0VG05OFRtWWNNLUxmcmVWQ0VvZDNSbDVKVzJ6eXBaaDVGLTZGN0lSZUhQaHRld2N0VlA2b1hEWFhCSnM0dm1rcXh5b04zOWlnQmdCbGtTazFzWEN4OGtZZlR5TzJEemNWd2hDVzctampzOS1RdDBqeVctQkNZbFB3bktjZnp2d1l4NjJTSDI5ZEZHaW9lY2xab1ZYRWVGQ0prc3FtT1NwQThzVks2S2F4bndibzFPQlJxbA?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 12,
    "headline": "גוגל חושפת API חדש לניהול שיחות מתקדמות עם ג'מיני",
    "explanation": "גוגל הציגה את Interactions API, ממשק חדש המיועד לניהול שיחות מורכבות ורב-שלביות עם מודלי ג'מיני. הכלי מאפשר שליטה טובה יותר על זרימת השיחה ועל התגובות של ה-AI.",
    "impact": "בעזרת כלי כזה, ניתן יהיה לבנות בוט הדרכה מתוחכם שמדריך עובדים בתהליך פתרון בעיות, שואל שאלות מנחות, ומספק רמזים בהתאם לתשובותיהם, ממש כמו מנטור אנושי.",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxObk5aTGR6dzNhLXZBWEpOY3Q2bHBDNk92amdBSXVmS1B6aVB3akFfd1VadWxUQk50bHl6Y2ZwNkdTaFNjclc1cmhDcjk2UG14VUZhM1MtaG42TUJEakZqZWkxelpGdS1YUEJGMkhBWUpPWjlLRnhHMHpXRUZRQnZDU19SdU51QnZmYURMejFtZ2lKWERCUks3OHNnLW93b1kyaEF3UHg4OA?oc=5",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 45,
    "headline": "סקירה חדשה: כלי ה-AI הטובים ביותר ליצירת תמונות ב-2026",
    "explanation": "מגזין PCMag מפרסם את רשימת מחוללי התמונות המומלצים ביותר לשנת 2026. הסקירה משווה בין כלים כמו Midjourney, DALL-E ו-Stable Diffusion ומדגישה את החוזקות של כל אחד מהם.",
    "impact": "מי שמפתח קורס על תרבות ארגונית יכול להשתמש בכלים אלו כדי ליצור סדרת תמונות ייחודית בסגנון אחיד, המציגה את ערכי החברה באופן ויזואלי ומקורי, במקום להשתמש בתמונות סטוק גנריות.",
    "categoryKey": "media",
    "source": "PCMag UK",
    "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBkMW8xdENLb0JsdzJmWDNKSHozQTJ0YXJnQTAtNVNkaWRZMnl2R1lWbUhtOGo3MURLVzgtczdIOFZWODIxcUdYaENPX0thcFBoMF9vQlZJZU1rSk5hZk9hR0ZHRXdfQ1o2UXZB?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 22,
    "headline": "גיטהאב משיקה את Copilot CLI: עוזר AI למפתחים שעובדים בטרמינל",
    "explanation": "גיטהאב שחררה כלי חדש בשם Copilot CLI, המביא את יכולות ה-AI של Copilot ישירות לסביבת שורת הפקודה (טרמינל). הכלי עוזר למפתחים לכתוב פקודות, לאתר באגים ולהבין קוד קיים.",
    "impact": "צוותי הדרכה טכנולוגיים יכולים להשתמש בכלי זה כדי ליצור תרגילי תכנות אינטראקטיביים, בהם הלומדים מקבלים סיוע והכוונה בזמן אמת ישירות בסביבת הפיתוח שלהם.",
    "categoryKey": "docs",
    "source": "The GitHub Blog",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNNC1ZYlNlbmE0OFNoOGE2c1RsNlJWYU1IN3czNHAtQk9vYU92Z1V1QlgxN1JyVHJyZWFfM09HOTNrc1lEYUlqbFEtNUp1RUd6S0RfSmlQallvWW1TOFJNNVAxa0F0ajIxNV8zR203T0Vja1VFOFF1Ulc3c2dFMEtZenF6M0xUdE1ZWHkyak1HQ3VRSk52MWNZam5GX19aQWFi?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 34,
    "headline": "Exabeam משיקה כלי קוד פתוח לבדיקת התנהגות של סוכני AI",
    "explanation": "חברת הסייבר Exabeam שחררה את Praxen, כלי קוד פתוח המאפשר למפתחים לוודא שסוכני ה-AI האוטונומיים שלהם פועלים כמצופה. הכלי עוזר לזהות התנהגויות לא רצויות ולשפר את אמינות המערכות.",
    "impact": "זהו צעד חשוב לקראת שימוש בטוח ב-AI. עבור L&D, זה אומר שבעתיד נוכל לסמוך על בוטים שיבצעו הערכות עובדים או יתנו משוב, בידיעה שהם נבדקו ופועלים לפי כללים מוגדרים.",
    "categoryKey": "ai_models",
    "source": "SiliconANGLE",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQLU1LbmJrdkxicWpWVzJsamQyMDdmZWxSUld3aG4tWDRINkdJZzdpRERYZXJmWlMwWUVKaVlfTXhKUkdxZ1BHTXBmUUc1UVo1NnRfQXB2eENhN2o4NGhNMnRwOVJvZGhwZzB5S1E0WEhieW56LUFoZmdzSjZiRy1UOXlUSjA4dWY4Um9oTHo4M0lHd0lUbS00U2d3T0k1TmJtR2tPRQ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 11,
    "headline": "אפל משלבת את עוזר הקידוד ג'מיני של גוגל בסביבת הפיתוח Xcode",
    "explanation": "בצעד מפתיע, אפל הוסיפה את יכולות ה-AI של גוגל ג'מיני לסביבת הפיתוח שלה, Xcode. השילוב נועד לסייע למפתחי אפליקציות לכתוב קוד מהר יותר וביעילות גבוהה יותר.",
    "impact": "מפתחי הדרכה שמייצרים הדרכות טכניות למפתחי iOS יוכלו כעת ליצור דוגמאות קוד והסברים מורכבים בצורה מהירה ופשוטה יותר, ישירות בתוך כלי העבודה של הקהל שלהם.",
    "categoryKey": "docs",
    "source": "9to5Mac",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOZlJjQWV0eDBsbDY2R3dBRzA1QklsclUtLXNQSFVYa3JMdjM2OFFYYzlrQm1GS2NiRnFTSHM2aEdOUmpjNU1jTU5uRmZXZGUwTUFXbUF1bGpodWdLYlR5RDZCQlVKbmY1b0dKOEI5UGp1ZG9Hc2JNdjc2M0RQZWR3OEF6ZUlrYmlYSUIzTGZGTEk4ZVZQb0lCTXZB?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-06-28";
