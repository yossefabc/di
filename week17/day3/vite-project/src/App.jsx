import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import Counter from './components/Counter'
import EventExample from './components/EventExample'
function App() {
  const[countapp,setcountapp]=useState(10)
   
  return (
    <>
    <Counter/>
      {/* <h2>forms</h2>
      <Form/> */}
      {/* <h2>error boundary</h2>
      <h2>event handler</h2>
      {countapp}
      <EventExample countapp={countapp} setcountapp={setcountapp}/> */}
    </>
  )
}

export default App
