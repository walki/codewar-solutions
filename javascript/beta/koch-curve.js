const koch_curve = (n) => {
  if (n === 0) return [];
  if (n === 1) return [60, -120, 60];
  
  let pr = koch_curve( n - 1 );
  
  return pr.concat([60]).concat(pr).concat(-120).concat(pr).concat(60).concat(pr);
}