import { useState } from 'react'
import Home from './components/Home'
import Shop from './components/shop'
import About from './components/About'
import{Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <nav>
        <Link to='/'> Home </Link> 
        <Link to='/about'> About </Link> 
        <Link to='/shop'> Shop </Link> 
      </nav>
    </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product/:id/:name' element={<Product/>}/>
        <Route path='*' element={<h2>404 not found</h2>}/>
      </Routes>
    </>
  )
}

export default App
