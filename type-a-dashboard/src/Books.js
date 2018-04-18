import React, { Component } from 'react';
import './index.css';
import XMLParser from 'react-xml-parser';

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
        const url = `https://www.goodreads.com/search.xml?key=Fnqk8bj6Up42xHAAc3anFg&q='Harry Potter`;

        fetch(url, {
            mode: 'no-cors'
        }).then(res => res.text())
        .then((result) => {
            console.log(result);
            const xml = new XMLParser().parseFromString(result);
            console.log(xml);
                this.setState({
                isLoaded: true,
                items: result.items
            });
        });
    }
    render(){
        return <div></div>;
    }
}

export default Books;