function sumDigPow(a, b) {

  let res = [];
  for(let i = a; i <= b; i++)
  {
    if (testValue(i)) res.push(i);
  }

  return res;
}

function testValue(val)
{
  let pow = 1;
  let digits = getDigits(val);
  let sum = 0;
  for (let dig of digits)
  {
    sum += Math.pow(dig, pow);
    pow++;
  }
  return (sum === val);
}

function getDigits(c)
{
  let res = [];
  if ( c < 0 ) return res;
  if ( c === 0 ) return [ 0 ];
  while (c > 0)
  {
    res.push( Math.floor(c % 10) );
    c = Math.floor( c / 10);
  }
  return res.reverse();
}