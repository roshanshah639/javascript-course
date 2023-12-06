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