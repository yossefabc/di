import React, { useState,useEffect } from "react";
function Color(){
const [favoriteColor,setfavoriteColor]=useState("red");

useEffect(()=>{
alert("useEffect reached")
},[]);

const changeColor = () => {
    setfavoriteColor('blue');
  };
return(
    <div>
        <h1>my favorite color is {favoriteColor}</h1>
        <button onClick={changeColor}></button>
    </div>
)
}
export default Color