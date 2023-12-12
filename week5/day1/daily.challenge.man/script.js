// Daily Challenge: Planets

//1.
 const array=["planet","moon"];
//2. 
const newdiv= document.createElement("div");
const newcontent = document.createTextNode(".planet ");
newdiv.appendChild(newcontent);
const currentdiv= document.getElementById("div");
document.body.insertBefore(newdiv,currentdiv);
const x = document.querySelector("div");
x.style.backgroundColor= "red";

//3.4
const newdiv2= document.createElement("div");
const newcontent2 = document.createTextNode("moon ");
newdiv2.appendChild(newcontent2);

const currentdiv2= document.getElementById("div");
document.body.insertBefore(newdiv2,newdiv);
const y = document.querySelector("div");
y.style.backgroundColor= "blue";