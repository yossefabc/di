import React from 'react';
import { useState } from 'react';
import Garage from './Garage';

const Car = ({ carInfo }) => {
  return (
    <div>
      <h2>This car is {carInfo.model}</h2>
      < Garage size="small" />
    </div>
  );
};


export default Car;
