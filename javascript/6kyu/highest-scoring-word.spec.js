const {high, score} = require('./highest-scoring-word');

test('high', () => {
    expect(high('')).toEqual('');
    expect(high('a')).toEqual('a');
    expect(high('a b')).toEqual('b');
    expect(high('a c b')).toEqual('c');
    expect(high('man i need a taxi up to ubud')).toEqual('taxi');
});

test('score', () =>{
    expect(score('')).toEqual(0);
    expect(score('a')).toEqual(1);
    expect(score('b')).toEqual(2);
    expect(score('abc')).toEqual(6);
    expect(score('zabc')).toEqual(32);
});