const whiteBlackAreas = require('./chess-area');

test('empty board', () => {
    expect(whiteBlackAreas([],[])).toEqual([0,0]);
});


test('one by one', () => {
    expect(whiteBlackAreas([1],[1])).toEqual([1,0]);
});

test('2 by 2', () => {
    expect(whiteBlackAreas([1, 1],[1, 1])).toEqual([2,2]);
});

test('3 by 3', () => {
    expect(whiteBlackAreas([1, 1, 1],[1, 1, 1])).toEqual([5,4]);
});

test('3 by 3', () => {
    expect(whiteBlackAreas([1, 2, 1],[1, 2, 1])).toEqual([8,8]);
});

test('5 by 5', () => {
    expect(whiteBlackAreas([3,1,2,7,1],[1,8,4,5,2])).toEqual([146,134]);
});
