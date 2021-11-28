

    // // var cooperhewitt = require('node-cooperhewitt')

    // // const chAPI = process.env.CH_API;    
    // // const siAPI = process.env.SI_API;    

    // // const chURL = "https://api.collection.cooperhewitt.org/rest/";
    // // const siURL = "https://api.si.edu/openaccess/api/v1.0/search";

    // // //// constructing the initial search query
    // // // const search =  `unit_code:"CHNDM" AND color:"red" online_media_type:"Images"`;

    // // // array that we will write into
    // // let myArray = [];

    // // // string that will hold the stringified JSON data
    // // let jsonString = '';

    // // // search: fetches an array of terms based on term category
    // // function fetchSearchData(searchTerm) {
    // //     let url = chURL + "?api_key=" + apiKey + "&q=" + searchTerm;
    // //     console.log(url);
    // //     window
    // //     .fetch(url)
    // //     .then(res => res.json())
    // //     .then(data => {
    // //       console.log(data)
          
    // //       // constructing search queries to get all the rows of data
    // //       // you can change the page size
    // //       let pageSize = 1000;
    // //       let numberOfQueries = Math.ceil(data.response.rowCount / pageSize);
    // //       console.log(numberOfQueries)
    // //       for(let i = 0; i < numberOfQueries; i++) {
    // //         // making sure that our last query calls for the exact number of rows
    // //         if (i == (numberOfQueries - 1)) {
    // //           searchAllURL = url + `&start=${i * pageSize}&rows=${data.response.rowCount - (i * pageSize)}`;
    // //         } else {
    // //           searchAllURL = url + `&start=${i * pageSize}&rows=${pageSize}`;
    // //         }
    // //         console.log(searchAllURL)
    // //         fetchAllData(searchAllURL);
          
    // //       }
    // //     })
    // //     .catch(error => {
    // //       console.log(error);
    // //     })
    // // }

    // // // fetching all the data listed under our search and pushing them all into our custom array
    // // function fetchAllData(url) {
    // //   window
    // //   .fetch(url)
    // //   .then(res => res.json())
    // //   .then(data => {
    // //     console.log(data)

    // //     data.response.rows.forEach(function(n) {
    // //       addObject(n);
    // //     });
    // //     jsonString += JSON.stringify(myArray);
    // //     console.log(myArray);
    // //   })
    // //   .catch(error => {
    // //     console.log(error)
    // //   })

    // // }

    // // // create your own array with just the data you need
    // // function addObject(objectData) {  
      
    // //   // we've encountered that some places have data others don't
    // //   let currentPlace = "";
    // //   if(objectData.content.indexedStructured.place) {
    // //     currentPlace = objectData.content.indexedStructured.place[0];
    // //   }

    // //   myArray.push({
    // //     id: objectData.id,
    // //     title: objectData.title,
    // //     link: objectData.content.descriptiveNonRepeating.record_link,
    // //     place: currentPlace
    // //   })
    // // }


    // // fetchSearchData(search);


    // // var method = 'cooperhewitt.colors.palettes.getInfo';
    // // var args = {'access_token': api_token};
    //       


    
    // cooperhewitt.call(method, args, function(rsp){   
    //     console.log(rsp);  
    // });