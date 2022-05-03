const {add, divide, multiply, mod, exponent, subt} = require('./fund-return');

test('add', () => {
    expect(add(0,0)).toEqual(0);
    expect(add(1,1)).toEqual(2);
    expect(add(1,2)).toEqual(3);
});

test('divide', () => {
    expect(divide(2,1)).toEqual(2);
    expect(divide(1,2)).toEqual(0.5);
    expect(divide(12,3)).toEqual(4);
});

test('multiply', () => {
    expect(multiply(2,1)).toEqual(2);
    expect(multiply(1,2)).toEqual(2);
    expect(multiply(12,3)).toEqual(36);
});


test('mod', () => {
    expect(mod(1,2)).toEqual(1);
    expect(mod(13,5)).toEqual(3);
    expect(mod(12,3)).toEqual(0);
});

test('exponent', () => {
    expect(exponent(1,2)).toEqual(1);
    expect(exponent(3,3)).toEqual(27);
    expect(exponent(2,10)).toEqual(1024);
});

test('subt', () => {
    expect(subt(1,0)).toEqual(1);
    expect(subt(3,3)).toEqual(0);
    expect(subt(12,5)).toEqual(7);
});


