import React, { useRef, useState } from "react";


function CharacterCounter() {
  const inputRef = useRef(null);
  const [count,setcount]=useState(0);


  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    setcount(textLength);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."></textarea>
      <p>Character Count: {count}</p>
    </div>
  );
}

export default CharacterCounter;