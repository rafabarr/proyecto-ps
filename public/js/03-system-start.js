/*
    [00] Llamada a la función [setData] al iniciar la ejecución de la aplicación web
    
    La función [$(function() {});] es la versión "corta" (shorthand) de la función [$(document).ready(function() {});]
    
    https://learn.jquery.com/using-jquery-core/document-ready/
*/

$(function() {
    
    $("#workspace").append(htmlLogin);
    setData();
    
});

/*
    [01] Lectura de datos –del archivo JSON– y creación de objetos (instanciación) de las clases establecidas
*/

function setData() {
    /*
        Al asignar un valor a una variable QUE NO HA SIDO DECLARADA –con la palabra reservada [var]– automáticamente se establecerá como una varibale global.
        http://www.w3schools.com/js/js_scope.asp
    */
    
    usuarios = [], alianzasMovimientosPartidos = [], registroVotos = [];

    /*
        jQuery.getJSON()
        http://api.jquery.com/jquery.getjson/
    */
    
    $.getJSON("/json/usuarios.json", function(data) {
        
        $.each(data.usuarios, function(key, value) {
            
            switch(Object.keys(value)[0]) {

                case "administradores":
                    $.each(value.administradores, function(index, value) {
                        usuarios.push(new Administrador(value));
                    });
                    break;

                case "encuestadores":
                    $.each(value.encuestadores, function(index, value) {
                        usuarios.push(new Encuestador(value));
                    });
                    break;

                default:
                    console.log("setData");
            }
        });
        
        /*
            Sustitución de string
            http://stackoverflow.com/documentation/javascript/642/debugging/10108/using-the-console#t=20160723135949497454
        */
        
        /*console.log("Objetos(s) de tipo Usuario [%s]", usuarios.length);*/
    });
    
    $.getJSON("/json/grupos.json", function(data) {
        
        $.each(data.alianzasMovimientosPartidos, function(key, value) {
            alianzasMovimientosPartidos.push(new AlianzaMovimientoPartido(value));
        });
        
        /*console.log("Objetos(s) de tipo AlianzaMovimientoPartido [%s]", alianzasMovimientosPartidos.length);*/
    });
    
    $.getJSON("/json/votos.json", function(data) {
        
        $.each(data.registroVotos, function(key, value) {
            registroVotos.push(new RegistroVoto(value));
        });
        
        /*console.log("Objetos(s) de tipo RegistroVoto [%s]", registroVotos.length);*/
    });
}