from ManejoArchivos import ManejoArchivos

# Manejo de contexto with abre y cierra el archivo de forma automatic
# with open('prueba.txt', 'r', encoding='utf8') as archivo:
    # print(archivo.read())

    # No hace falta el try ni finally
    # tiene diferentes métodos.
    # archivo.__enter__()


with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())
