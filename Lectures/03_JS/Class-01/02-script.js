var fname = "Rayyan";

//JavaScript is a loosely typed language
// console.log("Value of fname is ", fname);
var lname = "haque";
var fname = "john";
// console.log("Value of fname is ", fname);

var fname = 32;
// console.log("Value of fname is ", fname);

function addNum(num1, num2) {
  var result = num1 + num2;
  // console.log("result is", result);
}

addNum(2, 3);
addNum(20, 312);

//Conditionials
//Condition = True or False(Boolean)
var age = 33;

var childCondition = age <= 14;
var teenCondition = age <= 19;
var adultCondition = age <= 31;
var seniorCondition = age > 31 && age < 105;

if (childCondition) {
  // console.log("You are a child");
} else if (teenCondition) {
  // console.log("You are a Teen");
} else if (adultCondition) {
  // console.log("You are an Adult");
  // } else if (seniorCondition) {
  // console.log("You are a Senior");
} else {
  // console.log("All conditions are False");
}

// LOOPS
//for , while , do-while , forEach, forOf, map, forIn, iterators, filter, reduce, entries, keys
/**
 *
 *
 *
 *
 */
//1-For Loop
//      Init      Condition      Increment
for (var x = 1; x <= 10; x = x + 1) {
  // Code jisko loop karwana hai
  // console.log("Meri x ki value", x);
}
// console.log("value of x is ", x);
/**
 *
 *
 *
 *
 */
//1-While vs Do-while

var fileSize = 1024;
var currentFileDownloaded = 0;
//while
while (currentFileDownloaded < fileSize) {
  // console.log("File ko Download Krte Jao");
  currentFileDownloaded = currentFileDownloaded + 40;
}
//do-while
do {
  // console.log("File ko Download Krte Jao");
  currentFileDownloaded = currentFileDownloaded + 512;
} while (currentFileDownloaded < fileSize);
