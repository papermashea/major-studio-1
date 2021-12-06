// jq -f aoc.jq --argfile users countries.json allObjectsCountries.json

// jq -f aoc.jq --argfile users countriesStr.json allObjectsCountries.json

// jq --argfile cid allObjectsCountries.json '
// ($cid | INDEX(.country)) as $dict
// | map( $dict[.lat] + $dict[.long] )
// ' countriesStr.json

// // cannot index with number
// jq --slurpfile cid allObjectsCountries.json '
//   ($cid[0] | INDEX(.country)) as $dict
//   | map( $dict[.latitude] + $dict[.longitude] )
// ' countries.json

// //cannot index with null
// jq --slurpfile cid countries.json '
//   ($cid[0] | INDEX(.country)) as $dict
//   | map( $dict[.latitude] + $dict[.longitude] )
// ' allObjectsCountries.json

// cannot index with a null
// jq --slurpfile cid allObjectsCountries.json '
// ($cid[0] | INDEX(.country)) as $dict
// | map( $dict[.lat] + $dict[.long] )
// ' countriesStr.json

//empty index
// jq --slurpfile cid allObjectsCountries.json '
// ($cid[0] | INDEX(.country)) as $dict
// | map( $dict[."lat"] + $dict[."long"] )
// ' countriesStr.json

// null index
// jq --slurpfile cid allObjectsCountries.json '
// ($cid[0] | INDEX(.country)) as $dict
// | map( $dict[.lat] + [.long] )
// ' countriesStr.json

// null index
// jq --argfile cid allObjectsCountries.json '
//   ($cid | INDEX(.country)) as $dict
//   | map( $dict[."lat"])
//   | map( $dict[."long"])
// ' countriesStr.json

// jq --argfile uid allObjectsCountries.json '
//   ($uid | INDEX(.country)) as $dict
//   | map( $dict[.lat])
// ' countriesStr.json

// jq --slurpfile uid allObjectsCountries.json '
//   ($uid[0] | INDEX(.country)) as $dict
//   | map( $dict[.lat])
// ' countriesStr.json


// this one condenses a saved json
'use strict';

const fs = require('fs')
const request = require('request');

let countryArray = [];

let dataSet = fs.readFileSync('data/countries.json');

function cntObj(){

  var obj = JSON.parse(dataSet);
    console.log(obj.length)
     
        var objects = obj.map(function(data) {

        var flat = {
          country: data.country,
          lat: JSON.stringify(data.latitude),
          long: JSON.stringify(data.longitude),                  
        }
        return flat;
       });

    countryArray.push(objects);
    countryArray = [].concat(...countryArray);


	setTimeout(() => {
	    fs.writeFileSync('data/countriesStr.json', JSON.stringify(countryArray), 'utf8')
	}, 5000)
}

cntObj();
