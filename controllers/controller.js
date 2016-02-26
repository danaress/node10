var countries = require('../models/model.js')
// var allCountries = require('../models/countries.json')

function getCountries (req, res){
	console.log("test");
	countries.find({}, function(err, docs){
		res.send(docs);
	})
}

module.exports = {
	getCountries : getCountries
}