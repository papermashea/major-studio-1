// const fs = require('fs')
// const request = require('request')
// const dotenv = require('dotenv');


//// API key from .env
// dotenv.config();
// const CH_KEY = process.env.CH_KEY;
// const SI_KEY = process.env.SI_KEY;

// console.log(SI_KEY)
// console.log(CH_KEY)

//// SI query
// const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";
// const search = `unit_code:"CHNDM" AND online_media_type:"Images" AND media_usage:"CC0" AND year`
// const url = `${searchBaseURL}?api_key=${SI_KEY}&q=${search}`


//// CH query
//https://collection.cooperhewitt.org/search/collection?query=&accession_number=&on_display=&has_images=1&has_no_known_copyright=1&color=red%2Corange%2Cyellow%2Cgreen%2Cblue%2Cpurple%2Cblack%2Cbrown%2Cwhite&exhibition=&location=&medium=*&period=&person=&role=&tag=&type=*&description=&justification=&title=&display_date=&year_acquired=&year_end=&year_start=1720-2020&width=&height=&depth=&longestside=&shortestside=&isa=objects

// const searchBaseURL = "https://api.collection.cooperhewitt.org/rest/"
// const color =  `red,orange,yellow,green,blue,purple,pink,brown,black,white`;
// //// const method = `method=cooperhewitt.objects.getInfo`;
// //// const method = `method=cooperhewitt.search.objects`;
// const method = 'method=cooperhewitt.search.objectsFaceted'
// const year = `gte1721`
// const img = `has_images=1`;
// const ip = `has_no_known_copyright=1`;
// const all = '*'
// const url = `${searchBaseURL}?${method}&access_token=${CH_KEY}&query=&${year}&type=${all}&media=${all}&${img}&${ip}`



console.log(url)

// array that we will write into
let myArray = [];

// // string that will hold the stringified JSON data
let jsonString = '';


// function fetchSearchData(searchTerm) {
//     console.log(url);
//     window
//     .fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
      
//       // constructing search queries to get all the rows of data
//       // you can change the page size
//       let pageSize = 10000;
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


//// flattening json
// // get objects by search term
// function fetchSearchData(url) {


//   request(url, function(error, response, body) {
//     console.error('error:', error); // print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // print the response status code if a response was received
//     let obj = JSON.parse(body);
//     console.log(obj);

//     // if there are more than 1000 objects, paginate
//     // you can change the pageSize
//     let pageSize = 1000;
//     let numberOfQueries = Math.ceil(obj.response.rowCount / pageSize);
//     console.log(numberOfQueries)
//     for(let i = 0; i < numberOfQueries; i++) {
//       // making sure that our last query calls for the exact number of rows
//       if (i == (numberOfQueries - 1)) {
//         searchAllURL = url + `&start=${i * pageSize}&rows=${obj.response.rowCount - (i * pageSize)}`;
//       } else {
//         searchAllURL = url + `&start=${i * pageSize}&rows=${pageSize}`;
//       }
      
//       fetchUrl(searchAllURL);
//     }
//   })
// }

// // set up empty Array for us to save results to
// var myArray = [];

// function fetchUrl(searchAllURL){
//   request(searchAllURL, function (error, response, body) {
//     console.error('error:', error); // print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // print the response status code if a response was received

//     let obj = JSON.parse(body);

//     // here we are constructing our own object with just the information we need
//     // first we filter out the objects that do not have the information we need (change accordingly)
//     // after the objects are filtered, we map our objects and construct a new object
  
//     let objects = obj.response.rows.filter(data => {
      
//       // by default we assume we have complete data
//       dataComplete = true;
      
//       // // Test if images exist
//       // if(data.content.descriptiveNonRepeating.online_media ==undefined
//       //   || data.content.descriptiveNonRepeating.online_media.media ==undefined
//       //   ||  data.content.descriptiveNonRepeating.online_media.media[0] ==undefined
//       //   || data.content.descriptiveNonRepeating.online_media.media[0].content ==undefined
//       //   // || data.content.descriptiveNonRepeating.online_media.media[0].resources[1] ==undefined
//       // )dataComplete = false;

//       // Test if we have a date value
//       if(data.content.indexedStructured.date ==undefined)dataComplete=false;


//       return dataComplete;
    
//     }).map((data) => {
      
//       let filename = data.content.descriptiveNonRepeating.online_media.media[0].content.split('=').pop();
      
//       // change the size of the images you are downloading
//       // imgSizeParam can be max or max_w to force width or max_h to force height
//       // primary image url should be the image delivery service url ex) https://ids.si.edu/ids/deliveryService?id=FS-5461_07
//       let imgSizeParam = "max";
//       let imgSizeValue = 300;

//       return { 
//         objectID: data.id,
//         title: data.title,
//         // date: data.content.indexedStructured.date[0],
//         primaryImage: data.content.descriptiveNonRepeating.online_media.media[0].content + `&${imgSizeParam}=${imgSizeValue}`,
//         filename: filename.includes(".jpg") ? filename : filename + ".jpg" // if the filename we defined above doesn't include .jpg add it at the end
//       }

//     })
  
//     myArray.push(objects);
//     // if there are more objects than the pageSize myArray will look like this: [[...objects], [...objects]]
//     // we use [].concat to flatten out myArray to be a one-dimensional array
//     myArray = [].concat(...myArray);
//   });
// }

// // calling our function
// fetchSearchData(url);

// // // the function inside the setTimeout saves myResults to a JSON
// // // it will automatically run after 5000 ms
// setTimeout(() => {
//     fs.writeFileSync('./data.json', JSON.stringify(myArray), 'utf8')
// }, 5000)



//// images
// // download the image by url, name the file by filename
// function downloadImage(uri, filename, callback){
//   request.head(uri, function(err, res, body){
//     // console.log('content-type:', res.headers['content-type']);
//     // console.log('content-length:', res.headers['content-length']);
//     request(uri).pipe(fs.createWriteStream(folder + "/" + filename)).on('close', callback);
//   });
// };

// // go through the json we created before
// function downloadData() {
//   fs.readFile("./data.json", "utf8", (err, data) => {
//     if (err) console.log(err);

//     JSON.parse(data).forEach(e => {
//       console.log('Downloading ' + e.filename);
//       downloadImage(e.primaryImage, e.filename, function(){
//         console.log('Finished Downloading ' + e.filename);
//       });
//     });

//   });
// }

// downloadData();

