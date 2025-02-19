var express = require('express');
var router = express.Router();
var data  = require('../data/dataprovider.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  var castles = data.findAll();
  var title = "CastleNet"
  res.render('index', { castles:castles, title:title });
});

router.post('/', function(req, res, next) {
  var new_castle = { name: req.body.nombre, email: req.body.email};
  console.log(req.body)
  data.add(new_user);
  res.redirect("/");
});

router.get('/delete/:index', function(req,res,next){
  let index = req.params.index;
  data.removeAt(index);
  res.redirect("/");
});

/* GET map page. */
router.get('/mapa', function(req, res, next) {
  res.render('mapa', {});
});

module.exports = router;
