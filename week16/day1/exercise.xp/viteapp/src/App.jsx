
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise from './Exercise3'


function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
  
  const sum = 5+5;
  return (
    <div>
    {/* <h1>I Love JSX!</h1>
        <p>hello world</p>
       <p>"React is {sum} times better with JSX"</p> 
       <h3>{user.firstName}</h3>
       <h3>{user.lastName}</h3> */}
       {/* <UserFavoriteAnimals favAnimals={user.favAnimals} /> */}
       <h1>Welcome to My React App!</h1>
        <Exercise />
        </div>  
   
      
      
    
  )
}
// ReactDOM.render(
//   <UserFavoriteAnimals />,
//   document.getElementById('root')
// );
export default App
