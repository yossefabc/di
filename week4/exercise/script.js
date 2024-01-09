// function calculus () {
//     console.log(1+2);
// }

// calculus(); //3

function userMoreInfo (userName, userAge) {
    let eyeColor = "blue"; //local variable 
    console.log("My name is " + userName + ", my age is "  + userAge + ", I have " + eyeColor + " eyes");
}

userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes

// undefined in the global scope
// console.log(eyeColor); //Uncaught ReferenceError: eyeColor is not defined

// function userage(myAge){
//     // let mom=myAge*2 
//   let result = `my mom age is ${myAge*2}`
//   return result;
  
// }
// console.log(userage(28));
// userage(28);

// let mango = "yellow"

// if (mango === "yellow"){
//   let mango = "blue"
//   console.log(mango)
// }
// console.log(mango)


// let div=document.querySelector("div");
// console.log(div)
// let div1 = document.getElementsByTagName("div")
// console.log(div1[0])

// let ul=document.querySelector("ul")
// console.log(ul)

// let ul1=document.getElementsByTagName("ul")
// console.log(ul1[0])
// let paragraphs = document.getElementsByTagName("p");

// console.log(paragraphs[0])

// let href= document.getElementById("dI")
// console.log(href);

// console.log(href.getAttribute('href'));

// console.log(href.getAttribute("hreflang"))

// console.log(href.getAttribute("rel"))

// console.log(href.getAttribute('target'))

// console.log(href.getAttribute("type"))

// href.style.fontSize="small"

// href.style.color="red"

// href.style.background="yellow"

let first = document.getElementById("school-type")

console.log(first)
console.log(first[1].value);
let option = new Option('newoption','newoption',true,true)
first.add(option)
console.log(option);
console.log(first)