/*
    [00]
*/

function mostrarGrupos() {
    
    var typesOfGroups = {}; // alianza, movimiento, partido
    
    $.each(alianzasMovimientosPartidos, function(index, value) {
        
        if (!typesOfGroups[value.tipo]) {
            typesOfGroups[value.tipo] = 0;
        }

        typesOfGroups[value.tipo] += 1;
    });
    
    typesOfGroups = sortObject(typesOfGroups);
    
    for(property in typesOfGroups) {
        $("#grupos .container-fluid").append('<br><a href="javascript:mostrarRegistrosGrupos(&quot;' + property + '&quot;)">' + (String(property)).capitalize() + ' <span class="badge">' + typesOfGroups[property] + '</span></a>');
    }
    
    $("#grupos .container-fluid").append('<div id="dataGrupos"></div>');
}

function mostrarRegistrosGrupos(tipoGrupo) {
    
    $("#dataGrupos").children().remove();
    
    $("#dataGrupos").append('<div class="panel panel-default">' + 
                            '<div class="panel-heading">' + String(tipoGrupo).capitalize() + '</div>' + 
                            '<div class="panel-body"></div></div>');
    
    $.each(alianzasMovimientosPartidos, function(indexA, value) {
        
        if(value.tipo == tipoGrupo) {
            
            var gruposListas = "";

            $.each(value.grupos, function(indexB, value) {
                gruposListas += alianzasMovimientosPartidos[indexA].grupos[indexB].nombre + " [" + 
                    alianzasMovimientosPartidos[indexA].grupos[indexB].numeroLista + "] - ";
            });
            
            gruposListas = gruposListas.substring(0, (gruposListas.length - 3));
            
            /*$("#dataGrupos .panel-body").append('<a href="javascript:administrarRegistros(&quot;alianzasMovimientosPartidos&quot;, ' + indexA + ', &quot;dataGrupos&quot;' + ')">' + gruposListas + '</a><br>');*/
            
            $("#dataGrupos .panel-body").append('<a href="javascript:mostrarDetallesGrupos(&quot;' + tipoGrupo + '&quot;, ' + 
                                                '&quot;' + indexA + '&quot;, ' + 
                                                '&quot;' + gruposListas + '&quot;)">' + gruposListas + '</a><br>');
        }
    });
}

function mostrarDetallesGrupos(tipoGrupo, index, gruposListas) {
    
    $("#dataGrupos").children().remove();
    
    $("#dataGrupos").append('<div class="panel panel-default">' + 
                            '<div class="panel-heading">' + String(tipoGrupo).capitalize() + ' ' + gruposListas + '</div>' + 
                            '<div class="panel-body"></div></div>');
    
    $.each(alianzasMovimientosPartidos[index], function(key, value) {
        $("#dataGrupos .panel-body").append('<a href="javascript:administrarRegistros(&quot;alianzasMovimientosPartidos&quot;, ' + 
                                            index + ', ' + 
                                            '&quot;' + key + '&quot;, ' + 
                                            '&quot;dataGrupos&quot;' + ')">' + String(key).capitalize() + '</a><br>');
    });
    
    $("#dataGrupos .panel-body a").last().remove();
}