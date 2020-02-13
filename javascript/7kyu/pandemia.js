function infected(s) {
  
    let accum = { uninfected : 0, infected : 0, total : 0 };
    
    accum = s.split('X').reduce( (acc, curr) => {
      if (/1/.test(curr)){
        acc.infected += curr.length;
      } else {
        acc.uninfected += curr.length;
      }
      acc.total += curr.length;
      return acc;
    }, accum);
    
    return accum.total === 0 ? 0 : 100 * accum.infected / accum.total;
    
  }