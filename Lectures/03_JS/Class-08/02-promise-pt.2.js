const turant = Promise.resolve("Turant");
// console.log(turant);

// Promise.all;
// Promise.allSettled;
// Promise.any;
const allPromise = Promise.allSettled([
  Promise.resolve("CHAI"),
  Promise.resolve("CODE"),
  Promise.reject("OH NO"),
]);
// allPromise.then(console.log);

const hPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Masterji");
    rej(new Error("Masterji"));
  }, 3000);
});

async function nice() {
  try {
    const result = await hPromise;
    console.log(result);
  } catch (error) {
    console.log("Error aagya bhai:", error.message);
  }
}
nice();
