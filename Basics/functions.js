function myFunction() {
    console.log("Hello World");
}
// myFunction();

function addTwoNumbers(num1, num2) {
let sum = num1 + num2;
    return sum;
}
const result = addTwoNumbers(10, 20);

// console.log(result);  

function loginUserMessage(username="Shyam"){
    if(!username){
        console.log("Please provide a username");
        return;
    } else {
        console.log(`Welcome Mr. ${username}`);
    }
}
// console.log(loginUserMessage("John"));
// console.log(loginUserMessage("Ramesh"));

function calculateCartPrice (num1, num2, ...num3) {
   return num3
}

// console.log(calculateCartPrice(100, 300, 500, 700, 900));

const user = {
    username: "Shyam",
    price: 999,

}

function handleObjects (anyObj) {
    console.log(`Hello ${anyObj.username} your price is ${anyObj.price}`);
}

// handleObjects(user);
const myNewArr =[100, 200, 300, 400, 500];
function returnSecondValue (arr) {
    return arr[1];
}
console.log(returnSecondValue(myNewArr));