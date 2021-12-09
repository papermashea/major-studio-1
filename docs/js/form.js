var margin = {top: 100, right: 200, bottom: 30, left: 0},
    width = 1100 - margin.left - margin.right,
    height = 1400 - margin.top - margin.bottom;

const fontFamily = "Verdana, Arial, Helvetica, sans-serif";

const svg = d3.select("#cloud")
  .append("svg")
    .attr("width", width)
    .attr("height", height - margin.top + margin.bottom)
    .attr("viewBox", [60, -60, width, height])
    .attr("font-family", fontFamily)
    .attr("text-anchor", "middle");


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

var words = [];
var wData;
function update(){
    let val = d3.select('input[name="exampleRadios"]:checked').property("value");
    console.log(val)
    while (words.length > 0) {
        words.pop();
    }
    d3.selectAll("svg > *").remove();
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
// wordCloud();
console.log(words)
console.log(wData)

 var s = d3.scaleSqrt()
    .domain([1, d3.max(wData.map(d => d.value))])
    .range([14, 54]);

  const displaySelection = svg.append("text")
    .attr("class", "objSelected")
    .attr("font-family", "Lucida Console, Courier, monospace")
    .attr("text-anchor", "start")
    .attr("alignment-baseline", "hanging")
    .attr("font-size", 32)
    .attr("color", "#FF5700")
    .attr("x", 500)
    .attr("y", -30);
    
  var cloud = d3.layout.cloud()
    .words(wData.map(d => Object.create(d)))
    // .size([width, height])
    .size([1000,1500])
    .rotate(function(d) { return 0; })
    .padding(5)
    .font(fontFamily)
    .fontSize(d => s(d.value))
    .on("word", ({size, x, y, words, value}) => {
      svg.append("text")
        .sort( (a,b) => (b.size > a.size) ? 1 : -1 )
        .attr("font-size", size)
        .attr("transform", `translate(${x},${y})`)
        .text(words)
        .classed("click-only-text", true)
        .classed("word-default", true)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut)
        .on("click", handleClick);
      
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
  
  cloud.start();
  // invalidation.then(() => cloud.stop());
  
  return svg.node();

}

d3.selectAll(".form-check-input")
.on("change", update);

update();


// update();
}) //  data close



