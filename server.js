const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var router = require('./routes/product.js');
var app = express();
var port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use('/', router);
app.use(function(err, req, res, next){
  res.render('error', {error: err});
});

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
