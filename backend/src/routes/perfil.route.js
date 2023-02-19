const { editarPerfil, mostrarPerfil, eliminarPerfil, mostrarPerfiles } = require('../controllers/perfil.controller');
const Router = require('express').Router();

Router.get('/:id', mostrarPerfil)
Router.get('/', mostrarPerfiles)
Router.put('/modificar', editarPerfil)
Router.delete('/:id', eliminarPerfil)
module.exports = Router;
