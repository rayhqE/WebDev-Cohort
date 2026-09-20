//call and apply => basic chef
//bind => always returns a new function

function cookDish(ingredient, style) {
  return `${this.name} prepares ${ingredient} in ${style} style!`;
}

const sharmaKitchen = { name: "Sharma ji's kitchen" };
const vermaKitchen = { name: "Verma ji's kitchen" };

// console.log(cookDish.call(sharmaKitchen, "paneer and spices", "mughlai"));

const vermaOrder = ["Chole Bature", "Punjabi Dhaba"];

// console.log(cookDish.apply(vermaKitchen, vermaOrder));

function reportDelivery(location, status) {
  return `${this.name} at ${location}: ${status}`;
}

const deliveryBoy = { name: "Sam" };

console.log(
  "Call:",
  reportDelivery.call(deliveryBoy, "South carolina", "Ordered"),
);
console.log("Apply:", reportDelivery.apply(deliveryBoy, ["Mars", "Pickup"]));
const bindFunc = reportDelivery.bind(deliveryBoy, "Hyderbad", "WHAT");
// console.log("Bind:", bindFunc("Hyderbad", "WHAT"));
console.log("Bind:", bindFunc());
