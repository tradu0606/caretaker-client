import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
library.add(faHandHoldingHeart);

class Navigation extends Component {
	render() {
		return (
			<div className="navHolder">
				<div className="careTakerNavContainer">
					<Link to="/" className="loginNav" id="CareTaker">
						{' '}
						CareTaker <FontAwesomeIcon icon="hand-holding-heart" />
					</Link>
				</div>
				<Link to="/signup" className="loginNav" to="/signup">
					Signup
				</Link>
				<Link to="/login" className="loginNav" to="/login">
					Log In
				</Link>
			</div>
		);
	}
}

export default Navigation;
