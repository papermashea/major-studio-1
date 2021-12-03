// import d3 from 'd3';
// import * as d3 from './../node_modules/d3/dist/d3.js';
// import * as d3 from '../node_modules/d3/dist/d3.js';
// import d3 from '/node_modules/d3';
// import d3 from './node_modules/d3';
// import d3 from '../node_modules/d3';

// import d3 from '/node_modules/d3/src/index.js';
// import * as d3 from '/node_modules/d3/src/index.js';

// import d3 from './node_modules/d3/src/index.js';
// import * as d3 from './node_modules/d3/src/index.js';

// import d3 from '../node_modules/d3/src/index.js';
// import * as d3 from './../node_modules/d3/src/index.js';

// import d3 from '../../node_modules/d3/src/index.js';
// import * as d3 from '../../node_modules/d3/src/index.js';

// import d3 from '/node_modules/d3/dist/d3.js';
// import * as d3 from '/node_modules/d3/dist/d3.js';

// import d3 from './node_modules/d3/dist/d3.js';
// import * as d3 from './node_modules/d3/dist/d3.js';

// import d3 from '../node_modules/d3/dist/d3.js';
// import * as d3 from '../node_modules/d3/dist/d3.js';

// import { d3 } from '../node_modules/d3/dist/d3.js';



//// chart
    var margin = {top: 20, right: 20, bottom: 30, left: 60},
      width = 1200 - margin.left - margin.right,
      height = 900 - margin.top - margin.bottom;
      // height = d3.max(Y) + (radius + padding) * 2 - margin.top - margin.bottom;

    var svg = d3.select("#chart")
    .append("svg")
      .attr("width", width)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  //// tooltip
    // let tooltip = d3.select("#chart").append("div")
    //     .attr("class", "tooltip")
    //     .style("opacity", 0);

    // let xLine = svg.append("line")
    //     .attr("stroke", "rgb(96,125,139)")
    //     .attr("stroke-dasharray", "1,2");



d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/local/3.Interactive/public/data/colorDataY.json").then(function (data) { 
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/local/cooper_data/data/allObjectsCountries.json.json").then(function (data) { 
  // let d = data;

    // var yearRange = d3.extent(data, d => d.objectID);
    // var minYear = d3.min(data, d => d.year); 
    var minYear = 1821; 
    // var maxYear = d3.max(data, d => d.year); 
    var maxYear = 2021; 
    // console.log(minYear,maxYear)

    var xScale = d3.scaleTime()
      .domain([minYear, maxYear])
      .range([margin.left, width - margin.right]);

    // Compute which data points are considered defined.
    var radius = 3;
    var padding = .5;
    // var limit = height - margin.bottom - radius - padding;
    // console.log(limit)

    const X = d3.map(data, d => d.year);  
    const I = d3.range(X.length).filter(data => !isNaN(X[data]));
    const Y = dodge(I.map(data => xScale(X[data])), radius * 2 + padding);
    // console.log(Y)
    console.log(height - d3.min(Y) - margin.bottom - radius - padding)
    // console.log(d3.max(Y))
    console.log(d3.min(Y),d3.max(Y))

    // Compute the default height;
    // var height = d3.max(Y) + (radius + padding) * 2 - margin.top - margin.bottom;

    function dodge(X, radius) {
      const Y = new Float64Array(X.length);
      const radius2 = radius ** 1; //**2
      const epsilon = 1e-3;
      let head = null, tail = null;

      // Returns true if circle ⟨x,y⟩ intersects with any circle in the queue.
      function intersects(x, y) {
        let a = head;
        while (a) {
          const ai = a.index;
          if (radius2 - epsilon > (X[ai] - x) ** 2 + (Y[ai] - y) ** 2) return true;
          a = a.next;
        }
        return false;
      }
    
      // Place each circle sequentially.
      for (const bi of d3.range(X.length).sort((i, j) => X[i] - X[j])) {

        // Remove circles from the queue that can’t intersect the new circle b.
        while (head && X[head.index] < X[bi] - radius2) head = head.next;
    
        // Choose the minimum non-intersecting tangent.
        if (intersects(X[bi], Y[bi] = 0)) {
          let a = head;
          Y[bi] = Infinity;
          do {
            const ai = a.index;
            let y = Y[ai] + Math.sqrt(radius2 - (X[ai] - X[bi]) ** 2);
            if (y < Y[bi] && !intersects(X[bi], y)) Y[bi] = y;
            a = a.next;
          } while (a);
        }
    
        // Add b to the queue.
        const b = {index: bi, next: null};
        if (head === null) head = tail = b;
        else tail = tail.next = b;
      }
    
      return Y;
    }


// Three function that change the tooltip when user hover / move / leave a cell

    var mouseover = function(event, d) {
      Tooltip.style("opacity", 1)
    }
    var mousemove = function(event, d) {
      Tooltip
        .html("<strong>" + d.title + "</strong> | <i>" + d.year + "</i><p>Type: " + d.type + "<br> Medium: " + d.media + "</p>")
        .style("background-color", d.color)
        .style("left", (d3.select(this).attr("cx") + 'px'))
        .style("top", (d3.select(this).attr("cy") + 'px'))
    }
    var mouseleave = function(event, d) {
      Tooltip.style("opacity", 0)
    }

    var Tooltip = d3.select("#chart")
      .append("div")
      .attr("class", "tooltip")
      .style("padding", "8px")
      .style("opacity", .4)
      .style("color", "white");

  svg.append("g")


  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)
        .ticks(20)
        .tickFormat(d3.format("d"))
        .tickSizeOuter(0));


    //// dots
        let dots = svg.selectAll(".dots")
            .data(data, function(d) { return d.color })
            .enter()
            .append("circle")
              .attr("class", "dots")
              .attr("r", radius)
              .attr("fill", function(d){ return d.color})
              .attr("cx", function(d){return xScale(d.year)}) 
              .attr("cy", function(d, i) { return height - Y[i] - margin.top - radius - padding })
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);

            // console.log(data)

        //// tool tip on hover
        // d3.selectAll(".dots").on("mousemove", function(d, i) {
        //     tooltip
        //     // .data(data, function(d, i) { return d.title })
        //     // .html("<strong>" + ${d.title} + "</strong>")
        //     // .html(`<strong>Drawing, Designs for Souvenir Fans</strong><br><br>
        //     //                 Medium: transparent watercolor, white gouache<br>
        //     //                 Type: Drawing<br>`)
        //       .html(d.title)
        //       .style("background-color", "black")
        //       .style("color", "white")
        //       .style('top', d3.select(this).attr("cx") + 'px')
        //       .style('left', d3.select(this).attr("cy") + 'px')
        //       .style("opacity", 0.9);

        //     xLine.attr("x1", d3.select(this).attr("cx"))
        //         .attr("y1", d3.select(this).attr("cy"))
        //         .attr("y2", (height - margin.bottom))
        //         .attr("x2",  d3.select(this).attr("cx"))
        //         .attr("opacity", 1);

        // }).on("mouseout", function(_) {
        //     tooltip.style("opacity", 0);
        //     xLine.attr("opacity", 0);
        // });

    });

