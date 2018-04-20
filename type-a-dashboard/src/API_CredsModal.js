/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class APICreds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" className="modal-close-button" id="apis-button" onClick={this.toggle}>APIs</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>APIs</ModalHeader>

          <ModalBody>
            <ul>
              <li><a href="https://darksky.net/">Dark Sky</a></li>
              <li><a href="https://openlibrary.org/">Open Library</a></li>
              <li><a href="https://newsapi.org/">News API</a></li>
              <li><a href="flickr.com/services/api/">Google Maps</a></li>
            </ul>
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

export default APICreds;
