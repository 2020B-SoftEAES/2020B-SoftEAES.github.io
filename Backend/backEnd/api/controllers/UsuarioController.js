module.exports = {
  login: async (req, res) => {
    const parametros = req.allParams();
    const usuarioLogeado = await Usuario.find({
      email: parametros.email,
    }).populate('idTipoUsuario').decrypt();
    if (usuarioLogeado && usuarioLogeado.length > 0 && usuarioLogeado[0].contrasenia === parametros.password) {
      delete usuarioLogeado[0].contrasenia;
      return res.ok(usuarioLogeado[0]);
    } else {
      return res.badRequest({mensaje: 'Credenciales Incorrectas!!!'});
    }
  }
};

