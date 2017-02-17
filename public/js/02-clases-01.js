/*
    [00]    Clases: Usuario, Administrador, Encuestador, 
                    AlianzaMovimientoPartido, Grupo, 
                    Dignidad, Presidente, Vicepresidente, 
                    RepresentanteParlamentoAndino, AsambleistaGuayas, 
                    AsambleistaNacional, AsambleistaExterior, 
                    RegistroVoto
                    
            Total: Trece (13)
*/

/*
    [01]
    
    Los atributos de esta clase se extraen el objeto JSON (jsonObj) recibido en el constructor
*/

class Usuario {
    constructor(jsonObj) {
        this.usuario = jsonObj.usuario;
        this.clave = jsonObj.clave;
        this.cedula = jsonObj.cedula;
        this.fechaNacimiento = jsonObj.fechaNacimiento;
        this.nombres = jsonObj.nombres;
        this.apellidos = jsonObj.apellidos;
        this.foto = jsonObj.foto;
    }
}

/*
    [02]
*/

class Administrador extends Usuario {
    constructor(jsonObj) {
        super(jsonObj);
    }
}

/*
    [03]
*/

class Encuestador extends Usuario {
    constructor(jsonObj) {
        super(jsonObj);
    }
}