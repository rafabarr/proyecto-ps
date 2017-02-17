/*
    [00]
*/

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var fs = require('fs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

/*
    [01]
*/

app.get('/', function (req, res) {
    res.render('pages/login');
});

/*
    [02]
*/

app.get('/listUsuarios', function (req, res) {
    /*fs.readFile(__dirname + '/public/json/usuarios.json', 'utf8', function (err, data) {
        var obj = JSON.parse(data);
        console.log(data);
    });*/
});

/*
    [03]
*/

app.post('/saveUser', function (req, res) {});

/*
    [04]
*/

app.delete('/deleteUser', function (req, res) {});

/*
    [05]
*/

var server = app.listen(8081, function () {
    
    var host = server.address().address;
    var port = server.address().port;
    
	console.log("Server running at http://%s:%s", host, port);
});