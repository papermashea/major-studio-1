// const fs = require('fs');

// let dataset = fs.readFileSync('./data/allObjectsCountries.json');

// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/local/cooper_data/data/allObjectsCountries.json")
//   .then( json => {
      // console.log(json)
      // console.log(json[0].image)

  // Object.keys(json).map(
  //   function(object){
  //     json[object]["color"]='tbd'
  //     console.log(json)
  // });
  //     addColor(json)

  // }); 

function addColor(){
  // var data = JSON.parse(dataset);
    // console.log(data)
    // for(let i = 0; i < 3865; i++) {
    //   var imgData = JSON.stringify(data[i].image)

      Vibrant.from(img).getPalette(function(err, palette) {
          for (var swatch in palette) {
            console.log(swatch, palette[swatch].getHSL())
          } // close vibrant loop
  }); // close vibrant

// var objects = json.map(function(data) {
// var colorKey = "color";
// var colorVal = "tbd"

//// ADD THIS AFTER YOU CREATE COLORVAL
// data[colorKey] = colorVal;
// console.log(data)

  }; // close function



