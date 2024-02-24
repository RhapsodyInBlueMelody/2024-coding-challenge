/*
 *Coding Challenge 2024
 *
 *CodeWars - https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
 *
 */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (distanceToPump => mpg * fuelLeft){
//     return false
//   }else{
//     return true
//   }
// };

console.log(zeroFuel(100,50,1));
