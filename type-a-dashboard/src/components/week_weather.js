import React from 'react';
import TodayWeather from './today_weather';
import DailyWeather from './daily_weather';
import './weather.css';

const WeekWeather = (props) => {
	const results = props.days;
	const oneDay = results[0];
	const fourDay = results.slice(1, 5);

	let forecast = fourDay.map(day =>
			<DailyWeather highTemp={day.temperatureHigh} icon={day.icon} />
		);

	return(
		<div className="col-sm-12 row week_weather">
			<TodayWeather highTemp={oneDay.temperatureHigh} icon={oneDay.icon} />
			{forecast}
		</div>
		);
	}
	

export default WeekWeather;