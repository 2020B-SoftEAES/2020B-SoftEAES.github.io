module.exports = {
  create: async (req, res) => {
    const parametros = req.allParams();
    const preguntas =parametros.preguntas ? parametros.preguntas : [];
    delete parametros.preguntas;
    const prueba = await Prueba.create(parametros).fetch();
    const idPrueba = prueba.id? prueba.id : null;
    for (const pregunta of preguntas){
      try{
        const savePregunta = await Pregunta.create(pregunta).fetch();
        const idPregunta = savePregunta.id? savePregunta.id : null;
        const objeto = {idPregunta, idPrueba};
        const savePruebaPregunta = await PruebaPregunta.create(objeto).fetch();
      }catch (e){}
    }
    if (prueba) {
      return res.ok(prueba);
    } else {
      return res.badRequest({mensaje: 'No se pudo crear la prueba!!!'});
    }
  },
  findOneById: async (req, res) => {
    const parametros = req.allParams();
    const pruebaDto = await Prueba.find({id: parametros.id}).populate('pruebaPregunta');
    if (pruebaDto && pruebaDto.length > 0) {
      const preguntas = [];
      for (const pruebaPregunta of pruebaDto[0].pruebaPregunta){
        const pregunta = await Pregunta.find({id:pruebaPregunta.idPregunta});
        preguntas.push(pregunta[0]);
      }
      pruebaDto[0].preguntas = preguntas;
      return res.ok(pruebaDto[0]);
    } else {
      return res.badRequest({mensaje: 'Prueba no registrada!!!'});
    }
  }
};

