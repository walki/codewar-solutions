function automorphic(n){
  
    return new RegExp(n + '$' ).test(n*n) ? 'Automorphic' : 'Not!!'
  }