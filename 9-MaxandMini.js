/*
 *
 * Coding Challenge 2024
 *
 * Code Wars - https://www.codewars.com/kata/577a98a6ae28071780000989/solutions/javascript
 */


// var min = function(list){
//    var mini = list[0]
//    for(let i = 1; i <= list.length; i++){
//      if(list[i] < mini){mini = list[i]};
//    } 
//     return mini;
// }
//
// var max = function(list){ 
//    var MAX = list[0];
//    for(let i = 1; i <= list.length; i++){
//      if(list[i] > MAX){MAX = list[i]};
//    } 
//     return MAX;
// }


// const min = (list) => list.sort((a,b) => a - b)[0];
// const max = (list) => list.sort((a,b) => b - a)[0];


const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(max([4,6,2,1,9,63,-134,566]));
