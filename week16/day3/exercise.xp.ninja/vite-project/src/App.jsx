import { useState } from 'react'
import Clock from './Components/Clock'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Clock/>
    </>
  )
}

export default App
