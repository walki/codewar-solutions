function stat(strg) {
  if (strg === '') return '';
  
  let results = strg.split(', ').map( x => toSec(x) );
  return "Range: " + toTimeFmt( range(results) )
      + " Average: " + toTimeFmt( mean(results) )
      + " Median: " + toTimeFmt( median(results) );
}

function range( times ){
  let mn = times.reduce( min, 360000);
  let mx = times.reduce( max, 0);
  return mx - mn;
}

function max( a, b ){
  return a > b ? a : b;
}

function min( a, b ){
  return a < b ? a : b;
}

function mean( times ) {
  return times.reduce( (a, c) => a + c) / times.length; 
}

function median( times ) {
  
  let cnt = times.length;
  let sorted = times.sort( (a,b) => a-b);
  let mid = Math.floor(cnt / 2);
  return cnt % 2 == 0 ? mean(sorted.slice( mid - 1, mid + 1)) : sorted[ mid ];
}

function toSec( time ){
  let hms = time.split('|').map( x => Number.parseInt(x) );
  return hms[0]*3600 + hms[1]*60 + hms[2]; 
}

function toTimeFmt( sec ){
  let h = Math.floor( sec / 3600 );
  sec = sec % 3600;
  let m = Math.floor( sec / 60 );
  let s = Math.floor(sec % 60);
  return (h + '').padStart(2,0) + '|' + (m + '').padStart(2,0) + '|' + (s + '').padStart(2,0);
}