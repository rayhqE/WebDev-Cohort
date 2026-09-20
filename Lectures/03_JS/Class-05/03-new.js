function TataCar(chesisNum, modelName) {
  this.chesisNum = chesisNum;
  this.modelName = modelName;
  this.fuelLevel = 100;
}

TataCar.prototype.status = function () {
  return `Tata ${this.modelName} #${this.chesisNum} | FuelLevel:${this.fuelLevel}`;
};

const car1 = new TataCar("MH-101", "Nexon");
const car2 = new TataCar("DL-202", "Harrier");
// console.log(car1.status());
// console.log(car2.status());

//
//this is not same as above
//

function createAutoRikshaw(id, route) {
  return {
    id,
    route,
    run() {
      return `Auto ${this.id} running on ${this.route}`;
    },
  };
}

const auto1 = createAutoRikshaw("UP-01", "Lucknow-Kanpur");
const auto2 = createAutoRikshaw("UP-02", "Agra-Mathura");

console.log(auto1.run());
console.log(auto2.run());
