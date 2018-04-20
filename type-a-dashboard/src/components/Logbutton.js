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
	}

	submitState(){
		const {loggedin} = this.state;
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

	loginWithGoogle () {
		return rebase.initializedApp.auth().signInWithPopup(googleProvider)
		.then((data) => {
		  this.saveUser(data.user);
		});
	}

	saveUser (user) {
		return rebase.initializedApp.database().ref().child(`wuusers/${user.uid}/info`)
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

		return(
			<div>
				<button onClick={this.loginWithGoogle} className="btn btn-primary log">Login</button>
        		<button onClick={this.logout}>Logout</button>
			</div>
		)
	}
}

export default Logbutton;
