
d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/docs/data/1900_2000.json")
  .then( function (json) { 

    d3.selectAll(".form-control").on("change", filter)

    const fontFamily = "CooperHewitt, Verdana, Arial, Helvetica, sans-serif";

    //// get data
    const dataFixed = json.map(d => ({year:d.year_end, hue: d3.hsl(d.hex), hex: d.hex, color: ntc.name(d.hex)[1], url:d.url, image: d.image, title: d.title, description: d.description, type: d.type, media: d.media, id: d.objectID, country: d.country}));    

    //// filter and sort data
    function filter(){
        var choices = [];
        d3.selectAll('input[name="filters"]:checked').each(function(d){
          cb = d3.select(this);
          if(cb.property("checked")){
            choices.push(cb.property("value"));
          }
        });
      
        if(choices.length > 0){
          data = dataFixed.filter(function(d,i){return choices.includes(d.color);}).sort( (a,b) => (b.country > a.country) ? 1 : -1 );
        } else {
          data = dataFixed.sort( (a,b) => (b.country > a.country) ? 1 : -1 );     
        } 
    console.log(choices)
    console.log(data)
    draw(data);

} // close function    

function draw(data){

    var mousemove = function(event, d) {
          card.style("background-image", d.url)
          .style('background-size','cover')
        }

    let app = d3.select('#gallery');

    // define "cards" for each item
    let card = app.selectAll('rect')
                .data(data) 
                .join('div')
                .attr('class', 'card')
                    .style('background-color', function(d){return d.hex;})
                    .attr('x', 'x-coord') // Location of circle on x-axis
                    .attr('y', "y-coord") 
                .on("mousemove", mousemove)

      card.append("text")
      .attr('class', 'typeText')
       .text(function(d){
                      return d.type;
                  })
       .attr("font-family", fontFamily)

     card.append("text")
      .attr('class', 'countryText')
       .text(function(d){
                      return d.country;
                  })
       .attr("font-family", fontFamily)

} // close function    
}) // close d3 json




