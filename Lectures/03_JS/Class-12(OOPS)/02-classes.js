// class User {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//   }

//   increment() {
//     this.score++;
//   }
// }

// const u1 = new User("suraj", 100);
// console.log(u1);
// u1.increment();
// console.log(u1);
// console.log(User.prototype);
// console.log(typeof User);

class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  login() {
    return "Logged In";
  }
}

class Admin extends User {
  constructor(name, score, isAdmin) {
    super(name, score);
    this.isAdmin = isAdmin;
  }

  deleteUser() {
    return `Deleted`;
  }
}
const admin = new Admin("suraj", 100, true);

console.log(admin.login());

