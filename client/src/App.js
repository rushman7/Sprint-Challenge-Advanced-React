import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({ users: res.data })
      })
      .catch(err => console.log('Error: ', err))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
  
        </header>
      </div>
    );
  }
}

export default App;
