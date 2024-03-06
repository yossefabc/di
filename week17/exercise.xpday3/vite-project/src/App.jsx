import { useState,Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BuggyCounter from './Components/BuggyCounter'
import ErrorBoundary from './Components/ErrorBoundary'
import Color from './Components/Color'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* simulation1// */}
    {/* <div>
      <ErrorBoundary>
        <BuggyCounter/>
        <BuggyCounter/>
      </ErrorBoundary>
    </div> */}


     {/* simulation 2 */}
      {/* <div>
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
      </div> */}

      {/* simulation 3 */}

      {/* <BuggyCounter/> */}

      {/* <BuggyCounter/> */}
      {/* <ErrorBoundary/> */}
      

      <Color/>
    </>
  )
}

export default App
