var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.static('src'));
app.use(express.static('views'));
app.get('/', function(req, res) {
    //res.send('Hello World');
    res.render('index');
});

app.listen(PORT, function() {
    console.log('The Server is running on Port: '+ PORT);
})