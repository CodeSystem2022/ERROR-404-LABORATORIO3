//let persona3 = new Persona('Carla', 'Ponce');  //no se puede hacer hoisting con las clases. Debo definir la clase antes de instanciar un objeto
/*Hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven al principio
 del ámbito actual antes de que se ejecute el código. Esto significa que, aunque una variable o función se declare más 
 tarde en el código, se puede utilizar antes de su declaración debido a que ha sido "levantada" al principio del ámbito. 
Sin embargo, es importante tener en cuenta que solo la declaración se mueve, no la asignación o inicialización de la variable. */

class Persona{  //clase padre
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }    

    get nombre(){
        return this._nombre;        
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    //Método que muestra el nombre completo. Este metodo también será heredado
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    //Sobreescribiendo el método de la clase padre(Object)
    toString(){ //Regresa un String
        //Se aplica el polimorfismo que significa = multiples formas en tiempo de ejecución
        //El método que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //sobreescritura, modificar el comportamiento(método) de la clase padre
    nombreCompleto(){
        return  super.nombreCompleto() + ', ' + this._departamento;
    }    
}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
persona1.apellido = 'Sanchez';
console.log(persona1.apellido);

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);
persona2.apellido = 'Rosales';
console.log(persona2.apellido);

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);

//Uso desde Empleado del método nombreCompleto heredado de Persona
console.log(empleado1.nombreCompleto());

//Object.prototype.toString Esta es la manera de acceder a atributos y métodos de manera dinámica

/*Polimorfismo, desde un objeto vamos a poder llamar un método definido en la clase padre o en la clase hija. 
Esto va a depender del tipo de objeto con el que estemos trabajando
Si estamos trabajando con una clase hija, el método que se ejecutará será el método de la clase hija.*/
console.log(empleado1.toString());
console.log(persona1.toString());