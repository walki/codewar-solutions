function fizzBuzzCuckooClock(time) {
  
    var parts = time.split(':');
    var h = parseInt(parts[0]);
    var m = parseInt(parts[1]);
    
    if ( h < 0 || h > 23 || m < 0 || m > 59) return "";
    
    if (h === 0)
      h = 12;
    
    if (h > 12)
      h -= 12;
    
    if (m === 0)
      return 'Cuckoo '.repeat( h - 1 ) + 'Cuckoo';
    else if (m === 30)
      return 'Cuckoo';
    else if (m % 3 === 0 && m % 5 === 0)
      return 'Fizz Buzz';
    else if (m % 3 === 0)
      return 'Fizz';
    else if (m % 5 === 0)
      return 'Buzz';
    else
      return 'tick';
    
    
  }