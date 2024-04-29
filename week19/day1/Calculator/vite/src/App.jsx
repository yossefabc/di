import { useState } from 'react'

import './App.css'

function App() {
  const [count,setcount]=useState(0);
  const handlclick=()=>{
    
  }

  return (
    <>
  <div class="calculator">

<input type="text" class="calculator-screen" value="0" disabled />

<div class="calculator-keys" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>

  <button type="button" class="operator" value="+">+</button>
  <button type="button" class="operator" value="-">-</button>
  <button type="button" class="operator" value="*">&times;</button>
  <button type="button" class="operator" value="/">&divide;</button>

  <button type="button" value="7">7</button>
  <button type="button" value="8">8</button>
  <button type="button" value="9">9</button>


  <button type="button" value="4">4</button>
  <button type="button" value="5">5</button>
  <button type="button" value="6">6</button>


  <button type="button" value="1">1</button>
  <button type="button" value="2">2</button>
  <button type="button" value="3">3</button>


  <button type="button" value="0">0</button>
  <button type="button" class="decimal" value=".">.</button>
  <button type="button" class="all-clear" value="all-clear">AC</button>

  <button type="button" class="equal-sign" value="=">=</button>

</div>
</div>
      
    </>
  )
}

export default App
