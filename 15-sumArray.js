// function sumArray(array) {
//   if(array == null && array.length <= 2) return 0;
//   const sorted = array.sort((a, b) => a - b);
//   let result = 0;
//   for (i = 0; i < sorted.length - i; i++){
//     result += sorted[i];
//     }
//   return result;
// }


const sumArray = (array) => array == null || array.length <= 2 ? 0 : sorted = array.sort((a, b) => a - b).slice(1, -1).reduce((p, c) => p + c );

console.log(sumArray(null))
