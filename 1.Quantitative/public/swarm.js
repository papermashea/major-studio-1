//// chart
    var margin = {top: 40, right: 20, bottom: 30, left: 60},
      width = 1400 - margin.left - margin.right,
      height = 1400 - margin.top - margin.bottom;

    var svg = d3.select("#chart")
    .append("svg")
      .attr("width", width)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // tooltip
    let tooltip = d3.select("#chart").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    let xLine = svg.append("line")
        .attr("stroke", "rgb(96,125,139)")
        .attr("stroke-dasharray", "1,2");

d3.json("data/colorDataY.json").then(function (data) { 
  // let d = data;

    // var yearRange = d3.extent(data, d => d.objectID);
    var minYear = d3.min(data, d => d.year); 
    var maxYear = d3.max(data, d => d.year); 
    // console.log(minYear,maxYear)

    var xScale = d3.scaleTime()
      .domain([minYear, maxYear])
      .range([margin.left, width - margin.right]);

    // Compute which data points are considered defined.
    var radius = 3;
    var padding = .5;

    const X = d3.map(data, d => d.year);  
    const I = d3.range(X.length).filter(data => !isNaN(X[data]));
    const Y = dodge(I.map(data => xScale(X[data])), radius * 2 + padding);
    console.log(Y)

    // Compute the default height;
    // if (height === undefined) height = d3.max(Y) + (radius + padding) * 2 - margin.top - margin.bottom;

    function dodge(X, radius) {
      const Y = new Float64Array(X.length);
      const radius2 = radius ** 2;
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


  // Create simulation with specified dataset
  // let simulation = d3.forceSimulation(data)
  //     // Apply positioning force to push nodes towards desired position along X axis
  //     .force("x", d3.forceX(function(d) {
  //         // Mapping of values from total/perCapita column of dataset to range of SVG chart (<margin.left, margin.right>)
  //         return xScale(+d[chartState.measure]);  // This is the desired position
  //     }).strength(2))  // Increase velocity
  //     .force("y", d3.forceY((height / 2) - margin.bottom / 2))  // // Apply positioning force to push nodes towards center along Y axis
  //     .force("collide", d3.forceCollide(9)) // Apply collision force with radius of 9 - keeps nodes centers 9 pixels apart
  //     .stop();  // Stop simulation from starting automatically


  svg.append("g")

  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)
        .ticks(30)
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
            .attr("cy", function(d, i) { return Y[i]});

            console.log(data)

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

