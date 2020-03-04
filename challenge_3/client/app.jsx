class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    }, () => console.log(this.state.name));
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    }, () => console.log(this.state.email));
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    }, () => console.log(this.state.password));
  }

  handleSubmit(event) {
    if (this.state.name === "" || this.state.email === "" || this.state.password === "") {
      alert('Please fill out all fields before submitting!')
    } else {
      alert(`Name: ${this.state.name} Email: ${this.state.email} Password: ${this.state.password}`);
    }
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name:<br></br>
          <input type="text" value={this.state.name} onChange={this.handleNameChange}></input><br></br>
          Email:<br></br>
          <input type="text" value={this.state.email} onChange={this.handleEmailChange}></input><br></br>
          Password:<br></br>
          <input type="text" value={this.state.password} onChange={this.handlePasswordChange}></input><br></br>
          <input type="submit" value="Next"></input>
        </form>
      </div>
    );
  }

};

ReactDOM.render(
  <App />,
  document.getElementById("App")
 );
