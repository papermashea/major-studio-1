const dotenv = require('dotenv');
const fs = require('fs');
const request = require('request');
const vibrant = require('node-vibrant');


// api token
dotenv.config();
const access = process.env.CH_KEY;
// console.log(access)

const searchBaseURL = 'https://api.collection.cooperhewitt.org/rest/';
const method = 'method=cooperhewitt.search.objects';
////1821-2021
// const query = 'has_images=1&has_no_known_copyright=1&year_start=1821-2021&per_page=500';
////1921-2021
const query = 'has_images=1&has_no_known_copyright=1&year_start=1897-2021&per_page=500'
const url = `${searchBaseURL}?${method}&access_token=${access}&${query}`
// console.log(url)

var uris = [];
var objectArray = [];

// get search queries with loop
function fetchSearchData(url) {
    let pageSize = 500;
    // let numberOfQueries = Math.ceil(obj.response.rowCount / pageSize);

    //// 1897-2021

    
    //// 1921-2021
    // let numberOfQueries = 345 / pageSize;

     //// 1821-2021
    // let numberOfQueries = 4864 / pageSize;
    // console.log(numberOfQueries)

    // loop to push queries to array of URIs
    for(let x = 0; x < numberOfQueries; x++) {
      // making sure that our last query calls for the exact number of rows
      if (x == (numberOfQueries - 1)) {
        searchAllURL = url + `&page=${x+1}`;
        uris.push(searchAllURL);
      } else {
        searchAllURL = url + `&page=${x+1}`;
        uris.push(searchAllURL);
      }

    } // close loop
    // console.log(uris[6])

  // request from uri array
    // this times out
    // for(let i = 0; i < uris.length; i++) {
    //   const uri = uris[i];

    // this times out
    // uris.forEach((i) => {

    request(uris[0], function (error, response, body) {
      console.error('error:', error); // print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // print the response status code if a response was received

      let obj = JSON.parse(body);
      // console.log(obj)

      var objects = obj.objects.map( function(data) {
        var img = data.images[0];
        const idx = 0;
        var key = Object.keys(img)[idx];
        var value = img[key];
        console.log(value.url)

        var flat = {
            objectID: data.id,
            title: data.title,
            description: data.description,
            url: data.url,
            type: data.type,
            type_id: data.type_id,
            media: data.medium,
            media_id: data.media_id,
            year: data.year_start,
            year: data.year_end,
            date: data.date,
            decade: data.decade,
            acquired: data.year_acquired,
            country: data['woe:country_name'],  
            country_id: data['woe:country_id'],
            image: value.url,
        }
        return flat;
       });

      objectArray.push(objects);
      objectArray = [].concat(...objectArray);

      console.log(objectArray);
      console.log(objectArray.length);

    setTimeout(() => {
        fs.writeFileSync('data/nonLoop/allObjects_1897.json', JSON.stringify(objectArray), 'utf8')
    }, 5000)

    }); // close request

} // close function



// calling our functions
fetchSearchData(url);

// the function inside the setTimeout saves myResults to a JSON
// setTimeout(() => {
//     fs.writeFileSync('1821-1921_1.json', JSON.stringify(objectArray), 'utf8')
// }, 5000)
