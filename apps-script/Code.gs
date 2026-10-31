// Google Apps Script — يستقبل مشاركات موقع «رسائل وبصمات» ويحفظها في Google Sheet
// الأعمدة تُنشأ تلقائيًا. انشريه كتطبيق ويب: Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone
const SHEET_NAME = "المشاركات";
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) { sh = ss.insertSheet(SHEET_NAME); sh.appendRow(["وقت الاستلام","النوع","المدرسة","المنطقة","المشارك/ة","الصفة","الهاتف","البريد","الرسالة","الكلمات","الإصدار","وقت الحفظ","معرّف المدرسة"]); sh.setFrozenRows(1); }
  let d = {}; try { d = JSON.parse(e.postData.contents); } catch (err) { d = e.parameter || {}; }
  sh.appendRow([new Date(), d.kind === "draft" ? "مسودة" : "رسالة نهائية", d.schoolName||"", d.region||"", d.name||"", d.role||"", d.phone||"", d.email||"", d.message||"", d.words||"", d.version||"", d.savedAt||d.updatedAt||"", d.schoolId||""]);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
function doGet() { return ContentService.createTextOutput("rasael-wa-basamat endpoint OK"); }
