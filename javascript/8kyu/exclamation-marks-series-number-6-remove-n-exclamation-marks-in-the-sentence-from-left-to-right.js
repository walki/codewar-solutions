function remove(s,n){
  
  let removed = [];
  for(var i = 0; i < s.length; i++)
  {
    if (n > 0 && s[i] === '!')
    {
      n--;
    }
    else
    {
      removed.push(s[i]);
    }
  }
  return removed.join("");
  
}