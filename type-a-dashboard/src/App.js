import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import News from './News';
// import Books from './Books';
import Time from './Time';
import APICreds from './API_CredsModal';
import NewsModal from './NewsModal';
import BooksModal from './BooksModal';
import FavsModal from './FavsModal';
import Logbutton from './components/Logbutton';
import Weather from './components/weather.js';
import SearchBar from './components/searchbar.js';
import {googleKey} from './components/api_keys';
import { rebase } from './config/constants';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedin : '',
      location: {
        latitude: '25.2048493',
        longitude: '55.2707828'
      }
    };
    this.changeState = this.changeState.bind(this);
    this.updateLocal = this.updateLocal.bind(this);
  }
  
  performSearch = (query) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${googleKey}`)
    .then(res => res.json())
    .then(
      (results) => {
        let location = results.results[0].geometry.location;
        this.setState(
          {
            location: {
              latitude: location.lat,
              longitude: location.lng
            }
          }
        );
        this.updateLocal();        
      },
        
      (error) => {
        this.setState(
          {
            isLoaded: true,
            error: error
          }
        );
      }
    )
  }
  
  changeState(input) {
    this.setState({ loggedin : input })
  }

  updateLocal(){
    if (this.state.loggedin !== ''){
        return rebase.initializedApp.database().ref().child(`${this.state.loggedin}/location`)
        .update({
          latitude: this.state.latitude,
          longitude: this.state.longitude
        }
      )
    }
  }

  render() {
    return (
      <div id="features" className="col-12">
        <Time />
        <SearchBar onSearch={this.performSearch}/>
        <Logbutton logState={this.changeState} />
        <div id="footer-nav">
          <div id="menu-btns">
            <NewsModal loggedin={this.state.loggedin} />
            <BooksModal loggedin={this.state.loggedin} />
            <FavsModal loggedin={this.state.loggedin} />
            <APICreds />
          </div>
          <Weather location={this.state.location}/>
        </div>
      </div>
    );
  }
}

export default App;