const encryptor = require('./dbftbs-djqifs');

test('', () => {
    expect(encryptor(0,'')).toEqual('');
    expect(encryptor(0,'A')).toEqual('A');
    expect(encryptor(1,'A')).toEqual('B');
    expect(encryptor(1,'Ab')).toEqual('Bc');
    expect(encryptor(-1,'Ab')).toEqual('Za');
    expect(encryptor(-261,'Ab')).toEqual('Za');
    expect(encryptor(-5,'Hello World!')).toEqual('Czggj Rjmgy!');
});