// var squares = document.getElementsByClassName('square');

// var rowOne =[];
// var rowTwo = [];
// var rowThree = [];
// for (var i = 0; i < squares.length; i++) {
//   if (i < 3) {
//     rowOne.push(squares[i].innerHTML);
//   } else if (i < 6) {
//     rowTwo.push(squares[i].innerHTML);
//   } else {
//     rowThree.push(squares[i].innerHTML);
//   }
// }
// var board = [rowOne, rowTwo, rowThree];
// console.log(board);

// var board = [];
// for (var i = 0; i < squares.length; i++) {
//     board.push(squares[i].innerHTML);
// }
// console.log(board);

var xCount = 0;

var makeMove = function(htmlContents , id) {
    // if square not already clicked
    if (!htmlContents) {
      console.log('valid move');
      var el = document.getElementById(id);
      // if number of x % 2 === 0
      if (xCount % 2 === 0) {
        // add an X where clicked
        el.innerHTML = "X";
      } else {
        // add a O where clicked
        el.innerHTML = "O";
      }
      // increment xCount
      xCount++;
    } else {
      console.log('please play a move on an available sqaure!');
    }
  // update board
};

var resetGame = function() {
  // set all squares value to ""
  var squares = document.getElementsByClassName('square');
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }
};

