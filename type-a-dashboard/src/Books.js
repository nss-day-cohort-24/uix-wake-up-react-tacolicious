import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './Search';

class Books extends Component {
    
    onFormSubmit(query) {
        this.setState({ query: query })
        console.log("query", this.state.query);
        this.componentDidMount();
    }

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          query: 'Harry Potter'
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
      }

    componentDidMount() {
        console.log("update", this.state.query)
        console.log(`http://openlibrary.org/search.json?q='${this.state.query}'&limit=10`)
        fetch(`http://openlibrary.org/search.json?q='${this.state.query}'&limit=10`)
        .then(res => {
            return res.json()
          }).then((result) => {
              console.log(result);
              this.setState({
                isLoaded: true,
                items: result.docs
              });
              console.log("did mount", this.state.query);
          })
    }  
 
        render(){
            const {  isLoaded, items } = this.state;
            let books = this.state.items;
            let bookElements = books.map((bookObj, i) => { 
                let url = '';
                if (bookObj.hasOwnProperty('cover_i')) {
                    url = `http://covers.openlibrary.org/b/id/${bookObj.cover_i}-M.jpg?default=false`
                } else if (bookObj.hasOwnProperty('id_goodreads')) {
                    url = `http://covers.openlibrary.org/b/goodreads/${bookObj.id_goodreads[0]}-S.jpg?default=false`
                } else if (bookObj.hasOwnProperty('edition_key') && bookObj.edition_key.length >= 0) {
                    url = `http://covers.openlibrary.org/b/olid/${bookObj.edition_key[0]}-S.jpg?default=false`
                } 
                return (
                <div key={i}>
                    <div className="bookInformation">
                        <img src={url} onError={(event)=>{event.target.src="http://demo.makitweb.com/broken_image/images/noimage.png"}} />
                        <div className="bookTitle">{bookObj.title}</div>
                        <div className="bookAuthor">{bookObj.author_name}</div>
                    </div>
                    <button>Save</button>
                </div>
            )})
            return ( <div>
                <Search onSubmit={this.onFormSubmit}/>
                {bookElements}
            </div>
            )}
}

export default Books;