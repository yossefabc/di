import { object } from './data.js';

function calculate(){
    const totalAge = object.reduce((acc, person) => acc + object.age, 0);
  const averageAge = totalAge / object.length;
  console.log(`Average age of all persons: ${averageAge}`);
}

calculate()