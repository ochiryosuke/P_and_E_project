const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("Shiryu_Test"));

app.listen(PORT, () => console.log("サーバーが起動しました"));