import React from 'react';
import Board from './board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Connect 4!
        <Board />
      </div>
    );
  }
}

export default App;
