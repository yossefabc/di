let x = document.getElementById("jsstyle");
function respondclick(x){
    console.log(x);
}
x.addEventListener("click",respondclick);
x.style.color="red";
x.style.fontSize="20px";
// const mybutton = document.querySelector("button");
// mybutton.addEventListener("button",function(e){
    


let y = document.getElementById("jsstyle");

function mousehover(y){
    console.log(y);
}

y.addEventListener("hover",mousehover);
y.style.border="1px solid black";