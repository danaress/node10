var countries = require('../models/model.js')
// var allCountries = require('../models/countries.json')


function getCountries (req, res){
	console.log("test");
	countries.find({}, function(err, docs){
		res.send(docs);
	})}


function searchCountry(req, res){
	countries.find({name: req.body.list1}, function(err, doc){
		if (err){
			res.send(err);
		} else {
			res.send(doc);
		}
	})}


function searchCountry(req, res){
	db.newCountries.save({test1}, function(err, dox){
		res.send(dox)
	})}


module.exports = {
	getCountries : getCountries,
	searchCountry : searchCountry
}