// this one condenses a saved json
'use strict';

const fs = require('fs')
const request = require('request');

let objectArray = [];

let dataSet = fs.readFileSync('../data/combined/allObjects.json');

function colorObj(){

  var obj = JSON.parse(dataSet);
    // console.log(obj)
     
      var objects = obj.map( function(data) {
        var img = data.images[0];
        const idx = 0;
        var key = Object.keys(img)[idx];
        var value = img[key];
        // console.log(value.url)

        var flat = {
            objectID: data.id,
            access: data.accession_number,
            title: data.title,
            description: data.description,
            url: data.url,
            type: data.type,
            type_id: data.type_id,
            media: data.medium,
            media_id: data.media_id,
            period: data.period_id,
            year_start: data.year_start,
            year_end: data.year_end,
            date: data.date,
            decade: data.decade,
            acquired: data.year_acquired,
            country: data['woe:country_name'],  
            image: value.url,
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

colorObj();

// new json file
setTimeout(() => {
    fs.writeFileSync('../data/allObjects/allObjects_periods.json', JSON.stringify(objectArray), 'utf8')
}, 5000)
