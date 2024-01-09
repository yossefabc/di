// Part I

// const inventory = [
//     { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//     { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//     { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//     { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//     { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
//   ];

  //1.


//   function getCarHonda(carInventory) {
//     for (let i = 0; i < carInventory.length; i++) {
//       if (carInventory[i].car_make === 'Honda') {
//         return carInventory[i];
        
//       }
//     }
    
//     return null;
//   }

//   const firstHondaCar = getCarHonda(inventory);
// console.log(firstHondaCar);


//2.
// function getFirstHondaCarString(carInventory) {
//     const firstHondaCar = carInventory.find(car => car.car_make === 'Honda');
  
//     return firstHondaCar
//       ? `This is a ${firstHondaCar.car_make} ${firstHondaCar.car_model} from ${firstHondaCar.car_year}.`
//       : 'No Honda cars found in the inventory.';
//   }
  
 
//   const hondaCarString = getFirstHondaCarString(inventory);
//   console.log(hondaCarString);

//   part 2

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

  function sortCarInventoryByYear(carInventory) {
    
    return carInventory.slice().sort((a, b) => a.car_year - b.car_year);
  }
  
 
  const sortedInventory = sortCarInventoryByYear(inventory);
  console.log(sortedInventory);

  