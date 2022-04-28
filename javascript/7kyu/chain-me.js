function  chain(start, fs){
 return fs.reduce((acc, cur) => cur(acc), start);   
}

module.exports = chain;