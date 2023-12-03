


// 🌟 Exercise 2 : Your Favorite Colors

//1.
let colors=["red","black","white","blue","yellow"];
console.log(colors);
//2.


// Exercise 3 : Repeat The Question
//1.

// let user=prompt("type a number")
// console.log(typeof "user")

2.
//   do{
//     userinpute=prompt("please enter a number");
//   if(userinput !== null && !isNaN(userinput)){
//     userinput=parseFloat(userinput);
//     if(userinput<10){
//         console.log("too amall please aim higher")
//     }else{
//         console.log("invalid input,please enter a number")
//     }

// }while(userinput<10 && userinput !== null);

// }
   
   

 //Exercise 4 : Building Management

//1.
 const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//2.
console.log(building.numberOfFloors);

//3.
console.
log(building.numberOfAptByFloor["firstFloor"]);
console.log(building.numberOfAptByFloor["thirdFloor"]);



//4.
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent["dan"])


// Exercise 5 : Family

//1.
let family ={olderbrother:"yossef",youngerbrother:"yossi"};

//2.
for(let x in family){
    console.log(x);
}

//3.
for(let x in family){
console.log(family[x])}

// Exercise 6 : Rudolf
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  let text = "my name is rudolf the raindeer"
for(let x in details){
   text=details[x];

}
console .log(details);

// Exercise 7 : Secret Group
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//1.
let sortednames = names.sort()
console.log(sortednames);
for(let x in sortednames){
    newname = sortednames[x];

}

