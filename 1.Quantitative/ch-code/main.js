// hey look! running code
// $.support.cors = true;
const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Why is my API not working!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


var cooperhewitt = require('node-cooperhewitt')

// read access
var api_token = '191e509801ac902f9238d52fb8403c8f';

function cooperhewitt_api_call(method, data, on_success, on_error){
	var dothis_onsuccess = function(rsp){
		if (on_success){
			on_success(rsp);
		}
	};

	var dothis_onerror = function(rsp){

		var parse_rsp = function(rsp){
			if (! rsp['responseText']){
				console.log("Missing response text");
				return;
			}
			
			try {
				rsp = JSON.parse(rsp['responseText']);
				return rsp;
			} catch (e) {
				console.log("Failed to parse response text");
				return;
			}
		};
		
		rsp = parse_rsp(rsp);
		
		if (on_error){
			on_error(rsp);
		}
	};

	var ima_formdata = (data.append) ? 1 : 0;

	if (ima_formdata){
		data.append('method', method);

		if (! data.access_token){
	    		data.append('access_token', api_token);
		}
	} else {
		data['method'] = method;

		if (! data['access_token']){
			data['access_token'] = api_token;
		}
	}

	var endpoint = 'https://api.collection.cooperhewitt.org/rest/';

	var args = {
		'url': endpoint,
		'type': 'POST',
		'data': data,
		'dataType': 'json',
		'success': dothis_onsuccess,
		'error': dothis_onerror,
		'access_token': api_token,
	};

	if (ima_formdata){
		args['cache'] = false;
		args['contentType'] = false;
		args['processData'] = false;
	}

	$.ajax(args);	    
}
