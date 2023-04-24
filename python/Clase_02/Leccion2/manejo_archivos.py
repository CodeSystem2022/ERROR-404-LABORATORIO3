# Declaramos una variable para el manejo de archivo
# Ambito global
archivo = open('prueba.txt', 'w', encoding='utf8')  # la w es de write.

try:
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras.\n')
    archivo.write('Como por ejemplo: acción, ejecución, producción\n')
    archivo.write('Las letras son: \n r read,\n a append,\n w write,\n x crea un archivo.\n')
    archivo.write(' t esta es para texto o text,\n b archivos binarios,\n w+ r+ leer y escribir,\n')
    archivo.write('Agregamos otra linea \n')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally:
    archivo.close()  # Cierre de archivo

# archivo.write('Todo quedo perfecto') Este es un error porque el archivo esta cerrado en finally
