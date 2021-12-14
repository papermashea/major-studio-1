//// chart
var margin = {top: 20, right: 20, bottom: 30, left: 20},
  width = 1200 - margin.left - margin.right,
  height = 850 - margin.top - margin.bottom;

var svg = d3.select("#chart")
.append("svg")
  .attr("width", width)
  .attr("height", height + margin.top + margin.bottom)

const fontFamily = "CooperHewitt, Verdana, Arial, Helvetica, sans-serif";

d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/docs/data/1900_2000.json")
.then(function (data) { 

//// force datafix
   const dataFixed = data.map(d => ({px:d.year_end, py:d.hue, hue: d3.hsl(d.hex), hex: d.hex, color: ntc.name(d.hex)[1], url:d.url, image: d.image, title: d.title, description: d.description, type: d.type, media: d.media, id: d.objectID, country: d.country}));    
   
  //// scales
      var minYear = d3.min(dataFixed, d => d.px); 
      var maxYear = d3.max(dataFixed, d => d.px); 
      var timeline = d3.extent(dataFixed, d => d.px);
      // console.log(minYear-20)
      // console.log(timeline)

      var sort = d3.extent(dataFixed, d => d.py)

      var xScale = d3.scaleTime()
        .domain([minYear-20, maxYear])
        .range([margin.left, width - margin.right]);
      
      var yScale = d3.scaleLinear()
        .domain(sort)
        .range([height/2.5, height-(margin.bottom*2)]);

      var radius = 5;

//// groups
// var colorGroups = d3.group(dataFixed, d => d.color)
// console.log(colorGroups)

//// force simulation  
    const simulation = d3.forceSimulation(dataFixed)
      .force("x", d3.forceX(d=> xScale(d.px)).strength(3))
      .force("y", d3.forceY(d=> yScale(d.py)).strength(3))
      .force("collide", d3.forceCollide(radius+2).iterations(10))
      .on("tick", ticked);

    function ticked() {
      node.attr("cx", function(d) {
          return d.x
        })
        .attr("cy", function(d) {
          return d.y
        });
  };
    // console.log(dataFixed)

//// tooltip functions
    var mouseover = function(event, d) {
      Tooltip.style("opacity", 1)
    }

    var mousemove = function(event, d) {            
      Tooltip
        .html("<div class='tip'><img src='" + d.image + "'>"+
          "<div id='header'" +
          "<div id='title'>" + d.title + " | <span id='year'>" + d.px + 
          "</span></div></div>" +
          "<p id='details'>Type: " + d.type +
          "</br>Medium: " + d.media + "</p>" +
          "<p id='more'></p>")
        .attr("id", "colorTooltip")
        .style("background-color", d.hex)
        .style("left", (d3.select(this).attr("cx") + 'px'))
        .style("top", (d3.select(this).attr("cy") + 'px'));
    }

    var mouseleave = function(event, d) {
      Tooltip.style("opacity", 0);
    }

    var Tooltip = d3.select("#chart")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", .4)
      .style("color", "white");

  //// axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)
        .ticks(11)
        .tickFormat(d3.format("d"))
        .tickSizeOuter(2))
      .attr("font-family", fontFamily);


  //// nodes
        let node = svg.selectAll()
            .data(dataFixed)
            .enter()
            .append("svg:a")
              .attr("xlink:href", function(d){return d.url;})
              .attr("target", "_blank")
            .append("circle")
              .attr("class", function(d){return d.color;})
              .attr("r", radius)
              .style("fill", function(d){ return d.hex})
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);
        // return svg.node(); 


    function update(){
      //// checkboxes
      d3.selectAll("#color").each(function(d){
        cb = d3.select(this);
        clr = cb.property("value")

        //// selected
        if(cb.property("checked")){
          svg.selectAll("."+clr).transition().duration(100)
          .style("opacity", 1).attr("r", radius)

        //// hidden
        }else{

        d3.forceSimulation(dataFixed)
          .force("collide", d3.forceCollide(radius+2).iterations(10))
          .force("center")

        svg.selectAll("."+clr).transition().duration(100)
          .style("opacity", 0).attr("r", 0)


        }
      })
    }

    //// on change
    d3.selectAll(".form-control").on("change",update);

    //// intialize
      update();
      return svg.node();
}); // close d3 