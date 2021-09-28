//// global variables
var pantone; // pantone objects
var years = [];


//// chart
  var margin = {top: 10, right: 20, bottom: 30, left: 20},
      width = 940 - margin.left - margin.right,
      height = 470 - margin.top - margin.bottom;

  var svg = d3.select("#pantone_viz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// d3.json("data/cln/objects_pantone-yellow_cln.json").then(function (data) {

d3.csv("data/csv/objects_pantone-combine.csv").then(function (data) {

  console.log(data)

  //// define data
    // let pantone = data;
      // console.log(pantone)

  //// colors
    // 2021 pantone colors of the year
    // var color = d3.scaleOrdinal()
    //   .domain(["F5DF4D", "939597"])
    //   .range(["#F5DF4D", "#939597"]);


  //// x axis
    var x = d3.scaleTime()
      .domain([new Date("1910"), new Date("2020")])
      .range([ 0, width ]);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  //// dots
    svg.selectAll(".dot")
        .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 12)
      .attr("cx", function(d) { return d.year; })
      .attr("cy", height / 2)
      .style("fill", "black")
      .style("fill-opacity", 1);
        // .style("stroke-width", 0)
          // .on("mouseover", mouseover)
          // .style("fill-opacity", 1)
          // .attr("r", 15);


  // };

});




















        // // Create simulation with specified dataset
        // let simulation = d3.forceSimulation(dataSet)
        //     // Apply positioning force to push nodes towards desired position along X axis
        //     .force("x", d3.forceX(function(d) {
        //         // Mapping of values from total/perCapita column of dataset to range of SVG chart (<margin.left, margin.right>)
        //         return xScale(+d[chartState.measure]);  // This is the desired position
        //     }).strength(2))  // Increase velocity
        //     .force("y", d3.forceY((height / 2) - margin.bottom / 2))  // // Apply positioning force to push nodes towards center along Y axis
        //     .force("collide", d3.forceCollide(9)) // Apply collision force with radius of 9 - keeps nodes centers 9 pixels apart
        //     .stop();  // Stop simulation from starting automatically


