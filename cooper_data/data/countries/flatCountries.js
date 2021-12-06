'use strict';

const fs = require('fs')

let objectArray = [];
let dataSet = fs.readFileSync('countries.json');

function countryObj(){

  var obj = JSON.parse(dataSet);
    // console.log(obj)
     
      var objects = obj.map( function(data) {

        var flat = {
            country: data.country,
            lat: data.latitude,
            long: data.longitude,
        }
        return flat;
       });

    objectArray.push(objects);
    // if there are more objects than the pageSize objectArray will look like this: [[...objects], [...objects]]
    // we use [].concat to flatten out objectArray to be a one-dimensional array
    objectArray = [].concat(...objectArray);
      console.log(objectArray);
      console.log(objectArray.length);
}

countryObj();

// new json file
setTimeout(() => {
    fs.writeFileSync('countriesLL.json', JSON.stringify(objectArray), 'utf8')
}, 5000)