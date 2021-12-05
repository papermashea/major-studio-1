// import {fs} from './node_modules/fs';
// const fs = require('fs');

//// draw chart
var margin = {top: 70, right: 100, bottom: 0, left: 100},
         width = 1200 - margin.left - margin.right,
         height = 400 - margin.top - margin.bottom;

//// pull in data
let types = [];
  console.log(types)
  // console.log(types.length)  

// let rawdata = fs.readFileSync('data/colorData.json');
d3.json("data/colorDataY.json").then(function (data) { 
  // console.log(data)
  // console.log(data.length)

//// array from type keys
  function text(){
      for (var i = 0; i < data.length; i++) {
        let typeText = data[i].type
        types.push(typeText)
      } // for loop close
  } //function(text) close 
  text(); // call function(text)




  } //data close
); //function(data) close


// //// draw cloud
//   var svg = d3.select("#cloud").append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//       .attr("transform",
//             "translate(" + margin.left + "," + margin.top + ")");

//     var layout = d3.layout.cloud()
//       .size([width, height])
//       .words(types.map(function(d) { return {text: d}; }))
//       .padding(10)
//       .fontSize(60)
//       .on("end", draw);
//     layout.start();

//   //// add words
//   function draw(words) {
//     svg
//       .append("g")
//         .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
//         .selectAll("text")
//           .data(words)
//         .enter().append("text")
//           .style("font-size", function(d) { return d.size + "px"; })
//           .attr("text-anchor", "middle")
//           .attr("transform", function(d) {
//             return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
//           })
//           .text(function(d) { return d.text; });
//   }
