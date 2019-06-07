import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
library.add(faHandHoldingHeart);

class NavigationUser extends Component {
	render() {
		return (
			<div className="navHolder">
				<Link to="/">
					<FontAwesomeIcon icon="hand-holding-heart" className="handHeartIcon" />
				</Link>
				<Link to="/" className="loginNav" id="CareTaker">
					{' '}
					CareTaker{' '}
				</Link>
				<Link to="/dailynotes" className="loginNav">
					Notes
				</Link>
				<Link to="/medications" className="loginNav">
					Medication
				</Link>
				<Link to="/doctors" className="loginNav">
					Doctors
				</Link>
				<Link to="/bloodsugar" className="loginNav">
					Blood Sugar
				</Link>
				<Link to="/appointments" className="loginNav">
					Appointments
				</Link>
				<Link to="/weight" className="loginNav">
					Weight
				</Link>
				<Link to="/bloodpressure" className="loginNav">
					Blood Pressure
				</Link>
				<Link to="/metrics" className="loginNav">
					Metrics
				</Link>
				<Link to="/dashboard" className="loginNav">
					Dashboard
				</Link>
			</div>
		);
	}
}

export default NavigationUser;
