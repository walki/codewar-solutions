const domainName = require('./extract-domain');

test('', () => {
    expect(domainName('http://google.com')).toEqual('google');
    expect(domainName('www.google.com')).toEqual('google');
});