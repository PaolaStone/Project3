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
      <div className="sticky">
        <nav className="navbar navbar-dark bg-dark" style={{height: '80px'}} >
          <Col size="md-2">
            <Link to={'/Dashboard'}  className="navbar-brand">Home</Link>
          </Col>
          <Col size="md-9">
              <div className="float-right">
                {greeting}
              </div>
          </Col>
          <Col size="md-1">
            <div className="float-right">
              <Link to="/Login" className="logout" onClick={props.logout}>Logout</Link>
            </div>
          </Col>
        </nav>
         <br/>
      
          
        <Switch>
            <Route exact path='/Dashboard' component={ Dashboard } />
            <Route exact path='/Search' component={ FabricsSearch } />
            <Route exact path='/ReservePorts' component={ ReservePorts } />
            <Route exact path='/Maps' component={ Maps} />

          </Switch>
          {/* <Dashboard/> */}
      </div>
      
      
    </Router>
    
  )
};

export default NavBar;