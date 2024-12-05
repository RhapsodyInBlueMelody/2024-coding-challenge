// function greet (name, owner) {
//     // Add code here
//     if(name == owner){
//         return "Hello Boss"
//     }else{
//         return "Hello Guest"
//     }
//   }

const greet = (n, o) => (n == o) ? 'Hello boss' : 'Hello guest'

console.log(greet('Arkane', 'Daniel'), 'Hello boss')