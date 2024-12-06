/*
WPU Coding Challenge 22/366

https://www.codewars.com/kata/57a0885cbb9944e24c00008e
*/


// function removeExclamationMarks(s) {
//     let words = ""
//     for(let i=0; i <= s.length - 1; i++){
//         if(s[i] != "!"){
//         words += s[i]
//         }
//     }
//     return words;
//   }

const removeExclamationMarks = s => s.split('').filter(char => char !== '!').join('');


console.log(removeExclamationMarks("Hello World!"), "Hello World")