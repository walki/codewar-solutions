function chooseBestSum(t, k, ls) {


    if (ls.length < k) return null;
    ls.sort( (a, b) => b - a );
    console.log("t: " + t + " k: " + k + " ls: " + ls);
    var results = recChooseBestSum(t, k, ls, 0, [])

    return results.length > 0 ? results.reduce( (acc, cur) => cur > acc ? cur : acc ) : null;

}

function recChooseBestSum(t, k, ls, curr, results){
  if (k == 0){
    if (curr <=  t)
    {
      results.push(curr);
    }
    return results;
  }

  for(var i = 0; i < ls.length; i++){
    if (curr+ls[i] <= t)
    {
      let new_ls = ls.slice();
      new_ls.splice(i,1);

      // attempt to skip  meaningless branches with large k
      // nope ... made it worse...
      /*
      if (results.length > 0 && new_ls.length > 0){
        let max = results.reduce( (a, b) => Math.max(a,b) );
        let sum = new_ls.reduce( (a, c) => a + c );
        if (curr + sum < max ) continue;
      }
      */

      results = recChooseBestSum(t, k-1, new_ls, curr+ls[i], results);
    }
  }
  return results;
}