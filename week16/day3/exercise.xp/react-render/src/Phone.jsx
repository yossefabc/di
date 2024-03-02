import React, { useState } from "react";


function Phone(){
    const[brand,setBrand]=useState("Samsung");
    const[model,setModel]=useState("Galaxy S20");
    const[color,setColor]=useState("black");
    const[year,setYear]=useState(2020);
       function changeColor(){
            setColor("blue");
       }
    return(
        <div>
            <h1>My phone is a {brand}</h1>
            <p>it is a {color} {model} from {year}</p>
            <button onClick={changeColor}>change Color</button>
        </div>
    )
}


export default Phone