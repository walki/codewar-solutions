const {valueOfX, processAdd, joinDigits} = require('./value-of-x');

test('valueOfX', () => {
    expect(valueOfX('x = 0')).toEqual(0);
    //expect(valueOfX('x = 1')).toEqual(1);
    //expect(valueOfX('x = 1 + 1')).toEqual(2);
    //expect(valueOfX('x = 2 - 1')).toEqual(1);
});

test('processAdd', () =>  {
    expect(processAdd('')).toEqual(0);
    expect(processAdd('0 + 0')).toEqual(0);
    expect(processAdd('0 + 1')).toEqual(1);
    expect(processAdd('2 + 1')).toEqual(3);
});


test('joinDigits', () =>  {
    expect(joinDigits(['1'])).toEqual(['1']);
    expect(joinDigits(['1', '2'])).toEqual(['12']);
});
