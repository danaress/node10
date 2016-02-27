// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/countries');

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

var controller = require("./controllers/controller.js")
var countries = require("./models/countries.json")

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});


app.get('/countries', controller.getCountries)

app.post('/search', controller.searchCountry)

app.post('/newCountry', controller.newCountry)



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})