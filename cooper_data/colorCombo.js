const fs = require('fs')
// const d3 = require('d3')
// const rollup = require('d3-rollup')

var objects = fs.readFileSync('./data/allObjects_1921.json');
var colors = fs.readFileSync('./data/allObjectsColors.json');
var countries = fs.readFileSync('./data/countries/countries.json');

function combine(){

  var obj = JSON.parse(objects);
// console.log(obj)
  var clr = JSON.parse(colors);
// console.log(clr)     
  var cntry = JSON.parse(countries);
// console.log(cntry)

	var colorObj = [...[obj, clr].reduce((m, a) => (a.forEach(o => m.has(o.image) && Object.assign(m.get(o.image), o) || m.set(o.image, o)), m), new Map).values()];
	  // console.log(colorObj)  

  	// console.log(colorObj) 
	fs.writeFileSync('./data/allObjectsColors_1921.json', JSON.stringify(colorObj), 'utf8')
} // close function
combine();


//// new json file
// setTimeout(() => {
//     fs.writeFileSync('./data/allObjectsColors_1921.json', JSON.stringify(colorObj), 'utf8')
// }, 5000)
