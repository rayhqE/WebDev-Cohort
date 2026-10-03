const btn = document.getElementById("btn");

// btn.onclick = function () {
//   console.log("Hello world from dom");
// };

// btn.onclick = function () {
//   console.log("Hello world from dom-2");
// };

// btn.addEventListener("click", () => {
//   console.log("Clicked!");
// });

// btn.addEventListener("click", () => {
//   console.log("Clicked!-2");
// });

// btn.addEventListener("click", () => {
//   console.log("Clicked!-3");
// });

const parent = document.getElementById("parent");
const child = document.getElementById("child");
const body = document.body;

// parent.addEventListener(
//   "click",
//   () => {
//     event.stopPropagation();
//     console.log("Parent Capturing");
//   },
//   true,
// );
// body.addEventListener(
//   "click",
//   () => {
//     console.log("Body Capturing");
//   },
//   true,
// );

// child.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("child clicked");
// });
// parent.addEventListener("click", () => {
//   console.log("Parent Bubbling!");
// });
// parent.addEventListener("click", () => {
//   console.log("Body Bubbling!");
// });

//event bubbling
//e.stopImmidiatePropagation

// const items = document.querySelectorAll("li");
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(item.textContent);
//   });
// });

// .
// .
// .
// .
// .
// .
// .

//event delegation
//
const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
