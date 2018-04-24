import React from 'react';
import {weatherKey} from './weather-key';
import WeekWeather from './week_weather';
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
    this.getDays = this.getDays.bind(this);
  }

  componentDidMount(){
    this.getDays()
  }

  getDays = () => {
    console.log(this.props.lat);
    console.log(this.props.lng);

    fetch(`https://api.darksky.net/forecast/${weatherKey}/${this.props.lat},${this.props.lng}?exclude=currently,minutely,hourly,alerts,flags`)
      .then(res => res.json())
      .then(
        (results) => {
          // return results.daily.data;
          this.setState({
            days: results.daily.data,
            isLoaded: true
          })
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
    // this.getDays()
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