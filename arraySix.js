// coding = ["HTML", "CSS", "JS", "React", "Node", "MongoDB"];

// const values = coding.forEach((lang)=> {
//     // console.log(lang);
//     return lang;
// })
// console.log(values);

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const values = myNumber.filter((number)=>{
//         return number > 4
// });
// console.log(values);

// const newNums = [];
// myNumber.forEach((num)=> {
//     if(num > 4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);

const books = [
    {
        title: "Harry Potter",
        genre: "Fantasy",
       publish: 1981,
       edition: 2004,
    },
    {
        title: "Lord of the rings",
        genre: "History",
        publish: 1954,
        edition: 2001,
    },
    {
        title: "The Hobbit",
        genre: "Junior",
        publish: 1937,
        edition: 2003,
    },
    {
        title: "The Alchemist",
        genre: "Non-Fiction",
        publish: 1988,
        edition: 2005,
    },
    {
        title: "The Da Vinci Code",
        genre: "Thriller",
        publish: 2003,
        edition: 2006,
    },
    {
        title: "The Fellowship of the Ring",
        genre: "Fiction",
        publish: 1954,
        edition: 2001,
    },
    {
        title: "The Two Towers",
        genre: "Science",
        publish: 1954,
        edition: 2001,
    },
    {
        title: "The Return of the King",
        genre: "Fantasy",
        publish: 1954,
        edition: 2001,
    }
]

let userBooks = books.filter((book)=> {
return book.genre === "Fantasy"
})

 userBooks = books.filter((book)=> {
    return book.publish >= 1995 && book.genre === "History"
})
console.log(userBooks);