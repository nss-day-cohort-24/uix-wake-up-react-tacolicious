import React, { Component } from 'react';
// import Books from './Books';

class Search extends Component {

constructor(props) {
    super(props);

    this.state = {
        query: ''
    }

    this.submitQuery = this.submitQuery.bind(this);
}

 handleInputChange = (event) => {
   this.setState({
     query: event.target.value
   })
 }

 submitQuery (e) {
    e.preventDefault();
    const {query} = this.state;
    const {onSubmit} = this.props;
    onSubmit(query);
 }

 componentDidMount() {
     console.log("component did mount");
 }

 render() {
   return (
     <form onSubmit={this.submitQuery}>
       <input
         placeholder="Search for books..."
         ref={input => this.search = input}
         value={this.state.query}
         onChange={this.handleInputChange}
       />
     </form>
   )
 }
}

export default Search
