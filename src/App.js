import './App.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/home/Home';
import BloodPressure from './components/BloodPressure';
import Dashboard from './components/dashboard/Dashboard';

// import axios from 'axios';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Home />
				<Route path="/dashboard" render={(routerProps) => <Dashboard {...routerProps} />} />
				<Route path="/bloodpressure" render={(routerProps) => <BloodPressure {...routerProps} />} />
			</div>
		);
	}
}

export default App;
