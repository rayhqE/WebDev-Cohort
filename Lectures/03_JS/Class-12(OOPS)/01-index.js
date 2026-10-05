// const user1 = {
//   name: "rayyan",
//   score: 99,
//   increment() {
//     this.score++;
//   },
// };

// const user2 = {
//   __proto__: user1,
// };
// console.log(user2.score);

// const user2 = Object.create(user1);
// console.log(user2);

function User(name, score) {
  this.name = name;
  this.score = score;
  // intro = () => {
  //   return `My name is ${this.name} and score is ${this.score}`;
  // };
}

// class User {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//   }
//   intro() {
//     return `My name is ${this.name} and score is ${this.score}`;
//   }
// }

const User1 = new User("Rayyan", 14);
const User2 = new User("Suraj", 67);
// console.log(newUser.intro());
// console.log(newUser2.intro());
// console.log(newUser2);
// console.log(newUser2.score);
// console.log(newUser.__proto__ === User.prototype);
// console.log(User1 === User2);
// console.log(User1 === User);
// console.log(User1 instanceof User);
