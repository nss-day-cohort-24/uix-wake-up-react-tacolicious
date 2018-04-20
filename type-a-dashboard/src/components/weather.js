import React from 'react';
import {weatherKey} from './weather-key';
import Week_weather from './week_weather';
import './weather.css';

class Weather(props) extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
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
          console.log(this.state.days);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
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
          <Week_weather days={this.state.days} />
        </div>
      );
    }
  }
};

export default Weather;