/*
  Exercise 6
  DOM manipulation with vanilla JS
*/

// Task 1
// What does DOM stand for?
console.log("---- Exercise 6 Task 1 ----");
console.log("DOM stands for Document Object Model - it represents the docoument visually as nodes and objects.");




// Task 2
// Open the file index.html in AWS Cloud9. Click "Preview" > "Preview File index.html". (Note that you can open it in a new window). What do you see?
console.log("---- Exercise 6 Task 2 ----");
console.log("Previewing the index.html file in AWS or opening it in a browser shows the document displayed with a pink vertical box with a 1px green border, see img_ex6_task2.png in this directory.");




// Task 3
// Delete the div with the class rectangle from index.html and refresh the preview.
console.log("---- Exercise 6 Task 3 ----");
console.log("Removing the div with the class rectangle displays the document with no pink/green vertical box (I commented it out).");




// Task 4
// What does the following code do?
// const viz = document.body.querySelector(".viz");

// console.log(viz, viz.children);

// const addChildToViz = () => {
//   const newChild = document.createElement("div");
//   newChild.className = "rectangle";
//   newChild.style.height = Math.random() * 100 + "px";
//   viz.appendChild(newChild);
// };

// viz.addEventListener("click", addChildToViz);

console.log("---- Exercise 6 Task 4 ----");
console.log("This code initially runs all the console.log messages from ex1_data_structures.js. When I updated that reference in the html document to ex6_dom_manipulation.js, it adds a new pink/green rectangle to the document when clicked - see img_ex6_task4.png.");




// Task 5
// Where can you see the results of the console.log below? How is it different from in previous exercises?

function drawIrisData() {
  window
    .fetch("./iris_json.json")
    .then(data => data.json())
    .then(data => {
      console.log(data);
    
    const viz = document.body.querySelector(".viz");

    console.log(viz, viz.children);
    
    const addChildToViz = () => {
      const newChild = document.createElement("div");
      newChild.className = "petal";
      newChild.style.height = data.petallength * 100 + "px";
      newChild.style.width = data.petalwidth * 1000 + "px";      
      
      var flower = {};
      for (var i = 0; i < data.length; i++) {
        var species = data.class[i];
        var petalheight = data.petalheight[i];
        var petalwidth = petalwidth[i];
      }
      
      
      viz.appendChild(newChild);
    };
    
    viz.addEventListener("click", addChildToViz);    
      
    });
}

drawIrisData();

console.log("---- Exercise 6 Task 5 ----");
console.log("You can see the console log data by popping a new window into the browser and right clicking to inspect (or right clicking in the initial preview window but it's messier to read) - see img_ex6_task5.png. This is different from previous exercises because we're pulling in data in from an external source.");


// // Task
// // Modify the code above to visualize the Iris dataset in the preview of index.html.
// // Feel free to add additional CSS properties in index.html, or using JavaScript, as you see fit.



