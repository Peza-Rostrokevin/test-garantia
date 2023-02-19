const Usuario = require('../modules/usuario.model')


module.exports = {
  iniciarSesión: async (req, res) => {
    try {
      const usuario = req.body.usuario
      const contrasena = req.body.contrasena
      const found = await Usuario.findOne({where: { username: usuario, password: contrasena}})
      if(found) return res.status(200).json({success: true, result: found})
      else return res.status(404).json({success: true, error: 'Usuario o contraseña incorrecta, verifique sus credenciales.'})
    } catch(error) {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Ocurrió un error al iniciar sesión', detalles: error });
  }

  },
  mostrarUsuarios: async (req, res) => {
    try {
      Usuario.findAll().then(users => {
        return res.status(200).json({success: true, users: users})
      })
    } catch {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Ocurrió un error al consultar los usuarios', detalles: error });
    }

  },
  mostrarUsuario: async (req, res) => {
    try {
      const id = req.params.id
      if(!id) return res.status(401).json({success: true, error: 'Id de usuario invalido'})
      const found = await Usuario.findOne({where: { id: id}})
      if(found) return res.status(200).json({success: true, result: found})
      else return res.status(402).json({success: true, error: 'No se encontro ningun usuario con el id solicitado'})
    } catch {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Ocurrió un buscar el usuario', detalles: error });
    }
  },
  modificarUsuario: async (req, res) => {
    try {
      Usuario.update({
        username: req.body.username,
        password: req.body.password,
        telefono: req.body.telefono,
        correo: req.body.correo,
        fecha_actualizacion: new Date().toISOString()
      }, {
        where: {
          id: req.body.id
        }
      }
      ).then(data => {
      return res.status(200).json({success: true, result: data})
      })
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Ocurrió un error al guardar la información', detalles: error });
    }
  },
  crearUsuario: async (req, res) => {
    try {
      Usuario.create({
        username: req.body.username,
        password: req.body.password,
        telefono: req.body.telefono,
        correo: req.body.correo,
        perfil_id: req.body.perfil_id,
        fecha_creacion: new Date().toISOString(),
        estatus: 0
      }).then(data => {
        return res.status(200).json({success: true, result: data})
      })
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Ocurrió un error al guardar la información', detalles: error });
    }
  }
};
