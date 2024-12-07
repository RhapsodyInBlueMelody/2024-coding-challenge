/*
Coding Challenge WPU 33/366

https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
*/

function firstNonConsecutive (arr) {
    for(let i = 0, temp = arr[0]; i < arr.length; i++, temp++){
        if(arr[i] != temp){
            return arr[i];
        }
    }
    return null
}

//const firstNonConsecutive = (arr) => arr.find((val, idx) => idx > 0 && val !== arr[idx - 1] + 1) || null;

console.log(firstNonConsecutive([1,2,3,4,6,7,8]), 6)