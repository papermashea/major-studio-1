// this one condenses a saved json
'use strict';

const fs = require('fs')
const request = require('request');

let objectArray = [];

let dataSet = fs.readFileSync('../data/1921-2021.json');

function colorObj(){

  var obj = JSON.parse(dataSet);
    // console.log(obj)
     
      var objects = obj.filter(function (data){
        // if (data['woe:country'] === null) {
        //   return false; // skip
        // }
        // if (data['woe:country_name'] === null) {
        //   return false; // skip
        // }
        // if (data.images === []) {
        //   return false; // skip
        // }
        // if (data.year_start === null) {
        //   return false; // skip
        // }
        // return true;

      let dataComplete = true;
      
      // Test if we have a date value
      if(data['woe:country_name'] ==null)dataComplete=false;
      if(data.medium ==null)dataComplete=false;
      if(data.year_end ==null)dataComplete=false;
      if(data.description ==null)dataComplete=false;

      return dataComplete;
      }).map( function(data) {
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
            media: data.medium,
            year_start: data.year_start,
            year_end: data.year_end,
            date: data.date,
            year_acquired: data.year_acquired,
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
    fs.writeFileSync('../data/allObjects/1921-2021_nullCheck_YeMe.json', JSON.stringify(objectArray), 'utf8')
}, 5000)
