import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
        const emailRef= useRef();
        console.log(emailRef.current)

        const passRef=useRef();
         
        const userRef=useRef();

        const handlesubmit=(e)=>{
            e.preventDefault();
            console.log(emailRef.current.value,passRef.current.value,userRef.current.value)
        }


  return (
    <>
      <form onSubmit={handlesubmit}>
        email:<input ref={emailRef}/>
        password:<input ref={passRef}/>
        username:<input ref={userRef}/>
        <input type='submit' value={"submit"}/>
      </form>
    </>
  )
}

export default App
