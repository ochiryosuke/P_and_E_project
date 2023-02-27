//インストールしたパッケージ
const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

// ポート番号
const port = 8000

const app = express() // expressを実行
app.use(express.json()) //jsonのリクエスト/レスポンスを正しく受け取る為に必要
app.use(cors()) // corsを有効にする

// mysqlの接続に必要な情報を記載する（それぞれ自身のmysql情報を入力していく）
const con = mysql.createConnection({
  host: 'localhost',
  user: 'uroot',
  password: 'Os14001400',
  database: 'p_and_e_test'
})

// mysql接続
con.connect((err) => {
  if (err) throw err
  console.log('Connected')
})

// GETリクエストテスト
app.get('/', (req, res) => {
  return res.json('clear_check')
})

//portを開く
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
