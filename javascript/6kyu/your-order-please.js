function findDigit(word)
{
  let chars = word.split('');
  for (let c of chars)
  {
    if (!isNaN(c))
    {
      return c;
    }
  }
}


function order(words){


  let res = '';
  if (words.length == 0) return res;

  let map = {};
  let unordered = words.split(' ');
 

  for (let word of unordered)
  {
    let dig = findDigit(word);
    map[dig] = word;
  }
  
  let keys = Object.keys(map).sort();
  
  for (let k of keys)
  {
    if (res == '')
      res = map[k];
    else
      res = res + ' ' + map[k];
  }
  
  return res;
}