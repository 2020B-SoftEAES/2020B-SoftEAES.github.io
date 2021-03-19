module.exports = {
  tableName: 'db_usuario',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      autoIncrement: true,
      columnType: 'int',
      /*columnName: 'gramos_ingerir',
      columnType: 'int',
      defaultsTo: 0*/
    },
    nombre: {
      type: 'String',
      required: true,
      maxLength: 50,
    },
    apellido: {
      type: 'String',
      maxLength: 50,
      required: true
    },
    cedula: {
      type: 'String',
      maxLength: 10,
      required: true
    },
    contrasenia: {
      type: 'String',
      maxLength: 512,
      required: true,
      encrypt: true,
    },
    genero: {
      type: 'String',
      maxLength: 1,
      required: true
    },
    fechaNacimiento: {
      type: 'ref',
      columnType: 'date',
      columnName: 'fecha_nacimiento',
      required: true
    },
    celular: {
      type: 'String',
      maxLength: 10,
      required: true
    },
    email: {
      type: 'String',
      columnName: 'correo_electronico',
      maxLength: 256,
      unique: true,
      required: true,
      isEmail: true
    },
    idTipoUsuario: {
      model: 'TipoUsuario'
    },
    pruebaUsuario: {
      collection: 'PruebaUsuario',
      via: 'idUsuario'
    }
  }
};
