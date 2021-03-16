module.exports = {
  tableName: 'db_prueba_usuario',
  attributes: {
    id: {
      type: 'number',
      required: true,
      unique: true,
      autoIncrement: true,
      columnType: 'int',
    },
    numeroIntentos: {
      type: 'number',
      columnType: 'int',
      columnName: 'numero_intentos',
      required: true,
    },
    puntajeObtenido: {
      type: 'number',
      columnType: 'int',
      columnName: 'puntaje_obtenido',
      required: true,
    },
    respuestas: {
      type: 'String',
      required: true,
      maxLength: 512,
    },
    idPrueba:{
      model: 'Prueba'
    },
    idUsuario: {
      model: 'Usuario'
    }
  }
};
