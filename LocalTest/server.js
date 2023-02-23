const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("Shiryu_Test"));

app.get("/", (req, res) => {
    //res.send("<h1>こんにちは</h1>");
    res.status(500).json({ msg: "エラーです。" });
});

app.listen(PORT, () => console.log("サーバーが起動しました"));