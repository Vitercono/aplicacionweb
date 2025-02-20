var express = require('express');
var router = express.Router();
var data  = require('../data/dataprovider.js')

var isLoggedIn = false;

router.get('/', function(req, res, next) {
  var castles = data.findAll()
  res.json(castles);
});

router.post('/add-castle', function (req, res, next) {
  var { nombre, pais, lat, lng, descripcion, imagen } = req.body;

  // Validar que los datos estén presentes
  if (!nombre || !pais || !lat || !lng || !descripcion || !imagen ) {
    return res.status(400).json({
      success: false,
      message: 'Faltan datos obligatorios (nombre, pais, lat, lng).'
    });
  }

  // Crear el objeto castillo
  var castillo = {
    nombre: nombre,
    pais: pais,
    latitud: lat,
    longitud: lng,
    descripcion: descripcion,
    imagen: imagen
  };

  // Agregar el castillo
  data.add(castillo);

  // Responder con éxito
  res.status(201).json({
    success: true,
    message: 'Castillo agregado con éxito',
    data: castillo
  });
});

router.post('/delete-castle/:pos', (req, res) => {
  const pos = req.params.pos;
  if (data.getByIndex(pos)) {
      data.removeAt(pos);
      res.json({
          success: true,
          message: "Elemento eliminado con exito"
      });
  } else {
      res.status(400).json({
          success: false,
          message: "Índice no válido"
      });
  }
});

router.post('/login', (req,res)=>{
  var username = req.body.username;
  var pass = req.body.password;

  if (!username || !pass){
    return res.json({
      success:false,
      message:"Debes ingresar usuario y contraseña"
    })
  }

  if (!data.checkPwd(username,pass)){
    return res.json({
      success:false,
      message:"Usuario y/o contraseña incorrecto/s"
    })
  } else {
    isLoggedIn = true;
    return res.json({
      success:true,
      message:"Inicio de sesión exitoso"
    })
  }
})

router.post('/edit-castle/:id', (req, res) => {
  var index = parseInt(req.params.id, 10);
  var oldCastle = data.getByIndex(index);

  if (!oldCastle) {
    return res.status(404).json({ success: false, message: "Castillo no encontrado" });
  }

  var nombre = req.body.nombre?.trim() || oldCastle.nombre;
  var pais = req.body.pais?.trim() || oldCastle.pais;
  var descripcion = req.body.descripcion?.trim() || oldCastle.descripcion;
  var imagen = req.body.imagen?.trim() || oldCastle.imagen;

  data.editCastle(oldCastle, nombre, descripcion, pais, imagen);

  res.json({ success: true });
});


router.get('/checksession', (req,res)=>{
  return res.json({
    success:isLoggedIn
  })
})

module.exports = router;
