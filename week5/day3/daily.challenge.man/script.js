
// const form = document.getElementsByTagName("input")[0];
// document.getElementById("submit").addEventListener("click", function(event){
//     event.preventDefault()

//     if(text.length ==0){
//     return false;
// }else {
//     return true ;
// }
// })
const tasks = [];
const listTasks = document.getElementById("listTasks")
const myform = document.forms.addtasksform;
console.log(myform)
const input = myform.input;
input.addEventListener("submit",addtasks);

function addtasks(e){
    e.preventDefault();
    
    listTasks.innerHTML = "";
    const ul = document.createElement("ul");
    listTasks.append(ul);
    tasks.push(input.value);
    for(let todo of tasks){
     const newtodo = document.createElement("li");
     const button = document.createElement("button");
     button.textContent = "x"
     newtodo.textContent=todo;
     listTasks.append(newtodo); 
    }
    input.value = "";
}