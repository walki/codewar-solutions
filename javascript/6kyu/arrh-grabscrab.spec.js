
const {assert} = require("chai");
let grabscrab = require('./arrh-grabscrab');

describe("grabscrab", function() {
  it("should pass sample test cases", function() {
    assert.deepEqual(grabscrab("trisf", ["first"]), ["first"], "Should have found 'first'");
    assert.deepEqual(grabscrab("oob", ["bob", "baobab"]), [], "Should not have found anything");
    assert.deepEqual(grabscrab("ainstuomn", ["mountains", "hills", "mesa"]), ["mountains"], "Should have found 'mountains'");
    assert.deepEqual(grabscrab("oolp", ["donkey", "pool", "horse", "loop"]), ["pool", "loop"], "Should have found 'pool' and 'loop'");
    assert.deepEqual(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]), ["sport", "ports"], "Should have found 'sport' and 'ports'");
    assert.deepEqual(grabscrab("ourf", ["one","two","three"]), [], "Should not have found anything");
  });
});