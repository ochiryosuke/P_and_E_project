const express = require('express');
const mysql = require('mysql');
const app = express();

const PORT = 3000;
const STATIC_DIR = 'static';

// MySQLを使うためのインストールしたmysqlを呼び出す

//定数connectionに、createConnectionを使って接続するデータベースの情報を格納します。
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sasaki8610',　//実際にはパスワードが設定されています。
  port : 3306,
  database: 'js_test'
});

app.use(express.static(STATIC_DIR));//STATIC_DIRディレクトリを静的ファイルの置き場に使用

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});

var listener = app.listen(PORT, () => {
    console.log('PORT : ' + listener.address().port);
});