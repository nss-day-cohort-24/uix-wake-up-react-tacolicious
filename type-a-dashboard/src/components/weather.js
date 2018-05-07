import React from 'react';
import {weatherKey} from './api_keys';
import WeekWeather from './weather_week';
import './weather.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    console.log("What props?", props);
    this.state = {
      error: null,
      isLoaded: true,
      days: []     
    };
  }

  getDays(props) {
    console.log("Dis is props", props)
    fetch(`https://api.darksky.net/forecast/${weatherKey}/${props.latitude},${props.longitude}?exclude=currently,minutely,hourly,alerts,flags`)
      .then(res => res.json())
      .then(
        (results) => {
          console.log("Faith No More", results.daily.data);
          this.setState(
            {
              isLoaded: true,
              days: results.daily.data
            }
          );
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
    const { error, isLoaded, days } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (!days) {
      this.getDays(this.props.location);
      return (
        <div className="col-sm-12 row weather">
          <WeekWeather days={this.state.days} />
        </div>
      );
    }
  }
};

export default Weather;


