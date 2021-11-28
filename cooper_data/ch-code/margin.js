  var margin = {top: 10, right: 30, bottom: 30, left: 20},
      width = 940 - margin.left - margin.right,
      height = 470 - margin.top - margin.bottom;

  var radius = 1;
  var padding = 1.5;

  var svg = d3.select("#pantone_viz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


  d3.json("data/objects_pantone-yellow_cln.json").then(function (data) {
    console.log(data)

        // x axis
        var x = d3.scaleTime()
          .domain([new Date("1910"), new Date("2020")])
          .range([ 0, width ]);
        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));


        function dodge({x = d => d} = {}) {
          const circles = (d, i, data) => ({x: +x(d, i, data), data: d}).sort((a, b) => a.x - b.x);
          const radius2 = radius ** 2;
          const epsilon = 1e-3;
          let head = null, tail = null;

          // Returns true if circle ⟨x,y⟩ intersects with any circle in the queue.
          function intersects(x, y) {
            let a = head;
            while (a) {
              if (radius2 - epsilon > (a.x - x) ** 2 + (a.y - y) ** 2) {
                return true;
              }
              a = a.next;
            }
            return false;
          }

          // Place each circle sequentially.
          for (const b of circles) {

            // Remove circles from the queue that can’t intersect the new circle b.
            while (head && head.x < b.x - radius2) head = head.next;

            // Choose the minimum non-intersecting tangent.
            if (intersects(b.x, b.y = 0)) {
              let a = head;
              b.y = Infinity;
              do {
                let y = a.y + Math.sqrt(radius2 - (a.x - b.x) ** 2);
                if (y < b.y && !intersects(b.x, y)) b.y = y;
                a = a.next;
              } while (a);
            }

            // Add b to the queue.
            b.next = null;
            if (head === null) head = tail = b;
            else tail = tail.next = b;
          }

          return circles;
        }


        // add dots
        svg.append('g')
          .selectAll("dots")
          .data(dodge(data, {radius: radius * 2 + padding, x: d => x(d.value)}))
          .enter()
          .append("circle")
            .attr("cx", function (data) { return x(d.year_acquired); } )
            .attr("cy", (height / 2) - margin.bottom / 2)
            .attr("r", radius)
            .attr("r", 1.5)
            .style("fill", "#F5DF4D")


});


        // function dodge(yp, {radius = 1, x = d => d} = {}) {
        //   const radius2 = radius ** 2;
        //   const circles = yp((d, i, data) => ({x: +x(d, i, data), data: d})).sort((a, b) => a.x - b.x);
        //   const epsilon = 1e-3;
        //   let head = null, tail = null;

        //   // Returns true if circle ⟨x,y⟩ intersects with any circle in the queue.
        //   function intersects(x, y) {
        //     let a = head;
        //     while (a) {
        //       if (radius2 - epsilon > (a.x - x) ** 2 + (a.y - y) ** 2) {
        //         return true;
        //       }
        //       a = a.next;
        //     }
        //     return false;
        //   }

        //   // Place each circle sequentially.
        //   for (const b of circles) {

        //     // Remove circles from the queue that can’t intersect the new circle b.
        //     while (head && head.x < b.x - radius2) head = head.next;

        //     // Choose the minimum non-intersecting tangent.
        //     if (intersects(b.x, b.y = 0)) {
        //       let a = head;
        //       b.y = Infinity;
        //       do {
        //         let y = a.y + Math.sqrt(radius2 - (a.x - b.x) ** 2);
        //         if (y < b.y && !intersects(b.x, y)) b.y = y;
        //         a = a.next;
        //       } while (a);
        //     }

        //     // Add b to the queue.
        //     b.next = null;
        //     if (head === null) head = tail = b;
        //     else tail = tail.next = b;
        //   }

        //   return circles;
        // }








    // console.log(data);
        // data.year_acquired = new Date(+data.year_acquired, 0, 1);
  
         // var minYear = d3.min(data, d => data.year_acquired); 
         //   console.log(minYear)
        
         // var maxYear = d3.max(data, d => data.year_acquired); 
        // var parseTime = d3.timeParse("%b %d, %Y");

        // var domain = d3.extent(data.year_acquired);

        // var minYear = d3.min(data, function(d) {
        //   return d3.min(d.year_acquired, function(e) { return d3.min(e); });
        // });

        // var xScale = d3.scaleTime()
        //   .domain(1900,2010)
        //   .range([25, 555]);

        // var xAxis = d3.axisBottom(xScale);

        // svg.append("g")
        //   .attr("transform", "translate(0,60)")
        //   .call(xAxis.ticks(d3.timeYear));

        // .ticks(d3.timeYear)