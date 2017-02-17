/*
    [00] Interfaz para el encuestador
    
    Opciones disponibles (marcadas con x):
    
        Create  Read    Update  Delete
    (a) x                               registroVotos
*/

function encuestadorUI() {
    
    $("#workspace").append(htmlFormularioEncuesta);
    
    $.getJSON("/json/grupos.json", function(data) {
        
        for (key in data.alianzasMovimientosPartidos[0]) {
            
            switch(key) {
                case "tipo": break;     // No es necesario en esta parte
                case "grupos": break;   // No es necesario en esta parte

                case "presidente": 
                    setPoolPills("binomio", "Binomio", 1);
                    break;
                case "vicepresidente": break;

                case "representantesParlamentoAndino":
                    setPoolPills(key, "Representantes Parlamento Andino", 0);
                    break;
                case "asambleistasGuayas":
                    setPoolPills(key, "Asambleistas Guayas", 0);
                    break;
                case "asambleistasNacionales":
                    setPoolPills(key, "Asambleistas Nacionales", 0);
                    break;
                case "asambleistasExterior":
                    setPoolPills(key, "Asambleistas Exterior", 0);
                    break;

                default:
                    console.log("encuestadorUI");
            }
        }
    });
}

/*
    [01]
*/

function setPoolPills(key, title, status) {
    if(status) {
        $("#dynamicPillsPoll").append('<li class="active"><a data-toggle="pill" href="#' + key + '">' + title + '</a></li>');
        
        $("#pillsPollContent").append('<div id="' + key + '" class="tab-pane fade in active"></div>');
    } else {
        $("#dynamicPillsPoll").append('<li><a data-toggle="pill" href="#' + key + '">' + title + '</a></li>');
        
        $("#pillsPollContent").append('<div id="' + key + '" class="tab-pane fade"></div>');
    }
    
    $("#" + key).append('<div class="container-fluid"><div class="table-responsive"><table class="table"><thead><tr></tr></thead><tbody></tbody></table></div></div>');
    
    setPoolPillsContent(key);
}

/*
    [02]
*/

function setPoolPillsContent(key) {
    
    for (var i = 0; i < alianzasMovimientosPartidos.length; i++) {
        
        var tipo = "", grupos = "", listas = "";
        
        for (var j = 0; j < alianzasMovimientosPartidos[i].grupos.length; j++) {
            grupos += alianzasMovimientosPartidos[i].grupos[j].nombre + " - <br>";
            listas += alianzasMovimientosPartidos[i].grupos[j].numeroLista + " - ";
        }
        
        tipo = alianzasMovimientosPartidos[i].tipo;
        tipo = tipo.toUpperCase();
        
        grupos = grupos.substring(0, (grupos.length - 7));
        listas = listas.substring(0, (listas.length - 3));
        
        $("#" + key + " table thead tr").append('<th><sup>' + tipo + "</sup> " + grupos + "<br>" + listas + '</th>');
    }
    
    for (var i = 0; i < alianzasMovimientosPartidos[0].representantesParlamentoAndino.length; i++) {
        
        if(i == 0) {
            $("#" + key + " table tbody").append('<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>');
        }
        
        switch(i) {
                
            case 0:
                if(key == "binomio") {
                    //console.log("[v]------------ Candidatos a [presidente]");
                    for(var j = 0; j < alianzasMovimientosPartidos.length; j++) {
                        //console.log(alianzasMovimientosPartidos[j].presidente.nombre);
                        
                        $("#" + key + " table tbody tr").eq(0).append('<td>' + '<img src="' + alianzasMovimientosPartidos[j].presidente.foto + '" onerror=javascript:this.src="images/unassigned-image.jpg"></td>');
                        
                        $("#" + key + " table tbody tr").eq(1).append('<td><b>PRESIDENTE</b><br>' + alianzasMovimientosPartidos[j].presidente.nombre + '</td>');
                    }
                } else {
                    //console.log("[v]------------ Candidatos a [%s]", key);
                    for(var j = 0; j < alianzasMovimientosPartidos.length; j++) {
                        //console.log(alianzasMovimientosPartidos[j][key][i].nombre);
                        
                        $("#" + key + " table tbody tr").eq(0).append('<td>' + '<img src="' + alianzasMovimientosPartidos[j][key][i].foto + '" onerror=javascript:this.src="images/unassigned-image.jpg"></td>');
                        
                        $("#" + key + " table tbody tr").eq(1).append('<td><div class="radio"><label><input type="radio" name="opt' + key + i + '" disabled></label></div>' + alianzasMovimientosPartidos[j][key][i].nombre + '</td>');
                    }
                }
                break;
                
            case 1:
                if(key == "binomio") {
                    //console.log("[v]------------ Candidatos a [vicepresidente]");
                    for(var j = 0; j < alianzasMovimientosPartidos.length; j++) {
                        //console.log(alianzasMovimientosPartidos[j].vicepresidente.nombre);
                        
                        $("#" + key + " table tbody tr").eq(2).append('<td>' + '<img src="' + alianzasMovimientosPartidos[j].vicepresidente.foto + '" onerror=javascript:this.src="images/unassigned-image.jpg"></td>');
                        
                        $("#" + key + " table tbody tr").eq(3).append('<td><b>VICEPRESIDENTE</b><br>' + alianzasMovimientosPartidos[j].vicepresidente.nombre + '</td>');
                        
                        //La siguiente sentencia es necesaria en esta parte
                        $("#" + key + " table tbody tr").eq(4).append('<td><div class="radio"><label><input type="radio" name="opt' + key + '">' + '</label></div></td>');
                    }
                } else {
                    //console.log("[v]------------ Candidatos a [%s]", key);
                    for(var j = 0; j < alianzasMovimientosPartidos.length; j++) {
                        //console.log(alianzasMovimientosPartidos[j][key][i].nombre);
                        
                        $("#" + key + " table tbody tr").eq(2).append('<td>' + '<img src="' + alianzasMovimientosPartidos[j][key][i].foto + '" onerror=javascript:this.src="images/unassigned-image.jpg"></td>');
                        
                        $("#" + key + " table tbody tr").eq(3).append('<td><div class="radio"><label><input type="radio" name="opt' + key + i + '" disabled></label></div>' + alianzasMovimientosPartidos[j][key][i].nombre + '</td>');
                    }
                }
                break;
                
            default:
                console.log("setPoolPills");
        }
    }
}

/*
    [03]
*/

function registrarVoto() {
    
    var cedulaInputTextData = $("input:text[name='formInputCedula']").val();
    
    if(checkCedulaVotante(cedulaInputTextData)) {
        
        confirmarVoto();
        
    } else {
        
        /*
            SweetAlert
            http://t4t5.github.io/sweetalert/
        */
        
        swal("No se puede continuar", "Ya existe un registro con este número de cédula", "error");
        
    }
    
}

/*
    [04]
*/

function checkCedulaVotante(cedulaInputTextData) {
    var flag = true;
    
    $.each(registroVotos, function(key, value) {
        if(value.cedulaVotante == cedulaInputTextData) {
            flag = false;
        }
    });
    
    return flag;
}