const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'test',
  'root',
  '',
  { dialect: 'mysql',
  host: 'localhost',
  define: {
      timestamps: false
    }
  })

  module.exports = sequelize
