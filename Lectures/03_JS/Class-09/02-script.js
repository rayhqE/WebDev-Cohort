// const cache = {};

// function add(a, b) {
//   const key = `${a}:${b}`;
//   if (cache[key]) {
//     return cache[key];
//   }
//   const result = a + b; //0.25
//   cache[key] = result;
//   return result;
// }
// add(3, 4);
//10M - add(3,4)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function createOptimisedVersion(fn) {
  const cache = {}; //tiffin

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function add(a, b) {
  return a + b;
}

function square(n) {
  return n * n;
}

const optimisedAdd = createOptimisedVersion(add);
const optimisedSqr = createOptimisedVersion(square);

console.time("CodeStarts");
console.log(optimisedSqr(15255555));
console.timeEnd("CodeStarts");
console.time("CodeStarts");
console.log(optimisedSqr(15255555));
console.timeEnd("CodeStarts");
console.time("CodeStarts");
console.log(optimisedSqr(15255555));
console.timeEnd("CodeStarts");
console.time("CodeStarts");
console.log(optimisedSqr(15255555));
console.timeEnd("CodeStarts");

// optimisedAdd(2, 3);
// optimisedAdd(2, 3);
// optimisedAdd(2, 3);
