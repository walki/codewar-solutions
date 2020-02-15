function oddRow(n) {
    let m = n-1;
    let m_tri = m * (m + 1) / 2; // Find the triangular for the count of number prior to ours
    
    let start = m_tri * 2 + 1; // the start is the n'th triangular number filtering out the evens
    let result = Array.from({length: n}, (_, i) => start + (i * 2)); // get n odd numbers 
  
    return result;
    
}

module.exports = oddRow;