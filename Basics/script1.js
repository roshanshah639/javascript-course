// Primitive types => Stack Memory
// Reference/non primitive types => Heap Memory
let myName = 'John'; // Stack Memory
let anotherName = myName; 
anotherName = 'Jane';
// console.log(anotherName);
// console.log(myName);

let user = {
    email: '9SsQV@example.com',
    upi: 'abc@upi',
}

let anotherUser = user;
anotherUser.email = 'abcd@example.com';
// console.log(user);
// console.log(anotherUser);

// Strings
const name = 'John';
const repoCount = 50;
// console.log(name + ' has ' + repoCount + ' repositories');
// console.log(` Hello, ${name}. I have ${repoCount} repositories`);
const gameName = new String('Tic-Tac Toe');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('c'));

const newStr = gameName.substring(0, 4);
// console.log(newStr);

const anotherStr = gameName.slice(-8, 4);
// console.log(anotherStr);

const netStr = "     roshan       ";
// console.log(netStr);
// console.log(netStr.trim());

const url = "https://www.google.com/roshan%20shah";
const newUrl = url.replace('%20', '-');
// console.log(newUrl);
// console.log(url.includes('roshan'));

const fullname = "roshan-bikram-shah";
// console.log(fullname);
const arr = fullname.split('-');
// console.log(arr);





