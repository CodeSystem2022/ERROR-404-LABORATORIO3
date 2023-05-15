import psycopg2

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia ='DELETE FROM persona WHERE id_persona IN %s)'
            entrada = input("Digite los números de registros a eliminar(separados por coma): ")
            valores = (tuple(entrada.split(',')), )  # tupla de tuplas
            cursor.execute(sentencia, valores)
            # conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            registros_eliminados = cursor.rowcount
            print(f'Los registro eliminados son: {registros_eliminados}')
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.clos