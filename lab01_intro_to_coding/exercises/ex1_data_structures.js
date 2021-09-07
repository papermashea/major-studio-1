/*
  Exercise 1
  JavaScript data structures & functions
*/

var names = [
  "Rubin Museum",
  "The Cooper Hewitt (Smithsonian)",
  "The Morgan Library and Museum",
  "The Whitney Museum of American Art",
  "The Frick Collection",
  "American Museum of Natural History",
];

var URLs = [
  "rubinmuseum.org",
  "cooperhewitt.org",
  "themorgan.org",
  "whitney.org",
  "frick.org",
  "amnh.org",
];

var years = [
  2004,
  1896,
  1924,
  1930,
  1935,
  1869
];



// Task 1
// Console log the length of each Array
console.log("---- Exercise 1 Task 1 ----");
console.log("There are " + names.length + " museum names in the original names array. They include " + names[0] + ", "  + names[1] + ", "  + names[2] + ", "  + names[3] + ", "  + names[4] + ", and "  + names[5] + ".");
console.log("There are " + URLs.length + " URLs in the original URLs array: " + URLs[0] + ", "  + URLs[1] + ", "  + URLs[2] + ", "  + URLs[3] + ", "  + URLs[4] + ", and "  + URLs[5] + ".");
console.log("There are " + years.length + " years listed in the original years array, including " + years[0] + ", "  + years[1] + ", "  + years[2] + ", "  + years[3] + ", "  + years[4] + ", and "  + years[5] + ".");




// Task 2
// add a new item to an array
var newName = "The Museum of Modern Art";
var newURL = "https://www.moma.org";
var newYear = 1929;

names.push(newName);
URLs[6] = newURL;
years = years.concat([newYear]);


console.log("---- Exercise 1 Task 2 ----");
console.log("Now there are " + names.length + " names: " + names);
console.log(URLs.length + " new URLs: " + URLs);
console.log(years.length + " new years: " + years);



// Task 3
// construct an Object out of our three Arrays
// the result should look similar to this:
var result = {
  "Museum Name 1": {
    URL: "www.museumwebsite.com",
    year: 2019
  }
}

var museums = {};
for (var i = 0; i < names.length; i++) {
  var currentName = names[i];
  var currentURL = URLs[i];
  var currentYear = years[i];

  museums[currentName] = {};
  museums[currentName]["URL"] = currentURL;
  museums[currentName].year = currentYear;
}

console.log("---- Exercise 1 Task 3 ----");
console.log('museums', museums);


//////// made new arrays for names/urls/years to preserve original list and show the difference 


var namesAll = names.concat([newName]);
var URLsAll = URLs.concat([newURL]);  
var yearsAll = years.concat([newYear]);


var museums2 = {};
namesAll.forEach(function(n, i) {
  museums2[n] = {};

  var currentURL = URLsAll[i];
  var currentYear = yearsAll[i];

  museums2[n].URL = currentURL;
  museums2[n]["year"] = currentYear;
});

console.log('museums2', museums2);




// Task 4
// Write a function to add a new museum object, with properties URL and year, to an existing museums object. Call it on museums2
function addAMuseum(museums, newName, newURL, newYear){
  museums[newName] = {};
  museums[newName].URL = newURL;
  museums[newName].year = newYear;

  return museums;
}

addAMuseum(museums2, newName, newURL, newYear);

console.log("---- Exercise 1 Task 4 ----");
console.log('museums2', museums2);
