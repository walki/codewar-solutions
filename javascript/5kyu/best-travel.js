function chooseBestSum(t, k, ls) {
    if (ls.length < k) return null;
    var results = recChooseBestSum(t, k, ls, 0, [])
    return results.reduce( (acc, cur) => cur > acc ? cur : acc );

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

    let new_ls = ls.slice();
    new_ls.splice(i,1);

    results = recChooseBestSum(t, k-1, new_ls, curr+ls[i], results);
  }
  return results;
}