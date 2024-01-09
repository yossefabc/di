let party = [
    {
      desert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      desert: 'Apple Pie',
      calories: 15,
    },
    {
      desert: 'Croissant',
      calories: 50,
    },
    {
      desert: 'Strawberry Icecream',
      calories: 5,
    },
  ]

  let sum = party.reduce((acc,val)=>{
     if(val.desert=="Apple Pie"){
        return acc
     }
    
    
    
    
   
    return acc+val.calories
  },0)

  console.log(sum)