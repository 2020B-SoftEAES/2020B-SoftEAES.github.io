module.exports = {
  tableName: 'db_prueba_pregunta',
  attributes: {
    idPregunta:{
      model: 'Pregunta'
    },
    idPrueba: {
      model: 'Prueba'
    }
  }
};
