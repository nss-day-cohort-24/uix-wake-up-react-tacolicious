import React from 'react';
import Today_weather from './today_weather';
import Daily_weather from './daily_weather';
import './weather.css';

const Week_weather = (props) => {
	const results = props.days;
	const oneDay = results[0];
	const fourDay = results.slice(1, 5);

	let forecast = fourDay.map(day =>
			<Daily_weather highTemp={day.temperatureHigh} icon={day.icon}/>
		);

	return(
		<div className="col-sm-12 row week_weather">
			<Today_weather highTemp={oneDay.temperatureHigh} icon={oneDay.icon}/>
			{forecast}
		</div>
		);
	}
	

export default Week_weather;