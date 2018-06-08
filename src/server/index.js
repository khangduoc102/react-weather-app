var express = require('express');
var app = express();

app.use(express.static(__dirname +'./../../public')); //serves the index.html

app.get('/test', (req, res) => {
    res.send('index.html');
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/