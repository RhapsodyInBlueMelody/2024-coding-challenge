/*
Coding Challenge WPU 25/366

https://www.codewars.com/kata/56b1f01c247c01db92000076
*/

// function doubleChar(str) {
//     let char = "";
//     for(let i = 0; i < str.length; i++){
//         char += str[i].repeat(2);
//     }
//     return char
//   }

 const doubleChar = str => [...str].map((el)=> el + el).join('');
  

console.log(doubleChar("Adidas"), "AAddiiddaass")