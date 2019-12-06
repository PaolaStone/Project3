import React from 'react'
// import styled from 'styled-components'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input } from 'reactstrap';
export default class Search extends React.Component {
   
    SearchPort = () => {
        
        const SearchObject = {
            SwitchName: this.props.SwitchName,
            Port: this.props.Port,
            Status: this.props.Status,
            SystemName_Port: this.props.SystemName_Port,
            SystemWWN: this.props.SystemWWN,
            AirRackName: this.props.AirRackName,
            AirRackPort: this.props.AirRackPort
        }
        console.log("this is SearchObject " + JSON.stringify(SearchObject))
    }

    state = {
        modal : false,
    }
    
    toggle = () => this.setState ({
        modal : !this.state.modal
    })
  
    closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    
    constructor() {
        super();
        this.state = {
            SwitchName: "",
            Port: "",
            Status: "",
            SystemName_Port: "",
            SystemWWN: "",
            AirRackName: "",
            AirRackPort: ""
        }
        this.handleChange = this.handleChange.bind(this)
        
    }

    
    handleChange (e) {
        this.setState(
            {[e.target.name]: e.target.value }
        )
        
    } 
    
    
    
    render() {
        
        return (
        
        <div>
        <Button color="danger" onClick={ () => {this.toggle(); this.SearchPort()}} >Edit</Button>
       
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle} close={this.closeBtn}>Port Information</ModalHeader>
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

                 
                {/* <Button>Sign in</Button> */}
                </Form>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Save </Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div>

           
    )
    }
}