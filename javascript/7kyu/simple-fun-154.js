function zeroAndOne(s){
    let p1 = /01|10/g;
    let strip = s.replace(p1, '');
    return strip.length;
}

module.exports = zeroAndOne;