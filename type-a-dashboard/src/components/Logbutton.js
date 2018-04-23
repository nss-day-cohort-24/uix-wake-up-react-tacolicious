import React, { Component } from 'react';
import { googleProvider, rebase }  from '../config/constants';
import './Logbutton.css';
import App from '../App.js';

class Logbutton extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loggedin: '',
		}

		this.logout = this.logout.bind(this);
		this.loginWithGoogle = this.loginWithGoogle.bind(this);
		this.saveUser = this.saveUser.bind(this);
		this.submitState = this.submitState.bind(this);
		this.loginToLogout = this.loginToLogout.bind(this);
	}

	submitState(){
		const {loggedin} = this.state;
		console.log(this.props);
		const {logState} = this.props;
		logState(loggedin);
	}

	logout () {
		console.log("attempted to log out");
		return rebase.initializedApp.auth().signOut()
		.then(() => {
			this.setState({
				loggedin: ''
			});
			return this.submitState();
		})
	}

	// consoleTest() {
	// 	console.log("this is a test");
	// }

	loginWithGoogle () {
		this.loginToLogout();
		return rebase.initializedApp.auth().signInWithPopup(googleProvider)
		.then((data) => {
			// console.log("test2");
			this.saveUser(data.user);
		});
	}
	
	
	loginToLogout() {
		console.log("login button swap called");

		
	}
	
	
	// function consoleTest() {
		
		// }
		
		saveUser (user) {
			return rebase.initializedApp.database().ref().child(`${user.uid}/info`)
			.update({
				email: user.email,
				uid: user.uid
			})
			.then(() => {
				this.setState({
					loggedin: user.uid
				});
				return this.submitState();
			})
		}
		
		render() {
			
			// this.consoleTest();		




		return(
			<div>
				<button onClick={this.loginWithGoogle} className="btn btn-primary log" id="login-button">Login</button>
        		<button onClick={this.logout} id="logout-button">Logout</button>
			</div>
		)
	}
}

export default Logbutton;
