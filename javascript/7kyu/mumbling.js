function accum(s) {
	return s.split('').map( (curr, idx) => makeMumble(curr, idx) ).join('-'); 
}

function makeMumble(ch, pos){
  return ch.toUpperCase() + ch.toLowerCase().repeat(pos);
}