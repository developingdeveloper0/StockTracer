import React from 'react';
import './Header.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Finder from './Finder';
import Registration from './Registration';
import Home from './Home';

const Header = (props) => {
	return (
		<Router>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  			<a className="navbar-brand" href="#">StockTracer</a>
  				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    				<span className="navbar-toggler-icon"></span>
  				</button>
  			<div className="collapse navbar-collapse" id="navbarNav">
    			<ul className="navbar-nav">
      				<li className="nav-item active">
        				<Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
      				</li>
      				<li className="nav-item">
        				<Link to="/finder" className="nav-link">Stock Finder</Link>
      				</li>
      				<li className="nav-item">
       					<Link to="/registration" className="nav-link">Login/Register</Link>
      				</li>
    			</ul>
  			</div>
		</nav>

		<Switch>
			<Route path='/finder'>
				<Finder />
			</Route>
			<Route path='/registration'>
				<Registration />
			</Route>
			<Route path ="/">
				<Home />
			</Route>
			</Switch>
		</Router>

	);
}

export default Header;