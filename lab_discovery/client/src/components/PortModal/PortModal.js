import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input } from 'reactstrap';

class PortModal extends Component {
    state = {
        modal : false,
        
    }
    
    toggle = () => this.setState ({
        modal : !this.state.modal
    })
  
    closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        
    render () {
        
        return (
            <div>
                <Button color="danger" onClick={ () => {this.toggle(); this.props.reservePort()}} >View</Button>
                
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle} close={this.closeBtn}>Port Information</ModalHeader>
                    <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label for="SwitchName" sm={4}>Switch Name</Label>
                            <Col sm={8}>
                                <Input type="text" name="SwitchNameInput" id="SwitchName" placeholder="L1-DCX-126AJ-SW01_VS50" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="Port" sm={4}>Port</Label>
                            <Col sm={8}>
                                <Input type="text" name="PortInput" id="Port" placeholder="B01_04" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="Status" sm={4}>Status</Label>
                            <Col sm={8}>
                                <Input type="text" name="StatusInput" id="Status" placeholder="RITM0399526" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="System_Port" sm={4}>System and port</Label>
                            <Col sm={8}>
                                <Input type="text" name="System_PortInput" id="System_Port" placeholder="ODCN1_01_07" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="SystemWWN" sm={4}>Port wwn</Label>
                            <Col sm={8}>
                                <Input type="text" name="SystemWWNInput" id="SystemWWN" placeholder="50:00:09:73:A0:05:E8:07"/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="AirRackName" sm={4}>Air Rack Name</Label>
                            <Col sm={8}>
                                <Input type="text" name="AirRackNameInput" id="AirRackName" placeholder="126AE_AIR/62AG_MDA" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="AirRackPort" sm={4}>Air Rack Port</Label>
                            <Col sm={8}>
                                <Input type="text" name="AirRackPortInput" id="AirRackPort" placeholder="C_P10" />
                            </Col>
                        </FormGroup>

                         
                        {/* <Button>Sign in</Button> */}
                        </Form>

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