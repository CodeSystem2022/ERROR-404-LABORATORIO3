/** PASO POR VALOR **/
// Tipos primitivos
const num = 10

function cambiarValor(a) {
  a = 20
}

cambiarValor(num)
console.log(`num: ${num}`) 
// OUTPUT: num: 10
// No modifico el valor de num