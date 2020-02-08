const minReducer = ( acc, cur ) => Math.min(acc, cur);
const sumReducer = ( acc, cur ) => acc + cur;

function sumOfMinimums(arr) {
  
  return arr.map( inner => inner.reduce(minReducer, Infinity ) ).reduce( sumReducer, 0 );
  
}