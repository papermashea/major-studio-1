"use strict";

// const fs = require('fs');
// const getAverageColor = require('fast-average-color-node');

// let dataset = fs.readFileSync('./data/allObjectsCountries.json');

const fac = new FastAverageColor();
const container = document.querySelector('.image-container');

fac.getColorAsync(container.querySelector('img'))
    .then(color => {
        container.style.backgroundColor = color.rgba;
        container.style.color = color.isDark ? '#fff' : '#000';
    })
    .catch(e => {
        console.log(e);
    });




// async function printAverageColor() {
//   var data = JSON.parse(dataset);
    // console.log(data)

    // for(let i = 0; i < 3865; i++) {
    //   var imgData = JSON.stringify(data[i].image)
    //     // console.log(imgData)

    //   const color = await getAverageColor('imgData');
    //   console.log(color);

    // } //close loop


// }; //close function

// printAverageColor();