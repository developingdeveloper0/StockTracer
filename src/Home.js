import React from 'react';
import './Home.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Footer from './Footer';

const Home = (props) => {
	return (
		<div>
		<div className="jumbotron jumbotron-fluid all">
  			<div className="container">
    			<h1 className="display-4">Fluid jumbotron</h1>
    			<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  			</div>
		</div>
		<Footer />
		</div>

	)
}
export default Home;