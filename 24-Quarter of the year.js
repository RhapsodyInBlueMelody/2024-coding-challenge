/*
WPU Coding Challenge 24/366

https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
*/


// const quarterOf = (month) => {
//     // Your code here
//     if(month <= 3){
//       return 1
//     }else if(month > 3 && month <= 6){
//       return 2
//     } else if(month > 6 && month <= 9){
//       return 3
//     } else {
//       return 4
//     }
//   }

//const quarterOf = m => m <= 3 ? 1 : (m > 3 && m <= 6 ? 2 : (m > 6 && m <= 9 ? 3 : 4))

const quarterOf = m => Math.ceil(m / 3);

console.log(quarterOf(11), 4)