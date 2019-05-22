import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard'
import careTakerIcon from "../../images/careTakerIcon.png"
import './navigation.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class NavigationUser extends Component {
	render() {
		return (
			<div className="navHolder">
				<Link to="/"><img alt="careTakerIcon" id="careTakerIcon" src={careTakerIcon} /></Link>
				<Link to="/" className="loginNav" id="CareTaker"> CareTaker </Link>
                <Link to="/account" className="loginNav" >Account</Link>
				<Link to="/logout" className="loginNav" >Log Out</Link>
                <Link to="/doctors" className="loginNav">Doctors</Link>
                <Link to="/appointment" className="loginNav">Appointments</Link>
				<Link to="/weight" className="loginNav" >Weight</Link>
                <Link to="/bloodpressure" className="loginNav">Blood Pressure</Link>
				<Link to="/dashboard" className="loginNav" >Home</Link>
			</div>
		);
	}
}

export default NavigationUser;