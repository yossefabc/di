// Daily Challenge: Planets



//1.
const planets = ["mars","sun"];
console.log(planets)
//2.
const div1 = document.createElement("div");
div1.classList.add("planet");
console.log(div1)
const div2 = document.createElement("div");
div2.classList.add("planet")
console.log(div2)
//3.

div1.style.backgroundColor= "red";
div2.style.backgroundColor= "blue";
//4.
const section = document.querySelector("section");
console.log(section);

section.appendChild(div1);
section.appendChild(div2);
