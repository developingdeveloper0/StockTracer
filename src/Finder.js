import React from 'react';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import './Finder.css';
var unirest = require('unirest');


const Finder = (props) => {
	return (
		<div className='container'>
			<InputGroup className="mb-3">
			    <FormControl
			      placeholder="Stock Symbol"
			      aria-label="Recipient's username"
			      aria-describedby="basic-addon2"
			    />
			    <InputGroup.Append>
			      <Button variant="outline-secondary">Search</Button>
			    </InputGroup.Append>
			  </InputGroup>
			<Footer />
		</div>

	)
}

export default Finder;