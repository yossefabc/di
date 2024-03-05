import { useState } from "react";

const Counter=()=>{
    const[count,setcount]=useState(0)
    return(
        <>
    <button onClick={()=>setcount(count+1)}>+</button>
   <h2>{count}</h2>
   </>
    )
}

export  default Counter ;