import React from 'react';
import './weather.css';

const Today_weather = (props) => {
	return(
		<div className="col-sm-4 row">
			<div className="col-sm-6 today_temp">
	            {props.highTemp}
	         </div>
	        <div className="col-sm-6 today_icon">
	            {props.icon}
		    </div>
	    </div>
		);
}

export default Today_weather;