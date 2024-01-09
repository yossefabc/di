// Exercise 1 : Analyzing

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
//answer= ["bread","carrot", "potato",'chicken',"apple", "orange"]
// console.log(result);

// ------2------
const country = "USA";
//answer=['U', 'S', 'A']
console.log([...country]);



// ------Bonus------
let newArray = [...[,,]];
//answer= [undefined,undefined]
console.log(newArray);

// Exercise 2 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


 //1.
 const welcomeStudents = []
 const newArr= users.map((value)=>{
    
   return `Hello ${value.firstName}`;
    
 } ) 
 console.log(newArr)  ;
 
 //2.
 const array= users.filter(value => value.role=='Full Stack Resident');
 console.log(array)

 //3.

 const chain = users.filter(value=>value.role==='Full Stack Resident')
                     .map(user => user.lastName);
                     console.log(chain)



                    //  Exercise 3 : Star Wars   


 const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

 let result= epic.reduce((acc,val)=>{
       
        
        return acc+' '+val
 })

 console.log(result)


//  Exercise 4 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

         
     //1.
    const newstudent=students.filter(value=> value.isPassed===true) 
     console.log(newstudent);
     
     //2.
     newstudent.forEach((value)=>{
        console.log(`good job ${value.name} you passed the course in ${value.course}`)
     })