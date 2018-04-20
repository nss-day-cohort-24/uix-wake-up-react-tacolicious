import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Books from './Books';



class BooksModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        loggedin: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
      if (this.props.loggedin) {
        this.setState({
          loggedin: this.props.loggedin
        })
      }
    }
  
    render() {
      return (
        <div>
          <Button color="danger" onClick={this.toggle}>Books</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
            <ModalHeader toggle={this.toggle}>Books</ModalHeader>
  
            <ModalBody>
                <Books loggedin={this.state.loggedin}/>
            </ModalBody>
            
            <ModalFooter>
              {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
              <Button color="secondary" onClick={this.toggle}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default BooksModal;
  