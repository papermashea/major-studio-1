'use strict';

d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/local/cooper_data/data/allObjectsCountries.json")
  .then( json => {
      // console.log(json)
      // console.log(json[0].image)

  // Object.keys(json).map(
  //   function(object){
  //     json[object]["color"]='tbd'
  //     console.log(json)
  // });
      addColor(json)

  }); 


function addColor(json){
// console.log(json[0])
// console.log(json[0].image)

var img = JSON.stringify(json[0].image);
// var img = json[0].image;
console.log(img)

  Vibrant.from(img).getPalette(function(err, palette) {
      for (var swatch in palette) {
        console.log(swatch, palette[swatch].getHSL())
      }
    });

var objects = json.map(function(data) {
var colorKey = "color";
var colorVal = "tbd"

//// ADD THIS AFTER YOU CREATE COLORVAL
// data[colorKey] = colorVal;
// console.log(data.image)


// for(let x = 0; x < data.length; x++) {
//   let img = data.image[1]

  // Vibrant.from(json[0].image).getPalette(function(err, palette) {
  //     for (var swatch in palette) {
  //       console.log(swatch, palette[swatch].getHEX())
  //     }
  //   });
// } // close loop

    // let v = new Vibrant('data.image', opts)
    // v.getPalette((err, palette) => console.log(palette))

    // let imgObj = data.image;

    // imgObj.addEventListener('load', function() {
    //     var vibrant = new Vibrant(imgObj);
    //     var swatches = vibrant.swatches()
    //     console.log(data[0])
    //     Vibrant.from(data.image[0]).getPalette(function(err, palette) {

    //     for (var swatch in palette)
    //        console.log(swatch, palette[swatch].getHex());
    //         });
    // for(let x = 0; x < data.length; x++) {

    // } // close loop




   //  var flat = {
   //    objectID: data.objectID,
   //    title: data.title,
   //    description: data.description,
   //    url: data.url,
   //    type: data.type,
   //    type_id: data.type_id,
   //    media: data.media,
   //    media_id: data.media_id,
   //    year: data.year,
   //    year: data.year,
   //    date: data.date,
   //    decade: data.decade,
   //    acquired: data.acquired,
   //    country: data.country,
   //    lat: data.lat,
   //    long: data.long,
   //    image: data.image,
   //    color: 
   //  }
   //  return flat;
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
}; // close function


