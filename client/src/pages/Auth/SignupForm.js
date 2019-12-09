import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
// import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Container, Row, Col } from 'reactstrap'
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';
import './SignupForm.css';

class SignupForm extends Component {

	constructor() {
    super();
    
		this.state = {
      firstName: '',
      lastName: '',
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		};
  }
  
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
  }
  
	handleSubmit = (event) => {
		event.preventDefault();
		// TODO - validate!
		AUTH.signup({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      // console.log(response);
      if (!response.data.errmsg) {
        this.setState({
          redirectTo: '/'
        });
      } else {
        console.log('duplicate');
      }
    });
  }
  
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    
		return (
      <div className="signupContainer">
        <Row>
          <Col xs="4"></Col>
          <Col className="signupColumn"xs="4">
          <br/>
            <Card title="Register">
              
              <form className="signupLabel" style={{marginTop: 10}}>
                <label htmlFor="username">First name: </label>
                <Input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <label className="signupLabel" htmlFor="username">Last name: </label>
                <Input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                <label className="signupLabel" htmlFor="username">Username: </label>
                <Input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <label className="signupLabel" htmlFor="password">Password: </label>
                <Input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <label className="signupLabel" htmlFor="confirmPassword">Confirm Password: </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
                <Link to="/">Login</Link>
                <FormBtn onClick={this.handleSubmit}>Register</FormBtn>
              </form>
            </Card>
          </Col>
          <Col xs="4"></Col>
        </Row>
      </div>
		)
	}
}

export default SignupForm;
