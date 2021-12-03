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

  // var data = JSON.parse(dataset);
    // console.log(data)
    // for(let i = 0; i < 3865; i++) {
    //   var imgData = JSON.stringify(data[i].image)
  


// function addColor(){
function addColor(window, document, undefined){

  //// loads before js
  window.onload = init;
  function init(){

  var elements = document.querySelectorAll('[id=galleryImg]');
    // console.log(elements)
    for(var i = 0; i < elements.length; i++) {
        var imgSrc = JSON.stringify(elements[i].src)
          console.log(imgSrc)

        //// vibrant is not a function
        Vibrant.from(imgSrc).getPalette(function(err, palette) {
          for (var swatch in palette) {
            console.log(swatch, palette[swatch].getHex());
          } // vibrant loop
        });// vibrant function

        //// fac is not defined
        // fac.getColorAsync(imgSrc)
        //   .then(color => {
        //       console.log('Average color', color);
        //   })
        // .catch(e => {
        //     console.log(e);
        // });

      } // id loop
     console.log(elements.image)
    } //init function
   }; // close function 

addColor(window, document, undefined);


  // for(var i = 0; i < imageCollection.length; i++) {
  //     var imgSrc = imageCollection[i].src
  //     console.log(imgSrc)
  // }

  // img.addEventListener('load', function() {
  //   var vibrant = new Vibrant(img);
  //   var swatches = vibrant.swatches()
  //   for (var swatch in swatches)
  //       if (swatches.hasOwnProperty(swatch) && swatches[swatch])
  //           console.log(swatch, swatches[swatch].getHex())
  //   }); 

// var objects = json.map(function(data) {
// var colorKey = "color";
// var colorVal = "tbd"

//// ADD THIS AFTER YOU CREATE COLORVAL
// data[colorKey] = colorVal;
// console.log(data)

//   }; // close function

// addColor();