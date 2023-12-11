// const user = {
//     username: "Roshan",
//     price: 999,
//     welcomeMesage: function(){
//         console.log(`Hello ${this.username} your price is ${this.price}`);
//         console.log(this);
//     }
// }
// user.welcomeMesage();
// user.username = "Rosh";
// user.welcomeMesage();

// console.log(this);

// function myFuntction (){
//     let username = "Roshan";
//     console.log(this.username);
// }
// myFuntction();

const myFuntction = () => {
  let username = "Roshan";
  console.log(this.username);
};
// myFuntction();

// const myFuntction1 = (num1, num2) => (num1 + num2)

// console.log(myFuntction1(10, 20));
const addTwo = (num1, num2) => ({ username: "Roshan" });
// console.log(addTwo(10, 20));

// const myArray = [10,20,30,40,50];

// (function myFuntction2() {
//   console.log("DB Connected");
// })();

// ((name) => {
//   console.log(`DB Connected ${name}`);
// })("Roshan");

