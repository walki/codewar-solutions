function getMiddle(s)
{
  var middle = "";
  if ( s.length % 2 === 0){
    middle = s.substr( (s.length / 2) - 1, 2); 
  } else {
    middle = s.substr( Math.floor(s.length / 2), 1); 
  }
  return middle;
}