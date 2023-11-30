

// exercise 1

//  1.Store your favorite food into a variable.
     let favoritefood="steak"
     console.log(favoritefood); 

// 2.Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
     let favoritemeal="lunch"
     console.log(favoritemeal);
// 3.Console.log I eat <favorite food> at every <favorite meal>
console.log("i", "eat",favoritefood, "at", "every" ,favoritemeal);

//    exercise 2 part 1


// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

//  1. Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
console.log(myWatchedSeries);
let myWatchedSeriesLength = 3;
console.log(myWatchedSeriesLength);

// 2. Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
let myWatchedSeriesSentence="myWatchedSeries"
console.log(myWatchedSeriesSentence);
//  3.Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory
console.log("i", "watched", myWatchedSeriesLength , "series", ":" ,myWatchedSeries );

// part 2

// 1.Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
const series = ["black mirror", "money heist", "the big bang theory"];
series.splice(2,1,"friends");
console.log(series)

// 2.Add, at the end of the array, the name of another series you watched.
series.splice(3,0,"the walking dead");
console.log(series)
// 3.Add, at the beginning of the array, the name of your favorite series.
series.splice(0,0,"gomorra");
console.log(series)
// 4.Delete the series “black mirror”.
series.splice(1,1)
console.log(series)
// 5.Console.log the third letter of the series “money heist
let text = ["black mirror", "money heist", "the big bang theory"];
console.log(text[1][2]);

// 6.Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made
console.log("mywatchedseries");


// exercise 3
// 1.Store a celsius temperature into a variable.
let celsius="temperature"
// 2.Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
let fahrenheit="temperature"
console.log(celsius,"is",fahrenheit);


// 🌟 Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will 
// be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note
//  the actual output in a comment and compare it with your prediction.

let c;
    let a = 34;
    let b = 21;
  
    console.log(a+b) //first expression
    // Prediction:(34+21)=55
    // Actual:55

    a = 2;

    console.log(a+b) //second expression
    // Prediction:(2+21)=23
    // Actual:23
    console.log(c);
    // 3.undefinde
   
    // 4. Analyse the code below, what will be the outcome?
    //prediction:75 when u use quotations marks it teel the computer to put them together
    //actual;75

    // Exercise 5 : Guess The Answers #2


    typeof(15)
    // Prediction:number(it include number inside)
    // Actual:number
    
    typeof(5.5)
    // Prediction:number(it include number inside)
    // Actual:number
    
    typeof(NaN)
    // Prediction:undefined(their is no defenation it doesnt belonge to no one)
    // Actual:undefined
    
    typeof("hello")
    // Prediction:string(a word is allways a string)
    // Actual:
    
    typeof(true)
    // Prediction:undefined(because it doesnt have quotations marks)
    // Actual:boolean
    
    typeof(1 != 2)
    // Prediction:fulse(i predicet the actual solution)
    // Actual:boolean
    
    "hamburger" + "s"
    // Prediction:hamburgers
    // Actual:hamburgers
    
    "hamburgers" - "s"
    // Prediction:undefined
    // Actual:nan
    
    "1" + "3"
    // Prediction:13
    // Actual:13
    
    "1" - "3"
    // Prediction:nan
    // Actual:-2
    
    "johnny" + 5
    // Prediction:undefined
    // Actual:johnny5
    
    "johnny" - 5
    // Prediction:nan
    // Actual:nan
    
    99 * "hello"
    // Prediction:nan
    // Actual:nan
    
    1 != 1
    // Prediction:boolean
    // Actual:false
    
    1 == "1"
    // Prediction:true
    // Actual:true
    
    1 === "1"
    // Prediction:false(3 equals meen not equal to each other wich is false 1="1")
    // Actual:
    

    // Exercise 6 : Guess The Answers #3
    

    5 + "34"
    // Prediction:534
    // Actual:534
    
    5 - "4"
    // Prediction:1
    // Actual:1
    
    10 % 5
    // Prediction:2
    // Actual:0
    
    5 % 10
    // Prediction:2
    // Actual:5
    
    "Java" + "Script"
    // Prediction:javascript
    // Actual:
    
    " " + " "
    // Prediction:nan
    // Actual:nothing
    
    " " + 0
    // Prediction:0
    // Actual:0
    
    true + true
    // Prediction:true
    // Actual:2
    
    true + false
    // Prediction:1
    // Actual:1
    
    false + true
    // Prediction:1
    // Actual:1
    
    false - true
    // Prediction:-1
    // Actual:-1
    
    !true
    // Prediction:-1
    // Actual:false
    
    3 - 4
    // Prediction:-1
    // Actual:-1
    
    "Bob" - "bill"
    // Prediction:nan/undefined
    // Actual:nan
    
