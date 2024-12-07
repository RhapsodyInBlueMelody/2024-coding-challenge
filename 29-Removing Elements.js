/*
Coding Challenge WPU 29/366

https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/
*/

// function removeEveryOther(arr){
//     //your code here
//     return arr.filter((el, i) => i % 2 == 0)
//   }

const removeEveryOther = arr => arr.filter((_, i) => i % 2 == 0);

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9])