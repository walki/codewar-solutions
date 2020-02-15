function gcdi(x,y) {
    return  gcd( Math.abs(x), Math.abs(y) );
  }
  
  function gcd(a, b){
    if (b === 0) return a;
    
    return gcd(b, a % b);
  }
  
  function lcmu(a, b) {
    return lcm( Math.abs(a), Math.abs(b) );
  }
  
  function lcm(a, b){
    return Math.abs( a * b ) / gcd( a, b );
  }
  
  function som(a, b) {
    return a + b;
  }
  function maxi(a, b) {
    return Math.max( a, b );
  }
  function mini(a, b) {
    return Math.min( a, b );
  }
  function operArray(fct, arr, init) {
    let r = [ fct(init, arr[0]) ];
    for (let i = 1; i < arr.length; ++i){
      r.push( fct(r[i-1], arr[i]) );
    }
    return r;
  }