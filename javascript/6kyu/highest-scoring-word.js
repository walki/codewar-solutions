function high(x){
    let result = { word: '', score: -1};
    let words = x.split(' ');
    result = words.reduce((acc, cur) => {
        let curScore = score(cur);
        return curScore > acc.score ? { word: cur, score: curScore} : acc;
    }, result);
    console.log(result);
    return result.word;
}

function score(w){
    const map = '_abcdefghijklmnopqrstuvwxyz';
    let score = w.split('').reduce( (acc, curr) => acc + map.indexOf(curr), 0);
    return score;
}

module.exports = {high, score};