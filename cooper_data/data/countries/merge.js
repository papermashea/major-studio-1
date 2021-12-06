const fs = require('fs')

var countries = fs.readFileSync('countriesLL.json');
var objects = fs.readFileSync('../allObjects_1921.json');

// function mergeJSON(countries,objects){
//     /*
//      * Properties from the Souce1 object will be copied to Source2 Object.
//      * Note: This method will return a new merged object, Source1 and Source2 original values will not be replaced.
//      * */
//     var mergedJSON = Object.create(objects);// Copying Source2 to a new Object

//     for (var attrname in countries) {
//         if(mergedJSON.hasOwnProperty(attrname)) {
//           if ( countries[attrname]!=null && countries[attrname].constructor==Object ) {
//               /*
//                * Recursive call if the property is an object,
//                * Iterate the object and set all properties of the inner object.
//               */
//               mergedJSON[attrname] = mergeJSON(countries[attrname], mergedJSON[attrname]);
//           } 

//         } else {//else copy the property from countries
//             mergedJSON[attrname] = countries[attrname];

//         }
//       }

//       return mergedJSON;
// }

function latLong(){
  var cntry = JSON.parse(countries);
  var obj = JSON.parse(objects);

  let merged = [];

  for(let i=0; i<obj.length; i++) {
    merged.push({
     ...obj[i], 
     ...(cntry.find((itmInner) => itmInner.country === obj[i].country))}
    );
  }

  // console.log(merged);
  // console.log(merged.length);

  fs.writeFileSync('./allObjectsLL_1921.json', JSON.stringify(merged), 'utf8')
} //function

latLong();


