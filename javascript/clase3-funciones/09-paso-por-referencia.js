/** PASO POR REFERENCIA **/
// la constante persona guarda la referencia a un objeto
const persona = {
  nombre: "Juan",
  apellido: "Lopez"
}
console.log(persona)
// OUTPUT: { nombre: 'Juan', apellido: 'Lopez' }

function cambiarObjeto(p1) {
  p1.nombre = 'Ignacio'
  p1.apellido = 'Perez'
}

cambiarObjeto(persona)
console.log("persona luego de cambiarObjeto: ")
console.group(persona)
// OUTPUT:
// persona luego de cambiarObjeto: 
// { nombre: 'Ignacio', apellido: 'Perez' }