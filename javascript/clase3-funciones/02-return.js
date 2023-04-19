/*** FUNCIONES CON RETORNO ***/
function miFuncion(a, b) {
  return a + b
}

function miFuncionCero(a, b) {
  return 0
}
miFuncion(5, 4) // 5 y 4 son los ARGUMENTOS

const resultado = miFuncion(6, 7) // tiene el valor de 13
console.log(`resultado: ${resultado}`)

const resultadoCero = miFuncionCero(6, 7) // tiene el valor de 0
console.log(`miFuncionCero: ${resultadoCero}`)
