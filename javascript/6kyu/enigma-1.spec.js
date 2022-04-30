const Plugboard = require('./enigma-1');


test('', () => {
    const plugboard = new Plugboard('AB');
    expect(plugboard.process('A')).toEqual('B')
    expect(plugboard.process('B')).toEqual('A')
    expect(plugboard.process('C')).toEqual('C')
});