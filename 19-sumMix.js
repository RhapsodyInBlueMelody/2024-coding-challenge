// function sumMix(x){
//     let num= []; 
//     for(let i = 0; i < x.length; i++){
//         let temp = parseInt(x[i])
//         num[i] = temp;
//     }
// const sum = num.reduce((acc, curr) => acc + curr, 0);
// return sum;
// }

const sumMix = x => x.reduce((acc, curr) => acc + parseInt(curr), 0);

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)