/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// // import '//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css'
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
// // import { Modal, Button } from 'react-bootstrap';



// class Example extends React.Component {
//     constructor(props, context) {
//       super(props, context);
  
//       this.handleShow = this.handleShow.bind(this);
//       this.handleClose = this.handleClose.bind(this);
  
//       this.state = {
//         show: false
//       };
//     }
  
//     handleClose() {
//       this.setState({ show: false });
//     }
  
//     handleShow() {
//       this.setState({ show: true });
//     }
    
//     render() {
//         console.log("this.state", this.state)
  
//       return (
//         <div className="static-modal">
//           <p>Click to get the full Modal experience!</p>
  
//           <Button color="danger" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
//             Launch demo modal
//           </Button>
  
//           <Modal bsSize="large" show={this.state.show} onHide={this.handleClose}>
//             <ModalHeader closeButton>
//               {/* <ModalTitle>Modal heading</ModalTitle> */}
//             </ModalHeader>
//             <ModalBody>
//               <h4>Text in a modal</h4>
//             </ModalBody>
//             <ModalFooter>
//               <Button onClick={this.handleClose}>Close</Button>
//             </ModalFooter>
//           </Modal>
//         </div>
//       );
//     }
//   }
  
//   export default Example;



// import React from 'react';
// import { Button } from 'reactstrap';

// export default (props) => {
//   return (
//     <Button color="danger">Danger!</Button>
//   );
// };

// export default Example