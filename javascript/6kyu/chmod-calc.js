function chmodCalculator(perm){
    let user = getValue(perm.user);
    let group = getValue(perm.group);
    let other = getValue(perm.other);

    return `${user}${group}${other}`;
}


function getValue(permType){
    const readRegex = /^r.{2}$/;
    const writeRegex = /^.{1}w.{1}$/;
    const executeRegex = /^.{2}x$/;

    let val = 0;
    if (permType){
        val += permType.match(readRegex) ? 4 : 0
        val += permType.match(writeRegex) ? 2 : 0
        val += permType.match(executeRegex) ? 1 : 0
    }
    return val;
}

module.exports = chmodCalculator;