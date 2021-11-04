//// chart
    var margin = {top: 50, right: 40, bottom: 30, left: 20},
      width = 1200 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

    var chart = d3.select("#chart")
    .append("svg")
      .attr("width", width)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    //// tooltip
    let tooltip = d3.select("#chart").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // let xLine = svg.append("line")
    //     .attr("stroke", "rgb(96,125,139)")
    //     .attr("stroke-dasharray", "1,2");

d3.json("data/colorDataY.json").then(function (data) { 

    chart = BeeswarmChart(data, {
      x: d => d.year,
      label: "Years",
      type: d3.scaleLinear, // try d3.scaleLog
      title: d => `${d.Name}\n${d.year}`,
      width
    })

    });