// Daily Challenge: Not Bad

// 1.Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.
 let sentance= "This movie is not that  bad, i like it";
// 2.Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordnot=sentance.search("not");
console.log(wordnot);
// 3.Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordbad=sentance.search("bad");
console.log(wordbad);
// 4.If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
if(wordbad > wordnot){
    let result= sentance.replace("not that good","good");
    console.log(result);
} else if (wordbad < wordnot) {
    console.log(sentance);
}
// 5.If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
