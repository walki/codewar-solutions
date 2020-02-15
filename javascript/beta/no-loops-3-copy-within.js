function copy(array, start, stop, place){
  
    let copy = array.slice(start, stop);
    array.splice( place, stop-start, ...copy);
    return array;
    
  };

  // now looking at the problem, do'h obvs.  