

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (distanceToPump => mpg * fuelLeft){
//     return false
//   }else{
//     return true
//   }
// };

console.log(zeroFuel(100,50,1));
