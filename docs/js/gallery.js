// const fontFamily = "CooperHewitt, Verdana, Arial, Helvetica, sans-serif";

d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/docs/data/1900_2000.json")
  .then( function (json) { 

    d3.selectAll("#countriesBox").on("change", filter)

    //// get data
    const dataFixed = json.map(d => ({year:d.year_end, hue: d3.hsl(d.hex), hex: d.hex, color: ntc.name(d.hex)[1], url:d.url, image: d.image, title: d.title, description: d.description, type: d.type, media: d.media, id: d.objectID, country: d.country}));    
    // console.log(dataFixed)

    //// filter and sort data
    function filter(){
        d3.selectAll(".card").remove();

        var choices = [];
        d3.selectAll('input[name="gt5"]').each(function(d){
          cb = d3.select(this);
          if(cb.property("checked")){
            choices.push(cb.property("value"));
          }
        });
      
        if(choices.length > 0){
          data = dataFixed.filter(function(d,i){return choices.includes(d.country);}).sort( (a,b) => (b.year > a.year) ? 1 : -1 );
        } else {
          data = dataFixed.sort( (a,b) => (b.year > a.year) ? 1 : -1 );     
        } 
    console.log(choices)
    console.log(data)
    draw(data);

} // close function    

function draw(data){

    // var mousemove = function(event, d) {
    //       card.style("background-image", function(d){return d.image;})
    //       .style('background-size','cover')
    //     }

    // var mouseleave = function(event, d) {
    //       card.style("background-color", function(d){return d.hex;})
    //       .style('background-size','cover')
    //     }
    
    let app = d3.select('#gallery');

    // define "cards" for each item
    var card = app.selectAll('rect')
                .data(data) 
                .join('div')
                .attr('class', 'card')
                    .style('background-color', function(d){return d.hex;})
                    .attr('x', 'x-coord') // Location of circle on x-axis
                    .attr('y', "y-coord") 
                // .on("mousemove", mousemove)
                // .on("mouseleave", mouseleave)


     card
     .append("img")
      .attr('class', 'cardImg')
      .attr("src", function(d){
                      return d.image;
                  })

     card
     .append("text")
      .attr('class', 'headerText')
      .text(function(d){
                      return d.country;
                  })
       .attr("font-family", fontFamily)

      card
        .append("text")
        .attr('class', 'subText')
        .text(function(d){
                  return d.year;
              })
       .attr("font-family", fontFamily)

      card
        .append("text")
        .attr('class', 'text')
        .text(function(d){
                  return "Type: " + d.type;
              })
       .attr("font-family", fontFamily)

      card
        .append("text")
        .attr('class', 'text')
        .text(function(d){
                  return "Medium: " + d.media;
              })
       .attr("font-family", fontFamily)
        
      // card.append("text")
        // .append("svg:a")
        //   .attr("xlink:href", function(d){return d.url;})
        //   .attr("target", "_blank")
        //   .text("Learn")

} // close function    
}) // close d3 json

