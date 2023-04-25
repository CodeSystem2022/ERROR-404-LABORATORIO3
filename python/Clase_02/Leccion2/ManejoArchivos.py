class ManejoArchivos:
    def __init__(self, nombre):
        self.nombre = nombre

    def __enter__(self):
        print('Optemos el recurso'.center(50, '-'))
        self.nombre = open(self.nombre, 'r', encoding='utf8')  # encapsulamiento del código dentro del método
        return self.nombre

    def __exit__(self, tipo_exception, valor_exception, traza_error):
        print('Cerramos el recurso'.center(50, '-'))
        if self.nombre:
            self.nombre.close()
