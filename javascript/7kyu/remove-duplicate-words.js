function removeDuplicateWords (sentence) {
    let seen = [];
    return sentence.split(' ')
            .filter( (word) =>
                  seen.indexOf( word ) !== -1 ? false : seen.push(word)
            ).join(' ');
  }