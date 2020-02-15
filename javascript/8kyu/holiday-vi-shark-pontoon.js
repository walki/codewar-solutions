function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let speed = youSpeed * ( dolphin ? 2 : 1 );
    let time = pontoonDistance / speed;
    let sharkTime = sharkDistance / sharkSpeed;
    
    return time <= sharkTime ? "Alive!" : "Shark Bait!";
}