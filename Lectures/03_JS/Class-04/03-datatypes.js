let weaponName = "Flame Sword";
console.log("Weapon: ", weaponName, "| Type: ", typeof weaponName);

const attackPower = 75n;
const attackUpgrade = 1.5;
console.log(typeof attackPower);
console.log(typeof attackUpgrade);

const isLoggedIn = true;

let bonusEffect;
let curseStatus = null; //value intentionally absent
let weatherApiResponse = null;
console.log(weatherApiResponse);

let uniqueRuneId = Symbol("rune_of_fire");
console.log(
  "Rune: ",
  uniqueRuneId.toString(),
  "| type of: ",
  typeof uniqueRuneId,
);
//7 primitve datatypes

const heroStats = {
  name: "Deepak",
  level: 12,
  class: "ranger",
};
console.log("Hero: ", heroStats, "| type: ", typeof heroStats);

const inventory = ["Flame Sword", "Health Portion", "Shield"];
console.log("Inventory: ", inventory, "| type: ", typeof inventory);

function castSpell() {
  return "FireBall";
}

console.log("Spell Type: ", typeof castSpell);

console.log(typeof "Sample");
console.log(typeof 42);
console.log(typeof 12n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

let originalHP = 100;
let clonedHP = originalHP;

clonedHP = 80;

console.log("Original HP: ", originalHP);
console.log("Cloned HP: ", clonedHP);

const originalSword = {
  name: "Flame Sword",
  damage: 75,
  typeofW: "Fire",
};

const clonedSwored = originalSword;

clonedSwored.damage = 90;
console.log(originalSword.damage);
console.log(clonedSwored.damage);

const armorOriginal = {
  name: "Iron Plate",
  defence: 50,
  buff: {
    fire: 10,
  },
};

const armorCopy = { ...armorOriginal };

const potionOriginal = {
  name: "Health-Potion",
  effects: { heal: 40, mana: 30 },
};

const potionCopy = structuredClone(potionOriginal);

typeof null === "object";
Array.isArray;
