from capa_datos_persona.Persona import Persona
from capa_datos_persona.conexion import Conexion
from logger_base import log


class PersonaDAO:
    """
    DAO significa: DATA ACCESS OBJECT
    CRUD significa:
        create -> Insertar
        Read -> Seleccionar
        Update -> Actualizar
        Dalete -> Eliminar
    """

    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona=%s'

    # Definicion de métodos de clase

    @classmethod
    def seleccionar(cls):
        # with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = []
                for registro in registros:
                    persona = Persona(registro[0], registro[1], registro[3])
                    # Cada registro es para: Id_persona, nombre, apellido, Email
                    personas.append(persona)
                return personas

    @classmethod
    def insertar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email)
                cursor.execute(cls._INSERTAR, valores)
                log.debug(f'Persona Insertada: {persona}')
                return cursor.rowcount

    @classmethod
    def actualizar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTUALIZAR, valores)
                log.debug(f'Persona Actualizada: {persona}')
                return cursor.rowcount

    @classmethod
    def eliminar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.id_persona,)
                cursor.execute(cls._ELIMINAR, valores)
                log.debug(f'Los objetos eliminados son: {persona}')
                return cursor.rowcount



if __name__ == '__main__':  # Este archivo se esta ejecutando como main
    """
    
    # Eliminar registro
    persona1 = Persona(id_persona=11)
    personaEliminada = PersonaDAO.eliminar(persona1)
    log.debug(f'Persona eliminada: {personaEliminada}')

    
    # Actualizar un registro
    persona1 = Persona(1, 'Juan Jose', 'Pena', 'JJpena@gmail.com')
    personasActualizadas = PersonaDAO.actualizar(persona1)
    log.debug(f'Personas Actualizadas: {personasActualizadas}')
    
    
    # Insertar personas
    persona1 = Persona(nombre='Pedro', apellido='Romero', email='Pedro@gmail.com')
    personasInsertadas = PersonaDAO.insertar(persona1)
    log.debug(f'Personas insertadas: {personasInsertadas}')
    """
    # Seleccionar objetos
    persona = PersonaDAO.seleccionar()
    for persona in persona:
        log.debug(persona)

