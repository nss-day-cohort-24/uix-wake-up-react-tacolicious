/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import News from './News';


class NewsModal extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>News</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
          <ModalHeader toggle={this.toggle}>Today's Headlines</ModalHeader>

          <ModalBody>
              <News loggedin={this.state.loggedin}/>
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

export default NewsModal;
