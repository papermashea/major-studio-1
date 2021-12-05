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
    data.forEach(function(d){
      d.lat = +d.lat;
      d.long = +d.long;
    });// close for Each

  //// color scale
  const color = d3.scaleOrdinal()
    .domain(data.map(d => d.country))
    .range(d3.schemePaired);

  // Counting countries
  // const cnt = d3.count(data, d => d.country)
  // console.log(cnt)

  // var cntCount = [];
  // var min = 0;
  // for (var c = 0; c < data.length; c++){
  //     var obj = data[c];

  //     if (!cntCount[obj.country]){
  //         cntCount[obj.country] = [];
  //     }

  //     cntCount[obj.country].push({country:obj.country, lat:obj.lat, long:obj.long,});
  // }
  // console.log(cntCount)

  // let counts = d3.rollup(data, v => v.length, d => d.country)
  // console.log(counts)


  // Draw the map
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

  //// scale for bubble size
  var counts = d3.rollup(data, v => v.length, d => d.country).entries(data)
  var cntCounts = Array.from(counts, ([country, num]) => ({country, num}))
  // console.log(cntCounts)

  // const size = d3.scaleSqrt()
  //   .domain(valueExtent)  // What's in the data
  //   .range([ 1, 100])  // Size in pixel

  //   console.log(valueExtent)

  //// add circles:
  svg
    .selectAll("circles")
    // .data(data.sort((a,b) => +b.n - +a.n).filter((d,i) => i<1))
    .data(data, function(d, i) { return d.country })
    .join("circle")
      .attr("cx", d => projection([d.long, d.lat][0]))
      .attr("cy", d => projection([d.long, d.lat][1]))
      .attr("r", function(d, c) {
        for(let c = 0; c < cntCounts.length; c++) {
            console.log(cntCounts[c])
        } // close cnts

      })
      // .attr("r", 10)
      .style("fill", "red")
      .attr("fill-opacity", .1)

// svg.selectAll("circles").each(function (d, i) { console.log('test'); })














  // Add title and explanation
  // svg
  //   .append("text")
  //     .attr("text-anchor", "end")
  //     .style("fill", "black")
  //     .attr("x", width - 10)
  //     .attr("y", height - 30)
  //     .attr("width", 90)
  //     .html("Objects by place")
  //     .style("font-size", 14)
 

  // --------------- //
  // ADD LEGEND //
  // --------------- //

  // Add legend: circles
  // const valuesToShow = [10,100,1000]
  // const xCircle = 40
  // const xLabel = 90
  // svg
  //   .selectAll("legend")
  //   .data(valuesToShow)
  //   .join("circle")
  //     .attr("cx", xCircle)
  //     .attr("cy", d => height - size(d))
  //     .attr("r", d => size(d))
  //     .style("fill", "none")
  //     .attr("stroke", "black")

  // Add legend: segments
  // svg
  //   .selectAll("legend")
  //   .data(valuesToShow)
  //   .join("line")
  //     .attr('x1', d => xCircle + size(d))
  //     .attr('x2', xLabel)
  //     .attr('y1', d => height - size(d))
  //     .attr('y2', d => height - size(d))
  //     .attr('stroke', 'black')
  //     .style('stroke-dasharray', ('2,2'))

  // Add legend: labels
  // svg
  //   .selectAll("legend")
  //   .data(valuesToShow)
  //   .join("text")
  //     .attr('x', xLabel)
  //     .attr('y', d => height - size(d))
  //     .text(d => d)
  //     .style("font-size", 10)
  //     .attr('alignment-baseline', 'middle')
})