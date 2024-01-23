/*function grow(x){
  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}
*/

function grow(x){
  const result = x.reduce((previous, current) =>previous * current, 1);
  return result;
}

let a = grow([1,2,3,4])
console.log(a)
