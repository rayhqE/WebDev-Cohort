const carriage1 = ["Veer", "sample", "gone"];
const emptyCarriage = [];

const threeEmptySeats = Array(3); //array can be empty,not null not undefined but empty
threeEmptySeats[1] = "riot";
console.log(threeEmptySeats);
const passenger = Array("Sample", "Gone");
const singlePassenger = Array.of(3);
console.log(singlePassenger);

let train = Array.from("Dust");
console.log(train);

const jump = ["A", "B", "C", "D", "E"];
jump.length = 3;
console.log(jump);
jump.length = 5;
console.log(jump);

//push pop shift unshift splice//mutates the original array
//concat slice flat

// const trainCopy = original.slice

//searching == indexOf , includes, find ,findindex

console.log(typeof []);
console.log(Array.isArray([]));
console.log(Array.isArray("Ravi"));
//key points
//1.mostly use []..less use Array(n)
//2.arrays are 0 based
//3.mutating methods:push ,pop,shift,unshift,splice
//4. non mutating methods:concat, slice, flat,flatmap
//5.searching == indexOf , includes, find ,findindex
//6.Array.isArray()
