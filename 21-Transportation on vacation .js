// function rentalCarCost(d) {
//     // Your solution here
//     let price = 40
//     if(d >= 7){
//         return (d * price) - 50;
//     }else if(d < 7 && d >= 3){
//         return (d * price) - 20;
//     }else{
//         return price * d
//     }
//   }

const rentalCarCost = d => (d >= 7) ? (d * 40) - 50 : (d < 7 && d >= 3 ? (d * 40) - 20 : 40 * d )

console.log(rentalCarCost(3), 100)