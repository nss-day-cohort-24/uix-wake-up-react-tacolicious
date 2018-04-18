import React from 'react';

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
    fetch("https://api.darksky.net/forecast/Dark Sky API key/37.8267,-122.4233?exclude=currently,minutely,hourly,alerts,flags")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.daily)
          this.setState({
            isLoaded: true,
            days: result.daily
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
        <div>
          Got it!
        </div>
      );
    }
  }
};

export default Weather;