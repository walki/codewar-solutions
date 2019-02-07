function partlist(arr) {
    
    if (arr.length <= 1) return arr;
    
    var parts = [];
    for (var i = 1; i < arr.length; i++)
    {
      parts.push( [arr.slice(0,i).join(' '), arr.slice(i).join(' ')] );
    }
    return parts;
}