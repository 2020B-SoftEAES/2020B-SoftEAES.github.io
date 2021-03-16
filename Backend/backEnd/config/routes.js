module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'POST /Usuario/login': 'UsuarioController.login',
};
