import React from 'react';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import './Finder.css';
var unirest = require('unirest');
var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary");

req.query({
	"region": "US",
	"symbol": "TSLA"
});

req.headers({
	"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
	"x-rapidapi-key": "c2e612e4b4mshdc0b42705d50512p115877jsn9f363acad0b8",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body.price.regularMarketPrice["raw"]);
});

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