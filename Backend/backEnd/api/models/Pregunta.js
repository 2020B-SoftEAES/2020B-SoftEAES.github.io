module.exports = {
  tableName: 'db_pregunta',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      autoIncrement: true,
      columnType: 'int',
    },
    createdAt: {
      type: 'number',
      autoCreatedAt: true
    },
    updatedAt: {
      type: 'number',
      autoUpdatedAt: true
    },
    codigo: {
      type: 'String',
      required: true,
      maxLength: 10,
    },
    descripcion: {
      type: 'String',
      required: true,
      maxLength: 1024,
    },
    opcion1: {
      type: 'String',
      required: true,
      maxLength: 1024,
    },
    opcion2: {
      type: 'String',
      required: true,
      maxLength: 1024,
    },
    opcion3: {
      type: 'String',
      maxLength: 1024,
    },
    opcion4: {
      type: 'String',
      maxLength: 1024,
    },
    respuestaCorrecta: {
      type: 'number',
      columnType: 'int',
      columnName: 'respuesta_correcta',
      required: true,
    },
    puntaje: {
      type: 'number',
      columnType: 'int',
      required: true,
    },
    pruebaPregunta:{
      collection: 'PruebaPregunta',
      via: 'idPregunta'
    },
    idAsignatura: {
      model: 'Asignatura'
    }
  }
};
