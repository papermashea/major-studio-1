// this one condenses a saved json
'use strict';

const fs = require('fs')
const request = require('request');

let objArray = [];
  // console.log(wordArray);

let dataSet = fs.readFileSync('objColors.json');

function colorObj(){

  var obj = JSON.parse(dataSet);
    // console.log(obj)
     
    var objects = obj.objects.map( function(data) {
      // var filename = data.objects.images[0].url.pop();

      var flat = {
          objectID: data.id,
          title: data.title,
          color: data.color,
          type: data.type,
          type_id: data.type_id,
          media: data.medium,
          media_id: data.media_id,
          year: data.year_start,
          acquired: data.year_acquired,
          // country: data.woe[':country_name'],  
          // country_id: data.woe[':country'],
          description: data.description,
          // image: data.images[0],
      }
      return flat;
    });

  console.log(objects)  

    objArray.push(objects);
    // if there are more objects than the pageSize objArray will look like this: [[...objects], [...objects]]
    // we use [].concat to flatten out objArray to be a one-dimensional array
    objArray = [].concat(...objArray);
}

colorObj();

// new json file
setTimeout(() => {
    fs.writeFileSync('colorDataY.json', JSON.stringify(objArray), 'utf8')
}, 5000)
