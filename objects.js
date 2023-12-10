const mySymbol = Symbol("Key1");

const user = {
  name: "John",
  "full name": "John Smith",
  [mySymbol]: "Key1",
  age: 30,
  location: "New York",
  email: "9SsQV@example.com",
  isLoggedIn: false,
  lastLogginDays: ["Monday", "Tuesday"],
};
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySymbol]);

// user.email = 'abc@example.com';
// console.log(user.email);
// Object.freeze(user);
// user.email = 'def@example.com';
// user.greeting = function (){
//   console.log('Hello');
// }
// console.log(user.greeting());
// user.greeting2 = function (){
//     console.log(`Hello, ${this.name}`);
//   }
// console.log(user.greeting2());

// const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = "1234";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "9SsQV@example.com",
  fullname: {
    userfullname: {
      firstname: "John",
      lastname: "Smith",
    },
  },
};

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const Obj2 = {
  3: "c",
  4: "d",
};
const obj4 = {
  5: "e",
  6: "f",
};

const obj3 = { ...obj1, ...Obj2, ...obj4 };
// const obj3 = Object.assign({}, obj1, Obj2, obj4);
// console.log(obj3);
const users = [
  {
    id: 1,
    email: "9SsQV@example.com",
  },
  {
    id: 2,
    email: "1ghghg@example.com",
  },
];

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("email"));

const course = {
  name: "Javascript",
  price: 100,
  cousreInstructor: "Roshan",
};

// course.cousreInstructor;

const { cousreInstructor: instructor } = course;
// console.log(instructor);

// const {name, price, cousreInstructor} = course;

// {
//   "name": "John",
//   "coursename": "Javascript",
//   "price": 100,
// }

const myObject = {
  js: "Javascript",
  py: "Python",
  rb: "Ruby",
  php: "PHP",
  cpp: "C++",
  swift: "Swift",
};
for (const key in myObject) {
// console.log(`${key} Shortcut is for ${myObject[key]}`);
}

const programming = ["js", "py", "rb", "php", "cpp", "swift"];
for (const key in programming) {
  // console.log(programming[key]);
}

// const map = new Map();
// map.set("js", "Javascript");
// map.set("py", "Python");
// map.set("rb", "Ruby");
// map.set("php", "PHP");

// for (const key in map) {
//   // console.log(key);
// }

