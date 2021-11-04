// let radVal = d3.select('input[name="rad"]:checked').property("value")
//  console.log(radVal)

 // d3.selectAll(("input[name='rad']")).on("change", update);

//// pull in data
let words = [];
  // console.log(words)
  // console.log(words.length)  


// let rawdata = fs.readFileSync('data/colorData.json');
d3.json("data/colorDataY.json").then(function (data) { 
  // console.log(data)
  // console.log(data.length)


//// array from type keys
  function text(){
      for (var i = 0; i < data.length; i++) {
        // type and media subsets
        let typeText = data[i].type
        let mediaText = data[i].media
          // if (radVal = 0) {
            words.push(mediaText);
          // } else {
            // words.push(typeText)
          // } // if else close
      } // for loop close

  } //function(text) close 
  text(); // call function(text)

  var fontFamily = "sans-serif";
  var fontScale = 15;
  var padding = 2;
  var margin = {top: 70, right: 100, bottom: 0, left: 100}; 
  var height = 1000;
  var width = 800;

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

  const svg = d3
    .select("#cloud2")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .attr("font-family", fontFamily)
    .attr("text-anchor", "middle");

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
      });

      w_cloud.start();
      // const inval = invalidation.then(() => w_cloud.stop());
      // inval__


  function handleMouseOver(d) {
    var group = focus.append('g')
                     .attr('id', 'counts');
     var base = d.y - d.size;

    group.selectAll('text')
         .data(data)
         .enter().append('text')
         .attr('x', d.x)
         .attr('y', function(text, i) {
           return (base - i*14);
         })
         .attr('text-anchor', 'middle')
         .text(function(text) { return text; });

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
  }

  } //data close
); //function(data) close
  
