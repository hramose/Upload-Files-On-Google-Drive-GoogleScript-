function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}
function saveFile(obj) {
  var blob = Utilities.newBlob(Utilities.base64Decode(obj.data), obj.mimeType, obj.fileName);
  return DriveApp.createFile(blob).getId();
}