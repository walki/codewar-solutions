const dontGiveMeFive = require('./dont-give-me');


test('', () => {
    expect(dontGiveMeFive(0,1)).toEqual(2);
    expect(dontGiveMeFive(1,9)).toEqual(8);
    expect(dontGiveMeFive(4,17)).toEqual(12);
    expect(dontGiveMeFive(1,5)).toEqual(4);
    expect(dontGiveMeFive(8,10)).toEqual(3);
    expect(dontGiveMeFive(15,16)).toEqual(1);
    expect(dontGiveMeFive(-15,-14)).toEqual(1);
    expect(dontGiveMeFive(-5,5)).toEqual(9);
    expect(dontGiveMeFive(50,59)).toEqual(0);
    

});