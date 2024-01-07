// Exercise 1 : Find The Sum

//1.
//  let result=(a,b) => a+b;
// console.log(result(10,12));

// Exercise 2 : Kg And Grams

//1.
// function kgToGrams(weightInKg) {
//       return weightInKg * 1000;
//   }
//   kgToGrams(3);
//2.

// let kgToGrams = function (weightInKg) {
//       alert("1000 " * weightInKg);
//   }         
//   kgToGrams("3");
  
  //3.

//   function declarations can be used before they are declared in the code
//   while function expressions must be declared before they are used in the code


//4.

// const kgToGrams = (weightInKg) => weightInKg * 1000;

// Exercise 3 : Fortune Teller
//1.
// (function (partnersname,numberofchildren ,location,jobtitle) {
//       alert(`hi my name is ${partnersname} i have ${numberofchildren} children i live in ${location} and i work at ${jobtitle}`);
// })("yossef","5","israel","home");

//2.
// (function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    
//       const paragraph = document.createElement('p');

//       paragraph.textContent = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

//       document.body.appendChild(paragraph);
//   })(5, 'Alisa', 'israel', 'javascript developer');


// Exercise 4 : Welcome

//2.
// (function  (username){
   
//   let div = document.createElement("div")
  
//   let navbar= document.querySelector("nav")
//   navbar.appendChild(div);
  
 
//   let par= document.createElement("p")
//   par.textContent="john"
//   div.appendChild(par);
//   let image= document.createElement("img")
//   image.src="https://www.gripboost.com/blogs/blog/5-fun-facts-about-your-favorite-sport-football" 
//   image.style.width="600px"
//   div.appendChild(image)

// }) ("john");



// Exercise 5 : Juice Bar
//1.
function makeJuice(size) {
     
      const ingredients = [];

      
      function addIngredients(ingredient1, ingredient2, ingredient3) {
          ingredients.push(ingredient1, ingredient2, ingredient3);
      }

   
      function displayJuice() {
          const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    
          console.log(sentence);
      }

      
      addIngredients('apple', 'orange', 'carrot');
      addIngredients('berry', 'banana', 'spinach');

      
      displayJuice();
  }

  
  makeJuice('large');

//2.


