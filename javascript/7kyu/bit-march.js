function bitMarch(n){
    
    let march = [];
    let step = '1'.repeat(n).padStart(8, '0')
                .split('').map( b => Number(b));

    march.push(step);

    while (step[0] !== 1){
        step = step.slice(1);
        step.push(0);
        march.push(step);
    }
    
    return march;

}

module.exports = bitMarch;