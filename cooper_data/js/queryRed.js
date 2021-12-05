const fs = require('fs')
const request = require('request')
const dotenv = require('dotenv');


// API key from .env
dotenv.config();
const CH_KEY = process.env.CH_KEY;

// console.log(CH_KEY)

// CH query
// https://collection.cooperhewitt.org/search/collection?query=&accession_number=&on_display=&has_images=1&has_no_known_copyright=1&color=red%2Corange%2Cyellow%2Cgreen%2Cblue%2Cpurple%2Cblack%2Cbrown%2Cwhite&exhibition=&location=&medium=*&period=&person=&role=&tag=&type=*&description=&justification=&title=&display_date=&year_acquired=&year_end=&year_start=1720-2020&width=&height=&depth=&longestside=&shortestside=&isa=objects

const searchBaseURL = "https://api.collection.cooperhewitt.org/rest/"
const color =  `red`;
const method = `method=cooperhewitt.search.objects`;
const year = `gte1721`
const img = `has_images=1`;
const ip = `has_no_known_copyright=1`;
const all = '*'
const url = `${searchBaseURL}?${method}&access_token=${CH_KEY}&year_started=${year}&color=${color}&type_id=${all}&media_id=${all}&woe_id=${all}&${img}&${ip}&per_page=500`

// console.log(url)


// get objects by search term
function fetchSearchData(url) {

  // returns [object Object] if { json: true },
  // returns html error if fetchURL doesn't define json
  request(url, function(error, response, body) {

    console.error('error:', error); // print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // print the response status code if a response was received

    let obj = JSON.parse(body);
    // let obj = JSON.stringify(body);
    console.log("fetchSearchData request begin");
    console.log(obj);
    console.log("fetchSearchData request end");

    let pageSize = 500;
    // let numberOfQueries = Math.ceil(obj.response.rowCount / pageSize);

    let numberOfQueries = 444 / pageSize;    
    // let numberOfQueries = 15321 / pageSize;
    // console.log(numberOfQueries)

    for(let i = 0; i < numberOfQueries; i++) {
      // making sure that our last query calls for the exact number of rows
      if (i == (numberOfQueries - 1)) {
        searchAllURL = url + `&page=${i+1}`;
      } else {
        searchAllURL = url + `&page=${i+1}`;
      }
      
      console.log("searchAllURL : "+ searchAllURL);
      fetchUrl(searchAllURL);
    }
  })
}

// set up empty Array for us to save results to
var wordArray = [];

function fetchUrl(searchAllURL){

  // returns html error without { json: true },
  // returns [object Object] if fetchSearchData { json: true },

  request(searchAllURL, { json: true }, function (error, response, body) {
    console.error('error:', error); // print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // print the response status code if a response was received

    let obj = JSON.parse(body);
    // let obj = JSON.stringify(body);
    console.log("fetchURL request begin");
    console.log(obj);
    console.log("fetchURL request end");

    // here we are constructing our own object with just the information we need
    // first we filter out the objects that do not have the information we need (change accordingly)
    // after the objects are filtered, we map our objects and construct a new object
  
    let objects = obj.response.rows.filter(data => {
      
      // by default we assume we have complete data
      dataComplete = true;
      
      // test for values
      if(data.type_id ==null)dataComplete=false;
      if(data.media_id ==null)dataComplete=false;
      if(data.year_start ==null)dataComplete=false;


      return dataComplete;
    
    }).map((data) => {
      
      let filename = data.images[0].url.pop();
      
      let imgSizeParam = "max";
      let imgSizeValue = 300;

      return { 
        objectID: data.id,
        color: 'red',
        title: data.title,
        type: data.type,
        type_id: data.type_id,
        media: data.media,
        media_id: data.media_id,
        country: data.woe[':country_name'],  
        country_id: data.woe[':country'],
        description: data.description,
        primaryImage: data.images[0].url,
      }

    })

  
    wordArray.push(objects);
    // if there are more objects than the pageSize wordArray will look like this: [[...objects], [...objects]]
    // we use [].concat to flatten out wordArray to be a one-dimensional array
    wordArray = [].concat(...wordArray);
  });
}

// calling our function
fetchSearchData(url);

// the function inside the setTimeout saves myResults to a JSON
setTimeout(() => {
    fs.writeFileSync('queryRed.json', JSON.stringify(wordArray), 'utf8')
}, 5000)
