import React from 'react';
import Footer from './Footer';
import './Registration.css';
import { Button, Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


const Registration = (props) => {
	return (
		<div>
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
		  <Button variant="primary" className="btn-dark" type="submit">
		    Login
		  </Button>
		</Form>
		</div>
		);
}

export default Registration;