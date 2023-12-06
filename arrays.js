// Arrays
const myArray = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Spiderman", "Ironman", "Hulk", "Thor", "Captain America"];
const myArray2 = new Array(1, 2, 3, 4, 5);

// myArray.push(6);
// myArray.push(7);
// myArray.pop();

// myArray.unshift(9);
// myArray.shift();

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(19));

// const myArray3 = myArray.join();

// console.log(myArray);
// console.log(myArray3);

// console.log("A ", myArray);

// const newArray = myArray.slice(1, 3);
// console.log(newArray);

// const newArray1 = myArray.splice(1, 3);
// console.log(newArray1);
// console.log("B ", myArray);

const marvelHeroes =["Spiderman", "Ironman", "Hulk", "Thor", "Captain America"];

const dcHeroes = ["Batman", "Superman", "Flash", "Green Lantern"];

// const totalHeroes = marvelHeroes.concat(dcHeroes);
// console.log(totalHeroes);
// console.log(marvelHeroes);

const totalHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(totalHeroes);
const anotherArray = [1,2,3,[4,5,6],7,[6,7, [4,5]]];

const realArray = anotherArray.flat(3);
// console.log(realArray);

// console.log(Array.isArray("Roshan"));
// console.log(Array.from("Roshan"));
// console.log(Array.from({name: "Roshan"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3));