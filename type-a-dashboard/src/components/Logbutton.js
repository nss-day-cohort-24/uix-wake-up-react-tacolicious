import React, { Component } from 'react';
import { logout } from '../config/helpers';
import { googleProvider, rebase }  from '../config/constants';
import './Logbutton.css';

class Logbutton extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loggedin: false
		}

		this.loginWithGoogle = this.loginWithGoogle.bind(this);
		this.saveUser = this.saveUser.bind(this);
	}


	loginWithGoogle () {
		return rebase.initializedApp.auth().signInWithPopup(googleProvider)
		.then((data) => {
		  this.saveUser(data.user);
		});
	}

	saveUser (user) {
		console.log("save user", user);
		return rebase.initializedApp.database().ref().child(`wuusers/${user.uid}/info`)
			.set({
			email: user.email,
			uid: user.uid
			})
			.then(() => {
			
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
