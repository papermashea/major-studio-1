let height = 600;
let width = 1000;
let margin = ({top: 0, right: 40, bottom: 34, left: 40});


// Data structure describing volume of displayed data
let Count = {
    year: "year",
    year_acquired: "year_acquired"
};

// Data structure describing legend fields value
let Legend = {
    year: "Year created",
    year_acquired: "Year acquired"
};

let chartState = {};

chartState.measure = Count.id;
chartState.legend = Legend.year;


// Colors used for circles depending on continent
let colors = d3.scaleOrdinal()
    .domain(["F5DF4D", "939597"])
    .range(['#F5DF4D','#939597']);

d3.select("yellow").style("color", colors("F5DF4D"));
d3.select("grey").style("color", colors("939597"));

let svg = d3.select("#pantone_viz")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

let xScale = d3.scaleLinear()
    .range([margin.left, width - margin.right]);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (height - margin.bottom) + ")");

// Create line that connects circle and X axis
let xLine = svg.append("line")
    .attr("stroke", "rgb(96,125,139)")
    .attr("stroke-dasharray", "1,2");

// Create tooltip div and make it invisible
let tooltip = d3.select("#pantone_viz").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Load and process data
d3.csv("data/2021_pantone_sm.csv").then(function (data) {

    let dataSet = data;
    console.log(dataSet)

    // Set chart domain max value to the largest year
    xScale.domain(d3.extent(data, function (d) {
        return +d.year;
    }));

    redraw();

    // Listen to click on "year" and "year_acquired" buttons and trigger redraw when they are clicked
    d3.selectAll(".measure").on("click", function() {
        let thisClicked = this.value;
        chartState.measure = thisClicked;
        if (thisClicked === Count.year) {
            chartState.legend = Legend.year;
        }
        if (thisClicked === Count.year_acquired) {
            chartState.legend = Legend.year_acquired;
        }
        redraw();
    });


    // Trigger filter function whenever checkbox is ticked/unticked
    d3.selectAll("input").on("change", filter);

    function redraw() {

        // xScale.domain(d3.extent(dataSet, function(d) {
        //     return +d.year;
        // }));

        // let xAxis;
        // // // Set X axis based on new scale
        // // if (chartState.measure === Count.year_acquired) {
        // //     xAxis = d3.axisBottom(xScale)
        // //         .ticks(10, ".1f")
        // //         .tickSizeOuter(0);
        // // }
        // // else {
        //     xAxis = d3.axisBottom(xScale)
        //         .ticks(10, "")
        //         .tickSizeOuter(0);
        // // }

        // d3.transition(svg).select(".x.axis")
        //     .transition()
        //     .duration(1000)
        //     .call(xAxis);

        var x = d3.scaleTime()
          .domain([new Date("1800"), new Date("2020")])
          .range([ 0, width ]);

        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

        // Create simulation with specified dataset
        let simulation = d3.forceSimulation(dataSet)
            // Apply positioning force to push nodes towards desired position along X axis
            .force("x", d3.forceX(function(d) {
                // Mapping of values from year/year_acquired column of dataset to range of SVG chart (<margin.left, margin.right>)
                return xScale(+d[chartState.measure]);  // This is the desired position
            }).strength(2))  // Increase velocity
            .force("y", d3.forceY((height / 2) - margin.bottom / 2))  // // Apply positioning force to push nodes towards center along Y axis
            .force("collide", d3.forceCollide(4)) // Apply collision force with radius of 9 - keeps nodes centers 9 pixels apart
            .stop();  // Stop simulation from starting automatically

        // Manually run simulation
        for (let i = 0; i < dataSet.length; ++i) {
            simulation.tick(10);
        }

        // Create circles
        let dots = svg.selectAll(".dots")
            .data(dataSet, function(d) { return d.color });

            

        // dots.exit()
        //     .transition()
        //     .duration(1000)
        //     .attr("cx", 0)
        //     .attr("cy", (height / 2) - margin.bottom / 2)
        //     .remove();

        dots.enter()
            .append("circle")
            .attr("class", "dots")
            .attr("cx", 0)
            .attr("cy", (height / 2) - margin.bottom / 2)
            .attr("r", 6)
            .attr("fill", function(d){ return colors(d.color)})
            .merge(dots)
            .transition()
            .duration(2000)
            .attr("cx", function(d) { return d.year; })
            .attr("cy", function(d) { return d.y; });

        // Show tooltip when hovering over dot
        d3.selectAll(".dots").on("mousemove", function(d) {
            tooltip.html(`Title: <strong>${d.title}</strong><br>
                          Title: <emphasis>${d.type}</emphasis> + ' | ' + ${d.medium}<br>`)
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

    }

    // Filter data based on which checkboxes are ticked
    function filter() {

        function getCheckedBoxes(checkboxName) {

            let checkboxes = d3.selectAll(checkboxName).nodes();
            let checkboxesChecked = [];
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    checkboxesChecked.push(checkboxes[i].defaultValue);
                }
            }
            return checkboxesChecked.length > 0 ? checkboxesChecked : null;
        }

        let checkedBoxes = getCheckedBoxes(".color");

        let newData = [];

        if (checkedBoxes == null) {
            dataSet = newData;
            redraw();
            return;
        }

        for (let i = 0; i < color.length; i++){
            let newArray = data.filter(function(d) {
                return d.color === checkedBoxes[i];
            });
            Array.prototype.push.apply(newData, newArray);
        }

        dataSet = newData;
        redraw();
    }

}).catch(function (error) {
    if (error) throw error;
});