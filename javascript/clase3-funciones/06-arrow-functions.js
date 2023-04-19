/**  ARROW FUNTION **/
// Si tiene un solo parametro se omiten los ()
// Si el return es de un solo segmento, se pueden sacar las {} 
// y no utilizar return (RETURN IMLICITO). Si tengo mas de un segmento 
// en el cuerpo de la funcion si usamos las {} y la palabra reservada return

const sumarFuncionFlecha = (a,b) => a+b

const resultado = sumarFuncionFlecha(3,7) // asignamos el valor a una variable
console.log(`resultado: ${resultado}`)
// OUTPUT: resultado: 10