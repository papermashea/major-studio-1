  var margin = {top: 10, right: 30, bottom: 30, left: 20},
      width = 940 - margin.left - margin.right,
      height = 470 - margin.top - margin.bottom;

  var svg = d3.select("#pantone_viz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  d3.json("data/objects_pantone-yellow_cln.json").then(function (data) {
        // x axis
        var x = d3.scaleTime()
          .domain([new Date("1910"), new Date("2020")])
          .range([ 0, width ]);
        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

        // y axis
        // var y = d3.scaleLinear()
        //   .domain([0, 5000000])
        //   .range([ height, 0]);
        // svg.append("g")
        //   .call(d3.axisLeft(y));


        // add dots
        svg.append('g')
          .selectAll("dot")
          .data(data)
          .enter()
          .append("circle")
            .attr("cx", function (d) { return x(d.year_acquired); } )
            .attr("cy", (height / 2) - margin.bottom / 2)
            // .attr("cy", function (d) { return y(d.id); } )
            .attr("r", 1.5)
            .style("fill", "#F5DF4D")

});













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