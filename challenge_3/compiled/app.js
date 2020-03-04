import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", null, React.createElement("div", null, "Hello"));
  }

}

;
export default App;