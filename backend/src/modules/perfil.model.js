const Sequelize = require('sequelize')
const sequelize = require('../util/db')

const Perfil = sequelize.define('perfiles', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descripcion: {
    type: Sequelize.TEXT,
    allowNull: true
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
  estatus: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
})

module.exports = Perfil
