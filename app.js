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
    ¡ATENCIÓN EN ESTA PARTE!
*/

/*app.get('/dona/:id', function(req, res) {

    fs.readFile(__dirname + "/" + "donuts.json", 'utf8', function(err, texto) {

        var obj = JSON.parse(texto);
        var idDona = req.params.id;

        var arrDonas = obj.items.item;

        var dona = {};

        for(i in arrDonas) {
            console.log(arrDonas[i].name);
            if(arrDonas[i].id == idDona) {
                dona = arrDonas[i];
            }
        }

        res.render('formDona', {'donut':dona});
    });
});*/

/*
    ¡ATENCIÓN EN ESTA PARTE!
*/

/*app.post('/dona/:id', urlencodedParser, function(req, res) {

    var dona = {
        'id': req.params.id,
        'name': req.body.name,
        'type': req.body.type,
        'ppu': req.body.ppu
    }

    console.log(dona);

    fs.readFile( __dirname + "/" + "donuts.json", 'utf8', function(err, texto) {

        var obj = JSON.parse(texto);
        var arrDonas = obj.items.item;
        var updateProcess = false;

        for(i in arrDonas) {
            if(arrDonas[i].id == dona.id) {
                
                dona.batters = arrDonas[i].batters;
                dona.topping = arrDonas[i].topping;

                arrDonas[i] = dona;
                updateProcess = true;
            }
        }

        obj.items.item = arrDonas;

        fs.writeFile('donuts.json', JSON.stringify(obj, null, 4));

        if(updateProcess)
            res.send('Datos actualizados con éxito');
        else
            res.send('Error al actualizar datos');
    });
});*/

/*
    []
*/

var server = app.listen(8081, function () {
	console.log("Server running at http://localhost:8081")
});