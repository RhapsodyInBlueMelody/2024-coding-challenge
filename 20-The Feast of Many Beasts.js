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