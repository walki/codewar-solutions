function doneOrNot(board){
  var rowsDone = testRows(board);
  var columnsDone = testColumns(board);
  var sectionsDone = testSections(board);
  
  return rowsDone && columnsDone && sectionsDone ? "Finished!" : "Try again!";
}

function testSections(board)
{
  var reg1 = [ board[0][0], board[0][1], board[0][2],
               board[1][0], board[1][1], board[1][2],
               board[2][0], board[2][1], board[2][2] ];

  var reg2 = [ board[0][3], board[0][4], board[0][5],
               board[1][3], board[1][4], board[1][5],
               board[2][3], board[2][4], board[2][5] ];

  var reg3 = [ board[0][6], board[0][7], board[0][8],
               board[1][6], board[1][7], board[1][8],
               board[2][6], board[2][7], board[2][8] ];

  var reg4 = [ board[3][0], board[3][1], board[3][2],
               board[4][0], board[4][1], board[4][2],
               board[5][0], board[5][1], board[5][2] ];

  var reg5 = [ board[3][3], board[3][4], board[3][5],
               board[4][3], board[4][4], board[4][5],
               board[5][3], board[5][4], board[5][5] ];

  var reg6 = [ board[3][6], board[3][7], board[3][8],
               board[4][6], board[4][7], board[4][8],
               board[5][6], board[5][7], board[5][8] ];

  var reg7 = [ board[6][0], board[6][1], board[6][2],
               board[7][0], board[7][1], board[7][2],
               board[8][0], board[8][1], board[8][2] ];

  var reg8 = [ board[6][3], board[6][4], board[6][5],
               board[7][3], board[7][4], board[7][5],
               board[8][3], board[8][4], board[8][5] ];

  var reg9 = [ board[6][6], board[6][7], board[6][8],
               board[7][6], board[7][7], board[7][8],
               board[8][6], board[8][7], board[8][8] ];

  return testsArrayForAllNumbers(reg1) &&
          testsArrayForAllNumbers(reg2) &&
          testsArrayForAllNumbers(reg3) &&
          testsArrayForAllNumbers(reg4) &&
          testsArrayForAllNumbers(reg5) &&
          testsArrayForAllNumbers(reg6) &&
          testsArrayForAllNumbers(reg7) &&
          testsArrayForAllNumbers(reg8) &&
          testsArrayForAllNumbers(reg9);
}

function testColumns(board)
{

  //console.log(board);
  
  for(var i = 0; i < 9; i++)
  {
    var column = [];
    for (var j = 0; j < 9; j++)
    {
      column.push(board[j][i]);
    }
    //console.log(column);
    if (!testsArrayForAllNumbers(column))
    {
      return false;
    }
  }
  return true;
}

function testRows(board)
{
  
  for(var i = 0; i < board.length; i++)
  {
    if (!testsArrayForAllNumbers(board[i].slice()))
    { 
      return false;
    }
  }
  return true;
}

function testsArrayForAllNumbers(set)
{
  var expected = [ 1,2,3,4,5,6,7,8,9];
  //console.log(set);
  return (areArraysEqual(expected, set.sort()));
}

function areArraysEqual(a, b)
{
  if (a.length === b .length)
  {
    for (var i = 0; i < a.length; i++)
    {
      if (a[i] !== b[i])
      {
        return false;
      }
    }
    return true;
  }
  return false;
}