const express = require('express');

const app = express();

const PORT = 8904;
const STATIC_DIR = 'static';

app.use(express.static(STATIC_DIR));//STATIC_DIRディレクトリを静的ファイルの置き場に使用

app.get('/', (req, res) => {
    console.log(__dirname + '/views/index.html')
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(PORT, () => {
    console.log('PORT : ' + PORT);
});