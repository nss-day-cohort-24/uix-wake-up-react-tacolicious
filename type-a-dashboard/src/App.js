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

  constructor(props) {
    super(props);

    this.state = {
      loggedin : '',
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(input) {
    this.setState({ loggedin : input })
  }

  render() {
    console.log("STATE APP", this.state);
    return (
      <div className="App">
              <Logbutton />
        <div id="footer-nav">  
            {/* <div id="menu-btns">
              <NewsModal />
              <BooksModal />
              <FavsModal />
              <APICreds />
            </div> */}
        {/* <News /> */}
        <div id="menu-btns">
          <NewsModal loggedin={this.state.loggedin}/>
          <BooksModal loggedin={this.state.loggedin}/>
          <APICreds />
          {/* <Books /> */}
          <Logbutton logState={this.changeState}/>
        </div>
          <Weather />
      </div>
    </div>
    );
  }
}

export default App;