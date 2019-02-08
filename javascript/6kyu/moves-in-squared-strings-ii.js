function rot(strng) {
    return horMirror(vertMirror(strng));
}

function vertMirror(strng) {
    return strng.split('\n').map( s => s.split('').reverse().join('') ).join('\n');
}

function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}

function selfieAndRot(strng) {
    let s = selfie(strng);
    let r = rot(s);
    return s + '\n' + r;
}

function selfie(strng) {
  return strng.split('\n').map( x => x + ('.').repeat(x.length) ).join('\n');
}

function oper(fct, s) {
    return fct(s);
}