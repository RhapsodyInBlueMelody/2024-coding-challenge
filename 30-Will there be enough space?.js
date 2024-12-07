/*
Coding Challenge WPU 30/366


https://www.codewars.com/kata/5875b200d520904a04000003/
*/


// function enough(cap, on, wait) {
//     // your code here
//     if((cap - on) > wait){
//         return 0
//     } else{
//         return Math.abs((cap - on) - wait)
//     }
        
// }

const enough = (cap, on, wait) => (wait - (cap - on)) > 0 ? (wait - (cap - on)) : 0;


console.log(enough(20, 5, 5), 0);