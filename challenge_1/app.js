var board = [ "", "", "", "", "", "", "", "", "" ];
var matrix = [ ["", "", ""], ["", "", ""], ["", "", ""] ];
var xCount = 0;

var mapBoardToMatrix = function() {
  matrix[0] = [ board[0], board[1], board[2] ];
  matrix[1] = [ board[3], board[4], board[5] ];
  matrix[2] = [ board[6], board[7], board[8] ];
};

var gameIsWon = function() {
  // check if any row has 3 in a row and that it is not 3 blanks
  for (var i = 0; i < 3; i++) {
    if (matrix[i][0] === 'X' && matrix[i][1] === 'X' && matrix[i][2] === 'X') {
      return true;
    }
  }
  // check if any column has 3 in a row
  // check if any diagonal has 3 in a row
  // if three in a row return true
};

var makeMove = function(htmlContents , id) {
    // if square not already clicked
    if (!htmlContents) {
      console.log('valid move');
      var el = document.getElementById(id);
      // if number of x % 2 === 0
      if (xCount % 2 === 0) {
        // add an X where clicked and update board
        el.innerHTML = "X";
        board[Number(id)] = "X";
      } else {
        // add a O where clicked and update board
        el.innerHTML = "O";
        board[Number(id)] = "O";
      }
      // increment xCount
      xCount++;
    } else {
      console.log('please play a move on an available sqaure!');
    }
    mapBoardToMatrix();
    if (gameIsWon()) {
      console.log('game over');
    }
};

var resetGame = function() {
  // set all squares value to "" and do the same for board
  var squares = document.getElementsByClassName('square');
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
    board[i] = "";
  }
  // set xCount back to zero
  xCount = 0;
  // clear matrix
  mapBoardToMatrix();
};

