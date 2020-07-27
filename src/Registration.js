import React from 'react';
import Footer from './Footer';
import './Registration.css';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Button, Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


class Registration extends React.Component {
	constructor() {
		super()
	this.state = {
		page: "Login"
	}
}

	
		
		handleRegisterClick = () =>{
		this.setState({
			page: "Register"
		});
	}

		handleLoginClick = () =>{
		this.setState({
			page: "Login"
		});
	}
	
		render() {
		if(this.state.page === "Login"){
			return (
				<div className="all">
					<div className="container">
						<div className="login">
						<Login />
						<LoadRegisterButton changePage={this.handleRegisterClick} className="registerbtn"/> 
						</div>
						<Footer />
				</div>
				
				</div>


				);
		}
		else{
			return(
			<div className="all">
				<div className="container">
					<div className = "login">
					<Register />
					<LoadLoginButton changePage={this.handleLoginClick}/>
					</div>
					<Footer />
			</div>
			</div>
			);
		}
		
			}
	}

const LoadRegisterButton = props => {
	return <Button onClick={props.changePage}>Register</Button>
}

const LoadLoginButton = props => {
	return <Button onClick={props.changePage}>Login</Button>
}
	
	

function Register(props) {
	return (
		<div>
				
				<Form>
				  <Form.Group controlId="formBasicEmail">
				    <Form.Label>Email address</Form.Label>
				    <Form.Control type="email" placeholder="Enter email" />
				    <Form.Text className="text-muted">
				      We'll never share your email with anyone else.
				    </Form.Text>
				  </Form.Group>

				  <Form.Group controlId="formBasicPassword">
				    <Form.Label>Password</Form.Label>
				    <Form.Control type="password" placeholder="Password" />
				  </Form.Group>
				  <Form.Group controlId="formBasicPassword">
				    <Form.Label>Confirm Password</Form.Label>
				    <Form.Control type="password" placeholder="Password" />
				  </Form.Group>
				  <div className="loginButton">
				  <Button variant="primary" className="btn-dark" type="submit">
				    Register
				  </Button>
				  </div>
				  <br/>
				  <div className = "noAccount">
				  <p>Already Have an account?</p>
				    
				  </div>
				</Form>

				
				
		</div>
		);
}


function Login(props) {



	
	return (
		<div>
		
		<Form>
		  <Form.Group controlId="formBasicEmail">
		    <Form.Label>Email address</Form.Label>
		    <Form.Control type="email" placeholder="Enter email" />
		    <Form.Text className="text-muted">
		      We'll never share your email with anyone else.
		    </Form.Text>
		  </Form.Group>

		  <Form.Group controlId="formBasicPassword">
		    <Form.Label>Password</Form.Label>
		    <Form.Control type="password" placeholder="Password" />
		  </Form.Group>
		  <div className="loginButton">
		  <Button variant="primary" className="btn-dark" type="submit">
		    Login
		  </Button>
		  </div>
		  <br/>
		  <div className = "noAccount">
		  <p>No account?</p>
		   
		  </div>

		</Form>

		
		
		</div>
		);
}



export default Registration;