# ربط الموقع بجدول Google Sheets (5 دقائق)

1. افتحي https://sheets.new وأنشئي جدولًا جديدًا باسم «مشاركات رسائل وبصمات».
2. من القائمة: **Extensions → Apps Script**. احذفي الكود الموجود والصقي محتوى `Code.gs` من هذا المجلد، ثم احفظي (Ctrl+S).
3. اضغطي **Deploy → New deployment** → النوع **Web app** → Execute as: **Me** → Who has access: **Anyone** → Deploy. وافقي على الصلاحيات.
4. انسخي رابط **Web app URL** (ينتهي بـ `/exec`).
5. افتحي `config.js` في المستودع وضعي الرابط في `submitEndpoint`، أو أرسليه لكلود ليضعه لك.

بعدها كل ضغطة «حفظ الرسالة» في الموقع تضيف صفًا جديدًا في الجدول تلقائيًا.
