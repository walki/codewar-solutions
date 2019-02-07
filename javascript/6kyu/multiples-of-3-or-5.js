function solution(number){
  if (number === 0) return 0;
  
  return 3 * tri( n(number, 3) ) + 5 * tri( n(number, 5) ) - 15 * tri( n(number, 15) );
}

function tri(n) {
  return n * (n + 1) / 2;
}

function n( number, val ){
  return Math.floor( (number - 1) / val );
}