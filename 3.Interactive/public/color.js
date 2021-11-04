//// chart
    var margin = {top: 50, right: 40, bottom: 30, left: 20},
      width = 1400 - margin.left - margin.right,
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
  // console.log(data[1])
  let d = data;

    var yearRange = d3.extent(data, d => d.objectID);
    var minYear = d3.min(data, d => d.year); 
    var maxYear = d3.max(data, d => d.year); 
    // console.log(minYear,maxYear)

    var xScale = d3.scaleTime()
      .domain([minYear, maxYear])
      .range([margin.left, width - margin.right]);

    var minID = d3.min(data, d => d.objectID); 
    var maxID = d3.max(data, d => d.objectID);
    // console.log(minID, maxID)
    
    var minID = d3.min(data, d => d.objectID); 
    var maxID = d3.max(data, d => d.objectID);
    console.log(minID, maxID)

    var minY = Math.round(minID/10000);
    var maxY = Math.round(maxID/10000);
    // console.log(minY,maxY)

      var yScale = d3.scaleLinear()
      .domain([minID, maxID])
      .range([100, 400]);
      // console.log(yScale)

    // Compute which data points are considered defined.
    var radius = 5;
    var padding = 2;

    const X = d3.map(data, d => d.year);  
    const I = d3.range(X.length).filter(data => !isNaN(X[data]));
    const Y = dodge(I.map(data => xScale(X[data])), radius * 2 + padding);

    console.log(Y)

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
            .attr("r", radius)
            .attr("fill", function(d){ return d.color})
            // .attr("cx", d => d.x)
            .attr("cx", function(d){return xScale(d.year)}) 
            .attr("cy", function(d){return yScale(d.objectID) });

    svg.append("g")


    // Compute the default height;
    if (height === undefined) height = d3.max(Y) + (radius + padding) * 2 + marginTop + marginBottom;


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