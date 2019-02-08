function decompose(n) {
  let num, den;
  let x, y;
  console.log( n );
  if (undefined !== n.split('').find( x => x ==='.' )) {
    // account for decimals: 2.334
    let decStrs = n.split('.');
    y = Math.pow(10, decStrs[1].length);
    x = Number.parseInt(decStrs[0]) * y;
    x += Number.parseInt(decStrs[1]);
  } else {
    let parts = n.split('/').map( x => Number.parseInt(x) );
    x = parts[0];
    y = parts[1];
  }
  
  let result = [];
  // get rid of top heavies
  if (x > y){
    let int = Math.floor( x / y );
    x -= int * y;
    result.push(int + '');
  }
  
  console.log( 'x: ' + x + ' y: ' + y);
  while (x > 0){
    result.push( '1/' + Math.ceil(y/x));
    console.log( result );
    num = mod(-y, x);
    den = y * Math.ceil( y / x);
    x = num;
    y = den;
    console.log( 'x: ' + x + ' y: ' + y);
  }
  
  
  return result;
}

function mod(n,m){
  return ((n % m) + m) % m;
}