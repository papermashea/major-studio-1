const dotenv = require('dotenv');
const fs = require('fs');
const request = require('request');

// api token
dotenv.config();
const access = process.env.CH_KEY;
console.log(access)

const searchBaseURL = 'https://api.collection.cooperhewitt.org/rest/'
const method = 'method=cooperhewitt.search.objects';
// const query = 'has_images=1&has_no_known_copyright=1&year_start=1821-2021&per_page=500'
const query = 'has_images=1&has_no_known_copyright=1&year_start=1921-2021&per_page=500'
const url = `${searchBaseURL}?${method}&access_token=${access}&${query}`
// console.log(url)


// get objects by search term
function fetchSearchData(url) {

  // returns [object Object] if { json: true },
  // returns html error if fetchURL doesn't define json
  request(url, function(error, response, body) {
    console.error('error:', error); // print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // print the response status code if a response was received

    let obj = JSON.parse(body);
    console.log("fetchSearchData request begin");
    console.log(obj);
    console.log("fetchSearchData request end");

    let pageSize = 500;
    // let numberOfQueries = Math.ceil(obj.response.rowCount / pageSize);

    //// 1921-2021
    let numberOfQueries = 345 / pageSize;

     //// 1821-2021
    // let numberOfQueries = 4864 / pageSize;
    // console.log(numberOfQueries)

    for(let i = 0; i < numberOfQueries; i++) {
      // making sure that our last query calls for the exact number of rows
      if (i == (numberOfQueries - 1)) {
        searchAllURL = url + `&page=${i+1}`;
      } else {
        searchAllURL = url + `&page=${i+1}`;
      }
      
      console.log("searchAllURL : "+ searchAllURL);

      // fetchUrl(searchAllURL);


    } // close for loop
  }) // close request
} // close fetchSearchData



//set up empty Array for us to save results to
var objArray = [];

function fetchUrl(searchAllURL){
  request(searchAllURL, function (error, response, body) {
    // .then(function (response) {
    // json: true;
    console.error('error:', error); // print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // print the response status code if a response was received

    let obj = JSON.parse(body)
    console.log(obj)

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

    }) // close map

    console.log("fetchURL request begin");
    console.log(objects);
    console.log("fetchURL request end");
  
    objArray.push(objects);
    objArray = [].concat(...objArray)

  }) // closes map
  };// closes function


// calling our function
fetchSearchData(url);

// the function inside the setTimeout saves myResults to a JSON
setTimeout(() => {
    fs.writeFileSync('data/1921_2021.json', JSON.stringify(objArray), 'utf8')
}, 10000)