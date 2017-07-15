var router = require('express').Router();
var db = require('../db.js');

router.get('/', function(req, res){
  var topProduct = db.getRankOneProduct();
  res.render('index', {topProduct: topProduct});
});

router.get('/products', function(req, res){
  var list = db.getAllProducts();
  res.render('products', {list: list});
});

router.get('/products/:name', function(req, res){
  var targetProduct = db.getOneProduct(req.params.name);
  res.render('product', {target: targetProduct});
});


router.post('/products', function(req, res){
  db.addProduct(req.body.name, req.body.price, req.body.rating);
  res.redirect('/products');
});

router.delete('/products/:name', function(req, res){
  db.removeProduct(req.params.name);
  res.redirect('/products');
});

module.exports = router;
