import React from 'react';
import weatherKey from './weather-key';
import './weather.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      // items: []
    };
  }

  componentDidMount() {
    fetch(`https://api.darksky.net/forecast/${weatherKey}/37.8267,-122.4233?exclude=currently,minutely,hourly,alerts,flags`, {mode : 'no-cors'})
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.daily)
          this.setState({
            isLoaded: true,
            days: result.daily.data
          });
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
          <div className="col-sm-4 today_temp">
            81°
          </div>
          <div className="col-sm-8 row week_temp">
            <div className="col-sm daily_temp">Tue</div>
            <div className="col-sm daily_temp">Wed</div>
            <div className="col-sm daily_temp">Thu</div>
            <div className="col-sm daily_temp daily_temp_last">Fri</div>
          </div>
        </div>
      );
    }
  }
};

export default Weather;