// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/aws/cooper_test/allObjectsCountries_1821_localImg.json")
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/local/cooper_data/data/allObjectsCountries.json")
// d3.json("allObjects_1821_localImgs.json")
// d3.json("1901-1909_lcl.json")
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/cooper_data/data/sorted/1900-1904.json")
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/cooper_data/data/sorted/1900-1904.json")
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/cooper_data/data/sorted/1905-1910.json")
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/cooper_data/data/sorted/1911-1914.json")
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/cooper_data/data/sorted/1915-1917.json")
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/cooper_data/data/sorted/1918-1921.json")
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/cooper_data/data/sorted/1921-1929.json")
// d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/cooper_data/data/sorted/1930-1949.json")
d3.json("https://raw.githubusercontent.com/papermashea/major-studio-1/main/cooper_data/data/sorted/1950-2000.json")
  .then( json => {
      // execute our 
      // display images function
      displayImages(json);
  }); 

function displayImages(json){
    let app = d3.select('#gallery').text('');

    // date descending
    let data = json.sort( (a,b) => (b.year > a.year) ? 1 : -1 );
    //// date ascending
    // let data = json.sort( (a,b) => (a.year > b.year) ? 1 : -1 );


    // define "cards" for each item
    let card = app.selectAll('div.object-card')
                .data(data)
                .join('div')
                .attr('class', 'object-card')
                .style('opacity', .7)


    card.append('div')
        .attr('class', 'image-container')
        .append('img')
        .attr('id', "galleryImg")
        .attr('crossOrigin', "anonymous")
        .attr('src', d => { return d.image})
        .attr('value', d => { return loadImage(d.image)})

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