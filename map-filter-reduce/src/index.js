// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x){
//     return x*2;
// }
// const newNumber = numbers.map(double);
// console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.
// function findNumber(num){
//     return num > 10
// }
// const newNumber = numbers.filter(findNumber);
// console.log(newNumber)

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function(accumalator , currentNumber){
//     return accumalator + currentNumber;
// })
// console.log(newNumber)

//Find - find the first item that matches from an array.

// var newNumber = numbers.find(function(num){
//     return num > 10
// }
// )
// console.log(newNumber)

//FindIndex - find the index of the first item that matches.
// var newNumber = numbers.findIndex(function(num){
//     return num > 10
// }
// )
// console.log(newNumber)
import emojipedia  from "./emojipedia";

function findString(string){
    return string.meaning.substring(0,100)
}

const str = emojipedia.map(findString)
console.log(str);