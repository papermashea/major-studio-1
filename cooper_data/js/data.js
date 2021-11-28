'use strict';

const fs = require('fs')
const request = require('request');

let wordArray = [];
  // console.log(wordArray);

let data = fs.readFileSync('cooperColors.json');
let obj = JSON.parse(data);
  // console.log(obj)

function object(){
    let objects = obj.response.rows.filter(data => {      
      dataComplete = true;
      
      // test for values
      if(data.type_id ==null)dataComplete=false;
      if(data.media_id ==null)dataComplete=false;
      if(data.year_start ==null)dataComplete=false;

      return dataComplete;
    
    }).map((data) => {
      
      let filename = data.images[0].url.pop();
      
      let imgSizeParam = "max";
      let imgSizeValue = 300;

      return { 
        objectID: data.id,
        title: data.title,
        type: data.type,
        type_id: data.type_id,
        media: data.media,
        media_id: data.media_id,
        year: data.year_start,
        // country: data.woe[':country_name'],  
        // country_id: data.woe[':country'],
        description: data.description,
        // primaryImage: data.images[0].url,
      }

    })
  
    wordArray.push(objects);
    // if there are more objects than the pageSize wordArray will look like this: [[...objects], [...objects]]
    // we use [].concat to flatten out wordArray to be a one-dimensional array
    wordArray = [].concat(...wordArray);
  // });
}

// new json file
setTimeout(() => {
    fs.writeFileSync('wordData.json', JSON.stringify(wordArray), 'utf8')
}, 5000)
