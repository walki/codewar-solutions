function validate(password) {
  console.log(password);
  return atLeastSix(password) && containsLower(password) && containsUpper(password) && containsNumber(password);
}

function atLeastSix(password) {
  return /^[A-Za-z0-9]{6,}$/.test(password);
}

function containsLower(password) {
  return /[a-z]{1}/.test(password);
}

function containsUpper(password) {
  return /[A-Z]{1}/.test(password);
}

function containsNumber(password) {
  return /[0-9]{1}/.test(password);
}