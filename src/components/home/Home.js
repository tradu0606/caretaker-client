import React, { Component } from 'react';
import '../home/Home.css';
import CareTaker from '../../images/careTakerIcon.png';

class Home extends Component {
	render() {
		return (
			<div>
				<h1 className="homePageTitle">
					CareTaker <img className="careTakerIconHomePage" src={CareTaker} />
				</h1>
			</div>
		);
	}
}

export default Home;
