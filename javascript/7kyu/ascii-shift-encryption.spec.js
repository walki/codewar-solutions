const {asciiEncrypt, asciiDecrypt} = require('./ascii-shift-encryption');

test('no input, no output', () => {
    expect(asciiEncrypt("")).toEqual("")
});

// The encryption algorithm should shift each character's
// charcode by the character's current index in the string (0-based).
test('a => a', () => {
    expect(asciiEncrypt("a")).toEqual("a")
});

// index shifts (right) 1, so b -> c
test('ab => ac', () => {
    expect(asciiEncrypt("ab")).toEqual("ac")
});

test('abc => ace', () => {
    expect(asciiEncrypt("ab")).toEqual("ac")
});

test('PASSWORD', () => {
    expect(asciiEncrypt("PASSWORD")).toEqual("PBUV[TXK")
});

test('no input, no output', () => {
    expect(asciiDecrypt("")).toEqual("")
});

test('a => a', () => {
    expect(asciiDecrypt("a")).toEqual("a")
});

test('ac => ab', () => {
    expect(asciiDecrypt("ac")).toEqual("ab")
});

test('PASSWORD', () => {
    expect(asciiDecrypt("PBUV[TXK")).toEqual("PASSWORD")
});