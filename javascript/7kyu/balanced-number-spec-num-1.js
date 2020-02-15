function balancedNum(number)
{
    const sum = (acc, cur) => acc + Number.parseInt(cur);

    let digits = number.toString().split('');
  
    let len = digits.length;
    let even = len % 2 === 0;
   
    let lower = even ? len / 2 - 1 : Math.floor( len / 2 );
    let upper = even ? len / 2 : Math.floor( len / 2 );
    
    let leftArr = digits.slice(0, lower );
    let rightArr = digits.slice( upper + 1);
  
    let leftSum = leftArr.reduce(sum, 0);
    let rightSum = rightArr.reduce(sum, 0);
    
      
    return leftSum - rightSum === 0 ? 'Balanced' : 'Not Balanced';
    
}