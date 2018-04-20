import React, { Component } from 'react';
import { loginWithGoogle, logout } from '../config/helpers';
import './Logbutton.css';

class Logbutton extends React.Component {
	render() {
		return(
			<div>
				<button onClick={loginWithGoogle} className="btn btn-primary log" id="login-button">Login</button>
        		<button onClick={logout}>Logout</button>
			</div>
		)
	}
}

export default Logbutton;
