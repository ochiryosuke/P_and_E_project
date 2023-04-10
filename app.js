const express = require('express');
const handlebars = require('express-handlebars')
const app = express();

const PORT = 8904;
const STATIC_DIR = 'static';
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static(STATIC_DIR));//STATIC_DIRディレクトリを静的ファイルの置き場に使用

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ar_database'
});

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.handlebars');
})

app.get('/quiz-get', (req, res) => {
    let quiz;
    connection.query(
        'SELECT id, quiz, answer FROM quiz',
        (err, result) => {
            if(err) throw err
            quiz = result
            console.log('complete')
        });
        res.json(quiz)
})

var listener = app.listen(PORT, () => {
    console.log('PORT : ' + listener.address().port);
});