function sample() {
  return typeof this;
}
// console.log(sample());

function sample2() {
  "use strict";
  return this;
}
// console.log(sample2());

const sample3 = {
  name: "Rayyan",
  age: "Twenty Four",

  introduce() {
    return `My name is ${this.name} and i am ${this.age} years old`;
  },
};
// console.log(sample3.introduce());

//
const filmDirector = {
  name: "Sanjay leela bhansali",
  cast: ["Ranveer", "Deepika", "Priyanka"],

  announceCast() {
    this.cast.forEach((actor) => {
      console.log(`${this.name} introduces ${actor}`);
    });
  },
};
// filmDirector.announceCast();

//regular nested funcs dont support this
const sample4 = {
  crew: "Spot Boys",
  prepareProps() {
    console.log(`outer crew: ${this.crew}`);

    function innerCrew() {
      console.log(`inner crew: ${this.crew}`);
    }
    innerCrew();

    const arrowCrew = () => {
      console.log(`Arrow crew: ${this.crew}`);
    };
    arrowCrew();
  },
};

// sample4.prepareProps();

const actor = {
  name: "Ranveer",
  bow() {
    return `${this.name} takes  a bow`;
  }, 
};

// console.log(actor.bow());
const bowAlert = actor.bow;
console.log(bowAlert()); 
