const coding = ["HTML", "CSS", "JS", "React", "Node", "MongoDB"];



// coding.forEach((printMe)=> {
//     // console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((lang, index, arr)=> {
// console.log(lang, index, arr);
// })
 
const myCoding = [
    {
        language: "HTML",
        fileName: "index.html",

    },
    {
        language: "CSS",
        fileName: "style.css",
    },
    {
        language: "JS",
        fileName: "script.js",
    },
    {
        language: "React",
        fileName: "react.js",
    },
]
myCoding.forEach((lang)=>{
    console.log(lang.language);
})
