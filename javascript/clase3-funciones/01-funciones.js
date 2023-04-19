/*** FUNCIONES ***/

/** Definición de función **/
// a y b son los PARAMETROS de las funciones, al ser invocada la funcion estos parametros de llaman ARGUMENTOS. 
// La funcion puede o no tener parametros.
// La función puede o no tener return (puede no retornar)
function miFuncion(a, b) { // PARAMETROS
  console.log(`Sumamos: ${a+b}`)
}

/** Invocación de la función **/
/*
Por buena práctica:
1ro: variables
2do: funciones
3ro: invocación a funciones

Si por MALA PRACTICA la invocamos ANTES de declararla, tenemos HOISTING
*/
miFuncion(5,4) // 5 y 4 son los ARGUMENTOS