import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import Search from './Search';
import { rebase } from './config/constants';

// import './modal.css';

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
          query: '',
          loggedin: '',
          saveBooks: []
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.syncing = this.syncing.bind(this);
      }

    fave(input){
        let object = {
            img : this.refs[`${`BkImg` + input}`].src,
            title : this.refs[`${`BkTitle` + input}`].textContent,
            author : this.refs[`${`BkAuthor` + input}`].textContent,
        }
        this.setState({
            saveBooks: this.state.saveBooks.concat([object])
        });
    }  

    syncing() {
        console.log("I AM SYNCING")
        this.ref = rebase.syncState(`${this.props.loggedin}/BOOKS`, {
            context: this,
            state: 'saveBooks',
            asArray: true,
          });
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
                items: result.docs,
                loggedin: this.props.logged
              });
              console.log("did mount", this.state.query);
          })
          this.syncing()
    }  
 
        render(){
            console.log(this.props.loggedin);
            console.log(this.state);
            const {  isLoaded, items } = this.state;
            let books = this.state.items;
            let bookElements = books.map((bookObj, i) => {
                let button = (this.state.loggedin !== '') ? <button className="modal-save-btn" onClick={this.fave.bind(this, i)}>Save</button> : null; 
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
                    <div className="modal-item">
                        <div className="modal-info-container">
                            <div ref={"BkTitle" + i} className="modal-title">{bookObj.title}</div>
                            <div ref={"BkAuthor" + i} className="modal-author">{bookObj.author_name}</div>
                        </div>
                        <img ref={"BkImg" + i} className="modal-images books-images" src={url} onError={(event)=>{event.target.src="http://demo.makitweb.com/broken_image/images/noimage.png"}} />
                        {button}
                    </div>
                </div>
            )})
            return ( <div>
                <Search onSubmit={this.onFormSubmit}/>
                {bookElements}
            </div>
            )}
}

export default Books;