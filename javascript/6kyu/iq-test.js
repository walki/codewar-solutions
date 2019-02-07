function iqTest(numbers){
  var diff = -1;
  var oddsAndEvens = numbers.split(' ').map( x => x % 2);
  
  //console.log(oddsAndEvens);
  
  var oddsCount = oddsAndEvens.filter(  x => x === 1 ).length;
  var firstOdd = -1;
  var firstEven = -1;
  for(var i = 0; i < oddsAndEvens.length; i++)
  {
    if (oddsCount === 1 && oddsAndEvens[i] === 1)
    {
      diff = i + 1;
      break;
    }
    else if (oddsCount > 0 && oddsAndEvens[i] === 0)
    {
      diff = i + 1;
    }
  }
  return diff;
}