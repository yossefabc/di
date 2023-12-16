// Daily Challenge: Tell The Story

//1.
const button = clickbutton()
button.addEventListener("click",getclick)



function getclick(e){
e.preventDefault()
 
  const noun = document.getElementById("noun").value; 
 const adjective = document.getElementById("adjective").value;
 const person = document.getElementById("person").value;
 const verb = document.getElementById("verb").value;
 const place= document.getElementById("place").value;
console.log(noun,adjective,person,verb,place);
if(noun == ""|| adjective == "" || person == "" || verb == ""|| place == "" );
return;
 const Story = writestory(noun,adjective,person,verb,place) 

}
function story(noun,adjective,persone,verb,place){
return `i like to look at $(noun), i think that they are $(adjective). my favorite person is
$(person). we often $(verb) together when we are in $(place)`
}


function clickbutton(){
  return document.getElementById("lib-button")
}







   