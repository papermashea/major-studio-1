//// chart
var margin = {top: 20, right: 60, bottom: 30, left: 20},
  width = 1400
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
    data.forEach(function(d){
      d.lat = +d.lat;
      d.long = +d.long;
    });// close for Each
    // console.log(data)

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

// console.log(data)

  //// counting countries
  var counts = d3.rollup(data, v => v.length, d => d.country).entries(data);
  // console.log(counts)
  // var min = d3.min(counts);
  // console.log(min)

  //// scale for bubble size
  var cntCounts = Array.from(counts, ([country, count]) => ({country, count}))
  // console.log(cntCounts)
  // console.log(cntCounts.length)

  // var range = d3.extent(cntCounts.map(function (item) {
  //         return (item.count);
  //    }))
  // console.log(range)

  var Cscale = d3.scaleLinear()
     .domain(d3.extent(cntCounts.map(function (obj) {
          return (obj.count);
     })))
     .range([20, 200]);


  //// add circles
  svg
    .selectAll("circles")
    .data(cntCounts)
    .join("circle")
      .attr("r", function(d, c) {
          return Cscale(cntCounts[c].count)
          // console.log(cntCounts[c])
      })
    .data(data)
      .attr("cx", function(d){ return projection([d.long, d.lat])[0]})
      .attr("cy", function(d){ return projection([d.long, d.lat])[1]})
      .style("fill", "black")
      .attr("fill-opacity", .2)
      .append("text").text(function(d, c) { return cntCounts[c].country;})
      .style("fill", "red")
      .attr("fill-opacity", 1)
})