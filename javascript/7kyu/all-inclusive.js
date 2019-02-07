function containAllRots(strng, arr) {

    if (strng.length === 0) {
      return true;
    } else {
      
      // check original
      var containsAll = arr.includes(strng);
      var rotated = rotateString(strng);
      while (containsAll && rotated !== strng)
      {
        containsAll = arr.includes(rotated);
        rotated = rotateString(rotated);
      }
      
      
      return containsAll;
    }
    
}

function rotateString(strng)
{
  if (strng.length === 1)
  {  
    return strng;
  }
  return strng.substr(1) + "" + strng[0];
}