/*
    [00]
*/

function mostrarUsuarios() {
    
    /*
        Obtener la frecuencia de los valores de un arreglo
        http://stackoverflow.com/questions/32969284/count-value-frequencies-in-an-array-with-jquery?answertab=votes#tab-top
    */
    
    var typesOfUsers = {};
    
    $.each(usuarios, function(index, value) {
        if (!typesOfUsers[value.constructor.name]) {
            typesOfUsers[value.constructor.name] = 0;
        }

        typesOfUsers[value.constructor.name] += 1;
    });
    
    typesOfUsers = sortObject(typesOfUsers);
    
    for(property in typesOfUsers) {
        
        /*
            jQuery mixed selectors
            http://stackoverflow.com/questions/1944302/jquery-select-an-elements-class-and-id-at-the-same-time?answertab=votes#comment29729787_1944316
            
            How to escape double quotes
            http://stackoverflow.com/questions/3752769/how-to-escape-double-quotes-in-title-attribute?answertab=votes#tab-top
        */
        
        $("#usuarios .container-fluid").append('<br><a href="javascript:mostrarRegistrosUsuarios(&quot;' + property + '&quot;)">' + property + ' <span class="badge">' + typesOfUsers[property] + '</span></a>');
    }
    
    $("#usuarios .container-fluid").append('<div id="dataUsuarios"></div>');
}

/*
    [01]
*/

function mostrarRegistrosUsuarios(tipoUsuario) {

    /*
        Remove selected elements within div
        http://stackoverflow.com/questions/30492918/how-to-remove-last-element-from-div?answertab=votes#tab-top
    */
    
    $("#dataUsuarios").children().remove();
    
    $("#dataUsuarios").append('<div class="panel panel-default">' + 
                              '<div class="panel-heading">' + tipoUsuario + '</div>' + 
                              '<div class="panel-body"></div></div>');
    
    $.each(usuarios, function(index, value) {
        if(value.constructor.name == tipoUsuario) {
            
            $("#dataUsuarios .panel-body").append('<a href="javascript:administrarRegistros(&quot;usuarios&quot;, ' + 
                                                  index + ', ' + '&quot;none&quot;, ' + 
                                                  '&quot;dataUsuarios&quot;' + ')">' + value.nombres + ' ' + value.apellidos + '</a><br>');
        }
    });
}