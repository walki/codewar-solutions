function makeValley(arr) {
  //console.log(arr);
  let right = arr.length % 2 == 0;
  
  let sorted = arr.sort( (a,b) => a - b );
  let valley = [];
  for (let i = 0; i < sorted.length; i++){
    if (right){
      valley.push(sorted[i]);
    }else{
      valley.unshift(sorted[i]);
    }
    right = !right;
  }
  //console.log(valley);
  return valley;
}