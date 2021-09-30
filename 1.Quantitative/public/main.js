//// global
let dataset = [];

//// chart
    var margin = {top: 200, right: 20, bottom: 30, left: 20},
      width = 2000 - margin.left - margin.right,
      height = 470 - margin.top - margin.bottom;

    var svg = d3.select("#pantone_viz")
    .append("svg")
      .attr("width", width)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    /// palette 
    //// YELLOW = #F5DF4D  | GREY = #939597
    let colors = d3.scaleOrdinal()
        .domain(["F5DF4D", "939597"])
        .range(['#F5DF4D','#939597']);

    //// tooltip
    let tooltip = d3.select("#pantone_viz").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    let xLine = svg.append("line")
        .attr("stroke", "rgb(96,125,139)")
        .attr("stroke-dasharray", "1,2");


// data = {
//   const text = await FileAttachment("data/2021_pantone_sm.csv").text();
//   const parseYear = d3.utcParse("%Y-%m-%d");
//   return d3.csvParse(text, ({title, color, year}) => ({
//     title: title,
//     color: color,
//     year: parseDate(year),
//     temperature: +temperature
//   }));
// }

// data = d3.csvParse(await FileAttachment("data/2021_pantone_sm.csv").csv({typed: true})).map(({title: title, color:color, year: year, }) => ({title, color, year: new Date[+year]}));
// console.log(data)
    
d3.csv("data/2021_pantone_sm.csv").then(function (data) {


    // let dataSet = data;
    // console.log(dataSet)

    var minYear = d3.min(data, d => d.year); 
    var maxYear = d3.max(data, d => d.year); 

    var x = d3.scaleTime()
      // .domain(d3.extent(data, d => d.year))
      // .domain(d3.extent(data, function(d) { return d.year; }))
      // .domain([new Date("1910"), new Date("2020")])
      // .domain([d3.min(data, function(d) { return d.year; }), d3.max(data, function(d) { return d.year; })])
      .domain(minYear, maxYear)
      .range([margin.left, width - margin.right]);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x)
        .ticks(10)
        .tickFormat(d3.timeFormat('%Y'))
        .tickSizeOuter(0));

    //// dots
        let dots = svg.selectAll(".dots")
            .data(data, function(d) { return d.color })
            .enter()
            .append("circle")
            .attr("class", "dots")
            .attr("r", 10)
            .attr("fill", function(d){ return colors(d.color)})
            // .attr("cx", d => d.x)
            .attr("cx", function(d) { return d.year; })
            .attr("cy", function(d) { return d.y; });

    //// simulation
            let simulation = d3.forceSimulation(data)
            // Apply positioning force to push nodes towards desired position along X axis
            .force("x", d3.forceX(function(d) {
                // return +d.year);  // This is the desired position
            }).strength(2))  // Increase velocity
            .force("y", d3.forceY((height / 2) - margin.bottom / 2))  // // Apply positioning force to push nodes towards center along Y axis
            .force("collide", d3.forceCollide(9)) // Apply collision force with radius of 9 - keeps nodes centers 9 pixels apart
            .stop();  // Stop simulation from starting automatically

        // Manually run simulation
        for (let i = 0; i < data.length; ++i) {
            simulation.tick(10);
        }

        //// tool tip on hover
        d3.selectAll(".dots").on("mousemove", function(d) {
            tooltip.html(`Title: <strong>${d.title}</strong><br><br>
                          See more: <emphasis>${d.url}</emphasis>`)
                .style('top', d3.event.pageY - 12 + 'px')
                .style('left', d3.event.pageX + 25 + 'px')
                .style("opacity", 0.9);

            xLine.attr("x1", d3.select(this).attr("cx"))
                .attr("y1", d3.select(this).attr("cy"))
                .attr("y2", (height - margin.bottom))
                .attr("x2",  d3.select(this).attr("cx"))
                .attr("opacity", 1);

        }).on("mouseout", function(_) {
            tooltip.style("opacity", 0);
            xLine.attr("opacity", 0);
        });

});




