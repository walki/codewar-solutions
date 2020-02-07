let MAXN = 16637345 ;

let spf = [ 0 ];
function sieve()
{
  spf.push( 1 );
  for (let i = 2; i < MAXN; ++i){
    spf.push(i);
  }
  
  for(let i = 4; i < MAXN; i+=2){
    spf[i] = 2;
  }
  
  for(let i =3; i*i < MAXN; ++i){
    if (spf[i] === i){
      for(let j=i*i; j<MAXN; j+=i){
        if(spf[j] == j)
          spf[j] = i;
      }
    }
  }
}

function getFactorization( x ) {
  
  let ret = [];
  while ( x != 1){
    ret.push(spf[x]);
    x = Math.floor( x / spf[x]);
  }
  return ret;
}

sieve();

function properFractions(d){
  if (d > MAXN) return d-1;
  let count = 0;

  let factors = getFactorization(d);
  if (factors.length === 0)
    count = 0;
  else if (factors.length === 1)
    count = d-1;
  else{
    //console.log("d:" + d);
    let nonCommon = Array.from(new Array(d-1), (x,i) => i + 1)
        .filter( val => {
          let commonFactor = false;
          factors.forEach( fact => {
            if (val % fact === 0)
            {
              commonFactor = true;
            }
          });
          return !commonFactor;
        });
    //console.log(nonCommon);
    count = nonCommon.length;
  }
   

  return count;
}

function properFractionsRecursiveGCD(d){
  let proper = 0;
  for (let n = 1; n < d; ++n){
    if (gcd(n,d) === 1) {
      proper++;
    }
  }
  
  return proper;
    
  function gcd(a, b) {
    //console.log(`${a} : ${b}`);
    if (a === b) {
      return a;
    }
    else if (a >= b){
      return gcd(a-b, b);
    }
    else {
      return gcd(a, b-a);
    }
  }
}