const express = require('express');
const app = express();

const PORT = 3000;
const STATIC_DIR = 'static';
app.set('view engine', 'ejs');

app.use(express.static(STATIC_DIR));//STATIC_DIRディレクトリを静的ファイルの置き場に使用

app.get('/', (req, res) => {
    res.render(__dirname + '/views/ejs/index.ejs');
})

var listener = app.listen(PORT, () => {
    console.log('PORT : ' + listener.address().port);
});