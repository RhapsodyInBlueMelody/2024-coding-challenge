/*
Coding Challenge WPU 28/366

https://www.codewars.com/kata/568dcc3c7f12767a62000038
*/

// function bonusTime(salary, bonus) {
//     let sum = 0;
//     // your code here
//     if(bonus){
//         sum = "\u00A3" + salary.toString() + "0";
//     }else{
//         sum = "\u00A3" + salary.toString()
//     }
//     return sum
// }

//const bonusTime = (salary, bonus) => `\u00A3${(bonus) ? salary * 10 : salary}`;

const bonusTime = (salary, bonus) => bonus ? "\u00A3" + salary.toString() + "0" : "\u00A3" + salary.toString();

console.log(bonusTime(10000, true), '£100000')