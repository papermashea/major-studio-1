// npm install node-cooperhewitt
// npm install dotenv

const dotenv = require('dotenv');

// cooper api
var cooperhewitt = require('node-cooperhewitt')

// write access
var api_token = process.env.CH_KEY;;

var method = 'cooperhewitt.objects.getRandom';
var args = {'access_token': api_token};
      
cooperhewitt.call(method, args, function(rsp){   
    console.log(rsp);  
});