const userEmail = "abc@gmail.com";
if (userEmail) {
  // console.log("Email is valid");
} else {
  // console.log("Email is not valid");
}

//falsy values => false, 0, -0, BigInt(0), "", null, undefined, NaN
// truthy values => true, 1, -1, BigInt(1), "abc", {}, [], "0", "false", " ", function(){}, new Date()
let myArray = [];
if (myArray.length === 0) {
  // console.log("Array is empty");
}

const user = {};
if (Object.keys(user).length === 0) {
  // console.log("User is empty");
}

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;

// console.log(val1);

// Ternary operator
const iceTeaPrice = 100;
// iceTeaPrice >= 80
//   ? console.log("Price is Greater ss Than 80")
//   : console.log("Price is Less than 80");

