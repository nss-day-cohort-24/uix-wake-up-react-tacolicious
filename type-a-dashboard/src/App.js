import React, { Component } from 'react';
import './App.css';
import News from './News';
import Books from './Books';
// import Example from './API_Creds';
import APICreds from './API_CredsModal';
import NewsModal from './NewsModal';
import BooksModal from './BooksModal';
import Logbutton from './components/Logbutton';
import Weather from './components/weather.js';
import SearchBar from './components/citysearch.js';
import 'bootstrap/dist/css/bootstrap.css';
import {googleKey} from './components/weather-key';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      latitude: '25.2048493',
      longitude: '55.2707828',
    };
  }

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

  render() {
    return (
      <div className="App">
        {/* <News /> */}
        {/*<div id="menu-btns">
          <NewsModal />
          <BooksModal />
          <APICreds />
          <Books />
          <Logbutton />
        </div>*/}
        <SearchBar onSearch={this.performSearch}/>
        <Weather lat={this.state.latitude} lng={this.state.longitude}/>
      </div>
    );
  }
}

export default App;