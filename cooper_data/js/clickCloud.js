
// function wordCloud(){
  
  // var s = d3.scaleSqrt()
  //   .domain([1, d3.max(data.map(d => d.value))])
  //   .range([6, 48]);

  // const fontFamily = "Verdana, Arial, Helvetica, sans-serif";
  
  // const svg = d3.select("#cloud")
  // .append("svg")
  //   .attr("width", width)
  //   .attr("height", height + margin.top + margin.bottom)
  //   .attr("viewBox", [0, 0, width, height])
  //   .attr("font-family", fontFamily)
  //   .attr("text-anchor", "middle");

  // const displaySelection = svg.append("text")
  //   .attr("font-family", "Lucida Console, Courier, monospace")
  //   .attr("text-anchor", "start")
  //   .attr("alignment-baseline", "hanging")
  //   .attr("x", 10)
  //   .attr("y", 10);
    
  // const cloud = d3.layout.cloud()
  //   .size([width, height])
  //   .words(data.map(d => Object.create(d)))
  //   .padding(1)
  //   .rotate(() => 0)
  //   .font(fontFamily)
  //   .fontSize(d => s(d.value))
  //   .on("word", ({size, x, y, rotate, words, value}) => {
  //     svg.append("text")
  //       .attr("font-size", size)
  //       .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
  //       .text(words)
  //       .classed("click-only-text", true)
  //       .classed("word-default", true)
  //       .on("mouseover", handleMouseOver)
  //       .on("mouseout", handleMouseOut)
  //       .on("click", handleClick);
      
  //       function handleMouseOver(d, i) {
  //         d3.select(this)
  //           .classed("word-hovered", true)
  //           .transition(`mouseover-${words}`).duration(300).ease(d3.easeLinear)
  //             .attr("font-size", size + 2)
  //             .attr("font-weight", "bold");
  //       }
        
  //       function handleMouseOut(d, i) {
  //         d3.select(this)
  //           .classed("word-hovered", false)
  //           .interrupt(`mouseover-${words}`)
  //             .attr("font-size", size);
  //       }
        
  //       function handleClick(d, i) {
  //         var e = d3.select(this);
  //         displaySelection.text(`${value} total ${e.text()}s`);
  //         e.classed("word-selected", !e.classed("word-selected"));
  //       }

  //   });
  
  // cloud.start();
  // // invalidation.then(() => cloud.stop());
  
  // return svg.node();
// }