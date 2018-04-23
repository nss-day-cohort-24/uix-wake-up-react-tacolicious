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
import SearchBar from './components/citysearch.js';
import 'bootstrap/dist/css/bootstrap.css';
import {googleKey} from './components/weather-key';


class App extends Component {
  
  performSearch = (query) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${googleKey}`)
    .then(res => res.json())
    .then(
      (results) => {
      let location = results.results[0].geometry.location;
      this.setState({
        latitude: location.lat,
        longitude: location.lng
      })
      },
        
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }


  constructor(props) {
    super(props);

    this.state = {
      loggedin : '',
      latitude: '25.2048493',
      longitude: '55.2707828'
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
          <SearchBar onSearch={this.performSearch}/>
          <Logbutton logState={this.changeState}/>
        <div id="footer-nav">
        <div id="menu-btns">
          <NewsModal loggedin={this.state.loggedin}/>
          <BooksModal loggedin={this.state.loggedin}/>
          <FavsModal loggedin={this.state.loggedin}/>
          <APICreds />
        </div>
        <Weather lat={this.state.latitude} lng={this.state.longitude}/>
      </div>
    </div>
    );
  }
}

export default App;