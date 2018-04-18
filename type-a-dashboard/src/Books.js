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
              this.setState({
                isLoaded: true,
                items: result.docs
              });
          })

        }
       
        render(){
            const {  isLoaded, items } = this.state;
            let books = this.state.items;
            books.map((bookObj) => { 
                <div className="bookDiv">
                    {console.log(bookObj)}
                    <div>{bookObj.title}</div>
                    <div>{bookObj.author_name}</div>
                </div>
            })
            return <div></div>
        }
}

export default Books;