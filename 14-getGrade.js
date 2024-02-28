/*
 *The Coding Challenge 2024
 *
 *
 * CodeWars - https://www.codewars.com/kata/55cbd4ba903825f7970000f5/solutions/javascript?filter=all&sort=best_practice&invalids=false
 *
 */






// function getGrade (s1, s2, s3) {
//  const score = (s1 + s2 + s3) / 3;
// if(score >= 90){
//   return 'A'
// }else if(score >= 80 && score < 90){
//   return 'B'
// }else if(score >= 70 && score < 80){
//   return 'C'
// }else if(score >= 60 && score < 70){
//   return 'D'
// }else if(score >= 50 && score < 60){
//   return 'F'
// };
// };

// function getGrade (...s) {
//  const score = s.reduce((previous, current) => previous + current) / s.length;
// if(score >= 90){
//   return 'A'
// }else if(score >= 80 && score < 90){
//   return 'B'
// }else if(score >= 70 && score < 80){
//   return 'C'
// }else if(score >= 60 && score < 70){
//   return 'D'
// }else if(score >= 50 && score < 60){
//   return 'F'
// };
// };

// function getGrade(...s) {
//   const score = s.reduce((previous, current) => previous + current) / s.length;
//   const result = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : (score >= 60) ? "D" : "E";
//   return result;
// }

const getGrade = (...s) => ((score = s.reduce((previous, current) => previous + current) / s.length) >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : (score >= 60) ? "D" : "E";

console.log(getGrade(95,95,85))
