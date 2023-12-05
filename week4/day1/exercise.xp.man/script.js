// Exercise 1 : Information
// part 1
//1.
function infoaboutme(){

console.log("my name is yossef 28 years old love to go to the gym")

}
//3.
infoaboutme();

//part 2
//1.2.3
function infoAboutPerson(personName, personAge, personFavoriteColor){
console.log("your name is " + personName + " you are " + personAge + " years old" 
+ " your favorite color is " + personFavoriteColor);
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Exercise 2 : Tips
//1.
function calculateTip(){} 
//2.
function calculateTip(){
    prompt("john what the amount of the bill")
}
//3.
function calculateTip(){
    prompt("john what the amount of the bill");
    for(let i=0; i>0; i++){
        if(i>$50){
            prompt("tip 20%");
        }else if($50<i<$200){
            prompt("tip 15%");
        }else if(i>$200){
            prompt("tip 10%");
        }
    console.log(i);
    }

    
    
}  
// calculateTip(); 




// Exercise 3 : Find The Numbers Divisible By 23
//1.
function  isDivisible(){}
//2.3.4
function  isDivisible(){
    
    for(let i=0;i <= 500  ;i++){
     if(i % 23 ===0){
        console.log(i);
      
        
      
     } 
        
     
     
      
}
}
  isDivisible()

 


//   Exercise 4 : Shopping List
//1.
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

//2.
const shoppingList=["banana","orange","apple"];

//3.
function myBill(){} 

//4.
function myBill(){
   
       console.log(prices.banana+prices.apple+prices.orange);
   
}
myBill()
