import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard'
import careTakerIcon from "../../images/careTakerIcon.png"
import './navigation.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Navigation extends Component {
	render() {
		return (
			<div className="navHolder">
				<Link to="/"><img alt="careTakerIcon" id="careTakerIcon" src={careTakerIcon} /></Link>
				<Link to="/" className="loginNav" id="CareTaker"> CareTaker </Link>
				<Link to="/signup" className="loginNav" to="/signup">Signup</Link>
				<Link to="/login" className="loginNav" to="/login">Log In</Link>
			</div>
		);
	}
}

export default Navigation;
