function countLettersAndDigits(input) {
    return input.split('').reduce( (acc, curr) => /[a-zA-Z0-9]/.test( curr ) ? ++acc : acc, 0 );
    return 0;
  }