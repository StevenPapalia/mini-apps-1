var board = [ "", "", "", "", "", "", "", "", "" ];
var matrix = [ ["", "", ""], ["", "", ""], ["", "", ""] ];
var xCount = 0;

var mapBoardToMatrix = function() {
  matrix[0] = [ board[0], board[1], board[2] ];
  matrix[1] = [ board[3], board[4], board[5] ];
  matrix[2] = [ board[6], board[7], board[8] ];
};

var gameIsWon = function() {
  // check if any row has 3 in a row
  for (var i = 0; i < 3; i++) {
    if (matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2] && matrix[i][0]) {
      return true;
    }
  }
  // check if any column has 3 in a row
  for (var i = 0; i < 3; i++) {
    if (matrix[0][i] === matrix[1][i] && matrix[0][i] === matrix[2][i] && matrix[0][i]) {
      return true;
    }
  }
  // check if any diagonal has 3 in a row
  if (matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2] && matrix[0][0]) {
    return true;
  }
  if (matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0] && matrix[0][2]) {
    return true;
  }
};

var gameIsTied = function() {
  if (xCount === 9) {
    return true;
  }
};

var makeMove = function(htmlContents , id) {
    if (!gameIsWon() && !gameIsTied()) {

      var el = document.getElementById(id);
      // if square not already clicked
      if (!htmlContents && !gameIsWon()) {
        console.log('valid move');
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
        setTimeout(function() { alert(`Game over! ${el.innerHTML} is the winner!`); }, 500);
      } else if (gameIsTied()) {
        setTimeout(function() { alert(`Tie Game`); }, 500);
      }

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

