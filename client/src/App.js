import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from './pages/Auth/LoginForm';
import SignupForm from './pages/Auth/SignupForm';
import NavBar from "./components/NavBar";
import AUTH from './utils/AUTH';

class App extends Component {
  
  constructor() {
    super();
    
		this.state = {
			loggedIn: false,
			user: null
    };
  }
  
	componentDidMount() {
		AUTH.getUser().then(response => {
			// console.log(response.data);
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}


	logout = (event) => {
    event.preventDefault();
    
		AUTH.logout().then(response => {
			// console.log(response.data);
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

	login = (username, password) => {
		AUTH.login(username, password).then(response => {
      // console.log(response);
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      }
    });
	}

	
	render() {
		return (
			<Router>
				<div className="App">
					{ this.state.loggedIn && (
					<div>
						<NavBar user={this.state.user} logout={this.logout}/>
												
					</div>
					)}
					{ !this.state.loggedIn && (
					<div className="auth-wrapper" style={{paddingTop:"10"}}>
						<Route exact path="/" component={() => <LoginForm login={this.login}/>} />
						<Route exact path="/login" component={() => <LoginForm user={this.login}/>} />
						<Route exact path="/signup" component={SignupForm} />
					</div>
					)}
				</div>
			</Router>
		)
	}
}

export default App;
