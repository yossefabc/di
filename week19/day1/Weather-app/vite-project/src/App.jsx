import { useState,useEffect } from 'react';
import Weather from './Components/Weather';
import './App.css';
import WeatherApp from './Components/WeatherApp';
import FavoritesPage from './Components/Favorite';
import WeatherPage from './Components/Weather';
import {Routes,Route,Link,Router} from "react-router-dom";
function App() {
 


  return (
    <>
    
      {/* <Weather /> */}
      
      <WeatherPage/>
      
     
      {/* <FavoritesPage/> */}
      {/* <WeatherApp/> */}
    </>
  )
}

export default App








