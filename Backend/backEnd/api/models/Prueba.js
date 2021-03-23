module.exports = {
  tableName: 'db_prueba',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      autoIncrement: true,
      columnType: 'int',
    },
    codigo: {
      type: 'String',
      unique: true,
      required: true,
      maxLength: 10,
    },
    tipo: {
      type: 'String',
      maxLength: 50,
      required: true
    },
    nombre: {
      type: 'String',
      maxLength: 50,
      required: true
    },
    cupos: {
      type: 'number',
      columnType: 'int',
      defaultsTo: 50
    },
    estado: {
      type: 'number',
      columnType: 'int',
      defaultsTo: 1
    },
    duracion: {
      type: 'number',
      columnType: 'int',
      defaultsTo: 60
    },
    pruebaPregunta:{
      collection: 'PruebaPregunta',
      via: 'idPrueba'
    },
    pruebaUsuario:{
      collection: 'PruebaUsuario',
      via: 'idPrueba'
    }
  }
};
