function jumpingNumber(n){
  
    return n.toString().split('')
            .reduce ( 
              (acc, cur, idx, arr) => {
                if (idx !== 0 && acc) {
                  var last = parseInt(arr[idx-1]), curr = parseInt(cur);
                  if (curr !== last + 1 && curr !== last - 1)
                    acc = false;
                }
                return acc;
              }, true) ? 'Jumping!!' : 'Not!!';
  }