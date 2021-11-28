// var https = require('https');

const https = require('https');
const qs = require('qs');
const fs = require('fs');
const request = require('request');
const dotenv = require('dotenv');

var API_HOST = 'api.collection.cooperhewitt.org';
var API_PATH = '/rest/';
var API_PORT = 443;

// API key from .env
dotenv.config();
// const CH_KEY = process.env.CH_KEY;
// const CH_KEY = 'ba00fde38c1a8098aa1d684f0a387e31';

console.log(CH_KEY)


var method = 'cooperhewitt.objects.getRandom';
var args = {'access_token': CH_KEY};
      
cooperhewitt.call(method, args, function(rsp){   
    console.log(rsp); 
});


function cooperhewitt (method, args, oncomplete) {
		
		if (! oncomplete){
			oncomplete = function(rsp){
			    console.log(rsp);
			};
		}
		
		args['method'] = method;
		
		var body = qs.stringify(args);
		// var body = JSON.stringify(args);

		var headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': body.length,
		};
		
		var opts = {
			rejectUnauthorized: false,
			host: API_HOST,
			port: API_PORT,
			path: API_PATH,
			method: 'POST',
			headers: headers
		};

		var req = https.request(opts, function(res){
			var status = res.statusCode;

			if ((status < 200) || (status > 299)){
				rsp = {'stat': 'error', 'error': { 'message': 'API call failed with status code ' + status } };
				oncomplete(rsp);
				return;
			}
			
			res.setEncoding('utf8');
			
			var rsp = '';
			
			res.on('data', function(chunk){
				rsp += chunk;
			});
			
			res.on('end', function(){
				
				try {
					rsp = JSON.parse(rsp);
					oncomplete(rsp);
				}
				
				catch(e){
					rsp = {'stat': 'error', 'error': { 'message': 'Failed to parse JSON, ' + e } };
					oncomplete(rsp);
				}
			});
			
			res.on('error', function(e){
				console.log(e);
			});
		});
		
		req.write(body);
		req.end();
		
		// return String('Hello node module');
	};