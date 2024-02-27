/*
 * 
 * Coding Challenge 2024
 *
 * CodeWars - https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/solutions/javascript
 *
 * */




// function arrayPlusArray(arr1, arr2) {
//   let a = 0;
//   for (let i = 0; i < arr1.length; i++){
//       a += arr1[i]
//   }
//   for (let ii = 0; ii < arr2.length; ii++){
//      a += arr2[ii];
//   }
//   return a + b;
//
// }

// function arrayPlusArray(arr1, arr2) {
//   let total=0;
//   for (let i = 0; i < arguments.length; i++){
//     for (let ii=0; ii < arguments[i].length; ii++){
//       total += arguments[i][ii];
//     }
//   }
//   return total;
// }

// function arrayPlusArray(arr1, arr2) {
//   return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0)
//   
// }

// function arrayPlusArray(arr1, arr2) {
// return [...arr1, ...arr2].reduce((previous, current) => previous + current)
// }

const arrayPlusArray = (arr1, arr2) =>[...arr1, ...arr2].reduce((previous, current) => previous + current);




console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
