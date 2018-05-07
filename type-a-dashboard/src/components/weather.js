import React from 'react';
import {weatherKey} from './api_keys';
import WeekWeather from './weather_week';
import './weather.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      error: null,
      isLoaded: false,
      days: null      
    };
  }

  getDays = () => {
    console.log(this.props.lat);
    console.log(this.props.lng);

    fetch(`https://api.darksky.net/forecast/${weatherKey}/${this.props.lat},${this.props.lng}?exclude=currently,minutely,hourly,alerts,flags`)
      .then(res => res.json())
      .then(
        (results) => {
          console.log(results.daily.data);
          this.setState({
            days: results.daily.data
          });
        },

        (error) => {
          this.setState({
            isLoaded: false,
            error: error
          });
        }
      )
  }

  render() {
    const { error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="col-sm-12 row weather">
          <WeekWeather days={this.state.days} />
        </div>
      );
    }
  }
};

export default Weather;