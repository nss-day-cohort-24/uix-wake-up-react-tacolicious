import React, { Component } from 'react';
import './App.css';
import Logbutton from './components/Logbutton';
import Weather from './components/Weather';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div>
        <Logbutton />
        <Weather />
      </div>
    );
  }
}

export default App;
