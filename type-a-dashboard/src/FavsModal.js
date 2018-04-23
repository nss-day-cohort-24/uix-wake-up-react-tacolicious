import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Favs from './Favs';

class FavsModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        loggedin: ''
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal,
        loggedin: this.props.loggedin
      });
    }
  
    render() {
      return (
        <div>
          <Button color="danger" id="favorites-button" onClick={this.toggle}>Favorites</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
            <ModalHeader toggle={this.toggle}>Favorites</ModalHeader>
  
            <ModalBody>
                <Favs loggedin={this.state.loggedin}/>
            </ModalBody>
            
            <ModalFooter>
              {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
              <Button color="secondary" className="modal-close-button" id="apis-button" onClick={this.toggle}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default FavsModal;
  