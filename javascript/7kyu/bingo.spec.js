const bingo = require('./bingo');

test('bingo', () => {
    expect(bingo([1,1,1,1,1,1,1,1,1,1])).toEqual("LOSE");
    expect(bingo([2,9,14,7,15,1,1,1,1,1])).toEqual("WIN");
});