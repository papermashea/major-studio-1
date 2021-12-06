const fs = require('fs')
// const d3 = require('d3')
// const rollup = require('d3-rollup')

var objects = fs.readFileSync('./data/allObjectsColors_1921.json');
var countries = fs.readFileSync('./data/countries/countries.json');

function map(){
	var obj = JSON.parse(objects)
	var cntry = JSON.parse(countries)

	var latLong = cntry.map( function(cnt) {
		
		var loc = {		
			country: cnt.country,
			lat: cnt.latitude,
			long: cnt.longitude,
		}
		return loc
	})
	// console.log(latLong)

	var countryObj = {}

	console.log(countryObj)
}
map();