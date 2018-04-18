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
        fetch(`http://openlibrary.org/search.json?q='Harry+Potter&limit=10`)
        .then(res => {
            return res.json()
          }).then((result) => {
              console.log(result);
              this.setState({
                isLoaded: true,
                items: result.docs
              });
              console.log(result.docs);
          })

        }
       
        render(){
            return <div></div>;
        }
}

export default Books;