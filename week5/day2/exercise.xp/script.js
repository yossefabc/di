// Exercise 1 : Change The Article

//1.
const header = document.querySelector("h1");
console.log(header);
//2.
const element= document.getElementById("last");
element.remove();
//3.
let x=document.querySelector("h2");
function clickbutton(x){
console.log(x)
}
x.addEventListener("click",clickbutton);
x.style.backgroundColor="red";

//4.
let y= document.querySelector("h3");
function hidebutton(y){
    console.log(y)
}
y.addEventListener("hide",hidebutton);
y.style.display="non";
