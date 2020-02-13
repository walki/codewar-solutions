function addLetters(...letters) {
  
    return letters.length === 0 ? 'z' : valueToLetter( letters.reduce( (acc, curr) => letterToValue( curr ) + acc, 0) );
  }
  
  function letterToValue(letter) {
     return letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  }
  
  function valueToLetter( value ) {
    return String.fromCharCode( ((value - 1) % 26) + 'a'.charCodeAt(0));
  }