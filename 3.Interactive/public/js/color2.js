//// chart
    var margin = {top: 50, right: 40, bottom: 30, left: 20},
      width = 1200 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

    var svg = d3.select("#chart")
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

    let xLine = svg.append("line")
        .attr("stroke", "rgb(96,125,139)")
        .attr("stroke-dasharray", "1,2");

d3.json("data/colorDataY.json").then(function (data) { 


    var yearRange = d3.extent(data, d => d.objectID);
    var minYear = d3.min(data, d => d.year); 
    var maxYear = d3.max(data, d => d.year); 
    console.log(minYear,maxYear)

    var xScale = d3.scaleTime()
      .domain([minYear, maxYear])
      .range([margin.left, width - margin.right]);

    var minID = d3.min(data, d => d.objectID); 
    var maxID = d3.max(data, d => d.objectID);
    console.log(minID, maxID)

    // var minY = Math.round(minID/10000);
    // var maxY = Math.round(maxID/10000);
    // console.log(minY,maxY)

    // var minY = minID.Substring(str.Length - 3);
    // var maxY = minID.Substring(str.Length - 3);
    // console.log(minY,maxY)

    // var yScale = d3.scaleLinear()
    //     .domain([minID, maxID])
    //     .range([100, 400]);
    //     // console.log(yScale)

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)
        .ticks(14)
        .tickFormat(d3.format("d"))
        .tickSizeOuter(-2));

    //// dots
        let dots = svg.selectAll(".dots")
            .data(data, function(d) { return d.color })
            .enter()
            .append("circle")
            .attr("class", "dots")
            .attr("r", 10)
            .attr("fill", function(d){ return d.color})
            // .attr("cx", d => d.x)
            .attr("cx", function(d){return xScale(d.year)}) 
            .attr("cy", function(d){return y });

    svg.append("g")


    //// simulation
            let simulation = d3.forceSimulation(data)
            .force("x", d3.forceX(function(d) {
                return  xScale(+d.year)  //// x axis mapping
            }).strength(2))  ////
            .force("y", d3.forceY((height / 2) - margin.bottom / 2))  //// force to push nodes towards center along y axis
            .force("collide", d3.forceCollide(8)) //// force 8px padding
            .stop();  

        //// run simulation
        for (let i = 0; i < data.length; ++i) {
            simulation.tick(10);
        }


        //// tool tip on hover

            

        d3.selectAll(".dots").on("mousemove", function(d) {
            tooltip
            // .data(data, function(d) { return d.title })
            .html(`<strong>Drawing, Designs for Souvenir Fans</strong><br><br>
                            Medium: transparent watercolor, white gouache<br>
                            Type: Drawing<br>`)
                .style("background-color", "black")
                .style("color", "white")
                .style('top', d3.select(this).attr("cx") + 'px')
                .style('left', d3.select(this).attr("cy") + 'px')
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