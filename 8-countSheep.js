/*
 *
 * Coding Challenge 2024
 *
 * Code Wars - https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
 */




// var countSheep = function (num){
//   var z = "";
//   if(num != 0){
//   for(let i = 1; num >= i; i++){
//     z += i + " sheep..." 
//   };}
//   return z;
// };


// var countSheep = function (num){
//   var z = "";
//   for(let i = 1; num >= i; i++){
//     z += `${i} sheep...` 
//   };
//   return z;
// };


// var countSheep = function (num){
//   return [...Array(num)].map((_,i) => `${i + 1} sheep...`).join('');
// };

const countSheep = (num) => [...Array(num)].map((_,i) => `${i + 1} sheep...`).join('');


console.log(countSheep(5));

