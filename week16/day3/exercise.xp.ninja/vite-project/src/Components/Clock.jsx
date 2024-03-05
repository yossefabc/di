import React, { useState,useEffect } from "react";

const Clock=()=>{
    const[currentDate,setCurrenteDate]=useState(new Date());
    function tick(){
      setCurrenteDate(new Date())
    }
    useEffect(() => {
        const intervalId = setInterval(tick, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return(
         <div>
          
            <h1>current time: {currentDate.toLocaleTimeString()}</h1>
             
         </div>
    )
}

export default Clock;