// function getAverage(marks){
//     //TODO : calculate the downward rounded average of the marks array
//     let sum = 0;
//     for(let i = 0; i < marks.length; i++){
//         sum += marks[i]
//     }
//     return Math.trunc(sum / marks.length);
// }

const getAverage = marks => Math.trunc(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
    

console.log(getAverage([1,2,3,4,5,]),3)