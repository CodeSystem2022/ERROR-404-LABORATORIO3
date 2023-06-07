//generar clases y a aprtir de estas clases generar objetos de estas clases
// a difgerencia de los objetos ,una clase es una plantilla asique en la clase vamos a definir los atributos y metodos que contengan estos objetos
//un objeto es una instancia de un objeto 
//un objeto puede tener valores en sus atributos 
//la clase no contiene valores , si los tiene se aplicara a todos sus objetos 
//la clase es una plantilla y a apartir de esto crearemos los objetos    
//clase tendra nombre,atributos y metodos y permite generar objetos con estos


class Persona {
    constructor(nombre,apellido){//metodo constructor 
        this._nombre=nombre ; //atributo this 
        this._apellido=apellido;
    }
    //metodo get para poder leer la info del atributo y el set para modificar el valor del atributo 
    //metodo get no se puede llamar igual  las  propiedades (atributos) de la clase cuando creamos get and set pro eso _
    get nombre (){
        return this._nombre//accedemos a la clase por metodo get desde nombre 
    }
    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido (){
        return this._apellido//accedemos a la clase por metodo get desde apellido 
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
}

class Empleado extends Persona{//clase hija que extiende de persona 
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);  //palabra reservada que se utiliza en la construccion de la clase hija 
        this._departamento=departamento;//atributo departamento ,ya que usare get y set no se podran llamar igual a los atributos de nuestra clase
    }
        get departamento(){
            return this._departamento;//accedemos a la clase por metodo get desde departamento 
        }
        set departamento(departamento){
            this._departamento=departamento;
        }

    
}


let persona1=new Persona('Pablo','Sanguinetti');//le pasamos los argumentos al objeto 
console.log(persona1.nombre);
persona1.nombre='Maria';
console.log(persona1.nombre);

console.log(persona1.apellido);
persona1.apellido='Flores';
console.log(persona1.apellido);

//console.log(persona1);
let persona2=new Persona('Ana ','Vaz');
console.log(persona2.nombre);
persona2.nombre='Soledad';
console.log(persona2.nombre);

console.log(persona2.apellido);
persona2.apellido='SOLITS ';
console.log(persona2.apellido);

//console.log(persona2);


let empleado1=new Empleado('Maria','Chuzena','Albaliñeria');

console.log(empleado1)