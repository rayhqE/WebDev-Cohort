const artifact = {
  name: "Obsidian Crown",
  era: "Ancient",
  value: 50000,
  material: "volcanic glass",
};
const keys = Object.keys(artifact);
const values = Object.values(artifact);
const entries = Object.entries(artifact);

// console.log(keys);
// console.log(values);
// console.log(entries);

for ([key, value] of Object.entries(artifact)) {
  // console.log(`key:${key} & value: ${value}`);
}

const priceList = [
  ["Obsidian Crown", 50000],
  ["Ruby Pendant", 30000],
  ["Iron Shield", 5000],
];

const priceObj = Object.fromEntries(priceList);
// console.log(priceObj);

const displayCase = {
  artifact: "obsidian",
  location: "Hall A, Case 3",
  logged: true,
};

Object.freeze(displayCase);
delete displayCase.logged;
// console.log(displayCase);
displayCase.prop = "Jump";
// console.log(displayCase);

const catalogEntry = {
  id: "Art-101",
  description: "Artifact Collection",
  verified: true,
};

Object.seal(catalogEntry); //Seal is used when u want to allow edit to existing property.no structural changes . no new add,no delete,only edit

const securedArtifacts = { name: "Ruby Pendant" };
Object.defineProperty(securedArtifacts, "catogryId", {
  value: "SEC-999",
  writable: false,
  enumerable: true,
  configurable: false,
});
// console.log(securedArtifacts.catogryId);
for (const [key, value] of Object.entries(securedArtifacts)) {
  console.log(`${key}:${value}`);
}
const desc = Object.getOwnPropertyDescriptor(securedArtifacts, "catogryId");
console.log(desc);

// loop key points
//
// 1. for()
// 2. while()
// 3. do while
// 4. for...in//objects pe chlta
// 5. for...of//arrays,strings sb   pe chlta
// 6. map, forEach, filter, reduce
