const x = 10 // variable de tipo primitivo
console.log(x.length) // OUTPUT: undefined

/*** OBJETOS ***/
// Se crea un objeto en memoria, con una referencia(valor hexadecimal)
const person = {
  firstName: 'Carlos',
  lastName: 'Gil',
  email: 'cgil@gmail.com',
  age: 30,
  completeName: function () {
    // metodo
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(`person.firstName: ${person.firstName}`) // OUTPUT: Carlos
console.log(`person.lastName: ${person.lastName}`) // OUTPUT: Gil
console.log(`person.email: ${person.email}`) // OUTPUT: Cgil@gmail.com
console.log(`person.age: ${person.age}`) // OUTPUT: 30
console.log(person)
// OUTPUT:
/*
{
  firstName: 'Carlos',
  lastName: 'Gil',
  email: 'cgil@gmail.com',
  age: 30,
  completeName: [Function: completeName]
}
*/
console.log(person.completeName()) // OUTPUT: Carlos Gil

// Creando el objeto con new Object (DEPRECADO)
const person2 = new Object()
person2.firstName = 'Juan'
person2.address = 'Salada 14'
person2.telephone = '549261822821'
console.log(`person2.telephone: ${person2.telephone}`) // OUTPUT: 549261822821
// recordar que JavaScript es case sensitive

/*** Acceder a la propiedad de un objeto ***/
// Accediendo como si fuera un array, es el menos usado
console.log(person['lastName']) // OUTPUT: Gil
// con for in
for (property in person) {
  console.log(property)
  console.log(person[property])
}
// Se ven todas las KEY del objeto en el primer console
// Se ven todoas los VALUES del objeto en el segundo console
// OUTPUT:
/*
firstName
Carlos
lastName
Gil
email
cgil@gmail.com
age
30
completeName
[Function: completeName]
*/

/*** Agregar y eliminar propiedades de los Objetos ***/
// Para MODIFICAR
// Accedemos a la key mediante DOT NOTATION
// Para no crear una nueva propiedad, usamos dot notation, luego del . el VSC muestra las opciones
person.lastName = 'Lopez' // cambiamos el valor del apellido
console.log(`Modificando el lastName de person: ${person.lastName}`) // OUTPUT: Lopez

// Para AGREGAR
person.secondName = 'Lucas'
console.log('Agregamos el atributo secondName a person')
console.log(person)

// Para ELIMINAR
delete person.secondName
// OJO con ESLint nos advierte:
// 'Avoid the delete operator wich can impact perfonrmance'
console.log('Eliminamos el atributo recién agregado')
console.log(person)

/**** Distintas formas de imprimir un Objeto con: Object.values() y JSON.stringify() ****/

console.log('* * * Distintas formas de imprimir un Objeto * * *')
// La más sencilla: concatenar cada valor de la propiedad
console.log(
  `Concatenando cada valor de la propiedad: ${person.firstName} ${person.lastName}`
) // OUTPUT: Carlos Gil

// Por medio del ciclo for in
for (nombrePropiedad in person) {
  console.log(person[nombrePropiedad])
}
// OUTPUT:
/*
Carlos
Lopez
cgil@gmail.com
30
[Function: completeName]
*/

// Con Object.values()
const personArray = Object.values(person)
console.log(`Con Object.values() para ver los valores: ${personArray}`)
// OUTPUT:
/*
Carlos,Lopez,cgil@gmail.com,30,function() { // metodo 
    return `${this.firstName} ${this.lastName}`
  }
*/

// Con JSON.stringify()
console.log(`Con JSON.stringify(): ${JSON.stringify(person)}`)
// PUTPUT: {"firstName":"Carlos","lastName":"Lopez","email":"cgil@gmail.com","age":30}
