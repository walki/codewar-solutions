function simple_assembler(program) {
	/* return a dictionary with the registers */
  let r = {};
  
  for(let i = 0; i < program.length;){
    //console.log(`i: ${i} instr: ${program[i]} r.a: ${r.a} r.b: ${r.b}`);
    let instr = program[i].split(' ');
    
    let command = instr[0];
    let x = instr[1];
    let x_int = Number.parseInt(x);
    let y = instr[2];
    let y_int = Number.parseInt(y);
    
    switch (command){
      case 'mov':
        r[x] = Number.isInteger(y_int) ? y_int : r[y];  
        break;
      case 'inc':
        r[x]++;
        break;
      case 'dec':
        r[x]--;
        break;
      case 'jnz':
        let comp = Number.isInteger(x_int) ? x_int : r[x];
        if (comp !== 0) {
          i = i + y_int;
          continue;
        }
        break;
    }
    i++;
  
  }
	return r;
}