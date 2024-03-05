import { useState } from "react";

const Form=(props)=>{
   const[name,setname]=useState("");
   const handelSubmit=()=>{
    e.preventDefault();
    console.log(name)
   }
    return(
    <>
    <h3>Form Example</h3>
    <form onSubmit={(e)=>handleSubmit(e)}>
       name:{" "} 
       <input type='text' onChange={(e)=>setname(e.target.value)}/>
       <br></br>
       <select>

       </select>
       <input type="submit" value='submit'/>
    </form>
    </>
    )
}

export default Form;