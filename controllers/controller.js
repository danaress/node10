var Country = require('../models/model.js')
var allCountries = require('../models/countries.json')

function getCountries (req, res){
	console.log("test");
	Country.find({}, function(err, docs){
		console.log(docs);
		res.send(docs);
	})
}

module.exports = {
	getCountries : getCountries,
}