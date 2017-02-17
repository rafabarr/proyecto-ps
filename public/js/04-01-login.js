/*
    [00] Toma de datos ingresados en el formulario de inicio de sesión
*/

function login() {
    var user, pass;
    
    $.each($("input"), function(index, value) {
        switch(value.name) {
            case "formInputUser":
                //console.log(value.value);
                user = value.value;
                break;
            case "formInputPassword":
                //console.log(value.value);
                pass = value.value;
                break;
            case "formInputSubmit":
                //console.log(value.value);
                break;
            default:
                console.log("login");
        }
    });
    
    /*
        Selector jQuery para obtener un formulario por su atributo [name]
        
        http://stackoverflow.com/questions/13748669/jquery-selector-to-get-form-by-name?answertab=active#tab-top
    */
    
    $('form[name="frmLogin"]')[0].reset();
    
    validateLogin(user, pass);
}

/*
    [01-01] Validación de datos de inicio de sesión
*/

function validateLogin(user, pass) {
    
    $.each(usuarios, function(index, value) {
        
        /*
            Las siguientes dos (2) funciones realizan –en conjunto– un proceso similar a la sentencia Switch que se encuentra a continuación.
            
            for (property in value) {console.log(property);}
            
            $.each(value, function(index, value) {
                $.each(value, function(index, value) {
                    console.log(value);
                });
            });
        */
        
        /*
            Obtener el nombre de clase de una instancia de objeto [obj.constructor.name]
            http://scribu.net/blog/object-introspection.html
        */
        
        switch(value.constructor.name) {
            case "Administrador":
                if(checkUserPass(value, user, pass)) {administradorUI()};
                break;
            case "Encuestador":
                if(checkUserPass(value, user, pass)) {encuestadorUI()};
                break;
            default:
                console.log("validateLogin");
        }
    });
}

/*
    [01-02] Función auxiliar para la validación de datos
*/

function checkUserPass(obj, user, pass) {
    if(obj.usuario == user && obj.clave == pass) {
        $("#formLogin").remove();
        return true;
    }
}