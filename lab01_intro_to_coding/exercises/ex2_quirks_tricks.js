/*
  Exercise 2
  JavaScript quirks and tricks
*/

var schoolName = "Parsons";
var schoolYear = 1936;

// Task 1
// What is the value of test3?
var test1;
if (1 == true) {
  test1 = true;
} else {
  test1 = false;
}

var test2;
if (1 === true) {
  test2 = true;
} else {
  test2 = false;
}

var test3 = test1 === test2;

console.log("---- Exercise 2 Task 1 ----");
console.log("test3 is" + test3 + "because test1 is determined by an abstract equality comparison i.e. == and test2 is determined by strict equality comparison i.e. === and thus they are not strictly equal");




// // Task 2
// // Change this code so test4 is false and test5 is true. Use console.log() to confirm your code works.

var test4 = 0 === "";
var test5 = 1 == "1";

console.log("---- Exercise 2 Task 2 ----");
console.log("test4 is", test4, "and test 5 is", test5);




// Task 3
// What are the values of p, q, and r? Research what is going on here.
var w = 0.1;
var x = 0.2;
var y = 0.4;
var z = 0.5;

var p = w + x;

var q = z - x;

var r = y - w;

console.log("---- Exercise 2 Task 3 ----");
console.log(p);
console.log(q);
console.log(r);
console.log("----");
console.log("Variable p is " + p + " because javascript numbers are stored as double precision floating point numbers, which are IEEE 64 bit values. Integers are accurate up to 15 digits, but since most decimals cannot be represented precisely by binary fractions, you lose precision when performing operations and the results get rounded.");
console.log("----");
console.log("Variable p is " + q + " because the representation of .2 and the representation of .5 are rounded by the same amount.");
console.log("----");
console.log("Variable r is " + r + " - you can prevent losing precision in numbers by representing decimal numbers as strings instead fo JSON numbers or using a library.");