import React from 'react';
import './Home.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Footer from './Footer';

const Home = (props) => {
	return (
		<div>
		<div class="jumbotron jumbotron-fluid all">
  			<div class="container">
    			<h1 class="display-4">Fluid jumbotron</h1>
    			<p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  			</div>
		</div>
		<Footer />
		</div>

	)
}
export default Home;