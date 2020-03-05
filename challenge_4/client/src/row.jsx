import React from 'react';
import Square from './square.jsx';

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.row.map((square, index) => <Square x={this.props.id} y={index} changeSquare={this.props.changeSquare}/>)}
      </div>
    );
  }
}

export default Row;