/*
 *
 * Coding Challenge 2024
 *
 * Code Wars - https://www.codewars.com/kata/5556282156230d0e5e000089/solutions/javascript
 */



// function DNAtoRNA(dna) {
//   let pattern = /T/mg;
//   let result = dna.replace(pattern, "U");
//   return result
//   // create a function which returns an RNA sequence from the given DNA sequence
// };

// const DNAtoRNA = (dna) => dna.replace(/T/gm, "U");

 const DNAtoRNA = (dna) => dna.replaceAll('T', 'U');


console.log(DNAtoRNA("TTGACT"))
