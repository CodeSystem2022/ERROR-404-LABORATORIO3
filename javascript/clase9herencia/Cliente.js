class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fecharegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fecharegistro = fecharegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fecharegistro(){
        this._fecharegistro;
    }
    set fecharegistro(fecharegistro){
        this._fecharegistro;
    }

    toString(){
        return `
        ${super.toString()}
        ${this._idCliente}
        ${this._fecharegistro}`;
    }
    
}