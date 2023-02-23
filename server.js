const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./ar.html")


const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
});

server.listen(PORT, () => console.log(`サーバが起動しました.ポート番号は${PORT}です.`));

