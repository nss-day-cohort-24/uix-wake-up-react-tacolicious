import React, { Component } from 'react';
import './index.css';

class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

    componentDidMount() {
        fetch(`http://openlibrary.org/search.json?q='Harry+Potter&limit=10`, {
        }).then((res) => {
            console.log(res);
            let results = res;
            let books = results.json();
            console.log(books);
            })
    }

    render(){
        return <div></div>;
    }

}

export default Books;