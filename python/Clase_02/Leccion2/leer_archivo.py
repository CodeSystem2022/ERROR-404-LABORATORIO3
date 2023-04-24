# lecctura de archivos
archivo = open('C:\\Users\\ahuma\\OneDrive\\Documentos\\GitHub\\Tecnicatura2023\\python\\Archivos\\Leccion2\\prueba.txt', 'r', encoding='utf8')  # r = leer
# archivo1 = open('prueba.txt', 'a', encoding='utf8')  # a = anécsar información
# archivo2 = open('prueba1.txt', 'x', encoding='utf8')  # x = crea un archivo

# print(archivo.read())
# print(archivo.read(16))
# print(archivo.read(10))  # continua con la linea anterior
# print(archivo.readline())  # muestra linea completa

# vamos a iterar el archivo, cada una de las líneas
# for linea in archivo:
    # print(linea)  # Iteramos todos los elementos del archivo
# print(archivo.readlines()[3])  # Muestra una lista y accedemos al valor de esa lista


# Agregamos información directa al archivo, copiamos a otro
archivo2 = open('copia.txt', 'w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close()
archivo2.close()

print('Se copio  el archivo en otro archivo tuvimos que cambiar a write porque cada vez que ejecutamos')
print('volvía a copearse y se repetía la información')




