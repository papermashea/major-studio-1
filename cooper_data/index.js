// "use strict"

// const fs = require('fs')
// const request = require('request');

// var data = fs.readFileSync('data/allObjectsCountries.json');
d3.json("data/allObjectsCountries.json").then(function (data) { 

console.log(data)

// var data = [
// {id:"root",value:null},
// {id:"root.1",value:null,img:"img1.jpg"},
// {id:"root.2",value:null,img:"img2.jpg"},
// {id:"root.3",value:null,img:"img3.jpg"},
// {id:"root.4",value:null,img:"img4.jpg"},
// {id:"root.5",value:null,img:"img5.jpg"},
// ];

var width = document.querySelector("#gallery").clientWidth;
var height = document.querySelector("#gallery").clientHeight;
var div = d3.select("#gallery").append("div").attr("width", width).attr("height", height);


setInterval(draw, 2000);
draw();


function draw() {

randomize();
        
var stratify = d3.stratify()
    .parentId(function(d) {return d.objectID; });

var root = stratify(data).sum(function(d) { return d.value ;});

var treemap = d3.treemap()
    .tile(d3.treemapBinary)
    .size([width, height])
    .padding(1)
    .round(true);        

treemap(root);
drawTreemap(root);
    
}

function randomize() {
data.filter(function(d){ return d.objectID !== "root" ; })
    .forEach(function(d){
        d.value = ~~(d3.randomUniform(1, 10)());
    });
}


function drawTreemap(root) {

var node = div.selectAll(".node").data(root.children);
  
var newNode = node.enter()
   .append("div").attr("class", "node")
    .style("background-image", function(d){ return "url(" + d.data.image + ")";});

node.merge(newNode)
    .transition()
    .duration(1000)
    .style("left", function(d) { return d.x0 + "px" ;})
    .style("top", function(d) { return d.y0 + "px" ;})
    .style("width", function(d) { return (d.x1 - d.x0) + "px" ;})
    .style("height", function(d) { return (d.y1 - d.y0) + "px" ;});
    
}
});