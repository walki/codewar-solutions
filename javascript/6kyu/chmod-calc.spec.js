const chmodCalculator = require('./chmod-calc');

test('no keys returns 0', () => {
    expect(chmodCalculator({})).toEqual('000');
});


test('user with user returns 400', () => {
    expect(chmodCalculator({user: 'r--'})).toEqual('400');
});

test('expanded test 1', ()=>{
    expect(chmodCalculator({user: 'rwx', group: 'r-x', other: 'r-x'}))
        .toEqual("755");
});

test('expanded test 2', ()=>{
    expect(chmodCalculator({user: 'rwx', group: 'r--', other: 'r--'}))
        .toEqual("744");
});

test('expanded test 3', ()=>{
    expect(chmodCalculator({user: 'r-x', group: 'r-x', other: 'r-x'}))
        .toEqual("555");
});

test('expanded test 4', ()=>{
    expect(chmodCalculator({group: 'rwx'}))
        .toEqual("070");
});