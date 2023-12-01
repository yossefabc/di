// Exercise 1 : List Of People

// const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays

// 1.Write code to remove “Greg” from the people array.

const people=["Greg", "Mary", "Devon", "James"]
console.log(people);
console.log(people.shift());
console.log(people)





//2.Write code to replace “James” to “Jason”.
   people.splice(2,1,"Jason");
console.log(people);


// 3.Write code to add your name to the end of the people array.

people.push("yossef");
console.log(people);




// 4.Write code that console.logs Mary’s index
 
console.log(people.indexOf("Mary"));

//5.Write code to make a copy of the people array using the slice method


console.log(people.slice(1,3));

//6.Write code that gives the index of “Foo”. Why does it return -1 ?

let fo="foo"
console.log(fo.indexOf("foo"));

// 7.
let last=people.length
console.log(last)

//Part II - Loops
//1.
let People=["Greg", "Mary", "Devon", "James"];
console.log(People);

for(i=0;i<people.length;i++){
   console.log(People[i]);
}

//2.

for(i=0;i<People.length;i++){
  if(i===3){
   break;
  }
  console.log(People[i])
}


// 🌟 Exercise 2 : Your Favorite Colors

//1.
let colors=["red","black","white","blue","yellow"];
//2.
do{
   console.log("colors"+i)
}
while(i<colors.length)