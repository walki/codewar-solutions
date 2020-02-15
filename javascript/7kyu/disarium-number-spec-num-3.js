function disariumNumber(n){
    return n.toString().split('')
                .reduce( 
                  (acc, curr, idx) => acc + Math.pow( parseInt( curr ), idx + 1), 0 
                  ) === n ? 'Disarium !!' : 'Not !!';
  }