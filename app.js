var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/static/views/index.html')
});

var listener = app.listen(3000, () => {
    console.log('Listen : ' + listener.address().port);
});