/*
WPU Coding Challenge 20/366

https://www.codewars.com/kata/5aa736a455f906981800360d
*/

// function feast(beast, dish) {
//     //your function here
//     if(beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]){
//         return true
//     }else{
//         return false
//     }
// }

const feast = (beast, dish) => (beast[0] == dish[0] && beast[beast.length -1 ] == dish[dish.length -1 ])


console.log(feast("brown bear", "bear claw"), false)