// function monkeyCount(n) {
//     // your code here
//     let arr = [];
//     for(let i=1; i <= n; i++){
//         arr[i-1] = i;
//     }
//     return arr;
// }

const monkeyCount = n => [...Array(n)].map((_, i) => i + 1)

console.log(monkeyCount(5), [1, 2, 3, 4, 5])