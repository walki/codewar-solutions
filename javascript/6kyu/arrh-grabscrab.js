function grabscrab(anagram, dictionary) {
  return dictionary.filter( word => isAnagram(anagram, word));
}

function isAnagram( a, b ) {
  let aDict = getLetterCounts(a);
  let bDict = getLetterCounts(b);

  return Object.keys(aDict).reduce( (acc, curr) => {
    if (acc){
        if (aDict[curr] !== bDict[curr]) acc = false;
    }
    return acc;
  }, true);
}

function getLetterCounts(word){
    return word.split('').reduce( (acc, curr) => { 
            acc[curr] ? acc[curr]++ : acc[curr] = 1;
            return acc;
     }, {} );
}

module.exports = grabscrab;