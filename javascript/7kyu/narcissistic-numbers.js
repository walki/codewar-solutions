function isNarcissistic(n){
    
    let len = `${n}`.length;
    let digits = `${n}`.split('').map(d => Number(d));
    let sum = digits.reduce((a,c) => a += Math.pow(c,len), 0);
    
    return sum === n;
  }

  module.exports = isNarcissistic;