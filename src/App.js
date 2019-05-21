import './App.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/home/Home';
import BloodPressure from './components/bloodPressure/BloodPressure';
import Dashboard from './components/dashboard/Dashboard';
import Navigation from "./components/navigation/navigationLogIn";

// import axios from 'axios';

class App extends Component {
	render() {
		return (
			<div className="App">

      			<Navigation />

				<Route path="/dashboard" render={(routerProps) => <Dashboard {...routerProps} />} />
				<Route path="/bloodpressure" render={(routerProps) => <BloodPressure {...routerProps} />} />
				<Route path="/" render={(routerProps) => <Home {...routerProps} />} />
			</div>
		);
	}
}

export default App;
