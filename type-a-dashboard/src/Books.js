import React, { Component } from 'react';
import './index.css';
// import './modal.css';

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
                let url = '';
                console.log(bookObj);
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
                {bookElements}

            </div>
            )}
}

export default Books;