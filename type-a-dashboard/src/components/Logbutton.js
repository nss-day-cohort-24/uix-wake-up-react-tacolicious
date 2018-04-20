import React, { Component } from 'react';
import { logout } from '../config/helpers';
import { googleProvider, rebase }  from '../config/constants';
import './Logbutton.css';
import App from '../App.js';

class Logbutton extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loggedin: false
		}

		this.loginWithGoogle = this.loginWithGoogle.bind(this);
		this.saveUser = this.saveUser.bind(this);
		this.submitState = this.submitState.bind(this);
	}

	submitState(){
		const {loggedin} = this.state;
		const {logState} = this.props;
		logState(loggedin);
	}

	loginWithGoogle () {
		return rebase.initializedApp.auth().signInWithPopup(googleProvider)
		.then((data) => {
		  this.saveUser(data.user);
		  this.setState({
			  loggedin: true
		  })
		  return this.submitState();
		  console.log("2 - login with google", this.state);
		});
	}

	saveUser (user) {
		console.log("1 - save user", user);
		return rebase.initializedApp.database().ref().child(`wuusers/${user.uid}/info`)
			.update({
			email: user.email,
			uid: user.uid
			})
			.then(() => {
				console.log("3 - data", user)
			return user;
			})
		}

	render() {

		return(
			<div>
				<button onClick={this.loginWithGoogle} className="btn btn-primary log">Login</button>
        		<button onClick={logout}>Logout</button>
			</div>
		)
	}
}

export default Logbutton;
