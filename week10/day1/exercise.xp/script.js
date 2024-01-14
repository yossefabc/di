// Exercise 1 : Location

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

//answer=I am john doe from vancouver, canada. latitude 49.2827 , longitude -123.1207
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// Exercise 2: Display Student Info

function displayStudentInfo({first, last}){
    console.log(` your full name is ${ first + last } `)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


// Exercise 3: User & Id

const users = { user1: 18273, user2: 92833, user3: 90315 }

//1.
console.log(Object.entries(users));

//2.
const modifiedUsers = {};
for (const key in users) {
  modifiedUsers[key] = users[key] * 2;
}

console.log(modifiedUsers);


// Exercise 4 : Person Class

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');

  //answer=object
  console.log(typeof member);


//   Exercise 5 : Dog Class

class Dog {
    constructor(name) {
      this.name = name;
    }
  };
   
//1.
  // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };


//   Exercise 6 : Challenges
//1.
// [2] === [2] false
// {} === {}false
//answer= two arrays or objects are considered equal only if they reference the exact same object in memory.

//2.
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

console.log(object1.number)
object1.number = 4;
console.log(object2.number)
//answer=4 refer to the same object in memory of object1
console.log(object3.number)
//answer=4 refer to the same object in memory of object1
console.log(object4.number)
//answer=5 its  different object with different memory


//1.

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  //2.
  class Mammal extends Animal {
    constructor(name, type, color) {
      super(name, type, color);
    }
  
    sound(animalSound) {
      return `${this.name} the ${this.type} (${this.color} color) makes the sound: ${animalSound}`;
    }
  }
//3.
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');


const cowSound = farmerCow.sound();

console.log(cowSound);