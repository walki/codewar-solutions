function whiteBlackAreas(cols, rows){
    let whiteArea = 0;
    let blackArea = 0
    let whiteStart = true;

    for (let row = 0; row < rows.length; row++){
        whiteStart = row % 2 == 1 ? false : true;
        for(let col = 0; col < cols.length; col++){
            whiteStart
                ? whiteArea += rows[row]* cols[col]
                : blackArea += rows[row]* cols[col];
            whiteStart = !whiteStart;
        }
    }
    
    return [whiteArea, blackArea];
}

module.exports = whiteBlackAreas;