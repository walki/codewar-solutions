function encodeStr(s, shift) {
    if (!s || s.length === 0) return [];

    let first = s[0].toLowerCase();
    let head = first + encryptor(shift, first);
    let tail = encryptor(shift, s);

    let message = head + tail;


    return divide(message);

}

function decode(arr) {
    let msg = arr.join('');
    let head = msg.substring(0,2);
    let tail = msg.substring(2);
    let key = head.charCodeAt(0) - head.charCodeAt(1);
    return encryptor(key, tail);

}

function divide(msg){ 
    let evens = evenfours(msg.length);
    let spl = evens.length === 4 ? ['','','',''] : ['','','','',''];
    
    let split =  msg.split('').reduce((a,c,i) =>{
        a.curr = evens[a.curr] <= a.parts[a.curr].length ?  a.curr + 1 : a.curr;
        a.parts[a.curr] += c;
        return a;
    }, { parts: spl, curr: 0});
    
    return split.parts[4] === '' ? split.parts.slice(0, 4) : split.parts;
}

function evenfours(n){
    let ff = 0;
    let last = 0;
    let even = [];
    
    // for some reason, that I don't get, the 16 ->  4,4,4,4 case is not applicable
    if (false){//(n % 4 == 0){
        ff = n/4;
        last = 0;
    }else{
        ff = 0;
        last = n;
        while (last > ff){
            if (n - ((ff+1)*4) >=0 ){
                ff++;
                last = n - (ff * 4);
            } else {
                break;
            }
        }
    }
    even = [ff,ff,ff,ff, last];

    let i = 0;
    while (even[4] > ff){
        even[i]++;
        even[4]--;
        i++
    }

    return even;
}


function encryptor (key, message) {
    // from the dbftbs-djqifs problem
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

}

function mod(n, m) {
    return ((n % m) + m) % m;
}

module.exports = {encodeStr, decode, divide, evenfours};