import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';



class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            articles: []
        }
    }
        

    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=0c424021c6c647518e1bc766da5dc1dd")
          .then(res => {
            return res.json()
          }
        )
          .then(
            (result) => {
                console.log("res.json(): ", result.articles);
              this.setState({
                isLoaded: true,
                articles: result.articles
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
            }
          )
        }

        render() {
            const { error, isLoaded, articles } = this.state;
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else {



                let myHeadlines = this.state.articles;
                console.log('myHeadlines',myHeadlines);
                let articleElements = myHeadlines.map((article) => 

                    <div className="news-item">
                        <img className="news-images" src={article.urlToImage}/>
                        <div className="news-info-container">
                            <div className="news-title">{article.title}</div>
                            <div className="news-source">{article.source.name}</div>
                            <div className="news-description">{article.description}</div>
                        </div>
                        <button class="news-save-btn">Save</button>
                    </div>
                );

                articleElements.splice(10, articleElements.length - 10);
                
                return (
                    <div>
                        <h2>Today's Headlines</h2>
                        <div id="news-container">
                            {articleElements}
                        </div>
                        {/* <button>Save</button> */}
                    </div>
                );

            }
          }
        }


export default News;
