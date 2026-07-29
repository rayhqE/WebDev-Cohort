//Hoisting
//Declaration hoist hoti hai initialization hoist nhi hoti
// age = 14;

//1
// var age = 43;
// console.log("Age is ", age);

//2
// console.log("Marks is ", marks);
// var marks = 78;

//3
// console.log("Value is ", value);
// var value = 29;
// console.log("Value is ", value);

//4
// value = 489;
// console.log("Value is ", value);
// var value = 29;
// console.log("Value is ", value);
//.
//.
//.
//.
//5
// console.log("number is ", num);

// num = 45;
// console.log("Num is ", num);
// var num = 32;
// hello();
// console.log("Num is ", num);

// function hello() {
//   console.log("this is hello");
// }

console.log("value of age is  ", age);
var age = 45;
console.log("adding 5 to 10", addFive(10));
console.log("value of age is ", age);

function addFive(num) {
  var result = num + 5;
  return result;
}
