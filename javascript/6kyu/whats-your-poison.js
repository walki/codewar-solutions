function find(rats) {
    // return number of poisoned bottle
    
    return rats.reduce( (acc, curr) => acc += Math.pow( 2, curr ), 0 );
    
}