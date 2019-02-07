function century(year) {
  let century = Math.floor(year/100);
  if (year % 100 !== 0){
    century++;
  }
  return century;
}