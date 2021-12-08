//// chart
    var margin = {top: 20, right: 10, bottom: 30, left: 60},
      width = 1200 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;
      // height = d3.max(Y) + (radius + padding) * 2 - margin.top - margin.bottom;

    var svg = d3.select("#chart")
    .append("svg")
      .attr("width", width)
      .attr("height", height + margin.top + margin.bottom)

d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/docs/data/1900_2000.json")
.then(function (data) { 
// console.log(data.length)

const countryGroup = new Set(data.map(d => d.country))
// console.log(countryGroup)

//// dropdown
  d3.select("#selectCountry")
    .selectAll('myOptions')
      .data(countryGroup)
    .enter()
      .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button

//// scales
    var minYear = d3.min(data, d => d.year_end); 
    var maxYear = d3.max(data, d => d.year_end); 
    var timeline = d3.extent(data, d => d.year_end);
    var sort = d3.extent(data, d => d.hue);
    // console.log(sort)

    var xScale = d3.scaleTime()
      .domain(timeline)
      .range([margin.left, width - margin.right]);
    
    var yScale = d3.scaleLinear()
      .domain(sort).nice()
      .rangeRound([margin.top, height - margin.bottom]);

    var radius = 5;
    var padding = 2;


//// filters
    // let color = d3.scaleBand()
// const country ="country";

//     let state = {
//       data: [],
//       filters: {
//         menu: [],
//         checked: [],
//       },

//// tooltip functions
    var mouseover = function(event, d) {
      Tooltip.style("opacity", 1)
    }
    var mousemove = function(event, d) {
      Tooltip
        .html("<img src='" + d.image + "'>"+
          "<div id='header'" +
          "<div id='title'>" + d.title + " | <span id='year'>" + d.year_end + 
          "</span></div></div>" +
          "<p id='details'>Type: " + d.type + "</p>" +
          "<p id='details'>Medium: " + d.media + "</p>" +
          "<p id='more'>Click for more information about object " + d.objectID + "</p>")
        .style("background-color", d.hex)
        .style("left", (d3.select(this).attr("cx") + 'px'))
        .style("top", (d3.select(this).attr("cy") + 'px'));
    }

    var mouseleave = function(event, d) {
      Tooltip.style("opacity", 0);
    }

    var Tooltip = d3.select("#chart")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", .4)
      .style("color", "white");

  //// axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)
        .ticks(20)
        .tickFormat(d3.format("d"))
        .tickSizeOuter(0));


  //// dots
        let dots = svg.selectAll(".dots")
            .enter()
            .data(countryGroup)
            .append("svg:a")
              .attr("xlink:href", function(d){return d.url;})
              .attr("target", "_blank")
            .append("circle")
              .attr("class", "dots")
              .attr("r", radius)
              .style("fill", function(d){ return d.hex})
              .attr("cx", function(d){return xScale(d.year_end)}) 
              .attr("cy", function(d, i) { return yScale(d.hue)})
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)

//// filter
     function update(selectedGroup) {

        // Create new data with the selection?
        const dataFilter = data.filter(function(d){return d.country==selectedGroup})

        // Give these new data to update line
        dots
          .data(dataFilter)
            .transition()
            .duration(1000)
            .append("svg:a")
              .attr("xlink:href", function(d){return d.url;})
              .attr("target", "_blank")
          .append("circle")
            .attr("class", "dots")
            .attr("r", radius)
            .style("fill", function(d){ return d.hex})
            .attr("cx", function(d){return xScale(d.year_end)}) 
            .attr("cy", function(d, i) { return yScale(d.hue)});

        // When the button is changed, run the updateChart function
        d3.select("#selectCountry").on("change", function(event,d) {
            // recover the option that has been chosen
            const selectedOption = d3.select(this).property("value")
            // run the updateChart function with this selected option
            update(selectedOption)
        })
      }

//// force
   const dataFixed = data.map(d => ({px:d.year_end, py:d.hue}));    
    // console.log("before", dataFixed[0]);
    
    const simulation = d3.forceSimulation(dataFixed)
      .force("x", d3.forceX(d=> xScale(d.px)))
      .force("y", d3.forceY(d=> yScale(d.py)))
      .force("collide", d3.forceCollide(radius).strength([]).iterations(1))
      // .force("collide", d3.forceCollide().radius(5).iterations(10))
    
    //// running for all data
    // for(let i=0; i< data.length; i++)
    for(let i=0; i<1000; i++)
      simulation.tick();  
    simulation.stop();
      
    // console.log(dataFixed);

    }); // close d3 