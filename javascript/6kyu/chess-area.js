function whiteBlackAreas(cols, rows){
    let whiteArea = 0;
    
    const rowSum = rows.reduce((a,c)=> a += c, 0);
    const colSum = cols.reduce((a,c)=> a += c, 0);
    const totalArea = rowSum * colSum;

    //console.log("total: " + totalArea);
    let flip = 0;
    for (let row = 0; row < rows.length; row++){
        let colstart = flip;
        for(let col = colstart; col < cols.length; col +=2){
            whiteArea += rows[row]* cols[col];

            //console.log("white: " + whiteArea);
        }
        flip = flip === 0 ? 1 : 0;
    }
    
    return [whiteArea, totalArea - whiteArea];
}

module.exports = whiteBlackAreas;