const Router = require('express').Router();
const { iniciarSesión, mostrarUsuarios, modificarUsuario, crearUsuario, mostrarUsuario } = require('../controllers/usuario.controller');

Router.post('/login', iniciarSesión)
Router.get('/', mostrarUsuarios)
Router.get('/:id', mostrarUsuario)
Router.put('/', modificarUsuario)
Router.post('/crear', crearUsuario)

module.exports = Router;
