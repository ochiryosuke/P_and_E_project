const express = require('express');

const app = express();

//静的ファイル設定
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/pubilc/a-frame.html');
})

app.listen(3000,() => console.log("サーバが起動しましたポート番号は3000です"))