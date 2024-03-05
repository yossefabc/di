import React, { useState } from "react";


const Forms=()=>{
    const[username,setusername]=useState("");
    const[age,setage]=useState("null");
    const[errormessage,seterrormessage]=useState('')
      function error(){
        if(errormessage=!Number){
            seterrormessage('please enter a number')
        }
      }
    const header=''
    function setvalue(e){
       setusername(e.target.value);
    }
    
    function aging(e){
        setage(e.target.value)
       
    }
    

     function mySubmitHandler(e){
        e.preventDefault
        alert(`you are submitting ${username}`)
     }
    // if(username){
    //     header=<h1>Hello, {username}!</h1>;
    // }
    return(
      <>
      
        
   
      <h1 >Hello {username} {age}</h1> 

     <form onSubmit={mySubmitHandler}>
        Enter your name:
         <br></br>
        <input type="text" name="name" onChange={setvalue}/><br></br>
        enter your age: <br></br>
        <input type="" name="name"  onChange={aging} />
         <h2>{errormessage}</h2>
         <button type="submit" >submit</button>
      </form>
      </>
    )
} 


export default Forms;