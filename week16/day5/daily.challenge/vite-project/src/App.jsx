import { useState } from 'react'

import './App.css'

function App() {
  const [num1, setnum1] = useState('')
  const [num2, setnum2] = useState('')
  const [result, setResult] = useState('');
  const handleAddition = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };
  return (
    <>
      <input type='number' value={num1} onChange={(e) => setnum1(e.target.value)}/>


      <input type='number' value={num2} onChange={(e) => setnum2(e.target.value)}/> <br></br>


      <button onClick={handleAddition}>Add them</button>
      {result && <p>Result: {result}</p>}
    </>
  )
}

export default App
