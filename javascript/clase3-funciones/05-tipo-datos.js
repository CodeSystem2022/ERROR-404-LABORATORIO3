function miFuncion(a, b) {
  return a + b
}

console.log(typeof miFuncion)
// OUTPUT: function

// Una función puede ser definida como un objeto
function miFuncion2(a, b) {
  console.log(arguments)
  console.log(`arguments.length: ${arguments.length}`)
}
miFuncion2(5, 7)
// OUTPUT:
// [Arguments] { '0': 5, '1': 7 }
// arguments.length: 2
// OJO es ESLinter avisa que es mejor usar REST PARAMATERS que el ARGUMENTS

// toString
const miFuncionTexto = miFuncion2.toString()
console.log(miFuncionTexto)
// OUTPUT
/*
function miFuncion2(a, b) {
  console.log(arguments)
  console.log(`arguments.length: ${arguments.length}`)
}
*/

const sumando = function (a = 4, b = 8) {
  console.log(arguments[0])
  console.log(arguments[1])
  return a + b + arguments[1]
}
console.log(sumando(1, 2))
// OUTPUT: 1 2 5
console.log(sumando(6))
// OUTPUT: 6 undefined NaN
