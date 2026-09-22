const aadhar_of_rayyan = Symbol("aadhar");
const aadhar_of_piyush = Symbol("aadhar");

// console.log(typeof aadhar_of_piyush);
// console.log(aadhar_of_piyush === aadhar_of_rayyan);
// console.log(aadhar_of_rayyan.toString());
// console.log(aadhar_of_rayyan.description);

const nonIndian = Symbol();
// console.log(nonIndian.description);

const bioMetricHash = Symbol("biometrichash");
const bloodGroup = Symbol("bloodGroup");

const citizenRecord = {
  name: "ved pandey",
  age: 21,
  [bioMetricHash]: "a7ydfned34yd",
  [bloodGroup]: "o+",
};
// console.log(Object.keys(citizenRecord));
// console.log(Object.getOwnPropertySymbols(citizenRecord));

//usecase of symbol
// const rtiQueryBook = {
//   queries: ["Infra budget", "ration card", "education budget", "startup laws"],
//   sam: "ass",
//   sal: "asass",
// };
// for (const query of rtiQueryBook) {
//   console.log(query);
// }
