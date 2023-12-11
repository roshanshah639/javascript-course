const myNumbers = [1, 2, 3];

const initialValue = 0;

const myTotal = myNumbers.reduce((accumulator, currentValue)=> accumulator + currentValue, initialValue)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Shirt",
        price: 1000,
    },
    {
        itemName: "Pant",
        price: 2000,
    },
    {
        itemName: "Shoes",
        price: 3000,
    },
    {
        itemName: "Bag",
        price: 4000,
    }
]

const initialCarValue = 0;
const cartTotal = shoppingCart.reduce((acc, item)=> acc + item.price, initialCarValue)
console.log(cartTotal);