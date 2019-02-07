function digPow(n, p){
  var digits = n.toString().split('');
  //console.log(digits);
  var sumOfPowers = digits.map( (cur, idx) => Math.pow( cur, idx + p )).reduce( (acc, cur) => acc + cur );
  //console.log(sumOfPowers);
  return sumOfPowers % n === 0 ? sumOfPowers / n : -1;
}