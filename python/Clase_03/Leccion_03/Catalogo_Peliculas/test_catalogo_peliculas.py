from dominio.Pelicula import Pelicula
from servicio.catalogo_peliculas import Catalogopeliculas as cp
opcion = None
while opcion != 4:
    try:
        print('opciones: ')
        print('1. Agregar Pelicula')
        print('2. Listar Peliculas')
        print('3. Eliminar catalogo de Peliculas')
        print('4. Salir')
        opcion = int(input('Digite una opcion de menu(1-4): '))
        if opcion == 1:
            nombre_pelicula = input('Digite el nombre de la pelicula: ')
            pelicula = Pelicula(nombre_pelicula)2
            cp.agregar_peliculas(pelicula)
        elif opcion == 2:
            cp.listar_peliculas()
        elif opcion == 3:
            cp.eliminar_peliculas()
    except Exception as e:
        print(f'ocurrió un error de tipo: {e}')
        opcion = None
    else:
        print('Salimos del Programa')