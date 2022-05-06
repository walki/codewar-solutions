function dontGiveMeFive(start, end){
    const range = Array.from({length: end - start + 1}, (_,i) => start + i);
    return range.filter( cur => !containsFive(cur)).length;
}

function containsFive(num){
    return `${num}`.includes('5');
}

module.exports = dontGiveMeFive;