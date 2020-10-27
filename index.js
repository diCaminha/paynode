var express = require('express');
var app = express();

app.listen(3000, ()=> {
    console.log("server running on port 3000...");
});

app.get('/test', (req, res) => {
    console.log("test endpoint.");
    res.send('test endpoint');
});
