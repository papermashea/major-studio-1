//// chart
var margin = {top: 20, right: 20, bottom: 30, left: 60},
  width = 1200
  height = 600 

var svg = d3.select("#map")
    .append("svg")
      .attr("width", width)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// Map and projection
const projection = d3.geoMercator()
    .center([0,20])                // GPS of location to zoom on
    .scale(200)                       // This is like the zoom
    .translate([ width/2, height/2 ])

Promise.all([
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/local/cooper_data/data/allObjectsCountries.json")
]).then(function (initialize) {

    let dataGeo = initialize[0]
    let data = initialize[1]

    //// return lat long as numbers
    // data.forEach(function(d){
    //   d.lat = +d.lat;
    //   d.long = +d.long;
    // });// close for Each
    // // console.log(data)

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
        lat: JSON.parse(cnt.values[0].key),
        long: JSON.parse(cnt.values[0].values[0].key),
        count: cnt.values[0].values[0].value
      }
          return flat
  }); //cdata


//// scale country counts
  var Cscale = d3.scaleLinear()
     .domain(d3.extent(cData.map(function (obj) {
          return (obj.count);
     })))
     .range([2, 100]);


  //// add circles:
  svg
    .selectAll("circles")
    .data(cData)
    .join("circle")
      .attr("cx", function(d){ return projection([d.long, d.lat])[0]})
      .attr("cy", function(d){ return projection([d.long, d.lat])[1]})
      .attr("r", function(d) { return Cscale(d.count)})  
        .style("fill", "black")
        .attr("fill-opacity", .2)
      .append("text").text(function(d) { return d.country;})
            .style("fill", "black")
})