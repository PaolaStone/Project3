import React, { Fragment} from "react";
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import { Col } from '../Grid';
import { Card, CardTitle, CardText } from 'reactstrap';
import "./NavBar.css";

import Dashboard from '../Dashboard'
import ReservePorts from '../ReservePorts'

import FabricsSearch from '../FabricsSearch'

import Maps from '../Maps'

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
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark" style={{height: '50px'}} >
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
         
          <div className="row">
            <div className= "col-sm-2">
              <Card body inverse color="warning" style={{ height: '60px' }}>
                <CardTitle >
                   Fabrics
                   <br/>
                   <Link className="inMenu" to= {'/Search'}>Search </Link> |
                  <Link className="inMenu"to= {'/ReservePorts'}> Reserve </Link>
                </CardTitle>
                <CardText>
                  
                </CardText>
              </Card>
            </div>
            <div className= "col-sm-2">
              <Card body inverse color="info" style={{ height: '60px' }}>
                <CardTitle>
                  Maps
                  <br/>
                  <Link className="inMenu" to= {'/Maps'}>Lab 1  </Link> |
                  <Link className="inMenu"to= {'#'}> Lab 3  </Link>
                </CardTitle>
                
                <CardText></CardText>
              </Card>
            </div>
            <div className= "col-sm-2">
              <Card body inverse style={{ backgroundColor: 'purple', borderColor: 'purple', height: '60px' }}>
                <CardTitle>Network</CardTitle>
                <CardText></CardText>
              </Card>
            </div>
            <div className= "col-sm-2">
              <Card body inverse color="danger" style={{ height: '60px' }}>
                <CardTitle>Wiki</CardTitle>
                <CardText></CardText>
              </Card>
            </div>
            <div className= "col-sm-2">
              <Card body inverse color="primary" style={{ height: '60px' }}>
                <CardTitle>Import</CardTitle>
                <CardText></CardText>
              </Card>
            </div>
            <div className= "col col-sm-2">
              <Card body inverse color="success" style={{ height: '60px' }}>
                <CardTitle>Add</CardTitle>
                <CardText></CardText>
              </Card>
            </div>
            
          </div>
          
        <Switch>
            
            <Route exact path='/Search' component={ FabricsSearch } />
            <Route exact path='/ReservePorts' component={ ReservePorts } />
            <Route exact path='/Maps' component={ Maps} />

          </Switch>
          <Dashboard/>
      </div>
      
    </Router>
    
  )
};

export default NavBar;