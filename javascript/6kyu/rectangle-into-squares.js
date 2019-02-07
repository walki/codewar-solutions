function sqInRect(lng, wdth){
  
  if (lng == wdth) 
    return null;
  
  return recSqInRect(lng, wdth).sort((a, b) => b - a);
}

function recSqInRect(lng, wdth){

  if (lng == 0 || wdth == 0)
  { 
    return [];
  }
  
  var lngMax = lng >= wdth;
  var l = lngMax ? lng - wdth : lng;
  var w = lngMax ? wdth : wdth - lng;
  var r = lngMax ? wdth : lng;
  
  var s = recSqInRect(l, w);
  s.push( r );
  return s;
  
}