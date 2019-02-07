function findOdd(A) {
  if (A.length === 1) return A[0];

  A.sort();
  var currCount = 1;
  var prevValue = A[0];
  for( var i = 1; i < A.length; i++) {
    if (prevValue === A[i]) {
      currCount++;
    } else if (currCount % 2 === 1){
      return prevValue;
    } else {
      currCount = 1;
      prevValue = A[i];
    }
  }
  
  return prevValue;
}