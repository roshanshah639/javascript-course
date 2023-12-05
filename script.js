// variables and constants
const accountId = 1445533;
let accountEmail = "roshan.shah@gmail.com";
var accountPassword = "123456";
accountCity = "Kathmandu";
let accountState = "Bagmati";


// accountId = 1445534; // Not allowed

accountEmail = "roshan.shah1@gmail.com";
// console.table({ accountId, accountEmail, accountPassword, accountCity });

// alert("Hello"); // we are using node js

// console.log("Hello");

let name = "Roshan";
let age = 25;
let isLoggedIn = true;

// Object 
// console.log(typeof name);

let score = undefined;
// console.log( score);
// console.log(typeof (score));

let valueInNumber = Number("33abc");
// console.log(valueInNumber);

isLoggedIn = false;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

let someNumber = 33;
// let strNumber = String(someNumber);
// console.log(typeof strNumber);

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Roshan";
let str2 = "Shah";
let str3 = str1 + " " + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "3");

// console.log(true+);

let num1,num2,num3;
num1 = num2 = num3 = 2+2;
// console.log(num1,num2,num3);

let gameCounter = 100;
++gameCounter;
// console.log(gameCounter);

// Comparison
// console.log("2" === 1);
// console.log("02" === 1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefineds>0);
// console.log(undefineds==0);
// console.log(undefineds>=0);

// Data Types
// Primitive Data Types
  // String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score1 = 100; //Number
const scorevalue = 100.30;
const isLoggedIn1 = true; // boolean

let userEmail; // undefined

const id = Symbol('123'); // symbol
const anotherId = Symbol('123'); // symbol
// console.log(id === anotherId); // false

const bigInt = 1234567890123456789012345678901234567890n; // bigint
// console.log( bigInt);
//Non Primitives/Refrenced Data Types
 // Array, Object, Function
 //Array
 const heroes = ['Superman', 'Batman', 'Spiderman'];
 const hero1 = heroes;
 hero1.push('Hulk');
//  console.log(heroes);
//  console.log(hero1);

 //Object
 const employee = {
     name: 'Roshan',
     age: 25
 }

 // function
 const myFunction = function (){
     console.log('Hello World');
 }
//  myFunction();
// console.log(typeof myFunction);




