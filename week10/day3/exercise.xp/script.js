// Exercise 1 : HTML Form

//1.2.3 to the server

// Exercise 2 : HTML Form #2

//3.The data is sent to a different URL on the same origin:

// Exercise 3 : JSON Mario

const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

 //1.
//  let jsonmarioGame=  JSON.stringify(marioGame);
//  console.log(jsonmarioGame);
 // all the keys get double quates, the output JSON string will not include any spaces or line breaks

 //2.
 let jsonmarioGame=  JSON.stringify(marioGame,null,2);
 console.log(jsonmarioGame);

 