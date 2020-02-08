const sumReducer = (acc,curr) => acc + curr;
const intMap = elem => parseInt(elem);

function golfScoreCalculator(parList, scoreList){
  return scoreList.split('').map( intMap ).reduce( sumReducer ) - 
  parList.split('').map( intMap ).reduce( sumReducer );
}