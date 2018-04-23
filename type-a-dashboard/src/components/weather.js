import React from 'react';
import {weatherKey} from './weather-key';
import Week_weather from './week_weather';
import './weather.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.lat);
    this.state = {
      error: null,
      isLoaded: false,
      days: []
    };
  }

  componentDidMount() {
    fetch(`https://api.darksky.net/forecast/${weatherKey}/${this.props.lat},${this.props.lng}?exclude=currently,minutely,hourly,alerts,flags`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            days: result.daily.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  checkAgain = () => {
    fetch(`https://api.darksky.net/forecast/${weatherKey}/${this.props.lat},${this.props.lng}?exclude=currently,minutely,hourly,alerts,flags`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            days: result.daily.data
          });
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
    this.checkAgain();
    const { error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="col-sm-12 row weather">
          <Week_weather days={this.state.days} />
        </div>
      );
    }
  }
};

export default Weather;