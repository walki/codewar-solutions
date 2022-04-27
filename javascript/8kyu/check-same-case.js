function sameCase(a, b){

    const letter = /^[a-zA-Z]$/;
    const upper = /^[A-Z]$/
    const lower = /^[a-z]$/

    const bothLetters = a.match(letter) && b.match(letter);
    const bothUpper = a.match(upper) && b.match(upper);
    const bothLower = a.match(lower) && b.match(lower);



    return !(bothLetters) ? -1 : bothUpper || bothLower ? 1 : 0;
}

module.exports = sameCase;
