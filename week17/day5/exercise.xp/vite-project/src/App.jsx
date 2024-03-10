import { useState } from 'react'
import { BrowserRouter, Router, Route, NavLink } 
from "react-router-dom";
import './App.css'
import "react-bootstrap";
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  const [count, setCount] = useState(0)
  const HomeScreen=()=>{
    return(
      <h1>Home</h1>
    )
  }

  const ProfileScreen=()=>{
    return(
      <h1>Profile Screen</h1>
    )
  }

  const ShopScreen=()=>{
    return(
      <h1>An error has occured</h1>
    )
  }

  return (
    <>
    <Router>
    <div>
    <Route path="/" exact>
      <ErrorBoundary><HomeScreen/></ErrorBoundary>
      </Route>
      <Route path="/profile">
      <ErrorBoundary><ProfileScreen/></ErrorBoundary>
      </Route>
      <Route path="/shop">
      <ErrorBoundary><ShopScreen/></ErrorBoundary>
      </Route>
    <ul>
    <li> <NavLink to="/" /></li>
    <li> <NavLink to="/profile" /></li>
    <li>  <NavLink to="/shop" /></li>
     </ul>
     </div>  
     </Router>
    </>
  )
}

export default App







