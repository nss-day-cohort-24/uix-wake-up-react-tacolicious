import React from 'react';
import './weather.css';
import Skycons from 'react-skycons';

const Daily_weather = (props) => {
	var str = props.icon;
	var under = str.replace(/-/g, "_");
	var fixed =under.toUpperCase();

	return(
		<div className="col-sm daily_weather">
			<div className="daily_weather_day">Tue</div>
			<div className="daily_weather_icon">
			<Skycons color='white' icon={fixed} autoplay={false}/>
			</div>
			<div className="daily_weather_temp">{props.highTemp}</div>
		</div>
		);
}

export default Daily_weather;