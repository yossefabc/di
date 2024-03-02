import React from "react";
import { useState } from "react";

function Events(){
    const[isToggleOn,setistoggleon]=useState(true);
    const handleonclick=()=>{
        setistoggleon(!isToggleOn);
    }
    return(
        <div>
            <h1>hellooo</h1>
            <button onClick={clickMe}>ok</button>
            <input onKeyDown={handleKeyDown} id="input"/>
            <button onClick={handleonclick}></button>
        </div>
    )
}

const handleKeyDown = (event)=>{
  if(event.key==='Enter'){
    alert(`the Enter key was pressed,your input is: ${event.target.value}`)
  }else{
    console.log("not working")
  }
}

const clickMe= ()=>{
    alert("i was clicked")
}
export default Events;