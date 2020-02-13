// complete the function
function solution(string) {
    return string.split('').reduce( (acc, curr) => /[A-Z]/.test(curr) ? acc += ' ' + curr : acc += curr, '')
}