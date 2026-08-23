const codeName = "Shadow Fox";
const backupName = String("Night Own");

const templateName = `Agent ${codeName}`; //string interpolation

let interCepted = "Hello";
interCepted[0] = "J"; //silent fail
console.log(interCepted);

const secretCode = "OMEGA-7";
console.log(secretCode.length);
console.log(secretCode.charAt(99));
console.log(secretCode[99]);
console.log(secretCode.at(-1));
const rawTransmissionMsg = "ThE EaGlE HaS LandeD";
console.log(rawTransmissionMsg.toLowerCase());

const orders = "move-noorth|hold-position|extract-vip";

console.log(orders.split("|"));

const data = "SOS".split("");
console.log(typeof data);
console.log(Array.isArray(data));

const numJi = "45";
console.log(numJi.padEnd(6, "X"));

const spellCard = `
+==============================
| Spell: ${data}   |
`;
// console.log(spellCard);

let checker = true;
const profile = `
${checker ? "true-value" : "False-Value"}`;
// console.log(profile);

console.log(void "Hitesh");

let generalStore = { name: "Kirana", goods: 2 };
console.log(generalStore);
generalStore = undefined;
console.log(generalStore);
