const Router = require('express').Router();
const { iniciarSesión, mostrarUsuarios, modificarUsuario, crearUsuario, mostrarUsuario, eliminarUsuario } = require('../controllers/usuario.controller');

Router.post('/login', iniciarSesión)
Router.get('/', mostrarUsuarios)
Router.get('/:id', mostrarUsuario)
Router.put('/', modificarUsuario)
Router.post('/crear', crearUsuario)
Router.put('/eliminar', eliminarUsuario)

module.exports = Router;
