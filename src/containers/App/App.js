import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    isActive: false
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>
          {this.props.show ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default App;
