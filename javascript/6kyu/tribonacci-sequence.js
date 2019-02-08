function tribonacci(signature,n){
  if (n <= 3) return signature.slice(0, n);
  
  let result = signature.slice();
  let i = 3;
  while (i < n)
  {
    result.push( result[i-1] + result[i-2] + result[i-3]);
    i++;
  }
  return result;
}