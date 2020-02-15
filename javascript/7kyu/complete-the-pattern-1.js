function pattern(n){
    var output="";
    
    for (var i = 1; i <= n; ++i){
      for(var j = 1; j <= i; ++j){
        output += i;
      }
      if (i != n) output += '\n';
    }
    
    return output;
   }