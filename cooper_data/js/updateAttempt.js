var margin = {top: 20, right: 20, bottom: 30, left: 20},
  width = 1200 - margin.left - margin.right,
  height = 850 - margin.top - margin.bottom;

const fontFamily = "Verdana, Arial, Helvetica, sans-serif";

const svg = d3.select("#cloud")
  .append("svg")
  .attr("width", width)
  .attr("height", height + margin.top + margin.bottom)
  .attr("viewBox", [0, 0, width, height])
  .attr("font-family", fontFamily)
  .attr("text-anchor", "middle");

const displaySelection = svg.append("text")
  .attr("font-family", "Lucida Console, Courier, monospace")
  .attr("text-anchor", "start")
  .attr("alignment-baseline", "hanging")
  .attr("x", 10)
  .attr("y", 10);

//// create data
d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/docs/data/1900_2000.json")
.then(function (data) { 
  // console.log(data)
  // console.log(data.length)

var typeNest = d3.nest()
  .key(function(d) { return d.type; })
  // .key(function(d) { return d.country})
  .rollup(function(v) { return v.length; })  
  .entries(data);
  // console.log(typeNest)
var tData = typeNest.map( function(f) {
    var country = f.values
    var types = {
      words: (f.key).replace(' and ', '').replace(' - ', ''),
      value: f.value
      // countries: f.values.length 
    }
    return types
  }); //data
// console.log(tData)

var medNest = d3.nest()
  .key(function(d) { return (d.media).replace(' on ', " ").replace(' or ', " ").replace(' and ', " ").replace(' with ', " ").replace(' in ', " ").replace(/[!\.:,;\?]/g, ""); })
  .rollup(function(v) { return v.length; })
  // .key(function(d) { return d.country; })
  .entries(data);
  // console.log(medNest)

var mData = medNest.map( function(f) {
    var mediums = {
      words: f.key,
      value: f.value,      
      // countries: (f.values).join(),
    }
    return mediums
}); //mdata
// console.log(mData)

d3.selectAll(".form-check-input").on("change", update);

var words = [];
var wData;
function update(){
    let val = d3.select('input[name="exampleRadios"]:checked').property("value");
    // console.log(val)
    while (words.length > 0) {
        words.pop();
    }
    if(val == "medium"){
      var wData = mData;
      for (var i = 0; i < mData.length; i++) {        
        let mediums = mData[i].words
        words.push(mediums)
      }
      } else {
        var wData = tData;
      for (var i = 0; i < tData.length; i++) {        
        let types = tData[i].words
        words.push(types)
      }
    }
// console.log(words)
// console.log(wData)
      
  const cloud = d3.layout.cloud()
    .size([width, height])
    .padding(1)
    .rotate(() => 0)
    .font(fontFamily)
    .words(wData.map(d => Object.create(d)))
    .fontSize(d => s(d.value))
    .on("word", ({size, x, y, rotate, words, value}) => {
      svg.append("text")
        .attr("font-size", size)
        .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
        .text(words)
        .classed("click-only-text", true)
        .classed("word-default", true)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut)
        .on("click", handleClick)
        .on("end", draw)
        .start();

        function handleMouseOver(d, i) {
          d3.select(this)
            .classed("word-hovered", true)
            .transition(`mouseover-${words}`).duration(300).ease(d3.easeLinear)
              .attr("font-size", size + 2)
              .attr("font-weight", "bold");
        }
        
        function handleMouseOut(d, i) {
          d3.select(this)
            .classed("word-hovered", false)
            .interrupt(`mouseover-${words}`)
              .attr("font-size", size);
        }
        
        function handleClick(d, i) {
          var e = d3.select(this);
          displaySelection.text(`${value} total ${e.text()}s`);
          e.classed("word-selected", !e.classed("word-selected"));
        }

    });
  
  // cloud.start();
  // invalidation.then(() => cloud.stop());
  
  return svg.node();

  }// close update

function draw(words){

 var s = d3.scaleSqrt()
    .domain([1, d3.max(wData.map(d => d.value))])
    .range([6, 48]);

  var selectVis = svg.selectAll("text")
    .words(wData.map(d => Object.create(d)))

  console.log(words)

  selectVis
    .enter().append("text")
    .style("font-size", function(d) {
      return fontScale(d.value)
    })

  selectVis
    .transition()
    .duration(600)
    .style("font-size", function(d) {
      return fontScale(d.value)
    })
    .style("fill-opacity", 1);

  selectVis.exit()
    .transition()
    .duration(200)
    .style('fill-opacity', 0)
    .attr('font-size', )
    .remove();

}
// update();
}) //  data close



