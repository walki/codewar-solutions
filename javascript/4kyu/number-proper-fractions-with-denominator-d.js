function properFractions(d){
    //console.log('d:' + d);
    let nonCommon = Array.from(new Array(d), (x,i) => i )
    
    for(let i = 1; i < nonCommon.length; ++i){
      if (nonCommon[i] !== 0 && hcf( nonCommon[i], d) !== 1)
      {
        let j = 1;
        while (j*i < d){
          nonCommon[j*i] = 0;
          j++;
        }
      }
    }
      
    //console.log(nonCommon);  
    return nonCommon.filter( n => n != 0).length;
  }
  
  
  function hcf(a, b){
    while (a != b){
      if (a > b)
        a = a-b;
      else
        b = b-a;
    }
    return a;
  }
  
  