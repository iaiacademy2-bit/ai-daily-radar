// Categories
const CATEGORIES = {
  ai_models: { name: 'כלים ומודלים חדשים',  bg: '#eef2ff', text: '#0a47fd' },
  docs:      { name: 'מסמכים ותוכן',        bg: '#ecfdf5', text: '#059669' },
  media:     { name: 'תמונה, וידאו וקול',   bg: '#f5f3ff', text: '#7c3aed' },
  learning:  { name: 'פיתוח הדרכה',         bg: '#fffbeb', text: '#d97706' },
  language:  { name: 'שפה ותרגום',          bg: '#fff1f2', text: '#e11d48' }
};

// Weekly digest — auto-generated 2026-08-30 (articles from last 7 days only)
const NEWS_DATA = [
  {
    "id": 4,
    "headline": "ChatGPT Work יכול עכשיו להתחבר לאתרים אחרים ולבצע משימות עבורכם",
    "explanation": "גרסת העבודה של ChatGPT קיבלה שדרוג המאפשר לה להתחבר לחשבונות שלכם באפליקציות אחרות. היא יכולה למשל להזמין פגישה ביומן או לחפש קבצים בגוגל דרייב, והכל מתוך הצ'אט.",
    "impact": "מעצבת למידה תוכל לבקש מ-ChatGPT לסכם את כל המסמכים מפגישת האפיון האחרונה שנמצאים בדרייב, ולייצר מהם טיוטה ראשונית למצגת ההדרכה, בלי לעבור בין חלונות.",
    "categoryKey": "ai_models",
    "source": "PCMag",
    "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUDBFMjh6V0lES3BXQ1RvY1JSSzZKM0dUNmpucDN4T2VJSlZIbzBNOE1hbWlSakdWTkt4VE9aeFMtdUhnWnd6VlE4dWFEZS1PVTN2MDZTVGpMT0ZublFNVS16ckNESGpCUURTc2hJcnFHdUpBNkdaU2EzLXZ2X0FXV0VmYktkSWxxb2RGWjFxbTZ2el9YVW5VcnlZYk8?oc=5",
    "timeAgo": "השבוע",
    "trending": true
  },
  {
    "id": 10,
    "headline": "קלוד סוף סוף זוכר שיחות קודמות ויכול ללמוד את סגנון הכתיבה שלכם",
    "explanation": "הצ'אט של קלוד (Claude) קיבל פיצ'ר 'זיכרון' שמאפשר לו לזכור העדפות ופרטים משיחות קודמות. אפשר ללמד אותו איך אתם אוהבים לקבל תשובות, מה התפקיד שלכם, ובאיזה טון לכתוב.",
    "impact": "צוות L&D שמפתח סדרת קורסים יכול 'לאמן' את קלוד על המינוחים המקצועיים והטון של הארגון פעם אחת, ומאותו רגע כל תוצר שייוצר יהיה אחיד ועקבי.",
    "categoryKey": "ai_models",
    "source": "Tom's Guide",
    "sourceUrl": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQSzZ2Q0JXYUxja09ZR0JGcHJER3VWcmVfcUFOZENwaW1haGpyV1ZUaWdBSDd0MXVmbGJfTGhnRloycUpuR1F4eVg5OEV6eEx1Y2N4WVJxcmxkQ1Z5a2RUUmVCalAwUUtXX25pTEw0Vl9YLUxITDNLbDBqQUN0VlVzdy0xVS1GV2lKOWplUjhiYVZmdmthQzZDdU9JaE5HOHZwSG1EeGxONkhycDVCTnlzRlRzZ2gwbURxX21TcW4wZjhNVWRvRFE?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 43,
    "headline": "גוגל משדרגת את יצירת הווידאו: סרטונים ארוכים יותר ושליטה מלאה",
    "explanation": "כלי יצירת הווידאו של ג'מיני (Gemini) מאפשר כעת ליצור סצנות באורך 40 שניות, לקבוע איך ייראו הפריים הראשון והאחרון, ואפילו לשדרג את איכות הווידאו ל-4K. זהו שדרוג משמעותי ביצירת וידאו מבוסס AI.",
    "impact": "במקום להשתמש בצילומי סטוק גנריים, מעצב הדרכה יכול כעת לייצר סרטון פתיחה ייחודי לקורס על שירות לקוחות, שמציג בדיוק את הסיטואציה הרצויה ובאיכות גבוהה.",
    "categoryKey": "media",
    "source": "MarkTechPost",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxQN3l1aHM3THIxeUd4U3FCX2RaUHZMaXNQZmVKbVZEc0gtbVUxVmdvcnhuZzdDc2RwbEFZVXBwcENXWjc2bTk1YjZxMzZhTDYtMUFxVXBqSHd4RDRVQU5hU3kzRkFTZXJTWFlQdFVlX1lzNnhyeU5lN0NTTzczUTJVdUNhTmFCeXNiaFNEWl9YenpXQ3JIcjVaZDFjS2pybVZBMTc5RzdsX0RmSzBFcnNjdGp0LTZwVGdzOEszcUZZSjZaWmpYMTlLMTJVMUhySTBndjlxVUhVMHJOdlhHaWhRTE1vMnNkZXky0gHoAUFVX3lxTFA3eXVoczdMcjF5R3hTcUJfZFpQdkxpc1BmZUptVkRzSC1tVTFWZ29yeG5nN0NzZHBsQVlVcHBwQ1daNzZtOTViNnEzNmFMNi0xQXFVcGpId3hENFVBTmFTeTNGQVNlclNYWVB0VWVfWXM2eHJ5TmU3Q1NPNzNRMlV1Q2FOYUJ5c2JoU0RaX1h6eldDckhyNVpkMWNLanJtVkExNzlHN2xfRGZLMEVyc2N0anQtNnBUZ3M4SzNxRllKNlpaalgxOUsxMlUxSHJJMGd2OXFVSFUwck52WEdpaFFMTW8yc2RleTI?oc=5",
    "timeAgo": "אתמול",
    "trending": true
  },
  {
    "id": 17,
    "headline": "גוגל הופכת ספרים דיגיטליים ליועצים אינטראקטיביים חכמים",
    "explanation": "פיצ'ר חדש של גוגל מאפשר להפוך ספרים שרכשתם ב-Google Books למעין צ'אט אישי. אפשר לשאול את הספר שאלות, לבקש ממנו לסכם פרקים, או להסביר מושגים מורכבים.",
    "impact": "מפתח הדרכה שצריך לבנות קורס המבוסס על ספר מקצועי, יכול כעת 'לראיין' את הספר ולקבל ממנו רעיונות למבנה הקורס, דוגמאות ותרגילים פרקטיים.",
    "categoryKey": "learning",
    "source": "Publishers Weekly",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxNWmppY0E2NkJKQTJYUlZnN3FBXzQ4VGJVRmlfbE1kRUFKaUcwV2hKRUozb2toT002RlRndHlTejQ3R1VEdjF0bndmWFhEQ0tQS25mcGRZQVhfYjMyaGR2YXI5SUFldHBOMGttcnlYckpEVTY1WlBUQlJtZlQ4SWtMeS01MzhZY0E3OWp5eDRzTnBwd2pWbmliSG1qdFAwUGZCbVUwS2xmTmRRcExERW55UmFteFliQUxaZEVSSkZfTDdidHRmbWdCRkVPcFZ3V1FDdDZuQmZPRzdXMk1IcEVlVG1ST2NjZWxncXRUbjFVVnhVckU?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 16,
    "headline": "דיבור הופך לפעולה: ג'מיני לייב מבצע משימות לפי פקודות קוליות",
    "explanation": "הגרסה הקולית של ג'מיני (Gemini Live) יכולה כעת לבצע משימות כמו קביעת פגישות ביומן או שליחת מיילים, רק באמצעות דיבור. זה הופך את העוזר הקולי להרבה יותר שימושי ופרודוקטיבי.",
    "impact": "מנהלת הדרכה בדרך לפגישה יכולה להכתיב לג'מיני רעיונות שעלו לה, לבקש ממנו לארגן אותם בנקודות, ולשלוח אותם במייל לצוות - והכל בלי להוריד את הידיים מההגה.",
    "categoryKey": "docs",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOMmNwTC12NHhpVWVFV0VvYmhSOU5KREphSTd6eTZQT0JRTmZwN2NwWlRNVmxMV0lvNTllQ1l4akltY0FQWGtxTlhyOVVKXzBZUHZfYW1LRzJxZlNucjBISkttRGYtWVZqWndUVkx1THlJUi10RW5YSm0wczZVVU9WWXZYVEFfdWVYaEZJTXNTSE5UbTBJbzRr?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 19,
    "headline": "גוגל משיקה כלי תמלול חכם שמזהה מי דיבר ומסכם אוטומטית",
    "explanation": "כלי חדש בשם Gemini 3.5 Transcribe יכול לתמלל הקלטות אודיו באיכות גבוהה. הוא יודע לזהות דוברים שונים, להוסיף סימני פיסוק, ולייצר סיכום אוטומטי של כל השיחה.",
    "impact": "במקום לתמלל ידנית ראיונות עם מומחי תוכן, אפשר להקליט את השיחה, להעלות לכלי, ולקבל תוך דקות תמלול מסודר וסיכום של הנקודות המרכזיות לבניית ההדרכה.",
    "categoryKey": "language",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOYVdaMzFHdEV4UEVtOUFac1BLQnUwVlg3NTZFa1BXM2xheWt5bkVtSWhNZkdONEJNN1ZtYzgtSnNaNGZRZG05eTEtX3RNaUd1NEZuU2piMHdQZnEyUzNDSWc4OTdQNW1qTkhvNGhNSlFSeGZaQ0Z3eHZzM3BIUEZwQjM5N1hUR3plTVN6c0t2VUl5Ykx0Q0RLcFhB?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 1,
    "headline": "ChatGPT יכול כעת לבצע פעולות באפליקציות אחרות בלי פרטי ההתחברות שלכם",
    "explanation": "שדרוג אבטחה חדש מאפשר ל-ChatGPT להתממשק לאפליקציות כמו יומן או מייל ולבצע פעולות בשמכם. החיבור נעשה בצורה מאובטחת כך ש-OpenAI לא רואה את הסיסמאות שלכם.",
    "impact": "ארגונים שחששו מחיבור ChatGPT למערכות פנימיות יכולים כעת לאפשר אינטגרציות בטוחות יותר. למשל, ליצור אוטומציה שמתזמנת הדרכות זום ישירות מהצ'אט.",
    "categoryKey": "ai_models",
    "source": "Mashable",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1SNTBpWF9qV2ctZzBmaUQ0WVR5cjh5YkducUNUM0dZbXNndlk2clVZQjBUV2NDc1FzMXVMZFIxQ1RoUXRPcE9IVi1qUHNDb0lKblJYTmlLVjdZVEE?oc=5",
    "timeAgo": "היום",
    "trending": false
  },
  {
    "id": 3,
    "headline": "ווידג'טים חדשים לאייפון מאפשרים גישה מהירה ל-ChatGPT",
    "explanation": "אפליקציית ChatGPT לאייפון עודכנה עם ווידג'טים חדשים למסך הבית. כעת אפשר להתחיל שיחה חדשה, לשאול שאלה קולית או לגשת לצ'אטים קודמים בלחיצת כפתור.",
    "impact": "מדריך שנמצא בשטח ומעביר הדרכה פרונטלית יכול לגשת במהירות הבזק ל-ChatGPT כדי לקבל תשובה לשאלה בלתי צפויה מהקהל, מבלי לבזבז זמן על פתיחת האפליקציה וניווט.",
    "categoryKey": "ai_models",
    "source": "MacStories",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5iT2l2ekkzYWU0V09HVmtMbmJFVlcwUW5sdzZzZ05MR096NnlKbUFUU0JZemwxTmRGUjdkelFEbV8tWU5jMUFMU2Z0Zk4?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 5,
    "headline": "מנהלי מערכת יכולים כעת לנהל הרשאות ב-ChatGPT לארגונים",
    "explanation": "OpenAI שחררה תוסף 'אדמין' חדש לגרסאות הארגוניות של ChatGPT. הוא מאפשר למנהלי IT לקבוע אילו עובדים יכולים להשתמש באילו יכולות, ולנהל את הגישה בצורה מרכזית.",
    "impact": "מנהל הדרכה בארגון גדול יכול כעת לתת לצוות שלו גישה לכלי יצירת התמונות, אך לחסום אותו משאר העובדים, וכך לשלוט טוב יותר על השימוש והעלויות.",
    "categoryKey": "ai_models",
    "source": "OpenAI",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBnQ1dZRm51Q3lLeElRZUpJZU1XVkpTWkNySHBQMTBfVEMyUjlWQkxwWkdOcjhrVTJUM2FZcm9Dand2U3lBZ2ZfcE00bDNFS0lrVHZrWWRqcDJ1X3NIa1lJ?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 12,
    "headline": "גוגל נותנת למפתחים יותר שליטה על יצירת תוכן עם ג'מיני",
    "explanation": "עדכון חדש למודל Gemini Omni 1.1 Flash מאפשר למפתחים לקבל שליטה מדויקת יותר על התוצרים. אפשר להגדיר פרמטרים ספציפיים כדי להבטיח שהתוצאה תהיה בדיוק מה שהם רוצים.",
    "impact": "צוות פיתוח הדרכה טכנולוגי שבונה לומדה אינטראקטיבית, יוכל להשתמש בזה כדי ליצור תגובות AI צפויות ומדויקות יותר לתרגילים של המשתמשים, במקום תגובות כלליות.",
    "categoryKey": "ai_models",
    "source": "blog.google",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPSTJ5X0FOc1pwR0FiZnZ2cV84SDdhbHhZanZpNnFaVDZpbEVhMHNoOThybFpaQmJpUUhrSnEyTlhxOGJsd0FlM1pUNXBnOENQTVFtLXEwcHYzeDRjeDZCTXA3UDh0U2k3YXp4WkpMUXpabE1HSHVIeDVKTWZRVWxjTjJ4UkM2Nnh1dzBCamVMSEU1SWMtWGlUZUFVM3BTa3pn?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 15,
    "headline": "ServiceNow וגוגל משלבות כוחות ליצירת סוכני AI אוטונומיים לארגונים",
    "explanation": "שתי ענקיות הטכנולוגיה משתפות פעולה כדי ליצור 'סוכני AI' שיכולים לנהל תהליכים ארגוניים מורכבים. המטרה היא ליצור אוטומציות שיטפלו במשימות שדורשות תיאום בין מספר מערכות.",
    "impact": "בעתיד הקרוב, ניתן יהיה להגדיר סוכן AI שינהל את כל תהליך קליטת עובד חדש: יפתח לו הרשאות, ישבץ אותו להדרכות חובה, וישלח לו חומרי קדם-למידה באופן אוטומטי.",
    "categoryKey": "learning",
    "source": "HPCwire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQUnNPRE9qOXBMdGh0WmZtY2NPbGJNMWtwNy1nSDZnNUxBNE1IQ1Yxd2kzcmlXbmFjRmpjNXpkWXJscW9tRG05Ui1YTEhNdEkybUVIRXpLbGNPeFRoZTNuUUMwUnpSM1RoaVctVDRfcHdqbXpISHR0YXdoeFRXVjFWMFhpY3ZOSktYVjFxYU9jb1N3RktuVnNHbHVCLWNFcnUxd242X0NNV3IxalUxc3NJQkFVN2lhWEloLTlYSUVZaDlSV05BOURYZ0N3?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 21,
    "headline": "מיקרוסופט מאחדת את כל עדכוני ה-AI שלה למקום אחד מרכזי",
    "explanation": "מיקרוסופט הודיעה שכל העדכונים העתידיים למוצרי ה-AI שלה, כולל Dynamics 365 ו-Power Platform, יפורסמו במפת דרכים אחת. זה יקל על ארגונים לעקוב אחרי החידושים ולהיערך אליהם.",
    "impact": "מנהלי הדרכה המשתמשים בכלים של מיקרוסופט יוכלו לתכנן מראש הדרכות על פיצ'רים חדשים. למשל, לראות מתי Copilot יקבל יכולת חדשה ב-Excel ולהכין סרטון הדרכה מבעוד מועד.",
    "categoryKey": "docs",
    "source": "Microsoft",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxQYlZCblpkS213anIwdDFoeDd3bWN2MXN4N1NRSkdWVTBOdVlzLTZYTGZ6YmdhUFB1NExxNlhPR1NXZmN4MVkwQUdvQzgxWkY5RzR4eF9uYy1DVEF5WmpnTy1DemFUTlA0OW1iNHljWldCUzRrbWF6aE5KOFpxMFZVZkJjbGlwMDNwdFNjektFZDRiRDRhUHlycEphYVk4TlVLMXVpSHA4bU5WOEN1SEpuUk8wYkI5XzI2ODdhbUwyY1hvOVF1UlhYQUNnQzZkRGVqN3U4VUx2RmV0cWNJTG5iUk9tR251RzhkemludnpENUk1Zi1PRDBYU2labkxudw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 35,
    "headline": "איך AI משנה את הדרך שבה אנחנו מכינים מצגות עסקיות",
    "explanation": "כלים כמו Canva ו-Copilot מאפשרים כעת לייצר שקפים מעוצבים, לסכם טקסטים ארוכים לנקודות, ואפילו ליצור תמונות ייחודיות למצגת. התוצאה היא תהליך הכנה מהיר ויעיל יותר.",
    "impact": "מדריך שצריך להכין מצגת להדרכה יכול לתת לכלי את חומר הגלם, וה-AI יציע מבנה לשקפים, ינסח כותרות, יבחר תמונות מתאימות, ויחסוך שעות של עבודת עיצוב ידנית.",
    "categoryKey": "media",
    "source": "Financial Management magazine",
    "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxQeWMyYXBvY090VFotSG5GUUY2Sk5qdUNwel9ic3hLWExsOVdRNnRIZFNtRGpLMFhrQ09fMDJiVWUyVjJHS2dLSmMweDFFeUg0Y2c2SEVQemh0aXpEOTJ3VkQ4TGJ4YVAwX1NJYkpCUDZhZm9IazJNcGtfVjZJUjFBSFJiV24ybHRpNVZtVk5SVFdCby12LTRXYWRSenZzZw?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 36,
    "headline": "פוטושופ מאמצת עריכת תמונות באמצעות פקודות טקסט",
    "explanation": "אדובי משלבת עמוק יותר יכולות AI בפוטושופ, ומאפשרת למשתמשים לבצע עריכות מורכבות על ידי כתיבת הוראות פשוטות. למשל, 'הפוך את השמיים לדרמטיים יותר' או 'הוסף צל לדמות'.",
    "impact": "מעצב למידה ללא ניסיון בפוטושופ יוכל לשפר תמונות לקורסים בקלות. במקום להסתבך עם כלים טכניים, הוא פשוט יכתוב מה הוא רוצה לשנות בתמונה ויקבל תוצאה מקצועית.",
    "categoryKey": "media",
    "source": "Creative Bloq",
    "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQUS1HVzczOFpWVDlhX2Rua0xnTllJeExSMkVJT05QRGljMW8wMXI2WktFdE9kZGI1bkVJNm9seVdsaFRtMmtBYnBrUVF3ajM1ZmJXUTlhVDZjTTctZWZfdDAza1dRRm1jT3lQME5fOUd4Qk9DaHYwbG5wMnpNcEcyYzltZDdnZTFqRTVLdEJDUkFmQ3hwWE5OY3E4V2pnZV90bk9Qa3d2dU5kX1pzYjE3MjZR?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 40,
    "headline": "כלי חדש יוצר אוטומטית סרטוני פרסומת ותמונות מוצר",
    "explanation": "פלטפורמה בשם PhotoGPT הרחיבה את היכולות שלה וכעת מציעה יצירת סרטוני פרסומת קצרים, תמונות מוצר, ואפילו דפי מוצר שלמים. הכלי מיועד בעיקר לעולם המסחר האלקטרוני.",
    "impact": "צוות הדרכה שיווקי יכול להשתמש בכלי כדי ליצור במהירות סרטונים קצרים או תמונות לקידום קורסים חדשים ברשתות החברתיות, במקום להפיק אותם מאפס.",
    "categoryKey": "media",
    "source": "WKOW",
    "sourceUrl": "https://news.google.com/rss/articles/CBMioAJBVV95cUxQWlBYZjdZQll1Sm5pWWxVUktIY0lnM0xGR1pFV0hBeG9RVXFSS19zSnpkNGdpU3pBMklTeC13cEdINFkyYU5SQUlRVTFPZnFZUGVUdF9jSlF1R0pCNUZlSVdZSkl3aVVUNkt4TFRGRUdzdGhIQ1IxSXJrbUNhb0RLd21uLXAyaDVCbC1XRWdyUUdYeTdERlktNm9DWmsxeDY0dXNQRkdRNDFSRV9QN3h5UnVkdUZ3YWdWblB5a0wwQkZXRmZzS0JCYmtyRlQ4ZTd6eFNHT2VfalBRbnZ2RkRER3ZmdE8zbFBXajFZZzNRdHZ5UTdlci1ZUXZrLWVSNEt1V2VXU0FfZVJtZmhVaDk3S2NrM1RNWnU4aXEtdlZqbVI?oc=5",
    "timeAgo": "אתמול",
    "trending": false
  },
  {
    "id": 34,
    "headline": "כלי חדש בשם Harness מבצע סקירת קוד אוטומטית בעזרת AI",
    "explanation": "חברת Harness השיקה מאגר קוד חדש עם יכולת AI מובנית. הכלי יכול לסרוק קוד שמתכנתים כותבים, למצוא טעויות, להציע שיפורים, ולהכין אותו לעבודה עם מערכות אוטומטיות.",
    "impact": "מי שמפתח הדרכות טכנולוגיות למתכנתים יכול להשתמש בכלי כדי ליצור דוגמאות קוד איכותיות, או לתת למשתתפים בקורס לבדוק את הקוד שלהם ולקבל משוב מיידי מה-AI.",
    "categoryKey": "learning",
    "source": "PR Newswire",
    "sourceUrl": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNSTBwZGxLeGl0V1ZqUTRDZllkSTJqeDlMQWhjRE5yc3luclVxNndwalBzc2NKQm51bVR5SW9ZOHlGeWdpeFRxU2JkTTRJZFlXblZaLTZEVlZuUzJNakhXdzdJX2JMVXJzWmdmcjk2RGZHVldHMG0zZkJZM0ZId3J3LXh1c2hnanc3dS1uWDctVzB3dS14OHZQLVRmNzBNTk9qWDdINHNvdnp1UmdrLWdoQ0cxWm5TR0tTR3gxQVNrOU1pM1VpNGZPOEg1VVY2R3JnTnc?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 30,
    "headline": "החזון של OpenAI: סוכני AI שיבצעו עבורנו הכל",
    "explanation": "ב-OpenAI עובדים על פיתוח 'סוכני AI' - תוכנות אוטונומיות שיכולות לבצע משימות מורכבות הדורשות מספר שלבים. הרעיון הוא לתת להם מטרה, והם יבינו לבד איך להשיג אותה.",
    "impact": "בעתיד, מנהל פרויקט הדרכה יוכל להגיד לסוכן AI: 'תפתח קורס על ניהול זמן לעובדים חדשים', והסוכן יבצע את המחקר, יכתוב את התוכן, יעצב את המצגת ויעלה אותה למערכת ה-LMS.",
    "categoryKey": "ai_models",
    "source": "TechCrunch",
    "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPdnJHeUFoS1IxSUZ6bFpySlBzOVp4V2RnZ1hCYTRwUFMxejByWVhFVk9oY09zbHBXRGlaRDVWVXEzMVB1TEUxbDlqVVdfNXdiTDB6Qy1NR25zZlFHYVZnZ1Vhekw5MU9LUVV0RGt2YXlnQU1sN05JMHd6RUlMQ2xrNEtVMlpWNHV6LVotUGZQbm8wX3BtWTVxMENrNUVxOWdfR2VUc2NB?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  },
  {
    "id": 2,
    "headline": "איך ChatGPT יכול להפוך כל אחד למפתח אתרים בסיסי",
    "explanation": "כתבה אישית מתארת איך בעזרת ChatGPT, גם אדם ללא רקע טכני יכול לבנות אתרי אינטרנט פשוטים. הכלי מסייע בכתיבת הקוד, הסבר של מושגים, ומציאת פתרונות לתקלות.",
    "impact": "מעצב למידה שרוצה לבנות דף נחיתה אינטראקטיבי פשוט ללומדה, יכול להיעזר ב-ChatGPT כדי לייצר את הקוד הנדרש, גם אם אין לו שום ידע קודם בפיתוח ווב.",
    "categoryKey": "learning",
    "source": "MakeUseOf",
    "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPSVVROUtIa2RnMHYzRjhWMFBLQTI0MkMwdkdXZUN4dzhaaGFQcE1Ob2xvUTVsUzZuLThUZUgzRjRycVdOUjRhdTRYcVl2anNFMnQ3Q2VpMzItbUJsYWh1TXRiR2xIdnBDd2NsN2wxeUhEZW14QTJUN3lLX1R1SnJGUXlIVHFqT0RELThLUXpZdTZOMG1PODE2Zw?oc=5",
    "timeAgo": "השבוע",
    "trending": false
  }
];

window.NEWS_DATA = NEWS_DATA;
window.CATEGORIES = CATEGORIES;
window.LAST_UPDATED = "2026-08-30";
