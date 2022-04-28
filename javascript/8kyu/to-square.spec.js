const squareOrSquareRoot = require('./to-square');

test('1 -> 1', () => {
    expect(squareOrSquareRoot([1])).toEqual([1]);
});

test('2 -> 4', () => {
    expect(squareOrSquareRoot([2])).toEqual([4]);
});

test('4 -> 2', () => {
    expect(squareOrSquareRoot([2])).toEqual([4]);
});


test(' 2,3,4,5,16,25,6 -> 4,9,2,25,4,5,36', () => {
    expect(squareOrSquareRoot([2,3,4,5,16,25,6])).toEqual([4,9,2,25,4,5,36]);
});