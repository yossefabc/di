// Exercise 1 : Scope

// #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// prediction= inside the funcOne function 3

//1.1
// funcOne();
//1.2
// prediction=error ,because  const canot be change several time


//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

//1. prediction=inside the funcThree function 0 
// funcThree()
// funcTwo()
// funcThree()

// 2.
// prediction=inside the funcThree function 0 

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}


// prediction=error
// funcFour()
// funcFive()

//#4
// let a = 1;
// function funcSix() {
//   let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// prediction=inside the funcSix function test
// funcSix()

//4.2 prediction = error 
//answer=inside the funcSix function test


//#5
// const a = 2;
// if (true) {
//     const a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

//5.1 prediction = outside of the if block 2
 // answer = in the if block 5 and outside of the if block 2
//5.2 prediction = the some as above


//    Exercise 2 : Ternary Operator

function winBattle(){
    return true;
}

//1.
 winBattle = () => true;


//2.3.
const experiencePoints = winBattle() ? 10 : 1;

//4.
console.log(experiencePoints);

// Exercise 3 : Is It A String ?

//1.
const isString = (value) => typeof value === 'string';
console.log(isString('hello')); 


// Exercise 4 : Colors

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//1.
// colors.forEach((color,index)=>{
//     console.log(`${index+1}# choice is ${color}.`);
// });

//2.
// const result = colors.some(color => color === "Violet");

// console.log(result ? "Yeah" : "No...");

// Exercise 5 : Colors #2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color,index) =>{
    const nindex = index + 1
    console.log(`${nindex}${getordinal(nindex)} choice is ${color}`)
})

function getordinal(index){
    if(index===1 || index===2 || index===3) return ordinal [index];
    return ordinal[0]
}

// Exercise 6 : Bank Details
//1.
let bankAmount = 20500;
//2.
const vat = 17;
//3.
const details = [200, -100, 146, 167, -2900];
//4.
let totalSum = 0;

details.forEach((element, index) => {
  details[index] += (element * vat) / 100;
  totalSum += details[index];
});
//5.
console.log(`Total bank acount at end of the month:
${bankAmount + totalSum}`);