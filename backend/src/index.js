const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/db');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
const RutasUsuario = require('./routes/usuario.route');
const RutasPerfil = require('./routes/perfil.route');
var corsOptions = function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers',
  'Content-Type, Authorization, Content-Length, X-Requested-With');
   next();
}

var app = express();
app.use(corsOptions)
app.use(bodyparser.json());

app.use('/usuario', RutasUsuario)
app.use('/perfil', RutasPerfil)

sequelize.sync().then(result => {
  app.listen(3000)
}).catch(err => {
  console.log(err)
})
