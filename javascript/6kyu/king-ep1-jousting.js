function joust(listField, vKnightLeft, vKnightRight) {
    
    if (vKnightLeft === 0 && vKnightRight === 0)
        return listField;
    
    let leftKnight = listField[0];
    let rightKnight = listField[1];
    let [left, right] = lancePositions(listField);

    while (left < right){
        
        leftKnight = leftKnightMove(leftKnight, vKnightLeft);
        rightKnight = rightKnightMove(rightKnight, vKnightRight);

        [left, right] = lancePositions([leftKnight, rightKnight]);
    }

    return [leftKnight, rightKnight];
}

function leftKnightMove(leftKnight, v){
    return ' '.repeat(v) + leftKnight.substring(0, leftKnight.length - v);
}

function rightKnightMove(rightKnight, v){
    return rightKnight.substring(v) + ' '.repeat(v);
}

function lancePositions(listField){
    const left = listField[0].indexOf('>');
    const right = listField[1].indexOf('<');
    return [left, right];
}

module.exports = {joust, lancePositions, leftKnightMove, rightKnightMove};