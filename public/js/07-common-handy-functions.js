/*
    [00]
    
    Make first letter of a string uppercase
    http://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript/3291856#3291856
*/

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/*
    [01]
    
    Sorting a JavaScript object by property name
    http://stackoverflow.com/questions/1359761/sorting-a-javascript-object-by-property-name?answertab=votes#tab-top
*/

function sortObject(obj) {
    var sorted = {},
    key, a = [];

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = obj[a[key]];
    }
    return sorted;
}

/*
    [02]
*/

function administrarRegistros(array, indexP, keyP, divContainer) {
    
    $("#" + divContainer + " .panel-body").children().remove();
    
    /*var objToEdit = "";*/
    
    switch (array) {
        case "usuarios":
            
            $("#" + divContainer + " .panel-body").append('<form class="form-horizontal"></form>');
            
            $.each(usuarios[indexP], function(key, value) {
                
                if(key != "foto") {
                    $("#" + divContainer + " .panel-body form").append('<div class="form-group">' + 
                                                                       '<label class="control-label col-sm-3" for="' + key + '">' + key + ':</label>' + 
                                                                       '<div class="col-sm-5"><input type="text" class="form-control" id="' + key + '" value="' + value + '"></div></div></div>');
                } else {
                    $("#" + divContainer + " .panel-body form").append('<div class="form-group">' + 
                                                                       '<label class="control-label col-sm-3" for="' + key + '">' + key + ':</label>' + 
                                                                       '<div class="col-sm-5"><img src="' + value + '" onerror=javascript:this.src="images/unassigned-image.jpg"><input type="file" id="' + key + '"></div></div>');
                }
                
            });
            
            $("#" + divContainer + " .panel-body form").append('<div class="form-group col-sm-12">' + 
                                                               '<a href="javascript:modificarRegistro(&quot;guardar&quot;, &quot;' + array + '&quot;, &quot;' + indexP + '&quot;)" class="btn btn-success" role="button">Guardar</a> ' + 
                                                               '<a href="javascript:modificarRegistro(&quot;eliminar&quot;, &quot;' + array + '&quot;, &quot;' + indexP + '&quot;)" class="btn btn-warning" role="button">Eliminar</a> ' + 
                                                               '<a href="javascript:modificarRegistro(&quot;cancelar&quot;, &quot;' + array + '&quot;, &quot;' + indexP + '&quot;)" class="btn btn-primary" role="button">Cancelar</a> ' + 
                                                               '</div>');
            break;
            
        case "alianzasMovimientosPartidos":
            
            $.each(alianzasMovimientosPartidos[indexP], function(key, value) {
                
                if(key == keyP) {
                    
                    switch(key) {
                            
                        case "tipo":
                            
                            $("#" + divContainer + " .panel-body").append('<form class="form-horizontal"></form>');
                            
                            $("#" + divContainer + " .panel-body form").append('<div class="form-group">' + 
                                                                               '<label class="control-label col-sm-3" for="' + key + '">' + 
                                                                               key + ':</label>' + 
                                                                               '<div class="col-sm-5"><input type="text" class="form-control" id="' + key + '" value="' + value + '"></div></div>');
                            break;
                            
                        case "grupos":
                            
                            $("#" + divContainer + " .panel-body").append('<form class="form-inline"></form>');
                            
                            $.each(value, function(kA, vA) {
                                $.each(vA, function(k, v) {
                                    
                                    if(k != "logo") {
                                        $("#" + divContainer + " .panel-body form").append('<div class="form-group">' + 
                                                                                           '<label class="control-label col-sm-3" for="' + k + '">' + 
                                                                                           k + ':</label>' + 
                                                                                           '<div class="col-sm-5"><input type="text" class="form-control" id="' + k + '" value="' + v + '"></div></div>');
                                    } else {
                                        $("#" + divContainer + " .panel-body form").append('<div class="form-group">' + 
                                                                                           '<label class="control-label col-sm-3" for="' + k + '">' + 
                                                                                           k + ':</label>' + 
                                                                                           '<div class="col-sm-5"><img src="' + vA + '" onerror=javascript:this.src="images/unassigned-logo.png"><input type="file" id="' + k + '" disabled></div></div>');
                                    }
                                });
                            });
                            
                            break;
                            
                        case "presidente":
                        case "vicepresidente":
                            
                            $("#" + divContainer + " .panel-body").append('<form class="form-horizontal"></form>');
                            
                            $.each(value, function(kA, vA) {
                                
                                if(kA != "foto") {
                                    $("#" + divContainer + " .panel-body form").append('<div class="form-group">' + 
                                                                                       '<label class="control-label col-sm-3" for="' + kA + '">' + 
                                                                                       kA + ':</label>' + 
                                                                                       '<div class="col-sm-5"><input type="text" class="form-control" id="' + kA + '" value="' + vA + '"></div></div>');
                                } else {
                                    $("#" + divContainer + " .panel-body form").append('<div class="form-group">' + 
                                                                                       '<label class="control-label col-sm-3" for="' + kA + '">' + 
                                                                                       kA + ':</label>' + 
                                                                                       '<div class="col-sm-5"><img src="' + vA + '" onerror=javascript:this.src="images/unassigned-image.jpg"><input type="file" id="' + kA + '" disabled></div></div>');
                                }
                            });
                            
                            $("#" + divContainer + " .panel-body form div.form-group").last().remove();
                            
                            break;
                            
                        case "representantesParlamentoAndino":
                        case "asambleistasGuayas":
                        case "asambleistasNacionales":
                        case "asambleistasExterior":
                            
                            $("#" + divContainer + " .panel-body").append('<form class="form-inline"></form>');
                            
                            $.each(value, function(kA, vA) {
                                $.each(vA, function(k, v) {
                                    
                                    if(k != "foto") {
                                        $("#" + divContainer + " .panel-body form").append('<div class="form-group">' + 
                                                                                           '<label class="control-label col-sm-3" for="' + k + '">' + 
                                                                                           k + ':</label>' + 
                                                                                           '<div class="col-sm-5"><input type="text" class="form-control" id="' + k + '" value="' + v + '"></div></div>');
                                    } else {
                                        $("#" + divContainer + " .panel-body form").append('<div class="form-group">' + 
                                                                                           '<label class="control-label col-sm-3" for="' + k + '">' + 
                                                                                           k + ':</label>' + 
                                                                                           '<div class="col-sm-5"><img src="' + v + '" onerror=javascript:this.src="images/unassigned-image.jpg"><input type="file" id="' + k + '" disabled></div></div>');
                                    }
                                });
                                
                                $("#" + divContainer + " .panel-body form div.form-group").last().remove();
                                
                            });
                            
                            break;
                            
                        default:
                            console.log("administrarRegistros");
                    }
                    
                }
                
            });
            
            $("#" + divContainer + " .panel-body form").append('<div class="form-group col-sm-12">' + 
                                                               '<a href="javascript:modificarRegistro(&quot;guardar&quot;, &quot;' + array + '&quot;, &quot;' + indexP + '&quot;)" class="btn btn-success" role="button" disabled>Guardar</a> ' + 
                                                               '<a href="javascript:modificarRegistro(&quot;eliminar&quot;, &quot;' + array + '&quot;, &quot;' + indexP + '&quot;)" class="btn btn-warning" role="button" disabled>Eliminar</a> ' + 
                                                               '<a href="javascript:modificarRegistro(&quot;cancelar&quot;, &quot;' + array + '&quot;, &quot;' + indexP + '&quot;)" class="btn btn-primary" role="button" disabled>Cancelar</a> ' + 
                                                               '</div>');
            break;
            
        default:
            console.log("administrarRegistros");
    }
    
    
}

function modificarRegistro(option, array, index) {
    console.log("%s %s %s", option, array, index);
}