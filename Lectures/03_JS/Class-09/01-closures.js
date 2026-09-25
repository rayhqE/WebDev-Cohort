// function init() {
//   let name = "Rayyan";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();

// function makeFunc() {
//   let name = "Rayyan";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName; //HERE CLOSURES ALSO CARRY THE REFRENCES OF ITEMS THAT ARE BEING PASSED INSIDE THE RETURNING FUNC LIKE name... ETC
// }
// const myFunc = makeFunc();
// myFunc();

// function startCompany() {
//   function ca(name) {
//     return `Name of your company should be: ${name}`;
//   }
//   return ca;
// }

// const geMeAcompany = startCompany();
// console.log(geMeAcompany("Zomato"));

function eternal(guest) {
  const guestName = guest;
  let count = 0;
  function zomato() {
    if (count === 1) return;
    console.log(`Hi ${guestName} from Zomato`);
    count++;
  }
  function blinkIt() {
    console.log(`Hi ${guestName} from BlinkIt`);
  }
  // zomato();
  // blinkIt();
  return {
    zomato,
    blinkIt,
  };
}
const rayyan = eternal("rayyan");
rayyan.zomato();
rayyan.zomato();
rayyan.zomato();
rayyan.blinkIt();
rayyan.blinkIt();
