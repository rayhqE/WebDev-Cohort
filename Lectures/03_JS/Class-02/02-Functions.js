//What is Function
//Function - A resuable set of instructions
//A block of code designed to perform specific task

function sayHello() {
  // console.log("Hello");
  // return "hello";
}
sayHello();
//Parameters
function greetUSer(x) {
  // console.log("hey ", x);
}
greetUSer("Rayyan");
//Multiple Parameteres
function greetUSer2(x, y, z) {
  // console.log("Details:", x, y, z);
}
greetUSer2("Rayyan", 23, "Noida");
//String interpolation
function printIt(name, age) {
  // console.log(`Hey ${name} ${age}`);
}

printIt("Rayyan", 21);

//Return a Function's value
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
const r = add(5, 1);
for (let i = 1; i <= r; i++) {
  // console.log(`Value of i is ${i}`);
}

function cartoon() {
  function cartoonUnderCartoon() {
    return "naruto🔥";
  }
  return cartoonUnderCartoon;
}
const anime = cartoon();

// console.log(anime());

age = 45;
// console.log("value of isAllowed is : ", isAllowed);

// console.log(
//   "value of age is ",
//   age,
//   "and is Allowed to vote?: ",
//   isAllowed(age),
// );

var age = 24;

function isAllowed(age) {
  return age >= 18;
}

//Arrow Function
//     fn name     param       return
const canYouBuy = (price) => price <= 25000;

// console.log(canYouBuy(4000));
