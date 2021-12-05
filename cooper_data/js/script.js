// npm i node-cooperhewitt@0.0.2
// npm i dotenv --save
// npm i fs --save
// npm i request --save

// year_start 1921-2021 = 345
// curl -X GET 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=8712a9b9eaf3e459b7d9fd58d27bde44&has_images=1&has_no_known_copyright=1&year_start=1921-2021&page=1&per_page=500' -o data/1921_2021.json

// year_start 1821-2021 = 4864
// curl -X GET 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=8712a9b9eaf3e459b7d9fd58d27bde44&has_images=1&has_no_known_copyright=1&year_start=1921-2021&page=1&per_page=500' -o data/1821_2021.json

// year_acquired 1921-2021 = 

const dotenv = require('dotenv');
const fs = require('fs');

// api token
dotenv.config();
var api_token = process.env.CH_KEY;

// api parameters
var API_HOST = 'api.collection.cooperhewitt.org';
var API_PATH = '/rest/';
var API_PORT = 443;

var method = 'cooperhewitt.search.objects';
var args = {'access_token': api_token};

console.log(api_token)