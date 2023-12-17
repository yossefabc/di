// Exercise 1: Timer

// Part I
//1.
// function sayHi(phrase, who) {
//     alert( phrase + ', ' + who );
//   }
  
//   setTimeout(sayHi,2000, "Hello", "world");

//   Part II
// const container = document.getElementById("container");
// const p = document.createElement("p");
// p.append("hello world");
// console.log(p)
// setTimeout(function(){
// container.appendChild(p);
// console.log(container)
// })

// Part III
//1.
// setInterval(function() {
//     alert("hello world");
// }, 2000);
//2.
// const container = document.getElementById("container");
// const p = document.createElement("p");
// p.append("hello world");
// let timer=setInterval(function(){
//     container.appendChild(p);
//     console.log(container); 
// })
//3.
// function clear() {
//     clearInterval(timer);
//   }

 //4.
// function clear(){
//    if(p.length>5)
//     clearInterval(timer);
// }

// Exercise 2 : Move The Box
const container = document.getElementById("container");
const animate = document.getElementById("animate");
const button = document.getElementById("button");
console.log(button);

button.addEventListener("click",mymove)
function mymove(){
    animate+= 1;
    animate.style.right= right + "px";
}