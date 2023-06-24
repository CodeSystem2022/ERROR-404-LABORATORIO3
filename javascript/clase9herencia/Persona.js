class Persona {
  static contadorPersonas = 0

  // constructor
  constructor(nombre, apellido, edad) {
    this._idPersona = ++Persona.contadorPersonas
    this._nombre = nombre
    this._apellido = apellido
    this._edad = edad
  }

  // getters
  get idPersona() {
    return this._idPersona
  }

  get nombre() {
    return this._nombre
  }

  set nombre(nombre) {
    return this._nombre
  }

  get apellido() {
    return this._apellido
  }

  // setters
  set apellido(apellido) {
    this._apellido = apellido
  }

  get edad() {
    return this._edad
  }

  set edad(edad) {
    this._edad = edad
  }

  // to string
  toString() {
    return `
    ${this._idPersona}
    ${this._nombre}
    ${this._apellido}
    ${this._edad}`
  }
}
