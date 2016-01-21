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
  var newBoard = new Board({n: n});
  // var boardArray = newBoard.rows();
  var solutions = [];

  var placeRook = function(rowIndex, board) {
    //base case
    if (rowIndex === n) {
      if (!board.hasAnyRooksConflicts()) {
        var matrix = JSON.parse(JSON.stringify(board.rows()));
        solutions.push(matrix);
        // rowIndex = 0;
      }
    //other cases
    } else {
      for (var col = 0; col < n; col++) {
        board.rows()[rowIndex][col] = 1;
        if (board.hasAnyRooksConflicts()) {
          board.rows()[rowIndex][col] = 0;
        } else {
          placeRook(rowIndex + 1, board);
          board.rows()[rowIndex][col] = 0;
        }
      }
    }
  }

  placeRook(0, newBoard);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions));

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
window.findNQueensSolution = function(n, returnAll) {
  var newBoard = new Board({n: n});
  // var boardArray = newBoard.rows();
  var solutions = [];

  var placeRook = function(rowIndex, board) {
    //base case
    if (rowIndex === n) {
      if (!board.hasAnyRooksConflicts()) {
        var matrix = JSON.parse(JSON.stringify(board.rows()));
        solutions.push(matrix);
        // rowIndex = 0;
      }
    //other cases
    } else {
      for (var col = 0; col < n; col++) {
        board.rows()[rowIndex][col] = 1;
        if (board.hasAnyQueensConflicts()) {
          board.rows()[rowIndex][col] = 0;
        } else {
          placeRook(rowIndex + 1, board);
          board.rows()[rowIndex][col] = 0;
        }
      }
    }
  }

  placeRook(0, newBoard);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions));

  if (!returnAll) {
    return solutions[0];
  } else {
    return solutions;
  }
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = findNQueensSolution(n, true).length

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
