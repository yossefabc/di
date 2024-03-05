import React, { useState } from "react"

const EventExample=(props)=>{
    const[count,setcount]=useState(0);
    const[message,setmessage]=useState('helo');
    const[bgcolor,setbgcolor]=useState("lightgreen");
    console.log(props)
    return(
        <>
        <div style={{backgroundColor:bgcolor}}>
        <h3>event example</h3>
        <h4>{count}</h4>
        <button onClick={()=>setcount(count+1)}>+</button>
        <button onClick={()=>props.setcountapp(props.countapp+1)}>add one from app</button>
        <div>
            <input onChange={(e)=> setmessage(e.target.value)}/>
            <h4>{message}</h4>
        </div>
        </div>
        </>
    )
}

export default EventExample