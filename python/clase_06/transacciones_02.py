import psycopg2 as bd # Esto es para poder conectarnos a Postgres

conexion = bd.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    conexion.autocommit = False  # Esto directamente no deberia estar
    cursor = conexion.cursor()

    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Jorge', 'Prol', 'Jprol@mail.com')
    cursor.execute(sentencia, valores)

    sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    valores = ('Juan Carlos', 'Perez', 'JCPerez@mail.com', 1)
    cursor.execute(sentencia, valores)

    conexion.commit()  # Hacemos el commit manualmente
    print('Terminó la transacción')
except Exception as e:
    conexion.rollback()
    print(f'Ocurrió un error, se hizo un rollback : {e}')
finally:
    conexion.close()