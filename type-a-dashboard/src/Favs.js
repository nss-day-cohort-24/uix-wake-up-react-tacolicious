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
                        <h5 className="fav-headlines">Your Headlines</h5>
                    </div>

                    <div>
                        <h5 className="fav-books">Your Books</h5>
                    </div>

                </div>
            )
          }
      }
  
  
  
  export default Favs;
  