import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import "./Search.css";

const SearchBy = (props) => {
  return (
    <div className="container">
      <br/>
      <h5>Search by system name or wwn</h5>
      <br/>
      <div className="row">
        <div className="col-md-4">
          
        <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button>Name</Button>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <br />
          <InputGroup placeholder = "System name"></InputGroup>
        </div>
        <div className="col-md-4">

      </div>
        
        <div className="col-md-4">
        <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button>wwn</Button>
            </InputGroupAddon >
            <Input />
          </InputGroup>
          <br />
          <InputGroup placeholder = "Port wwn"></InputGroup>
        </div>
        
        
      </div>
      
    </div>
    
  );
}

export default SearchBy;
