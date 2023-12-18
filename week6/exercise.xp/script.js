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
// const container = document.getElementById("container");
// const animate = document.getElementById("animate");
// const button = document.getElementById("button");
// console.log(button);


// let pos = 0;
// let intervalId = setInterval(function () {
//   if (pos == 350) {
//     clearInterval(intervalId);
   
//   }
//   pos++;
//   animate.style.left = `${pos}px`;
  
// }, 1);


// Exercise 3: Drag & Drop


const target = document.getElementById("target");
const box = document.getElementById("box");

box.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  });

  target.addEventListener("dragover", allowDrop);

  
target.addEventListener("drop", function (event) {
    drop(event, target);
  });

  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event, destination) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);

    if (destination.classList.contains("container")) {
        destination.appendChild(draggedElement);
      }
    }