// Smithsonian API example code
// check full API documentation here: https://edan.si.edu/openaccess/apidocs/

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// const fs = require('fs');
// const request = require('request');

// const dotenv = require('dotenv');
// dotenv.config();

// const apiKey = process.env.API_KEY;
// console.log(process.env.API_KEY)

const apiKey = "gfbeIsrZUSHPX16DqQPiIkk8bgZcfG3zpiUjqZu8";

// Access to individual objects by ID
const objectBaseURL = "https://api.si.edu/openaccess/api/v1.0/content/";

var object = {};

//fetches content based on id of an object.
function fetchContentDataById(id) {
  let url = objectBaseURL + id + "?api_key="+apiKey;
  window
  .fetch(url)
  .then(res => res.json())
  .then(data => {
    object = data;
    console.log("Here's the content data of the specified object:", object);
  })
  .catch(error => {
    console.log(error);
  })
}

fetchContentDataById("edanmdm:saam_1983.69");
// fetchContentDataById("edanmdm:chndm_1935-12-1-7");

// Task 1: Find a different object on https://collections.si.edu/search/ and retrieve the data with the code above
// Make sure to check the box "Only return results with CC0 media" when searching
// Task 2: Write the result into a variable and explore different variables through the Console