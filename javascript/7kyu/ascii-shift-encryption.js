function asciiEncrypt(plaintext){
    return plaintext
            .split('')
            .map((cur, idx) => String.fromCharCode(cur.charCodeAt(0) + idx) )
            .join('');

}


function asciiDecrypt(plaintext){
    return plaintext
        .split('')
        .map((cur, idx) => String.fromCharCode(cur.charCodeAt(0) - idx) )
        .join('');
}


module.exports = { asciiEncrypt, asciiDecrypt};