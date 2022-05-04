const zeroAndOne = require('./simple-fun-154');

test('nothing', () => {
    expect(zeroAndOne('')).toEqual(0);
    expect(zeroAndOne('0')).toEqual(1);
    expect(zeroAndOne('1')).toEqual(1);
    expect(zeroAndOne('10')).toEqual(0);
    expect(zeroAndOne('01')).toEqual(0);
    expect(zeroAndOne('101')).toEqual(1);
    expect(zeroAndOne('1010')).toEqual(0);
    expect(zeroAndOne('0101')).toEqual(0);
    expect(zeroAndOne('01010')).toEqual(1);
    expect(zeroAndOne('10101')).toEqual(1);
    expect(zeroAndOne('11101111')).toEqual(6);
    expect(zeroAndOne('110110')).toEqual(2);
});