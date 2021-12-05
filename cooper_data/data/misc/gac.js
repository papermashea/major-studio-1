"use strict";
//// LOADED IMG
// window.addEventListener('load', function() {
//     const fac = new FastAverageColor();
//     const container = document.querySelectorAll('[class=image-container]');
//     // const color = fac.getColor(container.querySelector('img'));
//     const color = fac.getColor(container.querySelectorAll('[id=galleryImg]'));

//     container.style.backgroundColor = color.rgba;
//     container.style.color = color.isDark ? '#fff' : '#000';

//     console.log(color);
//     // {
//     //     error: null,
//     //     rgb: 'rgb(255, 0, 0)',
//     //     rgba: 'rgba(255, 0, 0, 1)',
//     //     hex: '#ff0000',
//     //     hexa: '#ff0000ff',
//     //     value: [255, 0, 0, 255],
//     //     isDark: true,
//     //     isLight: false
//     // }
// }, false);



//// UNLOADED
// const fac = new FastAverageColor();
// const container = document.querySelector('.image-container');

// fac.getColorAsync(container.querySelector('img'))
//     .then(color => {
//         container.style.backgroundColor = color.rgba;
//         container.style.color = color.isDark ? '#fff' : '#000';
//     })
//     .catch(e => {
//         console.log(e);
//     });



//// URL TRYING TO LOOP
// async function printAverageColor() {
//   var data = JSON.parse(dataset);
//     console.log(data)

//     for(let i = 0; i < 3865; i++) {
//       var imgData = JSON.stringify(data[i].image)
//         // console.log(imgData)

//       const color = await getAverageColor('imgData');
//       console.log(color);

//     } //close loop


// }; //close function


// const fac = new FastAverageColor();
// const container = document.querySelectorAll('.image-container');

// fac.getColorAsync(container.querySelectorAll('img'))
//     .then(color => {
//         container.style.backgroundColor = color.rgba;
//         container.style.color = color.isDark ? '#fff' : '#000';
//     })
//     .catch(e => {
//         console.log(e);
//     });
// printAverageColor();