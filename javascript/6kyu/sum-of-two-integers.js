
function sum (a, b){
    let result = 0;
    let mask = 1;
    while (mask !== 0){
        let nextmask = mask << 1;
        if (a & mask){
            if (result & mask){
                result ^= nextmask;
            }
            result ^= mask;
        }
        if (b & mask){
            if (result & mask){
                result ^= nextmask;
            }
            result ^= mask;
        }
        mask = nextmask;
    }
    return result;
}

console.log( sum(10, 12));
