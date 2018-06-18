// Node native packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

// Load in models
var db = require("./models");
var app = express();

// Static handler
app.use(express.static(path.join(__dirname + '/public')))

// Run this each time
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var hbs = require("express-handlebars");
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Load in routes
var routes = require('./controllers/jobsearch_controller.js');
app.use('/', routes);

// Setting up the PORT
var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function(){
  console.log('Job Search App listening on Port' + PORT)
  });
});