import React from 'react';
import Row from './row.jsx';
import outBoard from './array.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
      ]
    };

    this.changeSquare = this.changeSquare.bind(this);

  }

  changeSquare(x, y) {
    console.log(this.state.board[x][y], x, y);
    outBoard[x][y] === 1;
    // for (var i = 0; i < this.state.board)
    this.setState({
      board: outBoard
    }, () => console.log(this.state.board));
  }

  render() {
    return (
      <div>
        {this.state.board.map((row, index) => <Row row={row} id={index} changeSquare={this.changeSquare}/>)}
      </div>
    );
  }

}

export default Board;