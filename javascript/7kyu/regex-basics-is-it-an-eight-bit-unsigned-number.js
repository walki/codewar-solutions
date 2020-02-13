String.prototype.eightBitNumber = function() {
  
    let re1 = /^[0-9]{1}$/.test(this);     //0-9
    let re2 = /^[1-9][0-9]$/.test(this);   //10-99
    let re3 = /^1[0-9]{2}$/.test(this);    //100-199
    let re4 = /^2[0-4][0-9]$/.test(this);  //200-249
    let re5 = /^25[0-5]$/.test(this);      //250-255
    
    console.log('-----------');
    console.log(this);
    console.log('re1:' +  re1 );
    console.log('re2:' +  re2 );
    console.log('re3:' +  re3 );
    console.log('re4:' +  re4 );
    console.log('re5:' +  re5 );
    
    
    return re1 || re2 || re3 || re4 || re5;
 
 
    
 }