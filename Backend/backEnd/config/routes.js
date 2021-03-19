module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'POST /autenticacion': 'UsuarioController.login',
  'POST /Prueba': 'PruebaController.create',
  'GET /Prueba/id/:id': 'PruebaController.findOneById',
};
