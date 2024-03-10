import { Component, useState } from 'react'


import './App.css'

class App extends Component {
  state = {
    message: '',
    inputValue: ''
  };

  async componentDidMount() {
    const response = await fetch('/api/hello');
    const data = await response.text();
    this.setState({ message: data });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: this.state.inputValue })
    });
    const data = await response.text();
    console.log(data); // Log the response from the server
    this.setState({ inputValue: '', message: data });
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
