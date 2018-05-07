import React from 'react';
import {googleKey} from './api_keys';
import './searchbar.css';

export default class SearchBar extends React.Component {
	state = {
		searchText: ''
		}

	onSearchChange = e => {
		this.setState({ searchText: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.state.searchText);
		e.currentTarget.reset();
	}

	render () {
		return(
			<form onSubmit={this.handleSubmit}>
				<input type='text' placeholder='Search by City' onChange={this.onSearchChange} ></input>
			</form>
		);
	}
}