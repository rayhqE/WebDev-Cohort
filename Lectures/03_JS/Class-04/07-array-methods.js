const orders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
];

const myData = orders.forEach((order, index) => {
  // console.log(`#${index + 1} : ${order.qty} x ${order.dish}`);
});

// console.log(myData);

const recieptLines = orders.map((O) => `${O.dish}: $${O.price * O.qty}`);
// console.log(recieptLines);

let spicyOrder = orders.filter((o) => o.spicy);
// console.log(spicyOrder);

const totalRevenue = orders.reduce((sum, order) => {
  return sum + order.qty * order.price;
}, 0);
// console.log(totalRevenue);

const grouped = orders.reduce(
  (acc, order) => {
    const catagory = order.spicy ? "spicy" : "mild";
    // if (catagory === "spicy") {
    //   acc.spicy.push(order);
    // } else {
    //   acc.mild.push(order);
    // }
    acc[catagory].push(order.dish);
    return acc;
  },
  { spicy: [], mild: [] },
);

// console.log(grouped);

const ticketNum = [100, 43, 9, 67, 3];
const sortedW = [...ticketNum].sort((a, b) => a - b);
// console.log(sortedW);

const kitchenOrders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
  { dish: "Ghost Pepper Soup", price: 15, spicy: true, qty: 1 },
];

const mildReport = kitchenOrders
  .filter((o) => !o.spicy)
  .map((o) => ({ dish: o.dish, total: o.price * o.qty }));
console.log(mildReport);
