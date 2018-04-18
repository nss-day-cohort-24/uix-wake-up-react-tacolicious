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
            let bookElements = books.map((bookObj, i) => { 
                console.log(bookObj);
                return (
                <div key={i}>
                    <div className="bookInformation">
                        <div className="bookTitle">{bookObj.title}</div>
                        <div className="bookAuthor">{bookObj.author_name}</div>
                    </div>
                    <button>Save</button>
                </div>
            )})
            return ( <div>
                {bookElements}

            </div>
            )}
}

export default Books;