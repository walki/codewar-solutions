function highAndLow(numbers){
  var high = numbers.split(' ').map( x => Number.parseInt(x) ).reduce( max, Number.MIN_SAFE_INTEGER);
  var low = numbers.split(' ').map( x => Number.parseInt(x) ).reduce( min, Number.MAX_SAFE_INTEGER );
  return high + ' ' + low;
}

function max( a, b ){
  return a > b ? a : b;
}

function min( a, b ){
  return a < b ? a : b;
}