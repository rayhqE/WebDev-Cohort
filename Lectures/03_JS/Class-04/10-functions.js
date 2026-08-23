// console.log(brewingPotion("Healing Herb", 4));

function brewingPotion(ingredient, dose) {
  return `Brewing Potion with ${ingredient}(x${dose}).....Potion ready`;
}

//function expression
const mixElixir = function (ingredient) {
  // console.log(`Making Potion with ${ingredient}`);
};

//arror function
//no own this, no `argument` object
const distilledEssence = (ingredient) => {
  console.log(`Making Potion with ${ingredient}`);
};

function oldBrewingLogs() {
  // console.log("Type of: ", typeof arguments);
  // console.log("isArray: ", Array.isArray(arguments));
  const argsArray = Array.from(arguments);
  // console.log(argsArray);
  // console.log(arguments);
}
oldBrewingLogs("sage", "RoseMary");

const arrowBrew = () => {
  try {
    // console.log(arguments);
  } catch (error) {
    // console.log(`Error is: ${error.message}`);
  }
};
arrowBrew();

// console.log("Program Continue");

//impure function bcz its mutating outside value
let globalCount = 0;
function brewCount(name) {
  globalCount++;
}

function newFunctionForClass(brewCount) {
  return function newBrew() {
    //do Something
  };
}

//IIFE
(function () {})();

// postionShop()
//()()
(function () {})();
(() => {})();

const postionShop = (function () {
  let inventory = 0;
  return {
    brew() {
      inventory++;
      return `Brew Potion #${inventory}`;
    },
    getStock() {
      return inventory;
    },
  };
})();
// console.log(postionShop);
// console.log(postionShop.inventory);

// console.log(postionShop.brew());
// console.log(postionShop.getStock());

function makeFunc() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const myFunc = makeFunc();
myFunc();
console.log(myFunc);
