    function update(){
      //// checkboxes
      d3.selectAll("#color").each(function(d){
        cb = d3.select(this);
        clr = cb.property("value")

        //// selected
        if(cb.property("checked")){
          svg.selectAll("."+clr).transition().duration(100)
          .style("opacity", 1).attr("r", radius)

        //// hidden
        }else{

        d3.forceSimulation(dataFixed)
          .force("collide", d3.forceCollide(radius+2).iterations(10))
          .force("center")

        svg.selectAll("."+clr).transition().duration(100)
          .style("opacity", 0).attr("r", 0)


        }
      })
    }
