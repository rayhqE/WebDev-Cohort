const crewMembers = 40;
const fuelTons = 142.45;
const lightSpeed = 299_888_999;

const infiniteRange = Infinity;
const negativeInfinityRange = -Infinity;
const notANumber = NaN;
console.log(1 / 0);
console.log(-1 / 0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.isInteger());
console.log(Number.isNaN(notANumber));

const fuelReading = "142.75 tons";
const sectorCode = "0xA3";
const countDown = "007";
console.log(parseInt(sectorCode));

const thrustForce = 4.567;
console.log(Math.round(thrustForce));
console.log(Math.floor(thrustForce));
console.log(Math.ceil(thrustForce));
console.log(Math.trunc(thrustForce));

const temps = [-34, 56, 999, -43];
console.log(Math.min(...temps));
console.log(Math.max(...temps));

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
