import React, { Component } from 'react';
import SimpleCard from './components/UserCard';
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
          {this.state.users.map(user => <SimpleCard key={user.id} userData={user}/>)}
        </header>
      </div>
    );
  }
}

export default App;
