window.STUDIO_DATA = [
  {
    "name": "מיפוי והכנה",
    "desc": "מה כבר ידוע, מה צריך לבדוק, ומה לא מחברים.",
    "tasks": [
      {
        "id": "inventory",
        "title": "אישור מיפוי סביבת העבודה",
        "owner": "ביחד",
        "api": "לא נדרש API",
        "steps": [
          "עברו על המיפוי בראש האתר והשוו לסביבת העבודה בפועל.",
          "בכל תוכנת Adobe לחצו Help → About ורשמו גרסה מדויקת; ב-Windows לחצו Win+R, הקלידו winver ולחצו Enter.",
          "ב-Claude פתחו Settings ובדקו שהחשבון Pro; ב-Outlook בדקו אם זו גרסת New או Classic.",
          "רשמו את כתובת מערכת המשימות ושם הכונן בלבד במסמך מקומי מאושר — לא באתר הציבורי."
        ],
        "check": "רשימת גרסאות וסוגי חשבונות נשמרה אצלכם.",
        "prompt": "",
        "hint": "המיפוי של גילי הושלם; בדיקת גרסאות ותאימות עדיין פתוחה.",
        "links": [],
        "files": []
      },
      {
        "id": "policy",
        "title": "אישור החברה לפני גישה למידע",
        "owner": "אלווין / IT",
        "api": "מותנה באישור IT",
        "steps": [
          "שלחו בקשה ל-IT/אבטחת מידע עם שמות Claude, Outlook, AI חיצוני וכונן רשת.",
          "בקשו מדיניות העלאה, רישיונות, שמירת מידע והרשאות קריאה/כתיבה.",
          "בקשו תיקיית בדיקה מבודדת ולקוח מדומה.",
          "קבלו אישור כתוב לפני העברת חומר אמיתי."
        ],
        "check": "יש תשובה כתובה והוגדר מה מותר ומה אסור.",
        "prompt": "",
        "hint": "הרשאת התקנה ב-Windows אינה אישור להעברת חומר ארגוני.",
        "links": [
          [
            "security",
            "https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide"
          ]
        ],
        "files": []
      },
      {
        "id": "baseline",
        "title": "מדידת מצב קיים",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי את קובץ המדידה המצורף ב-Excel אם מותקן או בעורך CSV מאושר.",
          "במשך שבוע רשמי זמן בפועל לחמש המשימות: גדלים, תיקונים, מיילים, דדליינים וקונספטים.",
          "רשמי גם טעויות, סבבי תיקון ומספר תוצרים.",
          "לאחר הפיילוט השווי למשימות דומות."
        ],
        "check": "יש מדידת בסיס ללא פרטי לקוחות.",
        "prompt": "",
        "hint": "",
        "links": [],
        "files": [
          [
            "טבלת מדידה",
            "templates/metrics.csv"
          ]
        ]
      }
    ]
  },
  {
    "name": "Claude למתחילות",
    "desc": "התקנה, חשבון, הוראות קבועות והיכרות ראשונה.",
    "tasks": [
      {
        "id": "install",
        "title": "התקנת Claude Desktop ב-Windows",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי את קישור ההורדה בדפדפן Edge או Chrome.",
          "בחרי Download for Windows.",
          "לחצי Win+E → Downloads ולחצי פעמיים על המתקין.",
          "אם Windows מבקש אישור, בדקי שמקור הקובץ רשמי ואשרי רק לפי נוהל החברה.",
          "לאחר ההתקנה לחצי Start, חפשי Claude ופתחי."
        ],
        "check": "Claude נפתח ללא שגיאה.",
        "prompt": "",
        "hint": "אם ההתקנה חסומה או מופיעה דרישת מנהל — לא עוקפים.",
        "links": [
          [
            "הורדת Claude",
            "https://claude.com/download"
          ]
        ],
        "files": []
      },
      {
        "id": "login",
        "title": "התחברות ובדיקת Claude Pro",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי Claude ולחצי Sign in.",
          "בחרי את שיטת ההתחברות של החשבון הקיים; אל תפתחי חשבון חדש ללא צורך.",
          "לחצי על הפרופיל בתחתית התפריט → Settings → Account / Billing או Plan לפי הגרסה.",
          "ודאי שמופיע Pro ושלא נדרש תשלום נוסף.",
          "פתחי New chat והקלידי את פרומפט הבדיקה."
        ],
        "check": "נוצרה שיחת בדיקה.",
        "prompt": "תסביר לי בעברית פשוטה איך לעבוד איתך כמעצבת גרפית. תן דוגמה אחת לבריף מדומה.",
        "hint": "",
        "links": [
          [
            "api",
            "https://support.claude.com/en/articles/9876003-why-is-claude-api-usage-billed-separately-from-my-paid-claude-plan"
          ]
        ],
        "files": []
      },
      {
        "id": "instructions",
        "title": "הגדרת הוראות קבועות",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על תמונת הפרופיל → Settings → Your Claude → Instructions for Claude (בממשק ישן Settings → Account).",
          "לחצי Edit או בשדה ההוראות.",
          "לחצי כאן העתקת פרומפט, הדביקי ב-Ctrl+V ושמרי.",
          "פתחי שיחה חדשה ובקשי להסביר את הכללים."
        ],
        "check": "Claude מסביר את הכללים בשיחה חדשה.",
        "prompt": "אתה העוזר המקצועי שלי במשרד פרסום. אני עובדת ב-Windows עם Photoshop, InDesign, Illustrator, Acrobat, Outlook ומערכת משימות פנימית. עזור לי בפיתוח קונספטים, ביקורת עיצוב, התאמות גדלים, גרידים, איות ו-RTL, תיקונים, תכנון ייצוא ודדליינים. הצע תשובות מעשיות בעברית ובאנגלית. שאל כשמידע חסר. הפרד לקוחות. עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. הבחן בין המלצה לפעולה שבאמת בוצעה. החלטות יצירתיות ואישור סופי נשארים בידיי.",
        "hint": "",
        "links": [
          [
            "cowork",
            "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork"
          ]
        ],
        "files": []
      },
      {
        "id": "cowork",
        "title": "היכרות עם Cowork ויצירת קובץ ראשון",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי New chat או Home.",
          "אם מופיע בורר Chat / Cowork, בחרי Cowork; בממשק החדש התחילי באותו שדה הודעה ובקשי משימה שיוצרת קובץ.",
          "הדביקי את הפרומפט ולחצי Send.",
          "בדקי את התוצר ופתחי את הקובץ רק אם הוא מוכר.",
          "אם Claude מבקש גישה לתיקייה, בחרי תיקיית ניסוי בלבד או בטלי."
        ],
        "check": "נוצר קובץ ניסוי עם 3 כיווני עיצוב.",
        "prompt": "צור מסמך קצר עם שלושה רעיונות לקמפיין מדומה למותג קפה דמיוני. אל תיגש למידע אחר.",
        "hint": "",
        "links": [
          [
            "cowork",
            "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork"
          ],
          [
            "local",
            "https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile"
          ]
        ],
        "files": []
      },
      {
        "id": "plugins",
        "title": "מציאת Plugins / Skills / Connectors",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי את סרגל הצד של Claude.",
          "לחצי Plugins (בגרסה קודמת Customize).",
          "חפשי My plugins, Skills או Connectors; פתחי את המדריך הרשמי אם שמות הכפתורים שונים.",
          "בדקי שיכולות יצירת קבצים ו-Skills זמינות. אם חסומות, רשמי צילום מסך ללא מידע אישי ופני לתמיכה או IT."
        ],
        "check": "ניתן למצוא את אזור המיומנויות.",
        "prompt": "",
        "hint": "",
        "links": [
          [
            "plugins",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "skills",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ]
        ],
        "files": []
      }
    ]
  },
  {
    "name": "תיקיות, שרת וידע לקוח",
    "desc": "למידת שפה מותגית אינה אימון מודל: בונים מאגר מסודר ומתעדכן.",
    "tasks": [
      {
        "id": "folders",
        "title": "יצירת סביבת ניסוי מקומית",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי Win+E → Documents (או מיקום שאושר).",
          "לחצי Ctrl+Shift+N, כתבי GILI_AI_TEST ולחצי Enter.",
          "פתחי אותה; צרי תיקיות 01_Input, 02_Work, 03_Output, 04_Approved.",
          "העתיקי אל Input רק קובץ מדומה או מאושר. מקור נשאר ללא שינוי.",
          "צרי תיקיית משנה לכל לקוח רק לאחר אישור."
        ],
        "check": "יש 4 תיקיות מקומיות עם חומר ניסוי בלבד.",
        "prompt": "",
        "hint": "",
        "links": [],
        "files": []
      },
      {
        "id": "server",
        "title": "בדיקת הכונן הפנימי — בלי חיבור גורף",
        "owner": "אלווין / IT",
        "api": "מותנה באישור IT",
        "steps": [
          "ב-Win+E בחר This PC ובדוק כוננים מחוברים.",
          "אם אין כונן, בקש מ-IT את הנתיב ואת שיטת ההתחברות; אין צורך להזין סיסמה באתר.",
          "רק לפי הוראות IT: This PC → … → Map network drive → בחר אות ונתיב שסופק → Finish.",
          "פתח תיקיית ניסוי מורשית; בדוק קריאה בלבד ויצירת עותק בתיקיית ניסוי.",
          "אם Cowork אינו תומך בכונן ממופה או UNC, השתמש בתיקיית staging מקומית מאושרת והעבר תוצרים ידנית."
        ],
        "check": "גישה מצומצמת נבדקה; אין שינוי לקבצי המקור.",
        "prompt": "",
        "hint": "אין לתת גישה לכל השרת. העיבוד ב-Claude אינו בהכרח מקומי גם אם הקובץ מקומי.",
        "links": [
          [
            "local",
            "https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile"
          ]
        ],
        "files": []
      },
      {
        "id": "folder-access",
        "title": "גישה לתיקיית ניסוי מ-Claude Desktop",
        "owner": "ביחד",
        "api": "מותנה באישור IT",
        "steps": [
          "פתחו Claude Desktop → Cowork / משימה חדשה.",
          "לחצו על בחירת תיקייה/הוספת הקשר המקומי (שם הכפתור משתנה בין גרסאות).",
          "בחרו GILI_AI_TEST בלבד ולחצו Select Folder או אישור הגישה.",
          "בקשו לקרוא קובץ בדיקה אחד וליצור דוח חדש ב-03_Output.",
          "בדקו ב-Explorer שהמקור לא השתנה; סגרו או הסירו את הגישה בתום הבדיקה."
        ],
        "check": "קובץ דוח הופיע רק בתיקיית הפלט.",
        "prompt": "קרא רק את קובץ הדוגמה שבתיקייה שבחרתי. צור דוח חדש ב-03_Output. אל תשנה קבצים אחרים.",
        "hint": "",
        "links": [
          [
            "local",
            "https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile"
          ],
          [
            "project",
            "https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork"
          ]
        ],
        "files": []
      },
      {
        "id": "client-project",
        "title": "Project נפרד לכל לקוח",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי Claude → Projects → New Project או +.",
          "הזיני שם קוד של לקוח ניסוי ולחצי Create.",
          "בפרויקט חפשי Project knowledge → Add / + והעלי את תבנית Client DNA עם נתוני דוגמה.",
          "לחצי Set project instructions והדביקי את הפרומפט; שמרי.",
          "בכל עבודה פתחי את הפרויקט המתאים ולא שיחה של לקוח אחר."
        ],
        "check": "פרויקט ניסוי עם הוראות ומאגר נפרד.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. ענה לפי Client DNA, דוגמאות מאושרות ומפרט הפרויקט בלבד. כאשר אין כלל מותג, ציין שהוא לא ידוע.",
        "hint": "",
        "links": [
          [
            "Claude Projects",
            "https://claude.ai/projects"
          ],
          [
            "project",
            "https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork"
          ]
        ],
        "files": [
          [
            "Client DNA",
            "templates/client-dna.md"
          ]
        ]
      },
      {
        "id": "dna",
        "title": "בניית Client DNA — ספר מותג חי",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי את תבנית Client DNA המצורפת בעורך טקסט.",
          "מלאי צבעים, לוגו, טיפוגרפיה, טון, קהל, שימושים אסורים וגרידים ידועים.",
          "הוסיפי רק דוגמאות מורשות: מאושר מול נדחה, מפרטי דיגיטל ודפוס.",
          "בפרויקט הלקוח העלי את החומר המאושר ובקשי את הפרומפט.",
          "השווי למקורות, תקני ידנית ושמרי גרסה מתוארכת."
        ],
        "check": "מסמך כללים מאומת; מידע חסר מסומן.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. הפק Client DNA מסודר: צבעים (HEX/CMYK אם מסופק), פונטים, היררכיה, גריד, מרווחים, לוגו, tone of voice, דוגמאות מאושרות וטעויות. ציין מקור לכל כלל. הפרד כללי חובה מהמלצות.",
        "hint": "",
        "links": [],
        "files": [
          [
            "תבנית Client DNA",
            "templates/client-dna.md"
          ]
        ]
      },
      {
        "id": "grids",
        "title": "בניית ספריית גרידים לכל מותג",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי Project של הלקוח ובקשי טבלת גרידים לפי פורמטים אמיתיים.",
          "סמני אילו גדלים נדרשים והשלימי אזורי בטיחות, שוליים ומגבלות טקסט לפי המפרט.",
          "ב-Photoshop פתחי File → New וצרי Artboard במידות הרצויות; View → Guides → New Guide Layout אם זמין.",
          "ב-Illustrator צרי Artboards; ב-InDesign הגדירי Layout → Margins and Columns ו-Parent Pages.",
          "שמרי עותק תבנית מאושר בכלי המקורי; העלי לפרויקט רק תיעוד מותר."
        ],
        "check": "לפחות תבנית אחת מאושרת לכל סוג תוצר שנבחר.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. צור מפרט גריד לכל פורמט שנמסר: מידות, safe area, טורים, gutter, מיקום לוגו, כותרת, CTA ותמונה. אל תמציא מפרטי פלטפורמות; סמן מה צריך אישור.",
        "hint": "",
        "links": [],
        "files": [
          [
            "טבלת פורמטים",
            "templates/formats.csv"
          ]
        ]
      },
      {
        "id": "feedback-learning",
        "title": "עדכון הידע אחרי תיקונים",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי את Project של הלקוח.",
          "הדביקי תיקון מאושר ומחקי פרטים לא נחוצים.",
          "בקשי להבדיל בין תיקון נקודתי להעדפה קבועה.",
          "פתחי Client DNA, עדכני רק כלל שקיבל אישור ושמרי גרסה חדשה.",
          "החליפי או עדכני את מסמך הידע בפרויקט לפי הממשק."
        ],
        "check": "כל שינוי כולל תאריך ומקור ולא מתערבב בין לקוחות.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. הצע אילו תיקונים הם נקודתיים ואילו עשויים להיות כלל מותג חוזר. אל תקבע כלל קבוע בלי אישור.",
        "hint": "",
        "links": [],
        "files": []
      }
    ]
  },
  {
    "name": "Outlook, דדליינים ואתר החברה",
    "desc": "מערכת החברה נשארת מקור האמת. אין Monday, Slack או Google Drive בתוכנית.",
    "tasks": [
      {
        "id": "outlook-admin",
        "title": "בדיקת Microsoft 365 עם IT",
        "owner": "אלווין / IT",
        "api": "מותנה באישור IT",
        "steps": [
          "העבר למנהל IT את מדריך Microsoft 365 הרשמי המצורף.",
          "בקש ממנהל Microsoft Entra Global Administrator לבדוק את האפליקציה, הרשאות delegated ואת מדיניות החברה.",
          "המנהל מבצע את תהליך consent לפי מדריך Anthropic (ב-Team/Enterprise נדרש גם Owner של Claude).",
          "בקש לחסום כתיבה, שליחה, מחיקה ושינוי אירועים במידת האפשר; בדוק גם הרשאות SharePoint ו-Teams שאינן נדרשות.",
          "אם לא מאושר — עצור, ובחר במסלול הידני."
        ],
        "check": "אישור וחיבור קריאה בלבד או החלטה מפורשת שלא לחבר.",
        "prompt": "",
        "hint": "Claude Pro אינו פוטר מאישור Entra בחשבון עבודה. לא צריך API key לחיבור המובנה. אל תאשר Always allow לפעולות כתיבה.",
        "links": [
          [
            "admin",
            "https://support.claude.com/en/articles/12542951-set-up-the-microsoft-365-connector"
          ],
          [
            "security",
            "https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide"
          ],
          [
            "ms",
            "https://support.claude.com/en/articles/15183774-connect-to-microsoft-365"
          ]
        ],
        "files": []
      },
      {
        "id": "outlook-connect",
        "title": "חיבור Outlook לאחר אישור",
        "owner": "גילי",
        "api": "מותנה באישור IT",
        "steps": [
          "פתחי Claude → Plugins / Customize → Connectors.",
          "חפשי Microsoft 365 ולחצי Add או Connect.",
          "בחרי Work or school account אם מוצג.",
          "התחברי עם חשבון העבודה ואשרי רק הרשאות שה-IT אישר.",
          "אם מופיע Need admin approval — עצרי וצלמי הודעה ללא פרטים רגישים.",
          "בצעי את בדיקת הקריאה עם הפרומפט; אל תפעילי Automatically approve."
        ],
        "check": "Claude מציג מייל בדיקה מזוהה ממקור מורשה.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. מצא רק את מייל הבדיקה עם הנושא AI TEST. הצג נושא, תאריך ופעולה נדרשת. אל תשלח ואל תשנה דבר.",
        "hint": "",
        "links": [
          [
            "ms",
            "https://support.claude.com/en/articles/15183774-connect-to-microsoft-365"
          ],
          [
            "plugins",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ]
        ],
        "files": []
      },
      {
        "id": "manual-mail",
        "title": "מסלול ידני: ריכוז מיילים בלי חיבור",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "ב-Outlook בחרי את המייל המותר לעיבוד.",
          "סמני רק את הטקסט הנדרש ולחצי Ctrl+C.",
          "הסירי פרטי זיהוי או מידע חסוי במידת הצורך לפני הדבקה.",
          "פתחי Claude Project מתאים, הדביקי את הטקסט ואת הפרומפט.",
          "העתיקי רק את הרשימה המאומתת לאתר החברה או לקובץ עבודה מאושר."
        ],
        "check": "רשימת משימות לפי מקור, בלי שליחת מייל.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. חלץ משימות, תיקונים, תאריכי יעד, אחראי ומידע חסר. שמור את ניסוח הלקוח ומקור. סמן סתירות ודדליינים שלא צוינו.",
        "hint": "",
        "links": [],
        "files": []
      },
      {
        "id": "calendar",
        "title": "בדיקת Outlook Calendar",
        "owner": "גילי",
        "api": "מותנה באישור IT",
        "steps": [
          "ב-Outlook לחצי Calendar ובחרי את תצוגת השבוע.",
          "אם Microsoft 365 אושר, פתחי שיחה ובחרי את החיבור דרך + / Connectors אם נדרש.",
          "הדביקי את הפרומפט והשווי ידנית בין הפגישות ללוח.",
          "אם אין חיבור, העתיקי רק רשימת פגישות ודדליינים מאושרת לצ׳אט.",
          "אירוע חדש או שינוי יוצרים ידנית ב-Outlook: Calendar → New event → נושא, תאריך ושעה → Save; הזמנות רק אחרי אישור."
        ],
        "check": "דוח שבועי תואם ללוח ולא נוצרו שינויים אוטומטיים.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. הצג פגישות ודדליינים לשבוע הקרוב לפי יום ושעה מקומית, התנגשויות ומשימות הכנה. הפרד בין אירוע אמיתי לתאריך מוצע.",
        "hint": "",
        "links": [
          [
            "ms",
            "https://support.claude.com/en/articles/15183774-connect-to-microsoft-365"
          ]
        ],
        "files": []
      },
      {
        "id": "corrections",
        "title": "ריכוז תיקונים מכל הערוצים",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי את Project של הלקוח.",
          "אספי מיילים מורשים, הערות Acrobat ופרטי משימה מהאתר הפנימי.",
          "הדביקי רק קטעים רלוונטיים עם תאריך ומקור, ובקשי טבלת תיקונים.",
          "סמני כפילויות וסתירות; בקשי הבהרה אם אין החלטה.",
          "עדכני ידנית את המשימה המקורית והשתמשי בטבלת התיקונים לביצוע."
        ],
        "check": "לכל תיקון יש מקור, סטטוס וגרסה.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. בנה טבלת תיקונים: מספר, מקור, ציטוט, תוצר, גרסה, פעולה, דחיפות, תאריך, תלות וסטטוס. קבץ כפילויות בלי להעלים מקור. סמן סתירות.",
        "hint": "",
        "links": [],
        "files": [
          [
            "טבלת תיקונים",
            "templates/feedback.csv"
          ]
        ]
      },
      {
        "id": "internal-manual",
        "title": "מערכת המשימות הפנימית — שימוש ידני",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי את האתר הפנימי דרך הקישור הרגיל של החברה.",
          "פתחי משימה אחת, קראי את הבריף, סטטוס, תאריך יעד ותיקונים.",
          "העתיקי את המידע שמותר לעבד בלבד לפרויקט המתאים.",
          "בקשי מ-Claude לייצר תוכנית עבודה או דוח.",
          "לאחר אימות, חזרי למשימה המקורית, עדכני בשדות הקיימים ושמרי לפי נוהל החברה."
        ],
        "check": "האתר הפנימי נשאר מקור האמת.",
        "prompt": "המר את המשימה המצורפת לרשימת פעולות לפי סדר, תלות, תאריך יעד והחלטות פתוחות.",
        "hint": "לא ניתן לדעת שמות כפתורים באתר הפרטי בלי תיעוד או צילום מסך מאושר; לא המצאתי ממשק.",
        "links": [],
        "files": []
      },
      {
        "id": "internal-api",
        "title": "חקירת API של מערכת החברה",
        "owner": "אלווין / IT",
        "api": "API אפשרי — לא בשלב הראשון",
        "steps": [
          "בקש מבעל המערכת מסמך API רשמי, כתובת sandbox, גרסה, מנגנון OAuth/SSO והגבלות הרשאה.",
          "בדוק אם יש export CSV מובנה לפני פיתוח.",
          "אם יש API, בקש חשבון ניסוי ו-scope לקריאת משימות בלבד.",
          "בדוק GET מתועד על משימת דמה, טיפול ב-401/403/429 ותוקף token; אין לנחש endpoints.",
          "תכנן MCP/שרת מתווך מאושר עם audit logs וסודות בצד שרת; בדוק לפני חיבור Claude.",
          "אם אין API או אישור, הישאר במסלול הידני."
        ],
        "check": "מסמך היתכנות: API / CSV / ידני, מאושר על ידי IT.",
        "prompt": "",
        "hint": "אין כתובת API, סוג התחברות או תיעוד ידועים. אין לבצע scraping או להטמיע token ב-GitHub.",
        "links": [],
        "files": []
      }
    ]
  },
  {
    "name": "ספריית Skills והתקנה",
    "desc": "14 מיומנויות אישיות להורדה + 6 רשמיות להוספה + 4 מובנות. מתחילים בליבה ומרחיבים לפי הצורך.",
    "tasks": [
      {
        "id": "skill-install",
        "title": "איך מתקינים Skill מוכן (פעם ראשונה)",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי את המשימה של ה-Skill הרצוי ולחצי על כפתור הורדת ZIP. ב-Edge/Chrome בדקי Downloads (Ctrl+J).",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "הדביקי פרומפט בדיקה מהמשימה ובדקי את התוצר. אין צורך ב-API או ידע בקוד."
        ],
        "check": "ה-Skill מופיע ומחזיר פלט מובנה.",
        "prompt": "השתמש ב-Skill המותקן על בריף מדומה למותג קפה. הסבר מה התוצר ומה צריך אישור.",
        "hint": "הקבצים המצורפים הם הוראות בלבד, ללא סקריפטים. יש לבדוק תוכן והיתר שימוש.",
        "links": [
          [
            "skills",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "plugins",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "custom",
            "https://support.claude.com/en/articles/12512198-how-to-create-custom-skills"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": []
      },
      {
        "id": "skill-client-brief",
        "title": "Client Brief Analyzer — נתח בריף ודרישות · ליבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: בריף חדש או מייל מאושר: הדביקי טקסט או צרפי PDF לא חסוי.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: טבלת תוצרים, מטרה, קהל, דדליין ושאלות להשלמה."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: טבלת תוצרים, מטרה, קהל, דדליין ושאלות להשלמה.",
        "prompt": "השתמש ב-client-brief. בריף מדומה: בית קפה משיק קפה קר; פוסט 1080×1080, סטורי 1080×1920, קהל צעיר, דדליין חמישי. חלץ דרישות, שאלות חסרות ותוצרים.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/client-brief.zip"
          ]
        ]
      },
      {
        "id": "skill-brand-guardian",
        "title": "Brand Guardian — בדוק התאמה לשפת מותג · ליבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: צרפי ספר מותג מאושר וייצוא PNG/PDF של העיצוב; צייני גרסה.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: הפרדה בין חריגה אמיתית להמלצה, עם מקור לכל כלל."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: הפרדה בין חריגה אמיתית להמלצה, עם מקור לכל כלל.",
        "prompt": "השתמש ב-brand-guardian. כללי מותג מדומים: רק ירוק כהה ושמנת, לוגו בפינה ימנית, ללא צל. העיצוב כולל צל ורקע כחול. הצג חריגות ותיקונים.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/brand-guardian.zip"
          ]
        ]
      },
      {
        "id": "skill-grid-builder",
        "title": "Grid Builder — בנה מפרט גרידים · ליבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: מסרי גודל, סוג מדיה, שוליים, רכיבים קבועים וכללי לקוח.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: מפרט גריד שניתן ליישם ידנית ב-Adobe, לא קובץ עיצוב אוטומטי."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: מפרט גריד שניתן ליישם ידנית ב-Adobe, לא קובץ עיצוב אוטומטי.",
        "prompt": "השתמש ב-grid-builder. תכנן גריד לפוסט 1080×1080 ולסטורי 1080×1920, עם לוגו, כותרת, תמונה ו-CTA. ציין פיקסלים ושוליים.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/grid-builder.zip"
          ]
        ]
      },
      {
        "id": "skill-creative-director",
        "title": "Creative Director — פתח קונספטים והרחב שפה · ליבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: ספקי בריף, מגבלות מותג, קהל, ורפרנסים מותרים.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: שלוש חלופות מובחנות עם נימוק והתאמה לבריף."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: שלוש חלופות מובחנות עם נימוק והתאמה לבריף.",
        "prompt": "השתמש ב-creative-director. הצע שלושה כיוונים שונים לקמפיין קפה קר: מסר, צבע, טיפוגרפיה, קומפוזיציה ורעיון להנפשה.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/creative-director.zip"
          ]
        ]
      },
      {
        "id": "skill-design-critic",
        "title": "Design Critic — בקר איכות חזותית · ליבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: ייצאי סקיצה כתמונה והוסיפי את המטרה והפורמט.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: משוב ממוקד ומדורג, ללא שינוי הקובץ."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: משוב ממוקד ומדורג, ללא שינוי הקובץ.",
        "prompt": "השתמש ב-design-critic. בדוק את הסקיצה המדומה המצורפת מבחינת היררכיה, קריאות, קומפוזיציה ומותג. דרג תיקונים לפי חשיבות.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/design-critic.zip"
          ]
        ]
      },
      {
        "id": "skill-resize-planner",
        "title": "Resize Planner — תכנן התאמות גדלים · ליבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: צרפי צילום עיצוב מקור, מידות, דרישות ופורמטים סופיים.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: טבלת התאמות ובדיקות חיתוך; את הביצוע עושים ב-Adobe."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: טבלת התאמות ובדיקות חיתוך; את הביצוע עושים ב-Adobe.",
        "prompt": "השתמש ב-resize-planner. המקור 1080×1080; נדרשים 1080×1920 ו-1200×628. הסבר מה מזיזים, חותכים ומגדילים בכל גרסה.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/resize-planner.zip"
          ]
        ]
      },
      {
        "id": "skill-feedback-manager",
        "title": "Feedback Manager — רכז תיקוני לקוח · ליבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: הדביקי הערות מאושרות והוסיפי תאריך/גרסה ומקור.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: רשימה ללא כפילויות, מקורות, סתירות ופעולות."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: רשימה ללא כפילויות, מקורות, סתירות ופעולות.",
        "prompt": "השתמש ב-feedback-manager. לקוח: ביום א הגדל לוגו, ביום ב הקטן לוגו, ביום ג תקן כותרת. רכז תיקונים, סמן סתירה והצע שאלת הבהרה.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/feedback-manager.zip"
          ]
        ]
      },
      {
        "id": "skill-hebrew-qa",
        "title": "Hebrew & RTL QA — בדוק איות וכיווניות · ליבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: הדביקי מלל או צרפי PDF מורשה. הגדירי אם אסור לשנות שמות/קופי.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: תיקוני איות מסומנים; בדיקה חזותית ידנית של RTL ב-Adobe."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: תיקוני איות מסומנים; בדיקה חזותית ידנית של RTL ב-Adobe.",
        "prompt": "השתמש ב-hebrew-qa. בדוק: מבצע 20 אחוז על כל המוצריים עד יום ראשון. הצג מקור מול תיקון והסבר. בדוק גם RTL ומספרים.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/hebrew-qa.zip"
          ]
        ]
      },
      {
        "id": "skill-prepress-qa",
        "title": "Prepress QA — הכן בדיקות דפוס · הרחבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: מסרי מפרט בית דפוס ו-PDF מותר; השתמשי ב-Acrobat Preflight לאימות טכני.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: רשימת בדיקות ומידע חסר, ללא טענה שהקובץ עבר Preflight."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: רשימת בדיקות ומידע חסר, ללא טענה שהקובץ עבר Preflight.",
        "prompt": "השתמש ב-prepress-qa. קטלוג A4, 16 עמודים, גלישה 3 מ״מ לפי בית הדפוס. בנה צ׳קליסט ובדוק מה עדיין דורש Preflight.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/prepress-qa.zip"
          ]
        ]
      },
      {
        "id": "skill-smart-export",
        "title": "Smart Export Planner — תכנן ייצוא ותיקיית יעד · ליבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: הגדירי תיקיית יעד מאושרת, שמות קבצים ופורמטים.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: מניפסט ייצוא ותיקיות; אין ייצוא בפועל בלי כלי והרשאה."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: מניפסט ייצוא ותיקיות; אין ייצוא בפועל בלי כלי והרשאה.",
        "prompt": "השתמש ב-smart-export. תכנן שלושה ייצואי PNG ו-PDF מתיקיית Test אל Output; תן שמות קבצים ומידות, ללא דריסה.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/smart-export.zip"
          ]
        ]
      },
      {
        "id": "skill-daily-brief",
        "title": "Daily Brief — תעדף מיילים ומשימות · ליבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: הדביקי רשימת משימות ומיילים מאושרים או השתמשי בחיבור שאושר.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: לו״ז פעולה עם דדליינים וסימון מידע חסר; אין גישה אוטומטית למייל."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: לו״ז פעולה עם דדליינים וסימון מידע חסר; אין גישה אוטומטית למייל.",
        "prompt": "השתמש ב-daily-brief. פוסט דחוף היום, קטלוג בעוד שבוע, תיקון מלקוח עד מחר. בנה תוכנית יום, תלויות וסדר עדיפויות.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/daily-brief.zip"
          ]
        ]
      },
      {
        "id": "skill-motion-planner",
        "title": "Motion Planner — תכנן אנימציה ווידאו · הרחבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: צרפי סטילס מאושר, משך, יחס מסך וסוג תנועה.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: טבלת שוטים ופרומפטים להנפשה, לא סרטון בפועל."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: טבלת שוטים ופרומפטים להנפשה, לא סרטון בפועל.",
        "prompt": "השתמש ב-motion-planner. תכנן סטוריבורד 10 שניות לסטורי קפה: 3 שוטים, טיימינג, תנועה, מעבר וטקסט.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/motion-planner.zip"
          ]
        ]
      },
      {
        "id": "skill-research-prompts",
        "title": "Research & AI Prompts — מחקר והכנת פרומפטים · הרחבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: תני בריף, קהל, סגנון ודרישות רישוי; צייני כלי יעד.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: פרומפט נפרד לכל כלי, מגבלות וזכויות לבדיקה."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: פרומפט נפרד לכל כלי, מגבלות וזכויות לבדיקה.",
        "prompt": "השתמש ב-research-prompts. צור פרומפטים נפרדים ל-Firefly, Midjourney ו-Magnific לקמפיין קפה, עם הוראות שימור שפת המותג.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/research-prompts.zip"
          ]
        ]
      },
      {
        "id": "skill-presentation-story",
        "title": "Presentation Story — בנה מצגת והצגת קונספט · הרחבה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "לחצי על כפתור הורדת ZIP בראש המשימה ושמרי אותו ב-Downloads.",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "לשימוש אמיתי: מסרי קונספטים מאושרים, קהל מצגת ומטרתה.",
          "בשיחה חדשה הדביקי את הפרומפט המצורף. אפשר להחליף את הדוגמה בבריף שלך לאחר אישור שימוש.",
          "בדקי שהתקבל: מבנה מצגת עם כותרות, טקסט קצר והנחיות חזותיות."
        ],
        "check": "ה-Skill מופיע ומופעל ב-Claude, והבדיקה מחזירה: מבנה מצגת עם כותרות, טקסט קצר והנחיות חזותיות.",
        "prompt": "השתמש ב-presentation-story. בנה חמש שקופיות להצגת קמפיין קפה: אתגר, תובנה, קונספט, דוגמאות והחלטה.",
        "hint": "המיומנות מנחה את Claude; אינה אינטגרציה או תוסף Adobe. אין צורך ב-API לשימוש במיומנות עצמה.",
        "links": [
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "ממשק Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": [
          [
            "הורדת Skill ZIP",
            "skills/presentation-story.zip"
          ]
        ]
      },
      {
        "id": "official-canvas-design",
        "title": "Canvas Design · רשמי · מומלץ",
        "owner": "ביחד",
        "api": "לא נדרש API",
        "steps": [
          "למה זה מיועד: עיצוב פוסטרים וגרפיקה סטטית, לא PSD עריך.",
          "ב-Claude פתחי Plugins → חפשי את השם המדויק תחת קטלוג/חיפוש וסנני Skills. אם מופיע הפריט הרשמי של Anthropic, פתחי ולחצי Add; בדקי שהוא מופעל.",
          "אם לא מופיע, לחצי על קישור המקור הרשמי למטה כדי לבדוק את תיקיית canvas-design.",
          "לחצי על הקישור להורדת המאגר הרשמי (ZIP). ב-Downloads לחצי קליק ימני על skills-main.zip → Extract All → Extract. פתחי skills-main → skills → canvas-design.",
          "בקשו מאלווין/IT לבדוק את כל הקבצים, הרישיון, הסקריפטים והתלויות. אין להתקין אם לא אושר. חזרי תיקייה אחת אחורה, סמני רק את canvas-design ולחצי קליק ימני → Compress to ZIP file (Windows 11), או Send to → Compressed (zipped) folder (Windows 10). אין להעלות את המאגר השלם.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "בדקי על חומר דמה בלבד: תמונה או PDF לביקורת והמשך עבודה ידנית."
        ],
        "check": "המיומנות מופיעה ברשימה, מופעלת, ונבדקה: תמונה או PDF לביקורת והמשך עבודה ידנית.",
        "prompt": "השתמש ב-canvas-design ליצירת פוסטר מקורי לבית קפה דמיוני בפורמט A4. הפק PNG או PDF ובדוק קריאות.",
        "hint": "מיומנות דוגמה ממאגר Anthropic. חלק מהדוגמאות כוללות קוד או תלויות; הוספה לאחר סקירה ואישור בלבד. זמינות בקטלוג משתנה. אין צורך במפתח API להעלאת ZIP; תלויות נוספות עשויות לדרוש אישור.",
        "links": [
          [
            "מקור רשמי — Canvas Design",
            "https://github.com/anthropics/skills/tree/main/skills/canvas-design"
          ],
          [
            "הורדת המאגר הרשמי (ZIP)",
            "https://github.com/anthropics/skills/archive/refs/heads/main.zip"
          ],
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "קטלוג Skills",
            "https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory"
          ],
          [
            "Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ]
        ],
        "files": []
      },
      {
        "id": "official-frontend-design",
        "title": "Frontend Design · רשמי · לפי פרויקט",
        "owner": "ביחד",
        "api": "לא נדרש API",
        "steps": [
          "למה זה מיועד: קונספטים וממשקי אתרים ודפי נחיתה; עשוי לייצר HTML/CSS.",
          "ב-Claude פתחי Plugins → חפשי את השם המדויק תחת קטלוג/חיפוש וסנני Skills. אם מופיע הפריט הרשמי של Anthropic, פתחי ולחצי Add; בדקי שהוא מופעל.",
          "אם לא מופיע, לחצי על קישור המקור הרשמי למטה כדי לבדוק את תיקיית frontend-design.",
          "לחצי על הקישור להורדת המאגר הרשמי (ZIP). ב-Downloads לחצי קליק ימני על skills-main.zip → Extract All → Extract. פתחי skills-main → skills → frontend-design.",
          "בקשו מאלווין/IT לבדוק את כל הקבצים, הרישיון, הסקריפטים והתלויות. אין להתקין אם לא אושר. חזרי תיקייה אחת אחורה, סמני רק את frontend-design ולחצי קליק ימני → Compress to ZIP file (Windows 11), או Send to → Compressed (zipped) folder (Windows 10). אין להעלות את המאגר השלם.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "בדקי על חומר דמה בלבד: דמו חזותי, לא אתר מוכן לייצור; קוד דורש בדיקה."
        ],
        "check": "המיומנות מופיעה ברשימה, מופעלת, ונבדקה: דמו חזותי, לא אתר מוכן לייצור; קוד דורש בדיקה.",
        "prompt": "השתמש ב-frontend-design לבניית דמו לדף נחיתה לקפה קר. הצג תצוגת מובייל ודסקטופ.",
        "hint": "מיומנות דוגמה ממאגר Anthropic. חלק מהדוגמאות כוללות קוד או תלויות; הוספה לאחר סקירה ואישור בלבד. זמינות בקטלוג משתנה. אין צורך במפתח API להעלאת ZIP; תלויות נוספות עשויות לדרוש אישור.",
        "links": [
          [
            "מקור רשמי — Frontend Design",
            "https://github.com/anthropics/skills/tree/main/skills/frontend-design"
          ],
          [
            "הורדת המאגר הרשמי (ZIP)",
            "https://github.com/anthropics/skills/archive/refs/heads/main.zip"
          ],
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "קטלוג Skills",
            "https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory"
          ],
          [
            "Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ]
        ],
        "files": []
      },
      {
        "id": "official-theme-factory",
        "title": "Theme Factory · רשמי · מומלץ",
        "owner": "ביחד",
        "api": "לא נדרש API",
        "steps": [
          "למה זה מיועד: פלטות צבעים, טיפוגרפיה ושפה למצגות ותוצרים.",
          "ב-Claude פתחי Plugins → חפשי את השם המדויק תחת קטלוג/חיפוש וסנני Skills. אם מופיע הפריט הרשמי של Anthropic, פתחי ולחצי Add; בדקי שהוא מופעל.",
          "אם לא מופיע, לחצי על קישור המקור הרשמי למטה כדי לבדוק את תיקיית theme-factory.",
          "לחצי על הקישור להורדת המאגר הרשמי (ZIP). ב-Downloads לחצי קליק ימני על skills-main.zip → Extract All → Extract. פתחי skills-main → skills → theme-factory.",
          "בקשו מאלווין/IT לבדוק את כל הקבצים, הרישיון, הסקריפטים והתלויות. אין להתקין אם לא אושר. חזרי תיקייה אחת אחורה, סמני רק את theme-factory ולחצי קליק ימני → Compress to ZIP file (Windows 11), או Send to → Compressed (zipped) folder (Windows 10). אין להעלות את המאגר השלם.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "בדקי על חומר דמה בלבד: שתי ערכות סגנון; השווי לספר המותג."
        ],
        "check": "המיומנות מופיעה ברשימה, מופעלת, ונבדקה: שתי ערכות סגנון; השווי לספר המותג.",
        "prompt": "השתמש ב-theme-factory והצע שתי שפות חזותיות למצגת לקוח מדומה, עם צבעים וטיפוגרפיה.",
        "hint": "מיומנות דוגמה ממאגר Anthropic. חלק מהדוגמאות כוללות קוד או תלויות; הוספה לאחר סקירה ואישור בלבד. זמינות בקטלוג משתנה. אין צורך במפתח API להעלאת ZIP; תלויות נוספות עשויות לדרוש אישור.",
        "links": [
          [
            "מקור רשמי — Theme Factory",
            "https://github.com/anthropics/skills/tree/main/skills/theme-factory"
          ],
          [
            "הורדת המאגר הרשמי (ZIP)",
            "https://github.com/anthropics/skills/archive/refs/heads/main.zip"
          ],
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "קטלוג Skills",
            "https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory"
          ],
          [
            "Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ]
        ],
        "files": []
      },
      {
        "id": "official-algorithmic-art",
        "title": "Algorithmic Art · רשמי · אופציונלי",
        "owner": "ביחד",
        "api": "לא נדרש API",
        "steps": [
          "למה זה מיועד: דפוסים ואמנות גנרטיבית; כולל קוד ותבניות.",
          "ב-Claude פתחי Plugins → חפשי את השם המדויק תחת קטלוג/חיפוש וסנני Skills. אם מופיע הפריט הרשמי של Anthropic, פתחי ולחצי Add; בדקי שהוא מופעל.",
          "אם לא מופיע, לחצי על קישור המקור הרשמי למטה כדי לבדוק את תיקיית algorithmic-art.",
          "לחצי על הקישור להורדת המאגר הרשמי (ZIP). ב-Downloads לחצי קליק ימני על skills-main.zip → Extract All → Extract. פתחי skills-main → skills → algorithmic-art.",
          "בקשו מאלווין/IT לבדוק את כל הקבצים, הרישיון, הסקריפטים והתלויות. אין להתקין אם לא אושר. חזרי תיקייה אחת אחורה, סמני רק את algorithmic-art ולחצי קליק ימני → Compress to ZIP file (Windows 11), או Send to → Compressed (zipped) folder (Windows 10). אין להעלות את המאגר השלם.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "בדקי על חומר דמה בלבד: דוגמה חזותית או קוד לבדיקה; לא לשימוש מסחרי לפני בדיקה."
        ],
        "check": "המיומנות מופיעה ברשימה, מופעלת, ונבדקה: דוגמה חזותית או קוד לבדיקה; לא לשימוש מסחרי לפני בדיקה.",
        "prompt": "השתמש ב-algorithmic-art וצור דפוס גיאומטרי מקורי עם פרמטרים משתנים.",
        "hint": "מיומנות דוגמה ממאגר Anthropic. חלק מהדוגמאות כוללות קוד או תלויות; הוספה לאחר סקירה ואישור בלבד. זמינות בקטלוג משתנה. אין צורך במפתח API להעלאת ZIP; תלויות נוספות עשויות לדרוש אישור.",
        "links": [
          [
            "מקור רשמי — Algorithmic Art",
            "https://github.com/anthropics/skills/tree/main/skills/algorithmic-art"
          ],
          [
            "הורדת המאגר הרשמי (ZIP)",
            "https://github.com/anthropics/skills/archive/refs/heads/main.zip"
          ],
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "קטלוג Skills",
            "https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory"
          ],
          [
            "Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ]
        ],
        "files": []
      },
      {
        "id": "official-skill-creator",
        "title": "Skill Creator · רשמי · מומלץ",
        "owner": "ביחד",
        "api": "לא נדרש API",
        "steps": [
          "למה זה מיועד: יצירה ובדיקה של Skills חדשים ללא צורך לכתוב קוד בעצמך.",
          "ב-Claude פתחי Plugins → חפשי את השם המדויק תחת קטלוג/חיפוש וסנני Skills. אם מופיע הפריט הרשמי של Anthropic, פתחי ולחצי Add; בדקי שהוא מופעל.",
          "אם לא מופיע, לחצי על קישור המקור הרשמי למטה כדי לבדוק את תיקיית skill-creator.",
          "לחצי על הקישור להורדת המאגר הרשמי (ZIP). ב-Downloads לחצי קליק ימני על skills-main.zip → Extract All → Extract. פתחי skills-main → skills → skill-creator.",
          "בקשו מאלווין/IT לבדוק את כל הקבצים, הרישיון, הסקריפטים והתלויות. אין להתקין אם לא אושר. חזרי תיקייה אחת אחורה, סמני רק את skill-creator ולחצי קליק ימני → Compress to ZIP file (Windows 11), או Send to → Compressed (zipped) folder (Windows 10). אין להעלות את המאגר השלם.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "בדקי על חומר דמה בלבד: מיומנות חדשה עם SKILL.md; אלווין בודק לפני התקנה."
        ],
        "check": "המיומנות מופיעה ברשימה, מופעלת, ונבדקה: מיומנות חדשה עם SKILL.md; אלווין בודק לפני התקנה.",
        "prompt": "השתמש ב-skill-creator כדי ליצור Skill מבוסס הוראות בלבד לבדיקת גריד. הצג דוגמאות בדיקה והפק ZIP.",
        "hint": "מיומנות דוגמה ממאגר Anthropic. חלק מהדוגמאות כוללות קוד או תלויות; הוספה לאחר סקירה ואישור בלבד. זמינות בקטלוג משתנה. אין צורך במפתח API להעלאת ZIP; תלויות נוספות עשויות לדרוש אישור.",
        "links": [
          [
            "מקור רשמי — Skill Creator",
            "https://github.com/anthropics/skills/tree/main/skills/skill-creator"
          ],
          [
            "הורדת המאגר הרשמי (ZIP)",
            "https://github.com/anthropics/skills/archive/refs/heads/main.zip"
          ],
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "קטלוג Skills",
            "https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory"
          ],
          [
            "Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ]
        ],
        "files": []
      },
      {
        "id": "official-brand-guidelines",
        "title": "Brand Guidelines · רשמי · אופציונלי",
        "owner": "ביחד",
        "api": "לא נדרש API",
        "steps": [
          "למה זה מיועד: דוגמה לשימוש בכללי המותג של Anthropic, לא כללי הלקוחות של גילי.",
          "ב-Claude פתחי Plugins → חפשי את השם המדויק תחת קטלוג/חיפוש וסנני Skills. אם מופיע הפריט הרשמי של Anthropic, פתחי ולחצי Add; בדקי שהוא מופעל.",
          "אם לא מופיע, לחצי על קישור המקור הרשמי למטה כדי לבדוק את תיקיית brand-guidelines.",
          "לחצי על הקישור להורדת המאגר הרשמי (ZIP). ב-Downloads לחצי קליק ימני על skills-main.zip → Extract All → Extract. פתחי skills-main → skills → brand-guidelines.",
          "בקשו מאלווין/IT לבדוק את כל הקבצים, הרישיון, הסקריפטים והתלויות. אין להתקין אם לא אושר. חזרי תיקייה אחת אחורה, סמני רק את brand-guidelines ולחצי קליק ימני → Compress to ZIP file (Windows 11), או Send to → Compressed (zipped) folder (Windows 10). אין להעלות את המאגר השלם.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "בסרגל הצד לחצי Plugins → Your plugins → Show all, וסנני Skills. חפשי אפשרות Add/Upload skill. בממשק הישן: Customize → Skills → + → Create skill → Upload a skill.",
          "בחלון בחירת קבצים לחצי Downloads, בחרי את ה-ZIP של ה-Skill עצמו ולחצי Open / Upload. אין לחלץ ZIP אישי לפני העלאה.",
          "ודאי שהשם מופיע ברשימה והמיומנות מופעלת. פתחי Chat חדש, לחצי + או הקלידי / ובחרי את שם המיומנות אם מוצג; אפשר גם לבקש במפורש להשתמש בה.",
          "אם אין אפשרות העלאה בממשק Plugins, פתחי את מדריך ההתקנה הרשמי המצורף; אם עדיין לא מופיע, בקשי מאלווין/IT לבדוק הרשאות ויכולות. אל תנסי לעקוף חסימה.",
          "בדקי על חומר דמה בלבד: דוגמה ללמידה בלבד. לעבודה עם לקוח השתמשי ב-Brand Guardian."
        ],
        "check": "המיומנות מופיעה ברשימה, מופעלת, ונבדקה: דוגמה ללמידה בלבד. לעבודה עם לקוח השתמשי ב-Brand Guardian.",
        "prompt": "השתמש ב-brand-guidelines כדי להדגים את סגנון Anthropic על מצגת מדומה. אל תשתמש בכללים אלה למותג לקוח אחר.",
        "hint": "מיומנות דוגמה ממאגר Anthropic. חלק מהדוגמאות כוללות קוד או תלויות; הוספה לאחר סקירה ואישור בלבד. זמינות בקטלוג משתנה. אין צורך במפתח API להעלאת ZIP; תלויות נוספות עשויות לדרוש אישור.",
        "links": [
          [
            "מקור רשמי — Brand Guidelines",
            "https://github.com/anthropics/skills/tree/main/skills/brand-guidelines"
          ],
          [
            "הורדת המאגר הרשמי (ZIP)",
            "https://github.com/anthropics/skills/archive/refs/heads/main.zip"
          ],
          [
            "מדריך התקנה רשמי",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "קטלוג Skills",
            "https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory"
          ],
          [
            "Plugins החדש",
            "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
          ]
        ],
        "files": []
      },
      {
        "id": "builtin-pptx",
        "title": "PowerPoint · מובנה ב-Claude · לפי צורך",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "אין צורך להוריד ZIP: הצגת קונספטים וסטוריבורד",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "פתחי Plugins וחפשי את שם המיומנות אם מוצגת; אחרת פשוט פתחי Chat חדש והדביקי את הפרומפט. Claude מפעיל את יכולות המסמכים כאשר הן רלוונטיות.",
          "אם נוצר קובץ, לחצי Download ליד הקובץ, פתחי אותו בתוכנה המתאימה ובדקי את התוכן."
        ],
        "check": "קובץ PPTX עם היררכיה וקריאות שנבדקו.",
        "prompt": "צור מצגת PPTX בת 5 שקופיות להצגת קמפיין קפה מדומה.",
        "hint": "מובנה בחשבון כשיצירת קבצים זמינה; לא צריך להעלות ZIP או לרכוש API. אם לא עובד, בדקי Settings וחשבון.",
        "links": [
          [
            "מדריך המיומנויות המובנות",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": []
      },
      {
        "id": "builtin-pdf",
        "title": "PDF · מובנה ב-Claude · לפי צורך",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "אין צורך להוריד ZIP: סקירת בריפים וקובצי PDF",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "פתחי Plugins וחפשי את שם המיומנות אם מוצגת; אחרת פשוט פתחי Chat חדש והדביקי את הפרומפט. Claude מפעיל את יכולות המסמכים כאשר הן רלוונטיות.",
          "אם נוצר קובץ, לחצי Download ליד הקובץ, פתחי אותו בתוכנה המתאימה ובדקי את התוכן."
        ],
        "check": "סיכום מבוסס מקור; לא תחליף ל-Acrobat Preflight.",
        "prompt": "נתח PDF דמה המצורף, חלץ דרישות וציין עמודים.",
        "hint": "מובנה בחשבון כשיצירת קבצים זמינה; לא צריך להעלות ZIP או לרכוש API. אם לא עובד, בדקי Settings וחשבון.",
        "links": [
          [
            "מדריך המיומנויות המובנות",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": []
      },
      {
        "id": "builtin-xlsx",
        "title": "Excel · מובנה ב-Claude · לפי צורך",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "אין צורך להוריד ZIP: טבלאות משימות, תיקונים ומידות",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "פתחי Plugins וחפשי את שם המיומנות אם מוצגת; אחרת פשוט פתחי Chat חדש והדביקי את הפרומפט. Claude מפעיל את יכולות המסמכים כאשר הן רלוונטיות.",
          "אם נוצר קובץ, לחצי Download ליד הקובץ, פתחי אותו בתוכנה המתאימה ובדקי את התוכן."
        ],
        "check": "טבלה תקינה עם עמודות ושורות צפויות.",
        "prompt": "צור XLSX עם עמודות לקוח, גרסה, תיקון, דדליין וסטטוס, עם 3 דוגמאות מדומות.",
        "hint": "מובנה בחשבון כשיצירת קבצים זמינה; לא צריך להעלות ZIP או לרכוש API. אם לא עובד, בדקי Settings וחשבון.",
        "links": [
          [
            "מדריך המיומנויות המובנות",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": []
      },
      {
        "id": "builtin-docx",
        "title": "Word · מובנה ב-Claude · לפי צורך",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "אין צורך להוריד ZIP: בריפים ומסמכי הצגת קונספט",
          "פתחי Claude Desktop או claude.ai והתחברי לחשבון Pro המאושר.",
          "לחצי על תמונת הפרופיל → Settings → Capabilities והפעילי Create and edit files (בממשק הישן Code execution and file creation), אם הדבר מאושר.",
          "פתחי Plugins וחפשי את שם המיומנות אם מוצגת; אחרת פשוט פתחי Chat חדש והדביקי את הפרומפט. Claude מפעיל את יכולות המסמכים כאשר הן רלוונטיות.",
          "אם נוצר קובץ, לחצי Download ליד הקובץ, פתחי אותו בתוכנה המתאימה ובדקי את התוכן."
        ],
        "check": "מסמך DOCX קריא; בדקי RTL ב-Word.",
        "prompt": "צור DOCX מסודר לבריף קמפיין דמיוני בעברית, כולל דרישות ותוצרים.",
        "hint": "מובנה בחשבון כשיצירת קבצים זמינה; לא צריך להעלות ZIP או לרכוש API. אם לא עובד, בדקי Settings וחשבון.",
        "links": [
          [
            "מדריך המיומנויות המובנות",
            "https://support.claude.com/en/articles/12512180-use-skills-in-claude"
          ],
          [
            "פתיחת Claude",
            "https://claude.ai/"
          ]
        ],
        "files": []
      },
      {
        "id": "skill-edit",
        "title": "יצירה ועדכון של Skill אישי נוסף",
        "owner": "ביחד",
        "api": "לא נדרש API",
        "steps": [
          "פתחו שיחה חדשה ובקשו את הפרומפט המצורף.",
          "הורידו ZIP; פתחו אותו ובדקו שיש SKILL.md עם name ו-description.",
          "בדקו שאין סקריפט, סוד או הוראה לשיתוף נתונים.",
          "התקינו כמיומנות חדשה, בדקו דוגמאות תקינות ושגויות.",
          "אם יש גרסה קודמת, כבו אותה כדי להימנע מכפל."
        ],
        "check": "מיומנות בדוקה עם גרסה חדשה.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. צור Skill מבוסס הוראות בלבד, עם YAML name/description, שלבי עבודה, פלט, דוגמאות, מגבלות ו-ZIP. שאל אותי מה התהליך אם חסר.",
        "hint": "",
        "links": [
          [
            "custom",
            "https://support.claude.com/en/articles/12512198-how-to-create-custom-skills"
          ]
        ],
        "files": []
      }
    ]
  },
  {
    "name": "Adobe — עבודה וייצוא",
    "desc": "קודם כל כלים קיימים, אחר כך סקריפטים. כל פעולה נבדקת על עותק.",
    "tasks": [
      {
        "id": "ps-artboard",
        "title": "Photoshop: התאמת גדלים באמצעות Artboards",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי PSD מאושר → File → Save As / Save a Copy ושמרי עותק ב-02_Work.",
          "בחרי Artboard Tool מתוך קבוצת Move Tool (לחיצה ממושכת על הכלי).",
          "צרי Artboard או שכפלי קיים ובחרי מידות W/H לפי המפרט ב-Properties.",
          "העבירי ושני מיקום שכבות, מסכות וטקסט; אל תמתחי לוגו או פנים.",
          "File → Export → Artboards to Files אם זמין, או Export As → בחרי artboards ופורמט → Export לתיקיית 03_Output.",
          "פתחי כל קובץ ובדקי ממדים, חיתוך, טקסט, צבע וגודל קובץ."
        ],
        "check": "לפחות 3 פורמטים נכונים ללא דריסת מקור.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. בנה תוכנית reflow לפורמטים שסיפקתי. ציין אילו אלמנטים לשנות ידנית ואילו אפשר להשאיר.",
        "hint": "",
        "links": [],
        "files": [
          [
            "מפרט גדלים לדוגמה",
            "templates/formats.csv"
          ]
        ]
      },
      {
        "id": "ps-actions",
        "title": "Photoshop: Actions ו-Batch לפעולות חוזרות",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי עותק בדיקה אחד → Window → Actions.",
          "לחצי + / Create New Action, הזיני שם ולחצי Record.",
          "בצעי פעולה חוזרת ובטוחה (למשל שינוי ממדים אחידים של תמונות זהות) ולחצי Stop בחלונית Actions.",
          "בדקי Play על עותק שני. אם הפעולה מכילה שמירה, ודאי שהנתיב לא דורס מקור.",
          "File → Automate → Batch; בחרי Set/Action, Source Folder עם עותקים ו-Destination Folder נפרד.",
          "לחצי OK ובדקי כל פלט; עצרי אם התוצאה אינה תואמת."
        ],
        "check": "פעולה נבדקה על שני עותקים ופלט נשמר בנפרד.",
        "prompt": "",
        "hint": "לא להשתמש ב-Batch להתאמה יצירתית אוטומטית בין יחסי מסך שונים.",
        "links": [
          [
            "ps",
            "https://helpx.adobe.com/photoshop/desktop/automate-tasks/process-a-batch-of-files/batch-process-files.html"
          ]
        ],
        "files": []
      },
      {
        "id": "ps-export",
        "title": "Photoshop: ייצוא תמונות לתיקייה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי עותק PSD → File → Export → Export As.",
          "בחרי PNG/JPG לפי המפרט, גודל, שקיפות ו-Convert to sRGB אם נדרש.",
          "לחצי Export ובחרי 03_Output; השתמשי בשם לפי מניפסט הייצוא.",
          "ליצירת JPEG מהירה על תיקיית עותקים: File → Scripts → Image Processor אם מופיע, בחרי מקור ויעד שונים, פורמט וגודל, Run.",
          "בדקי מאפייני הקובץ ב-Explorer → Properties → Details."
        ],
        "check": "הקבצים תואמים למניפסט.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. צור שמות קבצים, פורמטים ומפרט ייצוא לכל תוצר.",
        "hint": "",
        "links": [],
        "files": [
          [
            "מניפסט ייצוא",
            "templates/export-manifest.csv"
          ]
        ]
      },
      {
        "id": "illustrator",
        "title": "Illustrator: Artboards ו-Export for Screens",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי AI → File → Save As → עותק.",
          "לחצי Shift+O להפעלת Artboard Tool; בחרי Artboard וערכי W/H לפי מפרט.",
          "צרי Artboards נוספים, התאימי את העיצוב בכל אחד, ותני שמות בחלונית Window → Artboards.",
          "לחצי File → Export → Export for Screens.",
          "בחרי Artboards, סמני את הרצויים, קבעי Export To, פורמט ו-Scale.",
          "לחצי Export Artboard ובדקי את כל הפלטים."
        ],
        "check": "קבצים עם שמות ופורמטים תקינים.",
        "prompt": "",
        "hint": "",
        "links": [
          [
            "ai",
            "https://helpx.adobe.com/illustrator/desktop/save-and-export/export-files-to-different-formats/export-artboards-and-assets-for-screens.html"
          ]
        ],
        "files": []
      },
      {
        "id": "indesign-template",
        "title": "InDesign: גריד, Parent Pages וסגנונות",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי עותק INDD או File → New → Document.",
          "הגדירי עמודים, גודל, bleed לפי דרישת בית הדפוס.",
          "Layout → Margins and Columns להגדרת גריד.",
          "Window → Pages; לחצי פעמיים על Parent Page וצרי פריטים קבועים.",
          "Window → Styles → Paragraph Styles / Character Styles; צרי סגנונות כותרת וגוף.",
          "File → Save As → InDesign Template (.indt) אם מוצג."
        ],
        "check": "תבנית נפתחת וניתנת לשימוש בפרויקט חדש.",
        "prompt": "",
        "hint": "",
        "links": [],
        "files": []
      },
      {
        "id": "indesign-merge",
        "title": "InDesign: Data Merge לקטלוגים וגרסאות",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "הכיני CSV דוגמה מאושר עם כותרות שדות ונתונים; שמרי UTF-8 ובדקי עברית.",
          "פתחי עותק InDesign → Window → Utilities → Data Merge.",
          "בתפריט החלונית בחרי Select Data Source ובחרי CSV/TXT.",
          "מקמי שדות טקסט/תמונה בתיבות ובחרי Preview.",
          "בתפריט החלונית לחצי Create Merged Document, בחרי רשומות, OK.",
          "בדקי overset text, שבירת שורות, תווים ותמונות בכל רשומה."
        ],
        "check": "נוצר מסמך ממוזג חדש; אין שינוי מקור.",
        "prompt": "",
        "hint": "",
        "links": [
          [
            "id",
            "https://helpx.adobe.com/indesign/desktop/automation-and-scripting/merge-data/data-merging-overview.html"
          ]
        ],
        "files": []
      },
      {
        "id": "indesign-print",
        "title": "InDesign: איות, Preflight וייצוא PDF",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי עותק מסמך → Edit → Spelling → Check Spelling; בדקי שפת טקסט לפי Character panel.",
          "Window → Output → Preflight; הפעילי פרופיל לפי מפרט בית הדפוס ובדקי שגיאות.",
          "Window → Links לבדיקת קבצים חסרים ו-Effective PPI לפי צורך.",
          "File → Export → Adobe PDF (Print), בחרי preset שסיפק בית הדפוס.",
          "בדקי Marks and Bleeds, Output, פרופיל צבע, פונטים והגדרות לפי הדרישה; לחצי Export.",
          "פתחי PDF ב-Acrobat ובדקי לפני מסירה."
        ],
        "check": "PDF עבר בדיקה לפי מפרט ולא רק לפי המלצת AI.",
        "prompt": "",
        "hint": "אין תקן PDF/X או bleed אחד שמתאים לכל עבודה; בית הדפוס קובע.",
        "links": [],
        "files": []
      },
      {
        "id": "acrobat",
        "title": "Acrobat: ריכוז הערות ובדיקת PDF",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי PDF ב-Acrobat.",
          "פתחי Comments / אייקון ההערות; סנני לפי עמוד או מחבר, בדקי כל הערה.",
          "אם התפריט מאפשר Export All to Data File או Create Comment Summary, שמרי סיכום באזור המאושר; אחרת העתיקי הערות מורשות ידנית.",
          "ב-Acrobat Pro: All tools → Use print production → Preflight; בחרי פרופיל מתאים → Analyze (לא Fix).",
          "בדקי תוצאות, Output Preview לפי הצורך, והעבירי תיקון לתוכנת המקור.",
          "צרי PDF חדש והשווי מול הקודם."
        ],
        "check": "רשימת הערות ודו״ח בדיקה; מקור נשמר.",
        "prompt": "",
        "hint": "Preflight ו-Print Production תלויים ברישיון Acrobat Pro.",
        "links": [
          [
            "pdf",
            "https://helpx.adobe.com/acrobat/using/preflight-profiles-acrobat-pro.html"
          ]
        ],
        "files": []
      },
      {
        "id": "script-pilot",
        "title": "סקריפט Adobe ראשוני — אלווין בלבד",
        "owner": "אלווין / IT",
        "api": "לא נדרש API",
        "steps": [
          "רשום גרסת Adobe, מערכת הפעלה, פורמט קלט, פלט ומפרט בדיקות.",
          "בחר אוטומציה אחת כמו export של עותקים. בקש קוד תואם לגרסה עם dry-run וללא דריסה.",
          "בדוק קוד ידנית: אין רשת, אין מחיקה, אין traversal או נתיב מקור לכתיבה.",
          "Photoshop JSX תואם: File → Scripts → Browse; Illustrator: File → Scripts → Other Script; InDesign: Window → Utilities → Scripts, User → Reveal in Explorer, העתק סקריפט מאושר והריץ מהחלונית. UXP דורש מנגנון תואם אחר.",
          "הרץ על fixture קטן, בדוק שגיאות, מידות, פלטים וחשבון קבצים.",
          "רק לאחר הצלחה ואישור, תן לגילי הוראות קבועות להפעלה."
        ],
        "check": "תסריט בדוק בגרסה המותקנת, עם הוראות rollback.",
        "prompt": "כתוב מפרט לסקריפט Adobe עבור גרסה שאספק: קלט מתיקיית עותקים, פלט חדש, בדיקת התנגשויות, log, עצירה בשגיאה, dry-run. אל תניח ש-UXP ו-JSX תואמים.",
        "hint": "לא נכלל סקריפט Adobe מוכן להרצה: גרסאות ותהליכי ייצוא עדיין לא אושרו.",
        "links": [],
        "files": []
      },
      {
        "id": "smart-export",
        "title": "GILI Smart Export — תהליך עבודה",
        "owner": "ביחד",
        "api": "לא נדרש API",
        "steps": [
          "פתחו את תבנית export-manifest ומלאו שורה לכל תוצר.",
          "קבעו 03_Output כיעד מקומי מאושר ובחרו מוסכמת שמות CLIENT_PROJECT_SIZE_v01.ext.",
          "בצעו ייצוא בכלי Adobe לפי המשימות למעלה.",
          "ב-Win+E בדקו כמות, סיומת, גודל ותאריך; פתחו דוגמאות.",
          "לאחר אישור, העתיקו לתיקיית היעד המדויקת בשרת; אם שם קיים, עצרו או צרו גרסה חדשה.",
          "רשמו מסירה במערכת החברה ידנית."
        ],
        "check": "כל שורה במניפסט תואמת קובץ אמיתי ומאושר.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. הפק מניפסט ייצוא לפי המפרט, עם שדות חסרים מסומנים. אל תטען שהקבצים יוצאו.",
        "hint": "",
        "links": [],
        "files": [
          [
            "מניפסט",
            "templates/export-manifest.csv"
          ]
        ]
      }
    ]
  },
  {
    "name": "קריאייטיב וכלי AI",
    "desc": "מחקר, קונספטים, הרחבת שפה ואנימציה — עם בקרת זכויות.",
    "tasks": [
      {
        "id": "research",
        "title": "ספריית השראות ממוקדת",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "בחרי לקוח ומטרת קמפיין ב-Claude.",
          "בקשי מילות חיפוש וקטגוריות רפרנס.",
          "פתחי Pinterest, Behance, Dribbble, Adobe Stock, Shutterstock או Magnific לפי סוג התוצר.",
          "שמרי קישורים והערות במאגר המורשה; אל תורידי או תשתמשי ללא רישיון מתאים.",
          "צרי moodboard בתוכנת Adobe עם חומרים מורשים בלבד."
        ],
        "check": "לוח השראה עם מקורות, תאריך ומצב רישוי.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. בנה 3 קבוצות השראה עם מילות חיפוש ל-Pinterest, Behance, Dribbble, Adobe Stock ו-Shutterstock. הסבר מה ללמוד מכל רפרנס בלי להעתיק סגנון או יצירה אחד לאחד.",
        "hint": "",
        "links": [
          [
            "Pinterest",
            "https://www.pinterest.com"
          ],
          [
            "Behance",
            "https://www.behance.net"
          ],
          [
            "Dribbble",
            "https://dribbble.com"
          ],
          [
            "Adobe Stock",
            "https://stock.adobe.com"
          ],
          [
            "Shutterstock",
            "https://www.shutterstock.com"
          ]
        ],
        "files": []
      },
      {
        "id": "concept",
        "title": "פיתוח קונספטים והרחבת שפה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי Project של הלקוח והוסיפי בריף מאושר.",
          "בחרי Creative Director או הדביקי פרומפט.",
          "בקשי 3 כיוונים: בטוח, מרחיב שפה וניסיוני.",
          "בחרי כיוון, בקשי נימוק וסקיצת גריד, ובני סקיצה ב-Adobe.",
          "בקשי ביקורת Design Critic ובצעי תיקונים ידנית."
        ],
        "check": "נבחר קונספט שמבוסס על הבריף ולא על ניחושים.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. הצע שלושה כיוונים עם מסר, קומפוזיציה, טיפוגרפיה, פלטה, רפרנסים, אפשרויות motion ויישום לדיגיטל ודפוס. פרט מה מחוץ לשפת המותג ודורש אישור.",
        "hint": "",
        "links": [],
        "files": []
      },
      {
        "id": "firefly",
        "title": "Adobe Firefly — יצירה ועיבוד",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "בקשי מ-Claude פרומפט באנגלית עם קומפוזיציה ותאורה, בלי שמות מותג סודיים.",
          "פתחי firefly.adobe.com והתחברי לחשבון המאושר.",
          "בחרי Generate Image או יכולת מתאימה, הדביקי את הפרומפט ובחרי aspect ratio לפי היעד.",
          "לחצי Generate; השווי תוצאות והורידי רק את מה שהותר לשימוש.",
          "ב-Photoshop אפשר להשתמש ב-Generative Fill על בחירה בעותק: בחרי אזור → Generative Fill → Prompt → Generate, אם זמין.",
          "בדקי ארטיפקטים, זכויות, תנאי המודל ודרישות המשרד."
        ],
        "check": "נכס מאושר ועבר ביקורת.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. כתוב פרומפט באנגלית ל-Firefly עם נושא, מרחב שלילי לטקסט, קומפוזיציה, צבע ותאורה. ללא קופי מוטמע או לוגו לא מורשה.",
        "hint": "",
        "links": [
          [
            "Firefly",
            "https://firefly.adobe.com"
          ]
        ],
        "files": []
      },
      {
        "id": "midjourney",
        "title": "Midjourney — חקר ויזואלי",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי midjourney.com והתחברי לחשבון המאושר.",
          "לחצי Create, הדביקי פרומפט בשדה Imagine ובחרי יחס תמונה אם נדרש.",
          "שלחי, בחרי תוצאה והשתמשי ב-Variations/Upscale לפי הממשק.",
          "הורידי תוצר מורשה; בדקי אם יצירות או פרומפטים חשופים לציבור בהתאם למנוי ולהגדרות.",
          "שמרי פרומפט והחלטות מאושרות; סיימי ב-Adobe."
        ],
        "check": "נבחר נכס ללא מידע סודי ולפי רישיון.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. כתוב 3 פרומפטים עצמאיים ל-Midjourney למותג מדומה, עם סגנון כללי, תאורה, צילום ויחס מסך. בלי חיקוי מדויק של יצירה מוגנת.",
        "hint": "",
        "links": [
          [
            "Midjourney",
            "https://www.midjourney.com"
          ]
        ],
        "files": []
      },
      {
        "id": "magnific",
        "title": "Magnific — שיפור נכסים",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי Magnific דרך החשבון הקיים.",
          "בחרי Upscale / Enhance או הכלי הקיים בממשק.",
          "העלי רק תמונה שהחברה מתירה; בחרי גודל יעד והגדרות שמרניות לשמירה על נאמנות.",
          "הריצי, הורידי והשווי 100% למקור: פנים, לוגו, טקסט, צבע ומרקם.",
          "שמרי כגרסה חדשה; אם פרטים הומצאו, השתמשי במקור."
        ],
        "check": "התמונה המשופרת נבדקה ולא החליפה מקור.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. הצע הגדרות שיפור שמרניות לתמונה, וסמן פרטים שדורשים השוואה ידנית.",
        "hint": "",
        "links": [
          [
            "Magnific",
            "https://magnific.ai"
          ]
        ],
        "files": []
      },
      {
        "id": "chatgpt",
        "title": "ChatGPT — סיעור מוחות ובקרת עמית",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי ChatGPT בחשבון המאושר.",
          "הדביקי בריף מדומה או חומר מותר בלבד, בלי להעביר את כל מאגר הלקוח.",
          "בקשי ביקורת חלופית או רעיונות שאינם חוזרים על Claude.",
          "השווי לתשובות Claude, בדקי עובדות ובחרי בעצמך.",
          "שמרי רק החלטות מאושרות ב-Client DNA."
        ],
        "check": "התקבל כיוון חלופי ולא נעשתה העברת מידע לא מאושרת.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. תן ביקורת עצמאית על הקונספט: מה לא ברור, מה צפוי מדי ואיך אפשר לשפר אותו בלי לסטות מהמותג.",
        "hint": "",
        "links": [
          [
            "ChatGPT",
            "https://chatgpt.com"
          ]
        ],
        "files": []
      },
      {
        "id": "motion",
        "title": "הנפשות, וידאו וסטוריבורד",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי Claude עם Motion Planner והעלי סקיצה מאושרת.",
          "הגדירי משך, יחס, מסר, קצב ודרישות שמע.",
          "בקשי storyboard לפי שניות, שכבות, תנועה, easing ו-loop.",
          "ב-Photoshop: Window → Timeline → Create Frame Animation או Create Video Timeline לפי הגרסה; בחרי שכבות ומשך לכל פריים.",
          "ייצאי GIF דרך File → Export → Save for Web (Legacy) אם זמין, או Render Video אם מתאים; לעבודת וידאו מתקדמת השתמשי בכלי וידאו שהחברה מאשרת.",
          "בדקי קריאות, לולאה, פורמט ומשקל."
        ],
        "check": "אנימציית ניסוי קצרה נבדקה בפורמט היעד.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. בנה סטוריבורד של 10 שניות לפי שנייה, תנועה, קצב, טקסט, safe area, נכסים ופורמט. אין לטעון שרונדר וידאו.",
        "hint": "לא נמסר שגילי משתמשת ב-After Effects או Premiere, לכן איננו מניחים התקנה או מנוי.",
        "links": [],
        "files": []
      }
    ]
  },
  {
    "name": "QA ושגרת פרויקט",
    "desc": "כל סוגי העבודות, מהבריף עד מסירה.",
    "tasks": [
      {
        "id": "brief",
        "title": "1 — קליטת פרויקט",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי את משימת החברה וקראי את הבריף.",
          "פתחי Project של הלקוח ב-Claude.",
          "הפעילי Client Brief Analyzer והדביקי בריף מורשה.",
          "סמני חוסרים והחזירי שאלות ללקוח דרך ערוץ העבודה הרגיל.",
          "אשרי מפרט, דדליין ותוצרים לפני עיצוב."
        ],
        "check": "בריף מאומת ורשימת תוצרים.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. נתח את הבריף ופרט מה חסר לפני תחילת העיצוב.",
        "hint": "",
        "links": [],
        "files": []
      },
      {
        "id": "deliverables",
        "title": "2 — התאמת תהליך לסוג העבודה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "בחרי סוג עבודה מתוך טבלת המסלולים המצורפת.",
          "בקשי מפרט תוצרים לפי בריף, לא לפי ברירת מחדל.",
          "בחרי תבנית Adobe, גריד, פורמטים ודרישות QA.",
          "אשרי עם מנהל הפרויקט ותעדי באתר החברה."
        ],
        "check": "נבחר מסלול לכל תוצר.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. לסוג העבודה שאמסור, בנה checklist: בריף, מחקר, גריד, הפקה, תיקונים, QA וייצוא. ציין חסרים.",
        "hint": "",
        "links": [],
        "files": [
          [
            "מסלולי עיצוב",
            "templates/workflows.md"
          ]
        ]
      },
      {
        "id": "qa-text",
        "title": "3 — בדיקת איות, עברית ו-RTL",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "העתיקי את הטקסט מהעיצוב או ייצאי PDF בדיקה.",
          "פתחי Hebrew & RTL QA והדביקי את הטקסט המותר.",
          "בדקי מקור מול הצעה; אישור לפני שינוי קופי.",
          "בתוכנת Adobe בדקי שפת פסקה, כיווניות, מיקום מספרים, פיסוק, ניקוד ושבירת שורות חזותית.",
          "בצעי תיקון במקור העבודה, ייצאי עותק נוסף ובדקי שוב."
        ],
        "check": "אין תיקון אוטומטי לא מאושר; תצוגה חזותית נבדקה.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. הצג טבלה: מקור, תיקון מוצע, סיבה, רמת ודאות. שמור שמות מסחריים ואל תשנה משמעות. ציין בדיקות RTL חזותיות.",
        "hint": "",
        "links": [],
        "files": []
      },
      {
        "id": "qa-visual",
        "title": "4 — ביקורת חזותית ובדיקת מותג",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "ייצאי preview מורשה מתוך Adobe.",
          "צרפי אותו בפרויקט הלקוח והפעילי Brand Guardian ו-Design Critic.",
          "בקשי דירוג חומרה לכל בעיה ומקור לכל חריגה.",
          "בחרי אילו תיקונים לקבל; בדקי קריאות בגודל האמיתי ובמובייל/דפוס לפי המוצר.",
          "רשמי גרסה והצעה לעדכון Client DNA."
        ],
        "check": "בדיקת מותג והיררכיה מתועדת.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. בדוק את הסקיצה: היררכיה, ניגודיות, גריד, טיפוגרפיה, צבע, קופי, לוגו וקריאות. הפרד עובדה מהמלצה וציין מה לא ניתן לבדוק מהתמונה בלבד.",
        "hint": "",
        "links": [],
        "files": []
      },
      {
        "id": "qa-final",
        "title": "5 — בדיקת קבצים ומסירה",
        "owner": "גילי",
        "api": "לא נדרש API",
        "steps": [
          "פתחי מניפסט ייצוא ואשרי רשימת פורמטים.",
          "בדקי קבצים ב-Explorer ופתחי אותם בפועל; PDF בדקי ב-Acrobat.",
          "וודאי דרישות דיגיטל: מידות, משקל, שקיפות ופרופיל; דפוס: מפרט בית הדפוס ו-Preflight.",
          "העתיקי לגרסת היעד המאושרת בשרת בלי דריסה.",
          "עדכני סטטוס באתר החברה ושלחי רק לאחר אישור."
        ],
        "check": "כל הקבצים מאומתים ומסירה אושרה.",
        "prompt": "",
        "hint": "",
        "links": [],
        "files": [
          [
            "צ׳קליסט QA",
            "templates/qa.md"
          ]
        ]
      }
    ]
  },
  {
    "name": "אוטומציות ותזמון",
    "desc": "להפעיל רק לאחר בדיקה ידנית; שעות הן הצעה ולא עובדה על המשרד.",
    "tasks": [
      {
        "id": "schedule-test",
        "title": "יצירת משימה מתוזמנת ראשונה",
        "owner": "ביחד",
        "api": "לא נדרש API",
        "steps": [
          "פתחו Claude Cowork ובדקו Scheduled tasks בסרגל הצד או הקלידו /schedule במשימה.",
          "לחצו New task / Create task אם מופיע, או בקשו בצ׳אט תזמון.",
          "הדביקו פרומפט ניסוי, בדקו שם, ימים ושעה באזור הזמן הנכון.",
          "בחרו Manual approval / Always ask אם זמין, ודאו שאין כלים עם כתיבה.",
          "לחצו Schedule, בדקו את הרשומה ובצעו Run now אם קיים; אחרת בדקו בהרצה הראשונה.",
          "משימות ענן לא מקבלות בהכרח גישה לנתיב Windows או לשרת; אם נדרש, בצעו מקומית כשהאפליקציה פתוחה."
        ],
        "check": "משימת דוגמה נוצרה ללא גישה למידע אמיתי.",
        "prompt": "בכל יום עבודה בשעה 09:00, הצג רשימת דוגמה של שלוש משימות מדומות. אל תשתמש בכלי חיצוני ואל תשנה דבר.",
        "hint": "",
        "links": [
          [
            "schedule",
            "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork"
          ],
          [
            "local",
            "https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile"
          ]
        ],
        "files": []
      },
      {
        "id": "morning",
        "title": "Morning Brief — 09:00",
        "owner": "ביחד",
        "api": "מותנה באישור IT",
        "steps": [
          "תחילה הריצו ידנית את הפרומפט על מקור מאושר או נתוני דוגמה.",
          "אם הפלט מדויק, פתחו Scheduled tasks → New task או /schedule.",
          "בחרו ימים ושעה שמתאימים למשרד, לא בהכרח ההצעה שבכותרת.",
          "אשרו מקורות קריאה בלבד, בלי Automatically approve.",
          "בדקו פלט ראשון, השהו או מחקו את התזמון אם יש שגיאה או חוסר הרשאה."
        ],
        "check": "דוח ניסוי התקבל ללא פעולת כתיבה.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. סכם מיילים, פגישות ותיקונים ממקורות שאושרו בלבד; מיין לפי דחיפות, לקוח ותאריך, עם מקור וקישורים אם זמינים.",
        "hint": "אם Outlook או תיקיית רשת אינם זמינים, השתמשו ברשימה ידנית. אין להבטיח תזמון של קבצים מקומיים בענן.",
        "links": [
          [
            "schedule",
            "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork"
          ]
        ],
        "files": []
      },
      {
        "id": "noon",
        "title": "Client Feedback — 12:00",
        "owner": "ביחד",
        "api": "מותנה באישור IT",
        "steps": [
          "תחילה הריצו ידנית את הפרומפט על מקור מאושר או נתוני דוגמה.",
          "אם הפלט מדויק, פתחו Scheduled tasks → New task או /schedule.",
          "בחרו ימים ושעה שמתאימים למשרד, לא בהכרח ההצעה שבכותרת.",
          "אשרו מקורות קריאה בלבד, בלי Automatically approve.",
          "בדקו פלט ראשון, השהו או מחקו את התזמון אם יש שגיאה או חוסר הרשאה."
        ],
        "check": "דוח ניסוי התקבל ללא פעולת כתיבה.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. רכז תיקונים חדשים, גרסאות, כפילויות וסתירות לפי לקוח. אל תעדכן את האתר.",
        "hint": "אם Outlook או תיקיית רשת אינם זמינים, השתמשו ברשימה ידנית. אין להבטיח תזמון של קבצים מקומיים בענן.",
        "links": [
          [
            "schedule",
            "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork"
          ]
        ],
        "files": []
      },
      {
        "id": "evening",
        "title": "Daily Review — 17:00",
        "owner": "ביחד",
        "api": "מותנה באישור IT",
        "steps": [
          "תחילה הריצו ידנית את הפרומפט על מקור מאושר או נתוני דוגמה.",
          "אם הפלט מדויק, פתחו Scheduled tasks → New task או /schedule.",
          "בחרו ימים ושעה שמתאימים למשרד, לא בהכרח ההצעה שבכותרת.",
          "אשרו מקורות קריאה בלבד, בלי Automatically approve.",
          "בדקו פלט ראשון, השהו או מחקו את התזמון אם יש שגיאה או חוסר הרשאה."
        ],
        "check": "דוח ניסוי התקבל ללא פעולת כתיבה.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. סכם מה הושלם, מה פתוח, מה חסר ותוכנית למחר. אל תסמן משימה כהושלמה ללא מקור.",
        "hint": "אם Outlook או תיקיית רשת אינם זמינים, השתמשו ברשימה ידנית. אין להבטיח תזמון של קבצים מקומיים בענן.",
        "links": [
          [
            "schedule",
            "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork"
          ]
        ],
        "files": []
      },
      {
        "id": "radar",
        "title": "Creative Radar — פעם בשבוע",
        "owner": "ביחד",
        "api": "מותנה באישור IT",
        "steps": [
          "תחילה הריצו ידנית את הפרומפט על מקור מאושר או נתוני דוגמה.",
          "אם הפלט מדויק, פתחו Scheduled tasks → New task או /schedule.",
          "בחרו ימים ושעה שמתאימים למשרד, לא בהכרח ההצעה שבכותרת.",
          "אשרו מקורות קריאה בלבד, בלי Automatically approve.",
          "בדקו פלט ראשון, השהו או מחקו את התזמון אם יש שגיאה או חוסר הרשאה."
        ],
        "check": "דוח ניסוי התקבל ללא פעולת כתיבה.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. מצא השראות ציבוריות ומגמות עיצוב עם מקורות, תאריכים ושלושה תרגילים אפשריים. אל תשתמש בחומר חסוי.",
        "hint": "אם Outlook או תיקיית רשת אינם זמינים, השתמשו ברשימה ידנית. אין להבטיח תזמון של קבצים מקומיים בענן.",
        "links": [
          [
            "schedule",
            "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork"
          ]
        ],
        "files": []
      },
      {
        "id": "files-review",
        "title": "File Review — פעם בשבוע",
        "owner": "ביחד",
        "api": "מותנה באישור IT",
        "steps": [
          "תחילה הריצו ידנית את הפרומפט על מקור מאושר או נתוני דוגמה.",
          "אם הפלט מדויק, פתחו Scheduled tasks → New task או /schedule.",
          "בחרו ימים ושעה שמתאימים למשרד, לא בהכרח ההצעה שבכותרת.",
          "אשרו מקורות קריאה בלבד, בלי Automatically approve.",
          "בדקו פלט ראשון, השהו או מחקו את התזמון אם יש שגיאה או חוסר הרשאה."
        ],
        "check": "דוח ניסוי התקבל ללא פעולת כתיבה.",
        "prompt": "עבוד רק על חומר מאושר של הלקוח הנוכחי. אל תמציא מידע; סמן הנחות ומידע חסר. אל תשלח, תפרסם, תמחק או תשנה מקור. אם תיקיית הניסוי זמינה באופן מאושר, הצג שמות, כפילויות אפשריות וגרסאות. אל תזיז או תמחק; אם אינה זמינה, בקש רשימה ידנית.",
        "hint": "אם Outlook או תיקיית רשת אינם זמינים, השתמשו ברשימה ידנית. אין להבטיח תזמון של קבצים מקומיים בענן.",
        "links": [
          [
            "schedule",
            "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork"
          ]
        ],
        "files": []
      }
    ]
  },
  {
    "name": "API, MCP והמשך הפיילוט",
    "desc": "רק לאלווין ול-IT: להוסיף אינטגרציה רק כשיש צורך מוכח.",
    "tasks": [
      {
        "id": "api-claude",
        "title": "Claude API — מתי ואיך",
        "owner": "אלווין / IT",
        "api": "API אפשרי — לא בשלב הראשון",
        "steps": [
          "אם הזרימה הידנית וה-Skills מספיקים, אל תפתח API.",
          "אם נדרש שירות רקע עצמאי, פתח חשבון ארגוני מאושר ב-console.anthropic.com לפי מדיניות החברה.",
          "ב-Console בחר workspace ניסוי, הגדר Billing/תקציב ובדוק Usage limits; שמות התפריטים עשויים להשתנות.",
          "ב-API Keys צור מפתח ייעודי ושמור ב-secret manager או משתנה סביבה בצד שרת בלבד.",
          "בדוק בקשה מינימלית עם נתוני דמה לפי API docs; הגדר timeout, rate limit, logging ללא תוכן רגיש, ביטול מפתח.",
          "אל תכניס מפתח ל-HTML, JS, ZIP או GitHub."
        ],
        "check": "מפתח ותהליך מאושרים בלבד, או החלטה שלא צריך API.",
        "prompt": "",
        "hint": "Pro ו-API הם מוצרים נפרדים עם חיוב נפרד.",
        "links": [
          [
            "Claude Console",
            "https://console.anthropic.com"
          ],
          [
            "API docs",
            "https://docs.claude.com"
          ],
          [
            "api",
            "https://support.claude.com/en/articles/9876003-why-is-claude-api-usage-billed-separately-from-my-paid-claude-plan"
          ]
        ],
        "files": []
      },
      {
        "id": "api-adobe",
        "title": "Adobe API / Firefly API — רק אם נדרש",
        "owner": "אלווין / IT",
        "api": "API אפשרי — לא בשלב הראשון",
        "steps": [
          "הגדיר use case: ייצוא המוני, יצירת נכסים או Photoshop API; ודא ש-Adobe מקומי לא מספיק.",
          "בדוק Adobe Developer Console ותיעוד המוצר, זכאות הארגון ותמחור.",
          "אם IT מאשר, צור Project בסביבת ניסוי, הוסף רק API זמין, הגדר OAuth לפי התיעוד וההרשאות.",
          "שמור סודות בשרת בלבד; בדוק בקשה על נכס מדומה, rate limits, חיוב ופלט.",
          "אם אין זכאות, הישאר עם Actions, Artboards וסקריפטים מקומיים."
        ],
        "check": "היתכנות ועלות נבדקו לפני כל חיבור.",
        "prompt": "",
        "hint": "לא נדרשים API או מפתח Firefly לשימוש ידני; אין להניח שכל מנוי Adobe כולל API.",
        "links": [
          [
            "Adobe Developer Console",
            "https://developer.adobe.com/console"
          ],
          [
            "Firefly Services",
            "https://developer.adobe.com/firefly-services/"
          ]
        ],
        "files": []
      },
      {
        "id": "api-mcp",
        "title": "MCP / אינטגרציה פנימית",
        "owner": "אלווין / IT",
        "api": "API אפשרי — לא בשלב הראשון",
        "steps": [
          "התחל רק לאחר קבלת API מתועד ואישור בעל המערכת.",
          "הגדר שרת מתווך עם read-only tools מוגדרים, אימות, הרשאות משתמש ו-audit.",
          "בדוק תקינות קלט, pagination, פקיעת token, חסימת פעולות כתיבה ונתוני דוגמה.",
          "ב-Claude בדוק Plugins/Connectors → Add custom connector אם המנוי והממשק מאפשרים; השתמש רק בכתובת HTTPS מאושרת ותהליך האימות המתועד.",
          "בדוק כלי אחד בלבד, השווה מול האתר, ובטל חיבור אם קיימת הרשאה רחבה מדי."
        ],
        "check": "בדיקת אבטחה ופלט קריאה עברו.",
        "prompt": "",
        "hint": "לא נכלל שרת MCP או backend; אין API פנימי מתועד או הרשאות. אין להקים n8n/Make ללא אישור.",
        "links": [],
        "files": []
      },
      {
        "id": "api-other",
        "title": "Midjourney / Magnific / ChatGPT API",
        "owner": "אלווין / IT",
        "api": "API אפשרי — לא בשלב הראשון",
        "steps": [
          "בדוק אם באמת נדרשת אוטומציה ולא עבודה ידנית.",
          "בדוק תיעוד ספק ורישיון ארגוני לזמינות API רשמי; אל תשתמש ב-bot או API בלתי רשמי.",
          "במקרה של OpenAI API, בדוק חיוב נפרד מחשבון ChatGPT והגדר תקציב וסודות בשרת.",
          "אם קיימת זכאות API של Magnific או ספק אחר, בדוק נתוני דוגמה בלבד בהתאם לתיעוד.",
          "אם אין API רשמי מאושר, הישאר בכלי האינטרנט."
        ],
        "check": "החלטה מתועדת לכל כלי: ידני או API מאושר.",
        "prompt": "",
        "hint": "אין צורך ב-API לשימוש השוטף בכלי AI באתריהם.",
        "links": [],
        "files": []
      },
      {
        "id": "pilot",
        "title": "פיילוט ראשון ופתיחת תהליך קבוע",
        "owner": "ביחד",
        "api": "לא נדרש API",
        "steps": [
          "בחרו לקוח מדומה או מאושר ופרויקט קטן עם 3 פורמטים.",
          "מדדו זמן בריף, תיקונים, התאמות, QA וייצוא לפני ואחרי.",
          "בדקו שיעור תיקונים, איכות וקבצים שנמסרו; אל תמדדו רק מהירות.",
          "סכמו עם גילי מה עובד ומה מכביד והסירו אוטומציות שאינן מועילות.",
          "הרחיבו ללקוח נוסף רק לאחר בדיקה ואישור IT."
        ],
        "check": "יש מדידה, החלטה על הרחבה ובעלים לכל תהליך.",
        "prompt": "",
        "hint": "",
        "links": [],
        "files": [
          [
            "מדידה",
            "templates/metrics.csv"
          ]
        ]
      }
    ]
  }
];
