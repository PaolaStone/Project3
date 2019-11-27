import React, { Fragment} from "react";
import { Link } from 'react-router-dom';
import { Col } from '../Grid';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import "./NavBar.css";

const NavBar = (props) => {
  let greeting;

  if (props.user === null) {
		greeting = <p>Hello guest</p>
	} else if (props.user.firstName) {
		greeting = (
			<Fragment>
				Welcome back,  <strong>{props.user.firstName}</strong>
			</Fragment>
		)
	} else if (props.user.username) {
		greeting = (
			<Fragment>
				Welcome back, <strong>{props.user.username} </strong>
			</Fragment>
		)
  }
  
  return (
    
      <div className= "jumbotron">
       <nav className="navbar navbar-dark bg-dark">
        <Col size="md-2">
          <Link to="/" className="navbar-brand">Home</Link>
        </Col>
        <Col size="md-9">
          <div className="float-right">
            {greeting}
          </div>
          
        </Col>
        <Col size="md-1">
          <div className="float-right">
            <Link to="#" className="logout" onClick={props.logout}>Logout</Link>
          </div>
        </Col>
      </nav>
      <br/>
      <div className="row">
        <div className= "col-sm-2">
          <Card body inverse color="warning" style={{ height: '100px' }}>
            <CardTitle>Fabrics</CardTitle>
            <CardText>
             
            </CardText>
         </Card>
        </div>
        <div className= "col-sm-2">
          <Card body inverse color="info" style={{ height: '100px' }}>
            <CardTitle>Maps</CardTitle>
             <CardText></CardText>
          </Card>
        </div>
        <div className= "col-sm-2">
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', height: '100px' }}>
            <CardTitle>IP Database</CardTitle>
            <CardText></CardText>
          </Card>
        </div>
        <div className= "col-sm-2">
          <Card body inverse color="danger" style={{ height: '100px' }}>
            <CardTitle>Wiki</CardTitle>
            <CardText></CardText>
          </Card>
        </div>
        <div className= "col-sm-2">
          <Card body inverse color="primary" style={{ height: '100px' }}>
            <CardTitle>Import</CardTitle>
            <CardText></CardText>
          </Card>
        </div>
        <div className= "col col-sm-2">
          <Card body inverse color="success" style={{ height: '100px' }}>
            <CardTitle>Add</CardTitle>
            <CardText></CardText>
          </Card>
        </div>
        

      </div>
     
      <br/>
      
    </div>
    
    
  )
};

export default NavBar;