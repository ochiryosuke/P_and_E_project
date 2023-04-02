const express = require("express");
const app = express();

const PORT = 4000;

app.use(express.static("main"));

app.listen(PORT, () => console.log("サーバーが起動しました"));