import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <News />
      </div>
    );
  }
}

export default App;