import React from 'react';
// import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';

import { Modal } from 'react-bootstrap';
import { rebase } from './config/constants';



class News extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          error: null,
          isLoaded: false,
          articles: [],
          loggedin: '',
          saveNews: []
      }
      this.syncing = this.syncing.bind(this);
  }
      

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=0c424021c6c647518e1bc766da5dc1dd")
      .then(res => {
        return res.json()
      })
      .then(
        (result) => {
            console.log("res.json(): ", result.articles);
            console.log("IS THIS WORKING?");
          this.setState({
            isLoaded: true,
            articles: result.articles,
            loggedin: this.props.loggedin
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
        this.syncing();
  }

  fave(input){
    console.log("states", this.state.loggedin)
    let object = {
        img : this.refs[`${`NwImg` + input}`].src,
        title : this.refs[`${`NwTitle` + input}`].textContent,
        source : this.refs[`${`NwSource` + input}`].textContent,
        desc : this.refs[`${`NwDesc` + input}`].textContent,
        url: this.refs[`${`nWURL`}` + input].href
    }
    this.setState({
        saveNews: this.state.saveNews.concat([object])
    });
}  

  syncing() {
      console.log("I AM SYNCING")
      this.ref = rebase.syncState(`${this.props.loggedin}/NEWS`, {
          context: this,
          state: 'saveNews',
          asArray: true,
        });
  }  

      
    render() {
      console.log("STATE RENDER", this.state)
      function saveClicked() {
        console.log("save button clicked.");
      }
        const { error, isLoaded, articles } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {

          let myHeadlines = this.state.articles;

          console.log('myHeadlines',myHeadlines);
          let articleElements = myHeadlines.map((article, index) => {
            let button = (this.state.loggedin !== '') ? <button className="modal-save-btn" onClick={this.fave.bind(this, index)}>Save</button> : null;
              return (
              <div className="modal-item" key={article.title}>

                <a ref={"nWURL" + index} className="clickable-news-area" href={article.url}>
                  <div className="modal-info-container">
                      <div ref={"NwTitle" + index} className="modal-title">{article.title}</div>
                      <div ref={"NwSource" + index} className="modal-source">{article.source.name}</div>
                      <div ref={"NwDesc" + index} className="modal-description">{article.description}</div>
                  </div>
                  <img ref={"NwImg" + index} className="modal-images" src={article.urlToImage}/>
                </a>                  
                 {button}
              </div>
          )});

          articleElements.splice(10, articleElements.length - 10);
          // console.log('article',article);
            
          return (
              <div>
                  <div id="modal-container">
                      {articleElements}
                  </div>
              </div>
          );
        }
    }
}


export default News;
