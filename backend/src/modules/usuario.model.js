const Sequelize = require('sequelize')
const sequelize = require('../util/db')

const Usuario = sequelize.define('usuarios', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  perfil_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  correo: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  telefono: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  estatus: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fecha_creacion: {
    type: Sequelize.DATE,
    allowNull: false
  },
  fecha_actualizacion: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: null
  },
  usuario_id_creacion: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  usuario_id_actualizacion: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  token: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  token_expiracion: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: null
  }
})

module.exports = Usuario
