var express = require("express");
var bodyParser = require("body-parser");

// bring in the models
var db = require("./models");
var app = express();

var hbs = require("express-handlebars");

var routes = require('./controllers/jobsearch_controller.js');

app.use('/', routes);
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, function(){
console.log('Example app listening on port 3000!')
})
