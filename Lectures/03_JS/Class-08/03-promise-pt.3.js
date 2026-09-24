// console.log("swastik");
// Promise.resolve("Resolved Value").then((v) => {
//   console.log("MicroTask: ", v);
// });
// console.log("Rayyan");

function boilWater(ms) {
  return new Promise((res, rej) => {
    console.log("karte hai ji boil water");
    if (typeof ms !== "number" || ms < 0) {
      rej(new Error("ms must be number and greater than zero"));
    }
    setTimeout(() => {
      res("ubl gaya ji");
    }, ms);
  });
}

// boilWater(2000)
//   .then(console.log)
//   .catch((err) => console.log(err.message));

(async (params) => {
  console.log(await boilWater(2000));
})();

function grindLeaves() {
  return Promise.resolve("Leaves Grounded");
}

function steepTea(time) {
  return new Promise((res) => {
    setTimeout(() => {
      res("Steeped Tea");
    }, time);
  });
}

function addSugar(spoons) {
  return `Added ${spoons} sugar`;
}
