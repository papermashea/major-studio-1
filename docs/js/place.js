//// chart
var margin = {top: 20, right: 60, bottom: 30, left: 60},
  width = 1200 - margin.left - margin.right,
  height = 850 - margin.top - margin.bottom;

const fontFamily = "CooperHewitt, Verdana, Arial, Helvetica, sans-serif";

var svg = d3.select("#map")
    .append("svg")
      .attr("width", width)
      .attr("height", height + margin.top + margin.bottom)
    .attr("font-family", fontFamily)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// Map and projection
const projection = d3.geoMercator()
    .center([0,20])                // GPS of location to zoom on
    .scale(150)                       // This is like the zoom
    .translate([ width/2, height/2 ])

Promise.all([
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/docs/data/1900_2000.json")
]).then(function (initialize) {

    let dataGeo = initialize[0]
    let data = initialize[1]
    // console.log(data.length)
    var sum = data.length

//// tooltip functions
    var mouseover = function(event, d) {
      Tooltip.style("opacity", 1)
    }

    var mousemove = function(event, d) {            
      Tooltip
        .join()
        .attr("id", "placeTooltip")
        .html(
          "<div class='note'><div id='header' style='font-size=16'><strong>" + d.country +
          "</div></strong><div id='count'>" + d.count + " total assets" + 
          "</div><div id='count'>" + d3.format(".0%")(d.count/sum) + " of the collection" +
          "</div></div>")
        .attr("font-family", "CooperHewitt")
        .style("background-color", "black")
        .style("left", (d3.select(this).attr("cx") + 'px'))
        .style("top", (d3.select(this).attr("cy") + 'px'));
    }

    var mouseleave = function(event, d) {
      Tooltip.style("opacity", 0);
    }

    var Tooltip = d3.select("#map")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", .4)
      .style("color", "white");


  //// color scale
  const color = d3.scaleOrdinal()
    .domain(data.map(d => d.country))
    .range(d3.schemePaired);

  // draw the map
  svg.append("g")
      .selectAll("path")
      .data(dataGeo.features)
      .join("path")
        .attr("fill", "#DCDCDC")
        .attr("d", d3.geoPath()
            .projection(projection)
        )
      .style("stroke", "none")
      .style("opacity", .3)

//// counting countries
  var countNest = d3.nest()
    .key(function(d) { return d.country; })
    .rollup(function(v) { return v.length; })
    .key(function(d) { return d.lat; })
    .key(function(d) { return d.long; })
    .entries(data);
    // console.log(countNest)

  var cData = countNest.map( function(cnt) {

      var flat = {
        country: cnt.key,
        lat: cnt.values[0].key,
        long: cnt.values[0].values[0].key,
        count: cnt.values[0].values[0].value
      }
          return flat
  }); //cdata
// console.log(cData)

//// scale country counts
  var Cscale = d3.scaleLinear()
     .domain(d3.extent(cData.map(function (obj) {
          return (obj.count);
     })))
     .range([10, 80]);

  //// add circles:
  jitter= () => Math.random()*20
  
let nodes = svg.selectAll("circles")
    .data(cData)
    .join("circle")
      .attr("cx", function(d){ return projection([d.long, d.lat])[0]})
      .attr("cy", function(d){ return projection([d.long, d.lat])[1]})
      .attr("r", function(d) { return Cscale(d.count)})  
        .style("fill", "black")
        .attr("fill-opacity", .2)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);


//// dropdowns
  var dropdown = d3.select("#filterCol")
    .attr("class", "btn-group-vertical")
    .attr("id", "countries");
  
  var options = dropdown.selectAll("option")
    .data(cData.sort( (b,a) => (b.country > a.country) ? 1 : -1 ))

    
    options.enter()
      .filter(function(d) { return d.count > 5 })
      .append("label")
      .attr("class", "filter")
      .text(function(d){return d.country})
      .append("input")
      .attr("class", ".form-control")
      .attr("type","checkbox")
      .attr("id", "countriesBox")
      .attr("name", "gt5")
      .attr("value", function(d){return d.country})


})


