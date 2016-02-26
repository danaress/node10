var countries = require('../models/model.js')
// var allCountries = require('../models/countries.json')

function getCountries (req, res){
	console.log("test");
	countries.find({}, function(err, docs){
		res.send(docs);
	})
}

function searchCountry(req, res){
	console.log("search");
	countries.find({name: req.body.list1}, function(err, doc){
		if (err){
			res.send(err);
		} else {
			res.send(doc);
		}
	})}

module.exports = {
	getCountries : getCountries,
	searchCountry : searchCountry
}