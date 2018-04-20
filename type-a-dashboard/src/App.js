import React, { Component } from 'react';
import './App.css';
// import News from './News';
// import Books from './Books';
import APICreds from './API_CredsModal';
import NewsModal from './NewsModal';
import BooksModal from './BooksModal';
import FavsModal from './FavsModal';
import Logbutton from './components/Logbutton';
import Weather from './components/weather.js';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
              <Logbutton />
        <div id="footer-nav">  
            <div id="menu-btns">
              <NewsModal />
              <BooksModal />
              <FavsModal />
              <APICreds />
            </div>
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;