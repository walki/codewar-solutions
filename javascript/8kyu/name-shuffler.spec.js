test('', ()=>{
    expect(nameShuffler('')).toEqual('');
    expect(nameShuffler('bob')).toEqual('bob');
    expect(nameShuffler('bob smith')).toEqual('smith bob');
});


function nameShuffler(name){
    let names = name.split(' ');
    let count = names.length;
    if (count > 0){
        let temp = names[0];
        names[0] = names[count -1];
        names[count-1] = temp;
    }
    name = names.join(' ');
    return name;
}