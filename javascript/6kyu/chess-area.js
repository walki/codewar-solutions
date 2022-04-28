function whiteBlackAreas(cols, rows){
    let whiteArea = 0;
    
    const rowSum = rows.reduce((a,c)=> a += c, 0);
    const colSum = cols.reduce((a,c)=> a += c, 0);
    const totalArea = rowSum * colSum;

    const map = new Map();


    let flip = 0;
    for (let row = 0; row < rows.length; row++){
        let colstart = flip;
        let key = `${rows[row]}-${flip}`;
        if (map.has(key)){
            whiteArea += map.get(key);
        }else{
            let area = 0;
            for(let col = colstart; col < cols.length; col +=2){
                area += rows[row]* cols[col];
                whiteArea += rows[row]* cols[col];
            }
            map.set(key, area );
        }
        flip = flip === 0 ? 1 : 0;
    }
    
    return [whiteArea, totalArea - whiteArea];
}

module.exports = whiteBlackAreas;