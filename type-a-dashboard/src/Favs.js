import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';




class Favs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

        
      render() {
          
            return (
                <div>

                    <div>
                        <h5 className="fav-headlines-header">Your Headlines</h5>
                        <div className="fav-headlines-items"></div>
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
  