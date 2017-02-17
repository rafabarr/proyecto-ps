/*
    [00]
*/

function confirmarVoto() {
    
    disablePollDataEntry(true);
    
    $("#workspace").append(htmlModificarVoto);
    
    $("#selectTag").append(generateHtmlContent());
    
}

/*
    [01]
*/

function generateHtmlContent() {
    
    var cedulaInputTextData = $("input:text[name='formInputCedula']").val();
    
    var binomio = "", cBinomio = 0, htmlOpcionesDisponibles = "";

    /*
        Obtener —de un conjunto de elementos [input]— el índice [index] del elemento seleccionado en base al atributo [name]
        Si no hay un elemento seleccionado, devuelve un valor de [-1]

        http://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button?answertab=votes#tab-top
    */

    var binomioRadioButtons = $("input:radio[name='optbinomio']");

    var binomioSeleccionado = binomioRadioButtons.index(binomioRadioButtons.filter(':checked'));

    if(binomioSeleccionado == -1) {

        binomio = "[Blanco/Nulo]";

    } else {

        binomio = alianzasMovimientosPartidos[binomioSeleccionado].presidente.nombre + ", " + alianzasMovimientosPartidos[binomioSeleccionado].vicepresidente.nombre;

    }

    $.each(alianzasMovimientosPartidos, function(key, value) {
        if(binomio !== (value.presidente.nombre + ", " + value.vicepresidente.nombre)) {

            htmlOpcionesDisponibles += "<option>" + (value.presidente.nombre + ", " + value.vicepresidente.nombre) + "</option>";

            cBinomio++;
        }
    });

    /*
        ¡ATENCIÓN!
        
        Este dato [8] se encuentra quemado... ¿Solución? Establecer el número de candidatos por dignidad con una constante en [03-systemStart.js]
    */
    
    if(cBinomio < 8) {htmlOpcionesDisponibles += "<option>[Blanco/Nulo]</option>";}

    $("#modificarVoto").prepend('<h3>Modificar voto</h3>' + '<p>El usuario <i>' + cedulaInputTextData + '</i> –en la papeleta de binomio– ha votado por <i>' + binomio + '</i></p>');

    return htmlOpcionesDisponibles;
    
}

/*
    [02]
*/

function modificarVoto(flag) {
    
    var cedulaInputTextData = $("input:text[name='formInputCedula']").val();
    
    if(flag) {
        
        var nuevoBinomio = $("#selectTag option:selected").text();
        
        if(nuevoBinomio === "") {
            
            swal("No se puede continuar", "Debe seleccionar una opción", "info");
            
        } else {
            
            registroVotos.push(new RegistroVoto(JSON.parse('{"cedulaVotante":"' + cedulaInputTextData + '",' + '"binomio":"' + nuevoBinomio + '"}')));

            swal("Voto modificado", "Nuevo registro creado", "success");
            endPoll();
            
        }
        
    } else {
        
        var binomioRadioButtons = $("input:radio[name='optbinomio']");
        var binomioSeleccionado = binomioRadioButtons.index(binomioRadioButtons.filter(':checked'));
        
        var tempDatos;

        if(binomioSeleccionado == -1) {

            tempDatos = '{"cedulaVotante":"' + cedulaInputTextData + '",' + 
                '"binomio":"' + "[Blanco/Nulo]" + '"}';

        } else {

            tempDatos = '{"cedulaVotante":"' + cedulaInputTextData + '",' + 
                '"binomio":"' + alianzasMovimientosPartidos[binomioSeleccionado].presidente.nombre + ", " + 
                                alianzasMovimientosPartidos[binomioSeleccionado].vicepresidente.nombre + '"}';

        }

        registroVotos.push(new RegistroVoto(JSON.parse(tempDatos)));
        
        swal("Voto registrado", "Nuevo registro creado", "success");
        endPoll();
        
    }
    
}

/*
    [03]
*/

function disablePollDataEntry(status) {
    
    /*
        ¿Diferencia entre [.attr()] y [.prop()]?
        http://api.jquery.com/prop/

        Caracteres especiales
        http://www.w3schools.com/js/js_strings.asp
    */
    
    $("input:text[name=\"formInputCedula\"]").prop("disabled", status);
    $("input:radio[name=\"optbinomio\"]").prop("disabled", status);
    $("button[name=\"formInputSubmit\"]").prop("disabled", status);
    
}

/*
    [04]
*/

function endPoll() {
    
    $("#selectTag option:eq(0)").prop('selected','selected');
    $("#formModificarVoto").remove();

    disablePollDataEntry(false);
    $('form[name="frmRegistroVoto"]')[0].reset();
    
}