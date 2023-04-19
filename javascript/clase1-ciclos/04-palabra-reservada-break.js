/*** BREAK ***/
for (let contando = 0; contando <= 10; contando++) {
  if(contando % 2 === 0 ) {
    console.log("Número par: ", contando)
    break; // muestra solo el primer numero par y sale
  }
}
console.log("*** Termina el ciclo al encontrar el primer número par ***")