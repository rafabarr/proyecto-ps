/*
    [00] Interfaz para el administrador
    
    Opciones disponibles (marcadas con x):
    
        Create  Read    Update  Delete
    (a) x       x       x       x       usuarios
    (b)         x               x       alianzasMovimientosPartidos
    (c)         x                       registroVotos
*/

/*
    [01]
*/

function administradorUI() {
    
    $("#formLogin").remove();
    $("#workspace").append(htmlDashboard);
    
    var dashboardOpt = ["Usuarios", "Grupos", "Resultados"];
    
    $.each(dashboardOpt, function(index, value) {
        
        if(value == "Usuarios") {
            setDashboardPills(value.toLowerCase(), value, 1);
        } else {
            setDashboardPills(value.toLowerCase(), value, 0);
        }
    });
}

/*
    [02]
*/

function setDashboardPills(key, title, status) {
    
    if(status) {
        $("#dynamicPillsAdmin").append('<li class="active"><a data-toggle="pill" href="#' + key + '">' + title + '</a></li>');
        
        $("#pillsAdminContent").append('<div id="' + key + '" class="tab-pane fade in active"><ul id="dynamicPillsAdmin" class="nav nav-pills nav-justified"></ul></div>');
    } else {
        $("#dynamicPillsAdmin").append('<li><a data-toggle="pill" href="#' + key + '">' + title + '</a></li>');
        
        $("#pillsAdminContent").append('<div id="' + key + '" class="tab-pane fade"></div>');
    }
    
    if(key == "usuarios" || key == "grupos") {
        
        $("#" + key).append('<div class="container-fluid"></div>');
        
    } else {
        
        $("#" + key).append('<div id="chart-container" style="width: 100%; height: 450px; padding: 1%;"></div>');
        
    }
    
    setDashboardPillsContent(key);
}

/*
    [03]
*/

function setDashboardPillsContent(key) {
    
    switch(key) {
        case "usuarios":
            mostrarUsuarios();
            break;
        case "grupos":
            mostrarGrupos();
            break;
        case "resultados":
            procesarResultados();
            break;
        default:
            console.log("setDashboardPillsContent");
    }
}