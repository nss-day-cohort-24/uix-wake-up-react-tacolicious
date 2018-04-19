import React from 'react';
import './weather.css';

const Daily_weather = (props) => {
	return(
		<div className="col-sm daily_weather">
			<div className="daily_weather_day">Tue</div>
			<div className="daily_weather_icon">{props.icon}</div>
			<div className="daily_weather_temp">{props.highTemp}</div>
		</div>
		)
}

export default Daily_weather;