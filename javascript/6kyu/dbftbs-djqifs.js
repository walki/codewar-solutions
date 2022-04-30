function encryptor (key, message) {
	
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowers = uppers.toLowerCase();

    message = message.split('')
        .map( (ch) => {
            
            return uppers.indexOf(ch) !== -1  
                            ? uppers[ mod((uppers.indexOf(ch) + key), 26) ]
                            : lowers.indexOf(ch) !== -1
                                ? lowers[ mod((lowers.indexOf(ch) + key), 26) ]
                                : ch;
        })
        .join('');


    return message;


    function mod(n, m) {
        return ((n % m) + m) % m;
    }

}

module.exports = encryptor;