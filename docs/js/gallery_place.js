
d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/docs/data/1900_2000.json")
  .then( json => {
      // execute our 
      // display images function
      displayImages(json);
  }); 

// const fontFamily = "CooperHewitt, Verdana, Arial, Helvetica, sans-serif";

// this function creates all
// of our DOM elements
function displayImages(json){

   const dataFixed = json.map(d => ({year:d.year_end, hue: d3.hsl(d.hex), hex: d.hex, color: ntc.name(d.hex)[1], url:d.url, image: d.image, title: d.title, description: d.description, type: d.type, media: d.media, id: d.objectID, country: d.country}));    
    
    let app = d3.select('#gallery');

    // let data = dataFixed.sort( (a,b) => (b.year > a.year) ? 1 : -1 );
    let data = dataFixed.sort( (b,a) => (b.type > a.type) ? 1 : -1 );
    console.log(data)

    // // date ascending
    // let data = json.sort( (a,b) => (a.year > b.year) ? 1 : -1 );

   var mousemove = function(event, d) {
          card.style("background-image", d.url)
          .style('background-size','cover')
        }

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

     card.append("text")
      .attr('class', 'countryText')
       .text(function(d){
                      return d.country;
                  })
console.log(json)

} // close function