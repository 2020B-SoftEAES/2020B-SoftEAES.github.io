/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_persona',
  attributes: {
    nombre: {
      type: 'string',
      required: true,
    },
    apellido: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      isEmail: true
    }
  },

};

