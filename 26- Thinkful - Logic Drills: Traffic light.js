/*
Coding Challenge WPU 26/366

https://www.codewars.com/kata/58649884a1659ed6cb000072
*/

// function updateLight(current) {
  
//     //your code here!
//     let state = "";
//     switch(current){
//         case "green":
//             state = "yellow";
//             break;
//         case "yellow":
//             state = "red";
//             break;
//         case "red":
//             state = "green";
//             break;
//     }
//     return state
//   }

const updateLight = s => s == "green" ? "yellow" : (s == "yellow" ? "red" : "green")

console.log(updateLight("green"), "yellow")