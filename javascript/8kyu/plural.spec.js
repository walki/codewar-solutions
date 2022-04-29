const plural = require('./plural');

test('0 yes', () => {
    expect(plural(0)).toEqual(true);
});

test('1 yes', () => {
    expect(plural(0.5)).toEqual(true);
});

test('10 yes', () => {
    expect(plural(10)).toEqual(true);
});

test('100 yes', () => {
    expect(plural(100)).toEqual(true);
});

test('Infinity yes', () => {
    expect(plural(Infinity)).toEqual(true);
});

test('1 no', () => {
    expect(plural(1)).toEqual(false);
});