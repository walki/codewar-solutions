
const rule30_lookup = {
    '000': 0, '001': 1, '010': 1, '011': 1,
    '100': 1, '101': 0, '110': 0, '111': 0
};

const rule30 = (list , n) => {

    let result = list.slice(0);
    
    while (n > 0){
        result = [ 0 ].concat(result).concat([0]);
        let iteration = result.slice(0);
        for(let i = 0; i < result.length; i++){
            let curr = '';
            curr += i > 0 ? result[i-1] : 0;
            curr += result[i];
            curr += i < result.length -1 ? result[i+1] : 0;
           
            iteration[i] = rule30_lookup[curr];
        }
        result = iteration.slice(0);
        n--;
    }
    return result;
}

module.exports = rule30;