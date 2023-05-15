import psycopg2

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia ='UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona= %s)'
            valores = ('Juan Carlos', 'Roldan', 'jcroldan@gmai.com', 1)
            cursor.execute(sentencia, valores)
            # conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            registros_actualizados = cursor.rowcount
            print(f'Los registro actualizados son: {registros_actualizados}')
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()