class Producto {
  static contadorProducto = 0

  constructor(nombre, precio) {
    this._nombre = nombre
    this._precio = precio
    this._idProducto = ++Producto.contadorProducto
  }

  get idProducto() {
    return this._idProducto
  }

  get nombre() {
    return this._nombre
  }

  get precio() {
    return this._precio
  }

  set nombre(nombre) {
    this._nombre = nombre
  }

  set precio(precio) {
    this._precio = precio
  }

  toString() {
    return `id producto: ${this._idProducto}, nombre: ${this._nombre}, precio: $ ${this._precio}`
  }
}

class Orden {
  static contadorOrdenes = 0
  // tambien se puede poner mas corto: const MAX_PRODUCTOS = 5
  static getMAX_PRODUCTOS() { 
    return 5
  }

  constructor () {
    this._idOrden = ++Orden.contadorOrdenes
    this._productos = []
    this._contadorProductosAgregados = 0
  }

  get idOrden() {
    return this._idOrden
  }

  agregarProducto(producto) {
    if(this._producto.length < Orden.getMAX_PRODUCTOS) {
      this._productos.push(producto)
      // ejemplo con DOT NOTATION:
      // this._productos[this._contadorProductosAgregados++] = productos
    } else {
      console.error('No se pueden agregar màs productos')
    }
  }

  calcularTotal() {
    let totalVenta = 0
    for(let producto of this._productos) {
      totalVenta += producto.precio
    }
    return totalVenta
  }

  mostrarOrden() {
    let productoOrden = ''
    for(let producto of this._productos) {
      productoOrden += '\n'+ producto.toString() + ' '
    }
    console.info(`Orden: ${this._idOrden}, total: ${this.calcularTotal()}, productos: ${productoOrden}`)
  }
}

// Instanciamos dos objeto de la clase Producto
let producto1 = new producto('Pantalón', 200)
let producto2 = new Producto('Camisa', 150)
let producto3 = new Producto('Cinturón', 50)
// console.log(`producto1: ${producto1.toString()}, producto2: ${producto2.toString()}`)
let orden1 = new Orden() // Creamos una orden
let orden2 = new Orden(); // creamos una segunda orden
orden1.agregarProducto(producto1) // agregamos un producto a la orden
orden1.agregarProducto(producto2) // agregamos otro producto a la orden
orden1.agregarProducto(producto3) // agregamos otro producto a la orden
orden1.mostrarOrden() // mostramos al orden con los productos

// Vamos a tratar agregar 6 productos a la orden2
orden2.agregarProducto(producto1)
orden2.agregarProducto(producto1)
orden2.agregarProducto(producto2)
orden2.agregarProducto(producto2)
orden2.agregarProducto(producto3)
orden2.agregarProducto(producto3)
orden2.mostrarOrden()