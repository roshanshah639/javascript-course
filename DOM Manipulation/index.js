let tempClassList = document.getElementsByClassName("list-item");
const myConvertedArray = Array.from(tempClassList);
// console.log(myConvertedArray);

myConvertedArray.forEach((li)=> {
    li.style.color = "orange";
})
