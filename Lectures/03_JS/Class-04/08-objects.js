const hero = {
  name: "Luna the Brave",
  class: "mage",
  level: 12,
  health: 85,
  mana: 120,
  isAlive: true,
};

hero.weapon = "FIRE";
delete hero.level;
// console.log(hero);

const ranger = {
  name: "Lakshay",
  agility: 80,
  stealth: undefined,
};

console.log("name" in ranger);
console.log("stealth" in ranger);
console.log("toString" in ranger);

console.log(ranger.hasOwnProperty("toString"));


