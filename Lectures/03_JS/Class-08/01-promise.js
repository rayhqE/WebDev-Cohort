const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("ChaiCode");
    reject(new Error("Oh No"));
  }, 2000);
});
console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// 1st way
// const myFunc = (val) => {
//   setTimeout(() => {
//     console.log(val);
//   }, 3000);
// };
// promise.then(myFunc);

//2nd way
// promise.then((val) => {
//   setTimeout(() => {
//     console.log(val);
//   }, 3000);
// });

// 3rd way
// promise.then(console.log); -this is similar as promise.ten((data)=>console.log(data))
//bcz its .then's duty to feed the value from from resolve into whatever func is being pushed as callback in .then

// +++++++++++
promise
  .then((data) => {
    return data.toUpperCase();
  })
  .then(console.log)
  .catch((error) => {
    console.log(error);
    return "superError";
  })
  .then(console.log);
//this can also be handled with then only:
// promise.then(
//   (data) => console.log(data),
//   (err) => console.log(err),
// );
// +++++++++++
