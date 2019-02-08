function scale(strng, k, n) {
    
    if (strng === '') return '';
    
    var lines = strng.split('\n');
    var h_scaled = lines.map( x => x.split('').map( y => y.repeat(k)).join('') );
    var v_scaled = h_scaled.map( x => repeatAndJoin( x, n, '\n') ).join('\n');
    
    return v_scaled;
}

function repeatAndJoin( repeat, count, join ) {
    if ( count <= 0) return '';
    
    let result = '';
    for(let i = 0; i < count - 1; i++) {
      result += repeat + join;
    }
    result += repeat;
    return result;
}