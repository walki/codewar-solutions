const sameCase = require('./check-same-case');

test('nothing', () => {
    expect(sameCase("", "")).toEqual(-1);
});

test('a ', () => {
    expect(sameCase("a", "")).toEqual(-1);
});

test(' b', () => {
    expect(sameCase("", "b")).toEqual(-1);
});

test('0 0', () => {
    expect(sameCase("0", "0")).toEqual(-1);
});

test('0 b', () => {
    expect(sameCase("0", "b")).toEqual(-1);
});

test('a -1', () => {
    expect(sameCase("a", "-1")).toEqual(-1);
});

test('both lower', () => {
    expect(sameCase("a", "b")).toEqual(1);
});

test('both upper', () => {
    expect(sameCase("B", "C")).toEqual(1);
});

test('Both letters, not case match', () => {
    expect(sameCase("a", "A")).toEqual(0);
});