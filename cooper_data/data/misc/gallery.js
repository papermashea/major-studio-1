// THIS WORKS BUT IS SLOW
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/local/cooper_data/data/allObjectsCountries.json").then(function (data) { 
// console.log(data)

//   data.forEach(function(d){
//     d3.select("#gallery")
//       .append("a")
//       .attr("href", d.url)
//       .append("img")
//       .attr("src", d.image)
//       .attr("width", 80)
//     });
// });

// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/aws/cooper_test/allObjectsCountries_1821_localImg.json")
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/local/cooper_data/data/allObjectsCountries.json")
d3.json("allObjects_1921_localImgs.json")
  .then( json => {
      // execute our 
      // display images function
      displayImages(json);
  }); 

// this function creates all
// of our DOM elements
function displayImages(json){
    // select a <div> with an id of "app"
    // this is where we want all of our
    // images to be added
    let app = d3.select('#gallery').text('');

    // take our JSON and sort it
    // date descending
    let data = json.sort( (a,b) => (b.year > a.year) ? 1 : -1 );
    // // date ascending
    // let data = json.sort( (a,b) => (a.year > b.year) ? 1 : -1 );


    // define "cards" for each item
    let card = app.selectAll('div.object-card')
                .data(data)
                .join('div')
                .attr('class', 'object-card')
                .style('opacity', .7)
                // .on("click", click);

    card.append('div')
        .attr('class', 'image-container')
        .append('img')
        .attr('id', "galleryImg")
        // .attr('onload', 'loadImage()')
        .attr('crossOrigin', "anonymous")
        .attr('src', d => { return d.image})
        .attr('color', d => { return loadImage(d.image)})
        // .append('a')
        // .attr('href', d => { return '#' + d.objectID});

    // var click = function(event, d) {
    //   card.style('opacity', 1)
    //   imgDetails
    //     .style("opacity", 1)
    //     .html("<strong>" + d.title + "</strong> | <i>" + d.year + "</i><p>Type: " + d.type + "<br> Medium: " + d.media + "</p>")
    //     .style("background-color", '#000')
    // }

    // var imgDetails = card.append("div")
    //   .attr("class", "details")
    //   .style("padding", "8px")
    //   .style("opacity", .4)
    //   .style("color", "white")

} // close function