import { useState } from "react";

const Counter = (props) => {
  //   console.log(props);
  const [number, setNumber] = useState(0);
  const [message,setmessage]=useState('')
  //   let count = 0;

  const add = () => {
    // count++;
    setword(word);
    // console.log("count=>", count);
  };
  const input=(e)=>{
    setmessage(e.target.value)
  }
   const reduce=()=>{
    setNumber(number-1);
   }
  return (
    <div>
      <button onClick={reduce}> - </button>
      <h2>Counter: {number}</h2>
      <button onClick={add}> + </button>
      <div>
        <input onChange={input} /> 
        <h2>{message}</h2>
      </div>
    </div>
    
  );
};
export default Counter;