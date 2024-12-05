// function removeExclamationMarks(s) {
//     let words = ""
//     for(let i=0; i <= s.length - 1; i++){
//         if(s[i] != "!"){
//         words += s[i]
//         }
//     }
//     return words;
//   }

const removeExclamationMarks = s => s.split('').filter(char => char !== '!').join('');


console.log(removeExclamationMarks("Hello World!"), "Hello World")