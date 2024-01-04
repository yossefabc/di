// Daily Challenge : Go Wildcats


const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

   //1.
//    const  Newarray = []
//    gameInfo.forEach((values)=> {
//     Newarray.push(values.username+ '!');
    
//    })
//    console.log(Newarray)

   //2.
   const newarray = []
   gameInfo.forEach((values) =>{
    
    if(values.score>5){
        newarray.push(values.username+ '!')
      }
   })

   console.log(newarray)

   //3.
     let sum = 0;
   gameInfo.forEach((values) =>{
     sum+=values.score   
   })

   console.log(sum)