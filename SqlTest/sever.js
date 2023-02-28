const express = require("express");
const { engine } = require('express-handlebars');
const fileUpload = require("express-fileupload");
const app = express();
const mysql = require("mysql");

const PORT = 3000;

app.use(fileUpload());

app.use(express.static("upload"));//静的ファイルとして設定

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "Os14001400",
    database: "p_and_e_project",
})

app.get("/", (req,res) => {
    res.render("home");

    // pool.getConnection((err, connection) => {
    //     if(err) throw err;

    //     console.log("MYSQLと接続中...");

    //     // //次はデータ取得から
    //     // connection.query("SELECT * FROM image", (err, rows) => {
    //     //     connection.release();

    //     //     console.log(rows);
    //     //     if(!err) {
    //     //         res.render("home", { rows });//取得したデータベースの情報をhome.handlebarsに送る
    //     //     }
    //     // });
    // });
});

app.get("/clearWindow", (req,res) => {
    console.log("クリア画面に移行しました");
    
    pool.getConnection((err, connection) => {
        if(err) throw err;

        console.log("MYSQLと接続中...");
        connection.query(
            `UPDATE clearstage SET Stage1 = true WHERE id = 1;`, 
            (err, rows) => {
                connection.release();

                // console.log(rows);
                if(!err) {
                    res.redirect("/");//同じページを再読み込み(リダイレクト)
                } else {
                    console.log(err);
                }
            }
        );
    });
});

// app.post("/", (req,res) => {//home.handlebarsのform action="/"だから"/"

//     if(!req.files) {
//         return res.status(400).send("何も画像がアップロードされていません");
//     }

//     let imageFile = req.files.imageFile;
//     let uploadPath = __dirname + "/upload/" + imageFile.name;

//     //サーバーに画像ファイルを置く場所の指定
//     imageFile.mv(uploadPath, function(err){
//         if(err) return res.status(500).send(err);
//         // res.send("画像アップロードに成功しました");
//     });

//     //Mysqlに画像ファイルの名前を追加して保存する。
//     pool.getConnection((err, connection) => {
//         if(err) throw err;

//         console.log("MYSQLと接続中...");
//         connection.query(
//             `INSERT INTO image values ("", "${imageFile.name}")`, 
//             (err, rows) => {
//                 connection.release();

//                 // console.log(rows);
//                 if(!err) {
//                     res.redirect("/");//同じページを再読み込み(リダイレクト)
//                 } else {
//                     console.log(err);
//                 }
//             }
//         );
//     });
// });

function Stage1Clear()
{
    
}

app.listen(PORT, () => console.log("サーバー起動中"));