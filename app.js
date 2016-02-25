// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/applicants');

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

var controller = require("./controllers/controller.js")
var countries = require("./models/countries.json")

app.get('/', function(req, res) {
	res.send(countries);
	res.sendFile('html/index.html', {root : './public'});
});


app.get('/countries', function(req, res) {
	res.send("TEST");
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})