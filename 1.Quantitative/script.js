const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Why is my API not working!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


// cooper api
  
var cooperhewitt = require('node-cooperhewitt')

var method = 'cooperhewitt.objects.getRandom';
var args = {'access_token': api_token};
      
cooperhewitt.call(method, args, function(rsp){   
    console.log(rsp);  
});


//// example command line request
// curl -X GET 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getImages&access_token=191e509801ac902f9238d52fb8403c8f&format=json'



// // put your API key here;
// const apiKey = "191e509801ac902f9238d52fb8403c8f";  

// // search base URL
// const searchBaseURL = "https://api.collection.cooperhewitt.org/rest/";

// // constructing the initial search query
// const search =  `unit_code:"CHNDM" AND object_type:"Embroidery (visual works)" AND online_media_type:"Images"`;


// // array that we will write into
// let myArray = [];

// // string that will hold the stringified JSON data
// let jsonString = '';

// // search: fetches an array of terms based on term category
// function fetchSearchData(searchTerm) {
//     let url = searchBaseURL + "?api_key=" + apiKey + "&q=" + searchTerm;
//     console.log(url);
//     window
//     .fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
      
//       // constructing search queries to get all the rows of data
//       // you can change the page size
//       let pageSize = 1000;
//       let numberOfQueries = Math.ceil(data.response.rowCount / pageSize);
//       console.log(numberOfQueries)
//       for(let i = 0; i < numberOfQueries; i++) {
//         // making sure that our last query calls for the exact number of rows
//         if (i == (numberOfQueries - 1)) {
//           searchAllURL = url + `&start=${i * pageSize}&rows=${data.response.rowCount - (i * pageSize)}`;
//         } else {
//           searchAllURL = url + `&start=${i * pageSize}&rows=${pageSize}`;
//         }
//         console.log(searchAllURL)
//         fetchAllData(searchAllURL);
      
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     })
// }

// // fetching all the data listed under our search and pushing them all into our custom array
// function fetchAllData(url) {
//   window
//   .fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)

//     data.response.rows.forEach(function(n) {
//       addObject(n);
//     });
//     jsonString += JSON.stringify(myArray);
//     console.log(myArray);
//   })
//   .catch(error => {
//     console.log(error)
//   })

// }

// // create your own array with just the data you need
// function addObject(objectData) {  
  
//   // we've encountered that some places have data others don't
//   let currentPlace = "";
//   if(objectData.content.indexedStructured.place) {
//     currentPlace = objectData.content.indexedStructured.place[0];
//   }

//   myArray.push({
//     id: objectData.id,
//     title: objectData.title,
//     link: objectData.content.descriptiveNonRepeating.record_link,
//     place: currentPlace
//   })
// }


// fetchSearchData(search);





// var qs = require('querystring');
// var https = require('https');

// var API_HOST = 'api.collection.cooperhewitt.org';
// var API_PATH = '/rest/';
// var API_PORT = 443;

// module.exports = {
//   call: function(method, args, oncomplete) {
    
//     if (! oncomplete){
//       oncomplete = function(rsp){
//           console.log(rsp);
//       };
//     }
    
//     args['method'] = method;
    
//     var body = qs.stringify(args);

//     var headers = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Content-Length': body.length,
//     };
    
//     var opts = {
//       rejectUnauthorized: false,
//       host: API_HOST,
//       port: API_PORT,
//       path: API_PATH,
//       method: 'POST',
//       headers: headers
//     };

//     var req = https.request(opts, function(res){
//       var status = res.statusCode;

//       if ((status < 200) || (status > 299)){
//         rsp = {'stat': 'error', 'error': { 'message': 'API call failed with status code ' + status } };
//         oncomplete(rsp);
//         return;
//       }
      
//       res.setEncoding('utf8');
      
//       var rsp = '';
      
//       res.on('data', function(chunk){
//         rsp += chunk;
//       });
      
//       res.on('end', function(){
        
//         try {
//           rsp = JSON.parse(rsp);
//           oncomplete(rsp);
//         }
        
//         catch(e){
//           rsp = {'stat': 'error', 'error': { 'message': 'Failed to parse JSON, ' + e } };
//           oncomplete(rsp);
//         }
//       });
      
//       res.on('error', function(e){
//         console.log(e);
//       });
//     });
    
//     req.write(body);
//     req.end();    
//   }
// };