      var fontFamily = "sans-serif";
      var fontScale = 15;
      var padding = 2;
      var margin = {top: 70, right: 100, bottom: 0, left: 100}; 
      var height = 1000;
      var width = 800;

const svg = d3
  .select("#cloud")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .attr("font-family", fontFamily)
  .attr("text-anchor", "middle");

d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/docs/data/1900_2000.json")
.then(function (data) { 
  // console.log(data)
  // console.log(data.length)

d3.selectAll(".form-check-input").on("change", update);

let words = [];
function update(){
    let val = d3.select('input[name="exampleRadios"]:checked').property("value");
    // console.log(val)
    // words = [];

    if(val == "medium"){
      for (var i = 0; i < data.length; i++) {        
        let medium = data[i].media
        words.push(medium)
      }
      } else {
      for (var i = 0; i < data.length; i++) {        
        let type = data[i].type
        words.push(type)
      }
    }
  console.log(words)
}

update(); 


function draw(){
  //// wordcloud
    const rotate = () => 0;
    var data = d3
      .rollups(
        words,
        (group) => group.length,
        (w) => w
      )
      .sort(([, a], [, b]) => d3.descending(a, b))
      .slice(0, 1000)
      .map(([text, value]) => ({ text, value }));
    // console.log(data);

    var focus = svg.append('g')
                   .attr("transform", "translate(" + [width/2, height/2+margin.top] + ")");

    const w_cloud = d3.layout.cloud()
      .size([width, height])
      .words(data.map((d) => Object.create(d)))
      .padding(padding)
      .rotate(rotate)
      .font(fontFamily)
      .fontSize((d) => Math.sqrt(d.value) * fontScale)
      .on("word", ({ size, x, y, rotate, text }) => {
        svg
          .append("text")
          .attr("font-size", size)
          .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
          .text(text)
          .on('mouseover', handleMouseOver)
          .on('mouseout', handleMouseOut);
      })
      // .on("end", draw)

      w_cloud.start();

    function handleMouseOver(d) {
      var group = focus.append('g')
                       .attr('id', 'counts');
       var base = d.y - d.size;

      group.selectAll('text')
           .data(data)
           // .data(data.map((d) => Object.create(d)))
           .enter().append('text')
           .attr('x', d.x)
           .attr('y', function(text, i) {
             return (base - i*14);
           })
           .attr('text-anchor', 'middle')
           .text(function(text) { return counts; });

      var bbox = group.node().getBBox();
      var bboxPadding = 5;

      // place a white background to see text more clearly
      var rect = group.insert('rect', ':first-child')
            .attr('x', bbox.x)
            .attr('y', bbox.y)
            .attr('width', bbox.width + bboxPadding)
            .attr('height', bbox.height + bboxPadding)
            .attr('rx', 10)
            .attr('ry', 10)
            .attr('class', 'label-background-strong');
          }

      function handleMouseOut(d) {
        d3.select('#counts').remove();
      } // mouseout close
  } // update draw

draw(update);

}) //  data close

