// cooper api
var cooperhewitt = require('node-cooperhewitt')

// read access
// var api_token = '191e509801ac902f9238d52fb8403c8f';

// write access
var api_token = 'e58ca8017b3e61fe4a988c62323b8b73';

var method = 'cooperhewitt.objects.getRandom';
var args = {'access_token': api_token};
      
cooperhewitt.call(method, args, function(rsp){   
    console.log(rsp);  
});