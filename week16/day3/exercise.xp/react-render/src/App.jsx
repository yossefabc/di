import React from 'react';
import Car from './Component/Car';
import Phone from './Phone';
import Color from './Color';
// import Garage from './Component/Garage';
import Clickme from './Events';
const App = () => {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <h1>Car Information</h1>
      <Car carInfo={carinfo} />
      {/* <Garage/> */}
      <Clickme/>
      <Phone/>
      <Color />
    
    </div>
  );
}

export default App;

