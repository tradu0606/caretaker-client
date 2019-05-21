import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class navigation extends Component {
	render() {
		return (
			<div>
				<nav>
					<Link to="/">{/* CareTaker <img id="smallIcon" src={careTakerIcon} /> */}</Link>

					<Link to="/search">Signup</Link>
					<Link to="/search">Log In</Link>
					<Link to="/dashboard">{Dashboard}</Link>
				</nav>
			</div>
		);
	}
}

export default navigation;
