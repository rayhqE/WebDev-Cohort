const prithiviraj = {
  name: "Prithiviraj",
  generation: "Grand Father",
  cookTraditionalDish() {
    return `${this.name} cooks an ancient family recipe`;
  },
};

const raj = Object.create(prithiviraj);
// console.log(raj);
raj.name = "raj";
raj.generation = "father";
raj.runBusiness = function () {
  return `${this.name} runs the family business`;
};
// console.log(raj.runBusiness());

const ranbir = Object.create(raj);
ranbir.name = "ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function () {
  return `${this.name} directs blockbuster movies`;
};

// console.log(ranbir.makeFilm());
// console.log(ranbir.runBusiness());
// console.log(ranbir.cookTraditionalDish());

Array.prototype.last = function () {
  return this[this.length - 1];
};
console.log([1, 2, 3, 4].last());
console.log(["nik", "sam"].last());
