import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function App() {
  const carouselStyle = {
    height: '700px', 
    width:'700px'
  };
  

  return (
    
      <div style={carouselStyle}>
        <Carousel >
          <div >
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg' ></img>
            <p className="legend">Hong kong</p>
          </div>

          <div>
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp'></img>
            <p className="legend">Macao</p>
          </div>

          <div>
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp'></img>
            <p className="legend">Japan</p>
          </div>

          <div>
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp'></img>
            <p className="legend">Las Vegas</p>
          </div>
        </Carousel>
        </div>
  
        
  )
}

export default App
