import React, { Component } from 'react';
import './App.css';
import News from './News';
import Books from './Books';
// import Example from './API_Creds';
import ModalExample from './API_Creds';
import Logbutton from './components/Logbutton';
import Weather from './components/weather.js';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <News />
        {/* <Example /> */}
        <ModalExample />
        <Books />
        <Logbutton />
        <Weather />
      </div>
    );
  }
}

export default App;