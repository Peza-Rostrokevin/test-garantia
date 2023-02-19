const Perfil = require('../modules/perfil.model')

module.exports = {
  mostrarPerfil: async (req, res) => {
    try {
      const id = req.params.id
      if(!id) return res.status(401).json({success: true, error: 'Numero de perfil invalido'})
      const found = await Perfil.findOne({where: { id: id}})
      if(found) return res.status(200).json({success: true, result: found})
      else return res.status(402).json({success: true, error: 'No se encontro ningun perfil con el id solicitado'})
    } catch {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Ocurrió un error al buscar el perfil', detalles: error });
    }
  },
  mostrarPerfiles: async (req, res) => {
    try {
        Perfil.findAll({
          attributes: ['id', 'nombre']
        }).then(perfiles => {
        return res.status(200).json({success: true, perfiles: perfiles})
      })
    } catch {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Ocurrió un error al consular los perfiles', detalles: error });
    }
  },
  editarPerfil: async (req, res) => {
    try {
    Perfil.update({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      fecha_actualizacion: new Date().toISOString()
    }, {
      where: {
        id: req.body.id
      }
    }
    ).then(data => {
    return res.status(200).json({success: true, result: data})
    })
  } catch {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Ocurrió un error al guardar la información', detalles: error });
  }
  },
  eliminarPerfil: async (req, res) => {
    try {
      const id = req.params.id
      Perfil.update({
        estatus: 0,
        fecha_actualizacion: new Date().toISOString()
      }, {
        where: {
          id: id
        }
      }
      ).then(data => {
      return res.status(200).json({success: true, result: data})
      })
    } catch {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Ocurrió un error al eliminar el perfil', detalles: error });
    }
  }
};
