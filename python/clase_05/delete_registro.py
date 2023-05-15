import psycopg2

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia ='DELETE FROM persona WHERE id_persona = %s)'
            entrada = input("Digite el número de registro a eliminar: ")
            entrada = input("Digite el número de registro a eliminar: ")
            valores = (entrada, )
            cursor.execute(sentencia, valores)
            # conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            registros_eliminados = cursor.rowcount
            print(f'Los registro eliminados son: {registros_eliminados}')
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.clos