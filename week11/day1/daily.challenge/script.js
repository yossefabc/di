// Daily Challenge: Play With Words

// 1rst Daily Challenge
// const array = 'string'
// function  makeAllCaps(array){

//   return new Promise((resolve, reject) => {
//     if(!array==='string'){
//         reject ("not a string")
//     }else{
//         resolve("is a string")
//     }
//   })
// }

// console.log( makeAllCaps(array))


//3
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// function sortWords(fruits){
// return new Promise((resolve, reject) => {
//     if(fruits.length>4){
//        console.log(fruits.sort()) 
//     }else{
//         reject('rejected')
//     }
   
// })
// .catch((e) => console.log(e))
// }

// sortWords(fruits)

// 2nd Daily Challenge

const container = document.getElementById("container");
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

 

 
 
//1.2
const toJs = () => {
    return new Promise((resolve, reject) => {
      let parsedObject = JSON.parse(morse);
      if (!parsedObject) {
        reject("there was an problem");
      } else {
        resolve(parsedObject);
      }
    });
  };
  
  toJs()
    .then((res) => {
      // console.log(res);
      return toMorse(res);
    })
    .then((newData) => {
      joinWords(newData);
    })
    .catch((e) => {
      console.log(e);
    });
  //3
  const toMorse = (obj) => {
    return new Promise((resolve, reject) => {
      let userWord = prompt("Give me a word");
      let arrayOfLetters = userWord.split("");
  
      let morseArr = arrayOfLetters.map((letter) => {
        if (letter.toLowerCase() in obj) {
          return obj[letter.toLowerCase()];
        } else {
          reject(`${letter} is not in the object sorry bye`);
        }
      });
      resolve([morseArr, userWord]);
    });
  };
  //4.5
  const joinWords = (translationArray) => {
    let joined = translationArray[0].join(`
    `);
    container.innerText = ` ${translationArray[1]} translated to:
     ${joined}`;
    console.log(joined);
  };
