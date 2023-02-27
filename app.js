var express = require('express');
var app = express();

const PORT = 3000;
const STATIC_DIR = 'static'

app.use(express.static(STATIC_DIR));//STATIC_DIRディレクトリを静的ファイルの置き場に使用

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});

var listener = app.listen(PORT, () => {
    console.log(listener.address().port);
});