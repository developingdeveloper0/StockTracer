import React from 'react';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import './Finder.css';


class Finder extends React.Component {
	constructor() {
		super()
		this.state = {
			symbol: "TSLA"
		}
	}

	searchSymbol = () => {
		var sym = document.getElementById("search").value;
		this.setState({
			symbol: sym
		})
		// var results = document.getElementById("results");
		// results.innerHTML += this.state.symbol;

		console.log(this.state.symbol);
	}
	

	render() {
		
	var unirest = require('unirest');
	var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary");

	req.query({
		"region": "US",
		"symbol": this.state.symbol
	});

	req.headers({
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "c2e612e4b4mshdc0b42705d50512p115877jsn9f363acad0b8",
		"useQueryString": true
	});


	req.end(function (res) {
		if (res.error) throw new Error(res.error);
		var results = document.getElementById("results");
		//var state = req.query.symbol;
		results.innerHTML = res.body.price.regularMarketPrice["raw"];
		console.log(res.body.price.regularMarketPrice["raw"]);
	});

		return(
		<div className='container'>
			<InputGroup className="mb-3">
			    <FormControl
			      id = "search"
			      placeholder="Stock Symbol"
			      aria-label="Recipient's username"
			      aria-describedby="basic-addon2"
			    />
			    <InputGroup.Append>
			      <Button  onClick = {this.searchSymbol} variant="outline-secondary">Search</Button>
			    </InputGroup.Append>
			  </InputGroup>
			  <p id = "results"> </p>
			<Footer />
		</div>
		);
	}
}

export default Finder;