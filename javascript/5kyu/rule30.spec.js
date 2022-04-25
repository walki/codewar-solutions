const rule30 = require('./rule30');

test('[0] for 1 iter', () => {
    expect(rule30([0], 1)).toEqual([0, 0, 0]);
});

test('[0] for 2 iter', () => {
    expect(rule30([0], 2)).toEqual([0, 0, 0, 0, 0]);
});

test('[1] for 1 iter', () => {
    expect(rule30([1], 1)).toEqual([1, 1, 1]);
});

test('[1] for 2 iter', () => {
    expect(rule30([1], 2)).toEqual([1, 1, 0, 0, 1]);
});

test('[1] for 5 iter', () => {
    expect(rule30([1], 5)).toEqual([1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1]);
});