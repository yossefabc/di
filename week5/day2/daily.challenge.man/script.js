// Daily Challenge: Tell The Story

//1.
document.getElementById("lib-button").addEventListener("click",function(event){
event.preventDefault()
console.log(document.getElementById("noun").value);
console.log(document.getElementById("adjective").value);
console.log(document.getElementById("person").value);
console.log(document.getElementById("verb").value);
console.log(document.getElementById("place").value);

});

//2.

let x = document.getElementById("lib-button");
if (x.length===0){
    console.log("empty");
}else{
    console.log("not empty");
}