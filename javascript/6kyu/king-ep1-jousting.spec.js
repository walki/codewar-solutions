const {joust, lancePositions, leftKnightMove, rightKnightMove} = require('./king-ep1-jousting')


// You are given the array / tuple (listField) of two strings of equal length. 
// Each the string contains "$->" and "<-P"(knight with lance) respectively.
// The knights move towards each other and they can only take
// simultaneous steps of length vKnightLeft and vKnightRight.
// When the index of ">" is equal or more than the index of "<", 
// return the array / tuple representing the knights' positions.

test('nothing', () =>{
    expect(joust(["",""], 0, 0)).toEqual(["",""]);
});

test('not moving', () =>{
    expect(joust(["$->   ","   <-P"], 0, 0)).toEqual(["$->   ","   <-P"]);
});

test('lance positions', () => {
    expect(lancePositions(["$->   ","   <-P"])).toEqual([2,3]);
});

test('lance positions', () => {
    expect(lancePositions(["  $-> ","  <-P  "])).toEqual([4,2]);
});

test('left 0', () => {
    expect(leftKnightMove("$->    ", 0)).toEqual("$->    ");
});

test('left 1', () => {
    expect(leftKnightMove("$->    ", 1)).toEqual(" $->   ");
});

test('left 3', () => {
    expect(leftKnightMove("$->    ", 3)).toEqual("   $-> ");
});

test('right 0', () => {
    expect(rightKnightMove("      <-P", 0)).toEqual("      <-P");
});

test('right 1', () => {
    expect(rightKnightMove("      <-P", 1)).toEqual("     <-P ");
});

test('right 3', () => {
    expect(rightKnightMove("      <-P", 3)).toEqual("   <-P   ");
});

test('left moving by 1', () =>{
    expect(joust(["$->   ","   <-P"], 1, 0)).toEqual([" $->  ","   <-P"]);
});

test('both moving by 1', () =>{
    expect(joust(["$->    ","    <-P"], 1, 1)).toEqual([" $->   ","   <-P "]);
    expect(joust(["$->","<-P"], 1, 1)).toEqual(["$->","<-P"]);
});

test('both moving by 3', () =>{
    expect(joust([
        "$->    ",
        "    <-P"
    ], 3, 3)).toEqual([
        "   $-> ",
        " <-P   "
    ]);
});

