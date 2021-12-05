// this one condenses a saved json
'use strict';

const fs = require('fs')
const request = require('request');

let objectArray = [];
  // console.log(wordArray);

let dataSet = fs.readFileSync('data/nonLoop/test_1821-1921_8.json');

function colorObj(){

  var obj = JSON.parse(dataSet);
    // console.log(obj)
     
      var objects = obj.objects.map( function(data) {
        var img = data.images[0];
        const idx = 0;
        var key = Object.keys(img)[idx];
        var value = img[key];
        // console.log(value.url)

        var flat = {
            objectID: data.id,
            title: data.title,
            description: data.description,
            url: data.url,
            type: data.type,
            type_id: data.type_id,
            media: data.medium,
            media_id: data.media_id,
            year: data.year_start,
            year: data.year_end,
            date: data.date,
            decade: data.decade,
            acquired: data.year_acquired,
            country: data['woe:country_name'],  
            country_id: data['woe:country_id'],
            image: value.url,
        }
        return flat;
       });

    objectArray.push(objects);
    // if there are more objects than the pageSize objectArray will look like this: [[...objects], [...objects]]
    // we use [].concat to flatten out objectArray to be a one-dimensional array
    objectArray = [].concat(...objectArray);
      // console.log(objectArray);
      // console.log(objectArray.length);

    setTimeout(() => {
        fs.writeFileSync('data/nonLoop/1821-1921_8.json', JSON.stringify(objectArray), 'utf8')
    }, 5000)
}

colorObj();

// new json file
setTimeout(() => {
    fs.writeFileSync('test1.json', JSON.stringify(objectArray), 'utf8')
}, 5000)
