import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import { rebase } from './config/constants';

class Favs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saveNews: []
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
    }  
        
      render() {
          console.log(this.state.saveNews)
          let Favs = this.state.saveNews;
          
          let articleElements = Favs.map((favArticle, index) => {
            // let button = (this.state.loggedin !== '') ? <button className="modal-save-btn" onClick={this.fave.bind(this, index)}>Save</button> : null;
              return (
              <div className="modal-item" key={favArticle.title}>
                <a className="clickable-news-area" href={favArticle.url}>
                  <div className="modal-info-container">
                      <div ref={"NwTitle" + index} className="modal-title">{favArticle.title}</div>
                      <div ref={"NwSource" + index} className="modal-source">{favArticle.source}</div>
                      <div ref={"NwDesc" + index} className="modal-description">{favArticle.desc}</div>
                  </div>
                  <img ref={"NwImg" + index} className="modal-images" src={favArticle.img}/>
                </a>                  
                 {/* {button} */}
              </div>
          )});
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
                    </div>

                </div>
            )
          }
      }
  
  
  
  export default Favs;
  