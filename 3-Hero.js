
/*function hero(bullets, dragons){
if(bullets > dragons){
    return true;
  }else{
    return false
  }
}*/

/*function hero(bullets, dragons) {
  return bullets / 2 >= dragons;
}*/

const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5));
