import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';
import './Search.css';

export default class Search extends React.Component {
   
    SearchPort = () => {
        this.state = {
            id: this.props.id,
            SwitchName: this.props.SwitchName,
            Port: this.props.Port,
            Status: this.props.Status,
            SystemName_Port: this.props.SystemName_Port,
            SystemWWN: this.props.SystemWWN,
            AirRackName: this.props.AirRackName,
            AirRackPort: this.props.AirRackPort,
            ports:[]
        }
        
        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        modal : false,
    }
    
    toggle = () => this.setState ({
        modal : !this.state.modal
    })
  
    closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    
    handleChange (e) {
        this.setState(
             {[e.target.name]: e.target.value }
        )
     } 
    
    update =   id => {
        const portData = {
            id : this.props.id,
            SwitchName : this.props.SwitchName,
            Port : this.props.Port,
            Status : this.state.StatusInput,
            SystemName_Port : this.state.System_PortInput,
            SystemWWN : this.state.SystemWWNInput,
            AirRackName : this.state.AirRackNameInput,
            AirRackPort : this.state.AirRackPortInput

        }
         // const newPortData = JSON.stringify(portData)
         // console.log ("This is is portData  " + newPortData)
        const url = '/api/ports/'
        
        Axios.put(url+this.props.id,  portData )
            .then((result) => {
                console.log ("Data ", result)
                console.log('props ', this.props)
                this.props.changeTheFabricSearch(result.data.allPorts)

            })
    }

    render() {
        console.log('the props!!! ', this.props)
        return (
        <div>
            <a className="editBtn" onClick={ () => {this.toggle(); this.SearchPort()}} >Edit</a>
        
            <Modal className= "modalSearch" isOpen={this.state.modal} toggle={this.toggle} >
                <ModalHeader  toggle={this.toggle} close={this.closeBtn}>Port Information</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label for="SwitchName" sm={4}>Switch Name</Label>
                            <Col sm={8}>
                                <Input 
                                    type="text" 
                                    name="SwitchNameInput" 
                                    id="SwitchName" 
                                    readOnly value={ this.props.SwitchName}
                                    
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="Port" sm={4}>Port</Label>
                            <Col sm={8}>
                                <Input 
                                    type= "text" 
                                    name= "PortInput" 
                                    id= "Port"
                                    readOnly value= { this.props.Port }
                                    
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="Status" sm={4}>Status</Label>
                            <Col sm={8}>
                                <Input 
                                    type= "text" 
                                    name= "StatusInput" 
                                    id= "Status" 
                                    defaultValue= { this.props.Status }
                                    onChange={ this.handleChange }
                                    
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="System_Port" sm={4}>System and port</Label>
                            <Col sm={8}>
                                <Input 
                                    type= "text" 
                                    name= "System_PortInput" 
                                    id= "System_Port" 
                                    defaultValue = { this.props.SystemName_Port }
                                    onChange = { this.handleChange }
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="SystemWWN" sm={4}>Port wwn</Label>
                            <Col sm={8}>
                                <Input 
                                    type= "text" 
                                    name= "SystemWWNInput" 
                                    id= "SystemWWN"
                                    defaultValue = { this.props.SystemWWN }
                                    onChange = { this.handleChange }
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="AirRackName" sm={4}>Air Rack Name</Label>
                            <Col sm={8}>
                                <Input 
                                    type= "text" 
                                    name= "AirRackNameInput" 
                                    id= "AirRackName"
                                    defaultValue = { this.props.AirRackName }
                                    onChange = { this.handleChange }
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="AirRackPort" sm={4}>Air Rack Port</Label>
                            <Col sm={8}>
                                <Input 
                                    type= "text" 
                                    name= "AirRackPortInput" 
                                    id= "AirRackPort"
                                    defaultValue = { this.props.AirRackPort }
                                    onChange = { this.handleChange }
                                />
                            </Col>
                        </FormGroup>
                    </Form>

                </ModalBody>
                <ModalFooter>
                    <Button color="warning" onClick={ () => {this.toggle(); this.update(this._id);}}>Save </Button>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )}
}