import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PortModal extends Component {
    state = {
        modal : false
    }
  
  toggle = () => this.setState ({
      modal : !this.state.modal
  })
  
  closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

  render () {
      return (
        <div>
            <Button color="danger" onClick={ () => {this.toggle(); this.props.reservePort()}}>View</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle} close={this.closeBtn}>Modal title</ModalHeader>
            <ModalBody>
                

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Reserve</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
            );}
}

export default PortModal;