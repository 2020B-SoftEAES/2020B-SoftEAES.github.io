module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'POST /autenticacion': 'UsuarioController.login',
};
