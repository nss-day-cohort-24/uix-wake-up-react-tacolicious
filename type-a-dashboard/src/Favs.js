import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import { rebase } from './config/constants';

class Favs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saveNews: [],
            saveBooks: []
        }

        this.syncing = this.syncing.bind(this);   
    }

    componentDidMount() {
        this.syncing();
    }

    syncing() {
        console.log("I AM SYNCING")
        this.ref = rebase.syncState(`${this.props.loggedin}/NEWS`, {
            context: this,
            state: 'saveNews',
            asArray: true
          });
          this.ref = rebase.syncState(`${this.props.loggedin}/BOOKS`, {
            context: this,
            state: 'saveBooks',
            asArray: true
          });  
    }
    
    removeNews (index) {
        var newList = this.state.saveNews;
        newList.splice(index, 1);
        this.setState({
            saveNews: newList
        });
    }

    removeBooks (index) {
        var newList2 = this.state.saveBooks;
        newList2.splice(index, 1);
        this.setState({
            saveBooks: newList2
        });   
    }
        
      render() {
          console.log(this.state.saveNews)
          let newsFavs = this.state.saveNews;
          let bookFavs = this.state.saveBooks;
          
          let articleElements = newsFavs.map((favArticle, index) => {
            let deleteButton = (this.state.loggedin !== '') ? <button className="modal-delete-btn" onClick={this.removeNews.bind(this, index)}>Delete</button> : null;
              return (
              <div className="modal-item" key={favArticle.title}>
                <a className="clickable-news-area" href={favArticle.url}>
                  <div className="modal-info-container">
                      <div ref={"NwTitle" + index} className="modal-title">{favArticle.title}</div>
                      <div ref={"NwSource" + index} className="modal-source">{favArticle.source}</div>
                      <div ref={"NwDesc" + index} className="modal-description">{favArticle.desc}</div>
                  </div>
                  <img ref={"NwImg" + index} className="modal-images" src={favArticle.img} alt="" />
                </a>                  
                 {deleteButton}
              </div>
          )});

          let bookElements = bookFavs.map((favBook, i) => {
            let button = (this.state.loggedin !== '') ? <button className="modal-delete-btn" onClick={this.removeBooks.bind(this, i)}>Delete</button> : null; 

            return (
            <div key={i}>
                <div className="modal-item">
                    <div className="modal-info-container">
                        <div className="modal-title">{favBook.title}</div>
                        <div className="modal-author">{favBook.author}</div>
                    </div>
                    <img className="modal-images books-images" src={favBook.img} alt="" onError={(event)=>{event.target.src="http://demo.makitweb.com/broken_image/images/noimage.png"}} />
                    {button}
                </div>
            </div>
        )})
            return (
                <div>

                    <div>
                        <h5 className="fav-headlines-header">Your Headlines</h5>
                        <div className="fav-headlines-items"></div>
                        {articleElements}
                    </div>

                    <div>
                        <h5 className="fav-books-header">Your Books</h5>
                        <div className="fav-books-items"></div>
                        {bookElements}
                    </div>

                </div>
            )
          }
      }
  
  
  
  export default Favs;
  