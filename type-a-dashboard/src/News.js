import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import { Modal } from 'react-bootstrap';



class News extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          error: null,
          isLoaded: false,
          articles: [],
          loggedin: false
      }
  }
      

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=0c424021c6c647518e1bc766da5dc1dd")
      .then(res => {
        return res.json()
      })
      .then(
        (result) => {
            console.log("res.json(): ", result.articles);
          this.setState({
            isLoaded: true,
            articles: result.articles
          });
          if (this.props.loggedin) {
            this.setState({
              loggedin: this.props.loggedin
            })
          }
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
  }

      
    render() {
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
          let button = (this.state.loggedin) ? <button className="modal-save-btn" onClick={saveClicked}>Save</button> : null;
          let articleElements = myHeadlines.map((article) => 

              <div className="modal-item" key={article.title}>
                  <div className="modal-info-container">
                      <div className="modal-title">{article.title}</div>
                      <div className="modal-source">{article.source.name}</div>
                      <div className="modal-description">{article.description}</div>
                  </div>
                  <img className="modal-images" src={article.urlToImage}/>
                  {button}
              </div>
          );

          articleElements.splice(10, articleElements.length - 10);
            
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
