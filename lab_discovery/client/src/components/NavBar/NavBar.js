import React, { Fragment} from "react";
import { Link } from 'react-router-dom';
import { Col } from '../Grid';


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
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      
    </div>
  )
};

export default NavBar;