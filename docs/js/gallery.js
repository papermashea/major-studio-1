
d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/docs/data/1900_2000.json")
  .then( json => {
      // execute our 
      // display images function
      displayImages(json);
  }); 

// this function creates all
// of our DOM elements
function displayImages(json){

   const dataFixed = json.map(d => ({year:d.year_end, hue: d3.hsl(d.hex), hex: d.hex, color: ntc.name(d.hex)[1], url:d.url, image: d.image, title: d.title, description: d.description, type: d.type, media: d.media, id: d.objectID, country: d.country}));    
    
    let app = d3.select('#gallery');

    // let data = dataFixed.sort( (a,b) => (b.year > a.year) ? 1 : -1 );
    let data = dataFixed.sort( (a,b) => (b.year > a.year) ? 1 : -1 );
    console.log(data)

    // // date ascending
    // let data = json.sort( (a,b) => (a.year > b.year) ? 1 : -1 );

    // define "cards" for each item
    let card = app.selectAll('rect')
                .data(data)                
                .join('div')
                .attr('class', 'object-card')
                    .attr('src', d => { return d.image})
                    .style('background-color', function(d){return d.hex;})
                .html(d => { return d.type "<br>" d.country})
                .on('click', clicked)

    // card.append('div')
    //     .data(data, d => d.image)
    //     .attr('class', 'image-container')
    //       .html("<img src='" + d.image + "'>")
    //     .on('click', clicked)

    var clicked = function(event, d) {
      console.log(click)  
      // imgDetails
      //   .style("opacity", 1)
      //   .html("<strong>" + d.title + "</strong> | <i>" + d.year + "</i><p>Type: " + d.type + "<br> Medium: " + d.media + "</p>")
      //   .style("background-color", '#000')
    }

    // var imgDetails = card.append("div")
    //   .attr("class", "details")
    //   .style("padding", "8px")
    //   .style("opacity", .4)
    //   .style("color", "white")

    // function update(){
    //   //// checkboxes
    //   d3.selectAll(".btn-check").each(function(d){
    //     cb = d3.select(this);
    //     clr = cb.property("value")

    //     //// selected
    //     if(cb.property("checked")){
    //       svg.selectAll("."+clr).transition().duration(100)
    //       .style("opacity", 1).attr("r", radius)

    //     //// hidden
    //     }else{

    //     d3.forceSimulation(dataFixed)
    //       .force("collide", d3.forceCollide(radius+2).iterations(10))
    //       .force("center")

    //     svg.selectAll("."+clr).transition().duration(100)
    //       .style("opacity", 0).attr("r", 0)


    //     }
    //   })
    // }

} // close function