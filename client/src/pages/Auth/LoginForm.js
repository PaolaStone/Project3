import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
// import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import { Container, Row, Col } from 'reactstrap'
import './LoginForm.css';

class LoginForm extends Component {
  
  constructor() {
    super();
    
		this.state = {
			username: '',
			password: '',
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
		this.props.login(this.state.username, this.state.password);
		this.setState({
			redirectTo: '/Dashboard'
		});
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				
        <Container className="loginContainer" fluid={true}>
          
          <Row className="rowLogin">
            <Col md="6" className="intro">
              <br/>
              <br/>
            <h4 className="title">Lab Discovery</h4>
            <p className="content">Helps you navigate the labs</p>
          
            </Col>
            <Col md="6" className="loginCol">
              <Card className="cardTitle">
                <form className="formLogin" style={{marginTop: 10}}>
                  <label htmlFor="username"></label>
                  <Input className="formUser"
                    type="text"
                    name="username"
                    placeholder="User name"
                    value={this.state.username}
                    onChange={this.handleChange}
                    
                  />
                  <label htmlFor="password"></label>
                  <Input className="formPassword"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                  />
                  <br/>
                  <Link className="link"to="/signup">Register</Link>
                  <FormBtn className="loginBtn" onClick={this.handleSubmit}>Login</FormBtn>
                </form>
              </Card>
            </Col>
            
          </Row>
          <br/>
          <br/>
				</Container>
			)
		}
	}
}

export default LoginForm;
