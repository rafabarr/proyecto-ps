/*
    [04-01]
*/

class AlianzaMovimientoPartido {
    constructor(jsonObj) {
        
        this.tipo = jsonObj.tipo; // alianza | movimiento | partido
        
        /*
            Establecer el parámetro de un objeto utilizando una función
            
            http://stackoverflow.com/questions/24353095/creating-a-array-of-objects-using-a-constructor?answertab=active#tab-top
            
            http://stackoverflow.com/questions/2294190/calling-a-method-in-a-javascript-constructor-and-accessing-its-variables?answertab=active#tab-top
            
            Se intentó utilizar lo siguiente pero... ¡NO ES EFICIENTE!
            
                this.setGrupos = function() {};
                this.grupos = this.setGrupos();
            
            Resulta más eficiente implementar lo siguiente:
            
                AlianzaMovimientoPartido.prototype.setGrupos = function(jsonObj) {};
            
            https://geekytheory.com/prototipado-y-herencia-en-javascript/
            
            http://stackoverflow.com/questions/29852263/javascript-is-prototype-synonymous-with-static#answer-29852523
            
        */
        
        this.grupos = this.auxSetter("grupos", jsonObj.grupos);
        
        this.presidente = new Presidente(jsonObj.presidente);
        this.vicepresidente = new Vicepresidente(jsonObj.vicepresidente);
        
        this.representantesParlamentoAndino = this.auxSetter("repParAnd", jsonObj.representantesParlamentoAndino);
        
        this.asambleistasGuayas = this.auxSetter("asGuayas", jsonObj.asambleistasGuayas);
        
        this.asambleistasNacionales = this.auxSetter("asNacionales", jsonObj.asambleistasNacionales);
        
        this.asambleistasExterior = this.auxSetter("asExterior", jsonObj.asambleistasExterior);
    }
}

/*
    [04-02]
*/
AlianzaMovimientoPartido.prototype.auxSetter = function(option, jsonObj) {
    var temp = [];
    
    switch(option) {
        case "grupos":
            $.each(jsonObj, function(index, value) {
                temp.push(new Grupo(value));
            });
            break;

        case "repParAnd":
            $.each(jsonObj, function(index, value) {
                temp.push(new RepresentanteParlamentoAndino(value));
            });
            break;
            
        case "asGuayas":
            $.each(jsonObj, function(index, value) {
                temp.push(new AsambleistaGuayas(value));
            });
            break;
            
        case "asNacionales":
            $.each(jsonObj, function(index, value) {
                temp.push(new AsambleistaNacional(value));
            });
            break;
            
        case "asExterior":
            $.each(jsonObj, function(index, value) {
                temp.push(new AsambleistaExterior(value));
            });
            break;
            
        default:
            console.log("auxSetter");
    }
    
    return temp;
};

/*
    [05]
*/

class Grupo {
    constructor(jsonObj) {
        this.nombre = jsonObj.nombre;
        this.numeroLista = jsonObj.numeroLista;
        this.logo = jsonObj.logo;
    }
}

/*
    [06-01]
*/

class Dignidad {
    constructor(jsonObj) {
        this.cedula = jsonObj.cedula;
        this.nombre = jsonObj.nombre;
        this.foto = this.auxImgPathSetter(jsonObj.nombre, jsonObj.foto);
    }
}

/*
    [06-02]
    
    ¡ATENCIÓN! ¿Esta función debería ser estática [static]?
*/

Dignidad.prototype.auxImgPathSetter = function(nombre, foto) {
    if(foto == "pathImgFile") {
        
        var imagesFolderPath = "images/candidatos/";
        const IMAGE_EXTENSION = ".jpg";

        switch(this.constructor.name) {
            case "Presidente":
                imagesFolderPath += "presidente/";
                break;
            case "Vicepresidente":
                imagesFolderPath += "vicepresidente/";
                break;
            case "RepresentanteParlamentoAndino":
                imagesFolderPath += "repParAnd/";
                break;
            case "AsambleistaGuayas":
                imagesFolderPath += "asGuayas/";
                break;
            case "AsambleistaNacional":
                imagesFolderPath += "asNacional/";
                break;
            case "AsambleistaExterior":
                imagesFolderPath += "asExterior/";
                break;
            default:
                console.log("auxImgPathSetter");
        }

        /*
            Comprobar si una imagen puede ser cargada correctamente
            
            http://stackoverflow.com/questions/29991834/check-if-image-exists-before-loading?answertab=active#tab-top
            
            http://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-in-javascript?answertab=active#tab-top
            
            Reemplazar –recursivamente– espacios en un [string]
            http://stackoverflow.com/questions/10705916/replacing-spaces-in-a-string-with-hyphens
        */
        
        return imagesFolderPath + nombre.replace(/\s/g,"-") + IMAGE_EXTENSION;
    }
};

/*
    [07]
*/

class Presidente extends Dignidad {
    constructor(jsonObj) {
        super(jsonObj);
    }
}

/*
    [08]
*/

class Vicepresidente extends Dignidad {
    constructor(jsonObj) {
        super(jsonObj);
    }
}

/*
    [09]
*/

class RepresentanteParlamentoAndino extends Dignidad {
    constructor(jsonObj) {
        super(jsonObj);
    }
}

/*
    [10]
*/

class AsambleistaGuayas extends Dignidad {
    constructor(jsonObj) {
        super(jsonObj);
    }
}

/*
    [11]
*/

class AsambleistaNacional extends Dignidad {
    constructor(jsonObj) {
        super(jsonObj);
    }
}

/*
    [12]
*/

class AsambleistaExterior extends Dignidad {
    constructor(jsonObj) {
        super(jsonObj);
    }
}

/*
    [13]
*/

class RegistroVoto {
    constructor(jsonObj) {
        this.cedulaVotante = jsonObj.cedulaVotante;
        this.binomio = jsonObj.binomio;

        /*this.presidente =jsonObj.presidente;
        this.vicepresidente =jsonObj.vicepresidente;*/

        /*this.representantesParlamentoAndino =jsonObj.representantesParlamentoAndino;
        this.asambleistasGuayas =jsonObj.asambleistasGuayas;
        this.asambleistasNacionales =jsonObj.asambleistasNacionales;
        this.asambleistasExterior =jsonObj.asambleistasExterior;*/
    }
}