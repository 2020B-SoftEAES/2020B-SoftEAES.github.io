module.exports = {
  login: async (req, res) => {
    const parametros = req.allParams();
    var usuarioLogeado = await Usuario.find({
      nombre: parametros.nombre,
      password: parametros.password,
    });
    if(usuarioLogeado){
      return res.ok(usuarioLogeado);
    }else{
      return res.badRequest({mensaje:'Credenciales Incorrectas!!!'});
    }
  }
};

