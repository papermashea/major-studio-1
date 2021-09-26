const express = require('express')
const cors = require('cors');

const app = express();

app.use(cors())

const port = 8000;
// const {Client} = require('dotenv');

app.get('/', (req, res) => {
  res.send()

  // var margin = {top: 10, right: 30, bottom: 30, left: 60},
  //     width = 940 - margin.left - margin.right,
  //     height = 470 - margin.top - margin.bottom;


  // var svg = d3.select("#pantone_viz")
  //   .append("svg")
  //     .attr("width", width + margin.left + margin.right)
  //     .attr("height", height + margin.top + margin.bottom)
  //   .append("g")
  //     .attr("transform",
  //           "translate(" + margin.left + "," + margin.top + ")");

  //     d3.json("objects_pantone-yellow.json", function(data) {

  //        var x = d3.scaleLinear()
  //           .domain([0, 3000])
  //           .range([ 0, width ]);
  //         svg.append("g")
  //           .attr("transform", "translate(0," + height + ")")
  //           .call(d3.axisBottom(x));

  //         // Add Y axis
  //         var y = d3.scaleLinear()
  //           .domain([0, 400000])
  //           .range([ height, 0]);
  //         svg.append("g")
  //           .call(d3.axisLeft(y));
  //       });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});























    // var cooperhewitt = require('node-cooperhewitt')

    // const chAPI = process.env.CH_API;    
    // const siAPI = process.env.SI_API;    

    // const chURL = "https://api.collection.cooperhewitt.org/rest/";
    // const siURL = "https://api.si.edu/openaccess/api/v1.0/search";

    // //// constructing the initial search query
    // // const search =  `unit_code:"CHNDM" AND color:"red" online_media_type:"Images"`;

    // // array that we will write into
    // let myArray = [];

    // // string that will hold the stringified JSON data
    // let jsonString = '';

    // // search: fetches an array of terms based on term category
    // function fetchSearchData(searchTerm) {
    //     let url = chURL + "?api_key=" + apiKey + "&q=" + searchTerm;
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


    // var method = 'cooperhewitt.colors.palettes.getInfo';
    // var args = {'access_token': api_token};
          
    // cooperhewitt.call(method, args, function(rsp){   
    //     console.log(rsp);  
    // });
