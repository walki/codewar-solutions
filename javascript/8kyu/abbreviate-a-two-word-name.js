function abbrevName(name){

    var names = name.toUpperCase().split(' ');
    return names[0].split('')[0] + '.' + names[1].split('')[0];

}