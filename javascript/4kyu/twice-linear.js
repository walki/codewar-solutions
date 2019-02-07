function dblLinear(n) {
    // not happy about this guess
    // there are non-uniq values in U, so getting to < n*4 because 3*U[i] + 1 < n*4 is not enough.
    let limit = n*10;
    
    let U = [ 1 ];
    let i = 0;
    while (U.length < limit){
      U.push( 2 * U[i] + 1 );
      U.push( 3 * U[i] + 1 );
      i++;
    }
    let uniq = U.sort( (a , b) => a - b ).filter( (elem, idx, arr ) => idx == 0 || elem > arr[idx-1] );
    console.log(uniq);
    return uniq[n];
   
}
/*
1   2   4  8    16

1   3   7  15   31
                46
           22   45
                67
      10   21   43
                64
           31   63
                94
   4   9   19   39
                58
           28   57
                85
       13  27   55
                82
           40   81
               121
*/