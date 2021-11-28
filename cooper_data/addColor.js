// this one condenses a saved json
'use strict';

const fs = require('fs')
const request = require('request');
// const vibrant = require('node-vibrant');
const ColorThief = require('colorthief');


let objectArray = [];
  // console.log(wordArray);

let dataSet = fs.readFileSync('data/allObjectsCountries.json');

function colorObj(){

  var obj = JSON.parse(dataSet);
    console.log(obj)
     
        var objects = obj.objects.map(function(data) {

        // let v = new Vibrant('data.image', opts)
        // v.getPalette((err, palette) => console.log(palette))
        // vibrant should be able extract color on the execution of a promise
        // checking is promise returns in memory
        // test if you can show the image with a remote path
        // test: display gallery from json
        // keep daniel posted

        // pandas + dataframe for json

        //countries
        // test japan
        // test a few smaller ones

        // const colorThief = new ColorThief();
        // const img = data.image

        var flat = {
          objectID: data.objectID,
          title: data.title,
          description: data.description,
          url: data.url,
          type: data.type,
          type_id: data.type_id,
          media: data.media,
          media_id: data.media_id,
          year: data.year,
          year: data.year,
          date: data.date,
          decade: data.decade,
          acquired: data.acquired,
          country: data.country,
          lat: data.lat,
          long: data.long,
          image: data.image,
          color: 
        }
        return flat;
       });

    // objectArray.push(objects);
    // // if there are more objects than the pageSize objectArray will look like this: [[...objects], [...objects]]
    // // we use [].concat to flatten out objectArray to be a one-dimensional array
    // objectArray = [].concat(...objectArray);
    //   // console.log(objectArray);
    //   // console.log(objectArray.length);

    // setTimeout(() => {
    //     fs.writeFileSync('data/nonLoop/allColorObjects.json', JSON.stringify(objectArray), 'utf8')
    // }, 5000)
}

colorObj();

// new json file
// setTimeout(() => {
//     fs.writeFileSync('allColorObjects.json', JSON.stringify(objectArray), 'utf8')
// }, 5000)
