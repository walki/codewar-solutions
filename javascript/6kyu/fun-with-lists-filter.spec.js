const {filter, Node} = require('./fun-with-lists-filter');

test('', () => {
    expect(filter(null, x=> false)).toEqual(null);
    expect(filter(new Node(1, new Node(2, new Node(3))), x => true))
        .toEqual(new Node(1, new Node(2, new Node(3))));
    expect(filter(new Node(1), x => x <= 2))
        .toEqual(new Node(1));
    expect(filter(new Node(3), x => x <= 2))
        .toEqual(null);
    expect(filter(new Node(1, new Node(2)), x => x <= 2))
        .toEqual(new Node(1, new Node(2)));
    expect(filter(new Node(1, new Node(3)), x => x <= 2))
        .toEqual(new Node(1));
    expect(filter(new Node(1, new Node(2, new Node(3, new Node(2)))), x => x <= 2))
        .toEqual(new Node(1, new Node(2, new Node(2))));
    expect(filter(new Node(1, new Node(2, new Node(3, new Node(2)))), x => x === 2))
        .toEqual(new Node(2, new Node(2)));
});