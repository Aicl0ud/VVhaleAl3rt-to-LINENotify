const Bearer = 'Bearer _SECRET_'
const Sheet = SpreadsheetApp.openById('_SheetID_').getSheets()[0]
function Main() {

    var lastRow = Sheet.getLastRow()
    var msg = Sheet.getSheetValues(lastRow, 2, 1, 1).toString() //startRow, startCol, returnRow 'till, returnCol 'till
    var preDel = msgRaw.replace(/(\r\n|\n|\r)/gm," ").split(' ')
    var delLink = preDel[preDel.length-1] //LINK to WhaleAlert transactions
    var msg = msgRaw.replace(delLink,'')
    //console.log(msg)
    sendMessage(msg.trim())

}

function sendMessage(message) {

    var data = {
        'method': 'post',
        'payload': 'message=' + message,
        'headers': {
            'Authorization': Bearer,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    };

    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", data)
}