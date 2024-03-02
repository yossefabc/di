import { useState } from 'react'

import './App.css'

function App() {
  const [count,setCount]=useState(0);
 
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  // function addone(){
  //  let 
  // }
  return (
    
    <div>
      <ul>
        <li >
      php:{count}
      
      <button onClick={()=> setCount(count + 1)}>click here</button>  </li>
      
       <li>
        python:{count}
      <button onClick={()=> setCount(count + 1)}>click here</button>  </li>
      <li>
        javascript:{count}
      <button onClick={()=> setCount(count + 1)}>click here</button>  </li>
      <li>
        java:{count}
      <button onClick={()=> setCount(count + 1)}>click here</button>  </li>
      </ul>
    </div>
  )
}

export default App
