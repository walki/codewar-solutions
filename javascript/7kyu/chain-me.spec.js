const chain = require('./chain-me');

test('single function 0 add 1 => 1', () => {
    function add(n){ return n + 1}
    expect(chain(0,[add])).toEqual(1)
});

test('single function 1 add 1 => 2', () => {
    function add(n){ return n + 1}
    expect(chain(1,[add])).toEqual(2)
});

test('single function 0 add 1 => 1 add 1 => 2', () => {
    function add(n){ return n + 1}
    expect(chain(0,[add, add])).toEqual(2)
});

test('single function 2 add 1, mult 30 -> 90', () => {
    function add(n){ return n + 1}
    function mult(n){ return n * 30}
    expect(chain(2,[add, mult])).toEqual(90)
});

test('single function 2 add 10, mult 30 => 360', () => {
    function add(n){ return n + 10}
    function mult(n){ return n * 30}
    expect(chain(2,[add, mult])).toEqual(360)
});