function squareOrSquareRoot(array) {
    return array.map(n => { 
        const rt = Math.sqrt(n);
         return  rt === Math.floor(rt) ? rt : n * n;
    });  
}


module.exports = squareOrSquareRoot;