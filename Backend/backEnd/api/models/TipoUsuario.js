module.exports = {
  tableName: 'db_tipo_usuario',
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
    usuario:{
      collection: 'Usuario',
      via: 'idTipoUsuario'
    }
  }
};
