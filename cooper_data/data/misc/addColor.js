// const fs = require('fs')

var imgClrs = [];
function loadImage(imgSrc) {
    window.addEventListener('load', function() {

      // VIBRANT WORKING
      Vibrant.from(imgSrc).getPalette(function (err, palette){
        // console.log(palette);

        var objHsl;
        var objHex;
        var imgClr;
        for (var swatch in palette) {
          // console.log(swatch, palette[swatch].getHex());
          // console.log(imgSrc, palette.Vibrant.getHsl());

          var objHsl = palette.Vibrant.getHsl();
          var objHex = palette.Vibrant.getHex();

        } // close loop
      // console.log(objHex)

      var imgClr = {
          local: imgSrc,
          hex: objHex,
          hue: objHsl[0],
        }// new obj
      // console.log(imgClr)

    imgClrs.push(imgClr)
  // console.log(imgClrs) 
// fs.writeFileSync('./allObjectsColors.json', JSON.stringify(imgClrs), 'utf8')


  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  // Start file download.
  download("hello.json",JSON.stringify(imgClrs));


    }); // close vibrant

    }) // close window

} // close function




