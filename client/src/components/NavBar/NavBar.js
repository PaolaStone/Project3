import React, { Fragment} from "react";
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
// import { Col } from '../Grid';
import { Col } from 'reactstrap';
import "./NavBar.css";
import Dashboard from '../Dashboard'
import ReservePorts from '../ReservePorts'
import FabricsSearch from '../FabricsSearch'
import Maps from '../Maps'
import Wiki from '../Wiki'
import Network from "../Network";

const NavBar = (props) => {
  let greeting;

  if (props.user === null) {
		greeting = <p>Hello guest</p>
	} else if (props.user.firstName) {
		greeting = (
			<Fragment >
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
        <nav className="navbar">
          <Col sm="4">
            <Link to={'/Dashboard'}  className="navbar-brand">Home</Link>
          </Col>
          <Col sm="7">
              <div className="float-right welcomeNavbar">
                {greeting}
              </div>
          </Col>
          <Col sm="1">
            <div className="float-right logoutNavbar">
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
            <Route exact path='/Wiki' component={ Wiki} />
            <Route exact path='/Network' component={ Network} />

          </Switch>
          
      </div>
      
      
    </Router>
    
  )
};

export default NavBar;