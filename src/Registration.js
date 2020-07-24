import React from 'react';
import Footer from './Footer';
import './Registration.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Button, Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


const Registration = (props) => {
	return (
		<div className="all">
			<div className="container">
				<Login />
				<Footer />
		</div>
		</div>

	)
}

function Login(props) {
	return (
		<div className="login">
		<Router>
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
		  <p>No account yet?<Link to="/register"><p className="registerbtn">Register Now</p></Link></p>  
		  </div>
		</Form>

		</Router>
		<Switch>
			<Route path='/register'>
				<Register />
			</Route>
		</Switch>
		</div>
		);
}

function Register(props) {
	return (
		<h1>Change component working</h1>
		);
}

export default Registration;