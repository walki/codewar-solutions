function bingo(arr){
    // B=2, I=9, N=14, G=7, O=15 
    let b = [2,9,14,7,15];
    
    let containsAll = b.reduce((acc,cur) => acc = acc && (arr.indexOf(cur) !== -1), true);
    return  containsAll ? "WIN" : "LOSE";
};

module.exports = bingo;