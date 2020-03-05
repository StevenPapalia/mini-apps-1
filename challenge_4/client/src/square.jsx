import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span><button onClick={() => this.props.changeSquare(this.props.x, this.props.y)}></button></span>
    );
  }
}

export default Square;