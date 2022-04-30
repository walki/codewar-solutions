const {encodeStr, decode, divide, evenfours} = require('./second-caesar-cipher');

test('', () => {
    expect(encodeStr()).toEqual([]);
    expect(encodeStr('', 0)).toEqual([]);
    expect(encodeStr('a', 0)).toEqual(['a','a','a','']);
    expect(encodeStr('ab', 0)).toEqual(['a','a','a','b']);
    expect(encodeStr('ABCDEF', 2)).toEqual(['ac','CD','EF','GH']);
    expect(encodeStr('ABCDEFGH', 2)).toEqual(['ac','CD','EF','GH', 'IJ']);
    expect(encodeStr('O CAPTAIN! my Captain! our fearful trip is done;', 1))
        .toEqual(["opP DBQUBJ", "O! nz Dbqu", "bjo! pvs g", "fbsgvm usj", "q jt epof;"]);

    u = "I should have known that you would have a perfect answer for me!!!"
    v = ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]
    expect(encodeStr(u,1)).toEqual(v);
});

test('', () => {
    expect(decode([])).toEqual('');
    expect(decode(['aa','A','',''])).toEqual('A');
    expect(decode(['ab','B','C','D','E'])).toEqual('ABCD');

    u = "I should have known that you would have a perfect answer for me!!!"
    v = ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]
    expect(decode(v)).toEqual(u);

});



test('', () => {
    expect(divide('')).toEqual(['','','','']);
    expect(divide('a')).toEqual(['a','','','']);
    expect(divide('abcd')).toEqual(['a','b','c','d']);
    expect(divide('abcde')).toEqual(['a','b','c','d', 'e']);
    expect(divide('abbcde')).toEqual(['ab','b','c','d', 'e']);
    expect(divide('abcdefghi')).toEqual(['ab','cd','ef','gh', 'i']);
    expect(divide('abcdefghijkl')).toEqual(['abc','def','ghi', 'jkl']);
});

test('', () =>{
    expect(evenfours(0)).toEqual([0,0,0,0,0]);
    expect(evenfours(1)).toEqual([1,0,0,0,0]);
    expect(evenfours(2)).toEqual([1,1,0,0,0]);
    expect(evenfours(3)).toEqual([1,1,1,0,0]);
    expect(evenfours(4)).toEqual([1,1,1,1,0]);
    expect(evenfours(5)).toEqual([1,1,1,1,1]);
    expect(evenfours(6)).toEqual([2,1,1,1,1]);
    expect(evenfours(12)).toEqual([3,3,3,3,0]);
    expect(evenfours(13)).toEqual([3,3,3,3,1]);
    expect(evenfours(15)).toEqual([3,3,3,3,3]);
    expect(evenfours(16)).toEqual([4,4,4,4,0]);
    expect(evenfours(17)).toEqual([4,4,4,4,1]);
    expect(evenfours(26)).toEqual([6,6,6,6,2]);
    expect(evenfours(31)).toEqual([7,7,7,7,3]);

    expect(evenfours(50)).toEqual([10,10,10,10,10]);
});

