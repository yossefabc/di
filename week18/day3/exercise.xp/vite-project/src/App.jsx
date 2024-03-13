import { useState } from 'react'
import React from 'react';
import { ThemeProvider, useTheme } from './Components/ThemwContext'
import './App.css'
import CharacterCounter from './Components/CharacterCounte';
// import React, { useRef } from "react";
// import TodoList from './Exercise3/ToDoList';
// import TodoReducer from './Exercise3/ToDoReducer';


function App() {
  
  function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <p>Current Theme: {theme}</p>
      </div>
    );
  }
  return (
    <>
    {/* //exercise 1 */}

    <ThemeProvider>
      <div className="App" style={{backgroundColor:'yellowgreen'}}>
        <h1 style={{color:'blue'}}>Theme Switcher Example</h1>
        <ThemeSwitcher />
       
      </div>
    </ThemeProvider>

{/* 
    exercise 2 */}

     {/* <div className="App">
      <CharacterCounter />
    </div> */}



{/* 
    exercise 3 */}


{/* <div className="App">
       <TodoReducer/>
      <TodoList/>
    </div> */}
       
    </>
  )
}

export default App






