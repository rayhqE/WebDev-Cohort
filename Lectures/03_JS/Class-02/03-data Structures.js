//Data Structures
//Memory me data ko ek particular structure me store karna
//Subjectify naa kare toh shi rehga smjhne me
// const fruits = ["Apple", true, "mango", 1, "santra", "🍉", "kela"];
//                0       1     2       3    4         5      6
// fruits.push("kiwi");

// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.includes("tarbooz"));
// console.log(fruits.shift());
// console.log(fruits.slice(2, 5));
// fruits.unshift("2", "spiderman");
// fruits.pop();
// console.log(fruits);
// console.log(fruits.indexOf("tarboo"));

//Assignment: Queues and Stack Implement krna hai using Array

//.

//.

//.
//HIGH ORDER FUNCTIONS
//Whar are High order Functions
function meraPyaraFunc(udharKaFunc, udharKaDusraFunc) {
  return udharKaFunc() + udharKaDusraFunc() + 40;
}

function cartoon() {
  return 30;
}

function submit() {
  return 100;
}
// console.log(meraPyaraFunc(submit, cartoon));

//Applications of High Order Function
const fruits = ["Apple", true, "mango", 1, "santra", "🍉", "kela"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//***************ForEach Function*********************
//Better Way-1
function printKrdo(element) {
  // console.log(element);
}
fruits.forEach(printKrdo);

//Better Way-2
fruits.forEach(function printKrdo(element) {
  // console.log(element);
});

//Best Way-
// fruits.forEach((e) => console.log(`=> ${e}`));
//.
//.
//.
//Custom forEach
function forEach21(bataoKrnaKyaKrnaHai) {
  for (let i = 0; i < fruits.length; i++) {
    bataoKrnaKyaKrnaHai(fruits[i]);
  }
}
// forEach21((a) => console.log(`-->${a}`));
// forEach21();

//.
//.
//.
//*******************Map Function*******************
const nums = [1, 2, 3, 4, 5, 6];
let result = [];
for (let i = 0; i < nums.length; i++) {
  result.push(nums[i] * 2);
}
// console.log(result);
//Map
const superT = nums.map((e) => e * 4);
// console.log(superT);

//.
//.
//.
//Custom Map

function map(fn) {
  const result2 = [];
  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];
    const value = fn(currentElement);
    result2.push(value);
  }
  return result2;
}
const result33 = map((e) => e * 4);
// console.log(result33);
/**
 *
 *
 *
 *
 *
 */
//1.
const nums45 = [5, 25, 45, 65];
const result45 = nums45.map((e) => e * 10 + 1);
console.log(result45);
/**
 *
 *
 * 
 *
 *
 */
//2.
const nums67 = [3, 10, 24, 9, 45, 44, 43];

const result43 = nums67.forEach(function (e) {
  if (e % 2 === 0) {
    // console.log(e);
  }
});
// console.log(result43);
