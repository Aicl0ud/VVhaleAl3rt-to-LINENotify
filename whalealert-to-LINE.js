const Bearer = 'Bearer _SECRET_'

function Main() {

    var msg = 'test'
    sendMessage(msg)
    // console.log(msg)
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