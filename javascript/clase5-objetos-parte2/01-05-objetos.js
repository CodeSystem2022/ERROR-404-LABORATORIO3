/************** OBJETOS PARTE 2 **********************/

// Se crea un objeto en memoria, con una referencia(valor hexadecimal)
const person = {
  firstName: 'Carlos',
  lastName: 'Gil',
  email: 'cgil@gmail.com',
  age: 30,
  language: 'ES',
  completeName: function () {
    // metodo
    return `${this.firstName} ${this.lastName}`
  },
  get nombreEdad() {
    // getter method
    // ESLint dice que es mejor usar TEMPLATE LITERALS a concatenacion por eso lo cambio
    return `${this.firstName}, edad= ${this.age}`
  },
  get lang() {
    // getter method
    return `${this.language.toUpperCase()}`
  },
  set lang(lang) {
    // setter method
    this.language = lang.toUpperCase()
  }
}

console.log('* * * * Comenzamos a utilizar el método get * * * *')
console.log(person.nombreEdad) // OUTPUT: Carlos, edad= 30
console.log(person.lang) // OUTPUT: ES
console.log(
  '* * * * Comenzamos a utilizar el método get y set para idioma * * * *'
)
person.lang = 'en' // por el toUpperCase es 'ES'
console.log(person.lang) // EN

/****** FUNCION CONSTRUCTORA ******/
// Es un azucar sintactico esto de las clases en JavaScript, ya que está basado en PROTOTIPOS
// Los parámetros son los atributos del objeto
// Se pueden setear valores por default, x ej.:
// function Person2(firstName = 'Luis', lastName, email) {...}
function Person2(firstName, lastName, email) {
  this.firstName = firstName
  this.lastName = lastName
  this.email = email
  this.fullName = function () {
    // funcion en el constructor
    return `${firstName} ${this.lastName}`
  }
}

// Creo un objeto utilizando el método constructor
const father = new Person2('Leo', 'Lopez', 'lopezl@gmail.com')
father.firstName = 'Leonardo' // le vuelvo a asignar otro valor en su atributo
console.log('* * * * FUNCIÓN CONSTRUCTORA * * * *')
console.log(father)
// OUTPUT
/*
Person2 {
  firstName: 'Leonardo',
  lastName: 'Lopez',
  email: 'lopezl@gmail.com'
}
*/
console.log(father.fullName())
// Creo otro objeto utilizando el método constructor
const mother = new Person2('Laura', 'Contrera', 'contreral@gmail.com')
console.log(mother)

// CASO OBJETO
const myObject = new Object() // Esta es una opción formal
const myObject2 = {} // Esta opción es breve y recomendada

// CASO STRING
const myObject3 = 'Hola' // Esta es la sintaxis simplificada y recomendada
console.log(typeof myObject3) // string

// CASO NUMBER
const myNumber = new Number(1) // no recomendable
const myNumber2 = 2 // recomendada
console.log(typeof myNumber2) // number, OJO number es de TIPO PRIMITIVO NO ES OBJETO

// CASO BOOLEAN
const myBoolean = new Boolean(false) // formal
const myBoolean2 = false // recomendado
console.log(typeof myBoolean2) // boolean, OJO bolean es de TIPO PRIMITIVO NO ES OBJETO

// CASO ARRAY
const myArray = new Array() // formal
const myArray2 = [] // recomendada

// CASO FUNCION
//const myFunction = new Function(){} // notacion simplificada y recomendada

/***** PROTOTYPE ******/
father.telephone = '541122334455'
console.log(father)
/*
Person2 {
  firstName: 'Leonardo',
  lastName: 'Lopez',
  email: 'lopezl@gmail.com',
  fullName: [Function (anonymous)],
  telephone: '541122334455'
}
*/
// la propiedad(atributo) 'telephone' solo existe para el objeto father, no para el objeto mother

// si queremos crear una propiedad que afecte a todos los objetos creados con Person2 usamos prototype
Person2.prototype.telephone = '5491122223333'
console.log(father)
console.log(mother)

/****** CALL ******/
const persona4 = {
  nombre: 'Juan',
  apellido: 'Perez',
  //nombreCompleto: function(titulo, telefono) {
  nombreCompleto: function() {  
    // return `${titulo}: ${this.nombre} ${this.apellido}, ${telefono} `
    return `${this.nombre} ${this.apellido}`
  }
}

const persona5 = {
  nombre: 'Carlos',
  apellido: 'Lara'
}

console.log(persona4.nombreCompleto('Lic.', '5491144556677')) // OUTPUT: Lic.: Juan Perez, 5491144556677 
console.log(persona4.nombreCompleto.call(persona5, 'Ing.', '5491111111111'))

/***** APPLY ****/
// Permite mandar a llamar un metodo en un objeto que no tiene definido el metodo
console.log(persona4.nombreCompleto.apply(persona5))