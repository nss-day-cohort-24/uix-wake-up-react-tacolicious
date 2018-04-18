import React, { Component } from 'react';
import './App.css';
import { loginWithGoogle, logout } from './config/helpers';
import { Button } from 'reactstrap';
import Books from './Books';

class App extends Component {
  render() {
    return (
      <div>
        <header>
        </header>
        <Books />
        <Button onClick={loginWithGoogle} color="primary">Login</Button>
        <Button onClick={logout}>Logout</Button>
      </div>
    );
  }
}

export default App;
