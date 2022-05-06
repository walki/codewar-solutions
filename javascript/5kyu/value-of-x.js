function valueOfX(eq){

    let [left, right] = eq.split('=');

    xSide = left.includes('x') ? left : right;
    otherSide = xSide === left ? right : left;

    let leftVal = 0;
    let leftOp, rightOp, operator;

    let ent = otherSide.split(' ');

    let result = otherSide.includes('+') ? processAdd(otherSide) : +otherSide;

    return result;
}

function joinDigits(arr){
    const digits = '0123456789';
    return arr.reduce((acc, cur) => { 

        if (digits.includes(cur) && acc.length > 0 && digits.includes(acc[acc.length - 1])){
            acc.push(acc.pop() + '' + cur);
            console.log("::" + acc, cur);
        }else{
            acc.push(cur);
            console.log(acc, cur);
        }
        return acc;
    },[]);
}

function processAdd(side){
    let nums = side.split('+');
    return nums.reduce((acc, cur) => acc += Number(cur), 0);
}
module.exports = {valueOfX, processAdd, joinDigits};