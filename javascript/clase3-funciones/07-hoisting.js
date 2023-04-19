/** HOISTING */
// cuando 1ro se INVOCA a una función y luego se DECLARA
let respuesta = sumarTodo(5, 4, 13, 10, 9)
console.log(respuesta)  // 41

// ReferenceError: sumarTodo is not defined
// Cuando no tenemos declarada la funcion -> HOISTING

function sumarTodo(){
  let suma = 0
  for(let i=0; i < arguments.length; i++) {
    suma += arguments[i]
  }
  return suma
}