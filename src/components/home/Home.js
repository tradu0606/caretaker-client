import React, { Component } from 'react';
import '../home/Home.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
library.add(faHandHoldingHeart);

class Home extends Component {
	render() {
		return (
			<div>
				<h1 className="homePageTitle">
					CareTaker <FontAwesomeIcon className="handHeartIcon" icon="hand-holding-heart" />
				</h1>
				<div className="homePageDescription">
					<h2>Track Your Health</h2>

					<h4>Record your blood pressure, blood sugar, and weight to keep track of your health</h4>
				</div>
				<div className="homePageDescription">
					<h2>Monitor Your Progress</h2>

					<h4>
						Monitor your progress through CareTaker's data visualizations to see how your health is
						progressing
					</h4>
				</div>
				<div className="homePageDescription">
					<h2>Stay Organized</h2>

					<h4>Use CareTaker to keep a record of all of your medications, doctors, and appointments</h4>
				</div>
			</div>
		);
	}
}

export default Home;
