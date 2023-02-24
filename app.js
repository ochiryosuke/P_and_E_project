var express = require('express');
var app = express();

const PORT = 3000;
const HTML_DIR = 'templates'

app.use(express.static(HTML_DIR));//public ファイルを__dirnameとして使用

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

var listener = app.listen(PORT, () => {
    console.log(listener.address().port);
});