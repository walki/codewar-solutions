function getCount(str) {
  return str.split('').reduce( vowelCount, 0 );
}

function vowelCount( acc, curr) {
  return isVowel(curr) ? acc + 1 : acc;
}

function isVowel(ch) {
  return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'
}