// Exercise 1 : Change The Article

//1.
const header = document.querySelector("h1");
console.log(header);
//2.
const element= document.getElementById("last");
element.remove();
//3.
let x=document.querySelector("h2");

x.addEventListener("click", function onclick(Event){
    x.style.backgroundColor="red";
});


//4.
let y= document.querySelector("h3");

y.addEventListener("click",function onclick(){
    y.style.display="none";


} );

//5.
let button = document.querySelector("button");


 button.addEventListener("click",function onclick(event){
    let p = document.getElementsByClassName("bo");
    
    p.style.fontWeight="bold";
  });


//   Exercise 2 : Work With Forms
//1.
const form = document.querySelector("form");
console.log(form);
//2.
const onlyinputs = document.querySelectorAll("#myform input");
onlyinputs.forEach(input => {
    console.log(input);
  });

  //3.
  const input1= document.querySelector('[name="firstname"');
  console.log(input1);
 
  const input2= document.querySelector('[name="lastname"');
  console.log(input2);
 
 //4.
     //1.prevent it from submitting a form
     //2.
     document.getElementById("submit").addEventListener("click", function(event){
        event.preventDefault()
        console.log(document.getElementById("fname").value)
        console.log(document.getElementById("lname").value)
       });


    //    Exercise 3 : Transform The Sentence 
    
    
    
   


    //2.
    let z= document.getElementsByTagName("strong");
    console.log(z);
       console.log(z[1])
  
    //    Exercice 4 : Volume Of A Sphere

    function volume_sphere()
    {
     var volume;
     var radius = document.getElementById('radius').value;
     radius = Math.abs(radius);
     volume = (4/3) * Math.PI * Math.pow(radius, 3);
     volume = volume.toFixed(4);
     document.getElementById('volume').value = volume;
     return false;
    } 
   window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;