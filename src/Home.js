import React from 'react';
import './Home.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Footer from './Footer';

const Home = (props) => {
	return (
		<div>
		<div className="jumbotron jumbotron-fluid all">
  			<div className="container">
    			<h1 className="display-4">My Stock List</h1>
    			<p className="lead">This page will display the stock prices of stocks you follow on the finder page</p>
  			</div>
		</div>
		<Footer />
		</div>

	)
}
export default Home;