// for of loops
// const myArray = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// for (const company of myArray) {
//     console.log(company);
// }

// const greetings = "Hello World";
// for (const greet of greetings) {
//     console.log(`Each char of greet is ${greet}`);
// }

// map
const map = new Map();
map.set("IN", "India");
map.set("NP", "Nepal");
map.set("IN", "India");
// console.log(map);

for (const [key, value] of map) {
//    console.log(key, ":-",value); 
}

const myObject = {
    game1: "Tic-Tac-Toe",
    game2: "Snake",
    game3: "Chess",
    game4: "Checkers",
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }