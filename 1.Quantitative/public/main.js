//// chart
    var margin = {top: 200, right: 20, bottom: 30, left: 20},
      width = 5000 - margin.left - margin.right,
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


// data = await d3.csv("data/2021_pantone_sm.csv", function(data) {
//     for (var i = 0; i < data.length; i++) {
//         console.log(data[i].title);
        // console.log(data[i].color);
        // console.log(data[i].year);


// .map(({title: title,year: year, color:color }) => ({title, year: new Date[+year], color:color, }));

// d3.csv("data/2021_pantone.csv").then(function (data) {    

d3.csv("data/2021_pantone_sm.csv").then(function (data) {


    var minYear = d3.min(data, d => d.year); 
    console.log(minYear)

    var maxYear = d3.max(data, d => d.year); 
    console.log(maxYear)

    var xScale = d3.scaleLinear()
      .domain([new Date(minYear), new Date(maxYear)])
      .range([margin.left, width - margin.right]);
      // domain([0, d3.max(data, function (d) {
      //   return d3.max(d.id, function (d) {
      //       return d.year;
      //   });

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)
        .ticks(20)
        .tickFormat(d3.timeFormat('%Y'))
        .tickSizeOuter(-1));

    //// dots
        let dots = svg.selectAll(".dots")
            .data(data, function(d) { return d.color })
            .enter()
            .append("circle")
            .attr("class", "dots")
            .attr("r", 10)
            .attr("fill", function(d){ return colors(d.color)})
            // .attr("cx", d => d.x)
            .attr("cx", function(d){return xScale(d.year)}) 
            .attr("cy", function(d) { return d.y; });

    svg.append("g")


    // //// simulation
    //         let simulation = d3.forceSimulation(data)
    //         .force("x", d3.forceX(function(d) {
    //             return  xScale(+d.year)  //// x axis mapping
    //         }).strength(2))  ////
    // //         .force("y", d3.forceY((height / 2) - margin.bottom / 2))  //// force to push nodes towards center along y axis
    // //         .force("collide", d3.forceCollide(8)) //// force 8px padding
    // //         // .stop();  

    //     //// run simulation
    //     for (let i = 0; i < data.length; ++i) {
    //         simulation.tick(10);
    //     }


        //// tool tip on hover
        d3.selectAll(".dots").on("mousemove", function(d) {
            tooltip.html(`<strong>${d.title}</strong><br><br>
                            Medium: ${d.media_id}<br>
                            Type: ${d.type_id}<br>
                                See more: ${d.url}`)
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