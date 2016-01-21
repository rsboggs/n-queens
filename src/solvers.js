/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n, returnAll) {
  var wholeBoard = new Board({n: n});
  var board = wholeBoard.rows();
  var solutions = [];

  var placeRook = function(rowStart, usedIndexes) {
    if (rowStart === n) {
      solutions.push(board);
      board = new Board({n: n}).rows();
    } else {
      for (var col = 0; col < board.length; col++) {
        var currentRow = board[rowStart];
        if (!_.contains(usedIndexes, col)) {
          currentRow[col] = 1;
          placeRook(rowStart + 1, usedIndexes.concat(col));
        }
      }
    }
  };

  placeRook(0, []);


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));

  if (!returnAll) {
    return solutions[0];
  } else {
    return solutions;
  }
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = findNRooksSolution(n, true).length
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
