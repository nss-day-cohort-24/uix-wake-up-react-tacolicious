import React, { Component } from 'react';
import './App.css';
import { loginWithGoogle, saveUser } from './config/helpers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <button onClick={loginWithGoogle} className="btn">Login</button>
      </div>
    );
  }
}

export default App;
