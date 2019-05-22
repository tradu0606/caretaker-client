import './App.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/home/Home';
import BloodPressure from './components/bloodPressure/BloodPressure';
import Dashboard from './components/dashboard/Dashboard';
import Navigation from './components/navigation/navigationLogIn';
import LogInForm from './components/logInForm/LogInForm';
import SignUpForm from './components/signUpForm/SignUpForm';
import Weight from './components/weight/Weight';
import Doctor from './components/doctors/Doctor';
import Appointment from './components/Appointments/Appointments'
import NavigationUser from './components/navigation/navigationUser'
import axios from 'axios';
import FindOneDoctor from './components/doctors/FindOneDoctor';
// const URL = 'http://localhost:3001/5ce2d402236655a1648b00f5';


class App extends Component {
	constructor() {
		super();
		this.state = {
			userData: []
		};
	}
	// componentDidMount() {
	// 	axios.get(URL).then((userData) => {
	// 		console.log(userData);
	// 		this.setState({ userData: userData.data });
	// 	});
	// }
	render() {
		return (
			<div className="App">


				<NavigationUser />

				<Route exact path="/dashboard" render={(routerProps) => <Dashboard {...routerProps} />} />
				<Route exact path="/bloodpressure" render={(routerProps) => <BloodPressure {...routerProps} />} />
				<Route exact path="/" render={(routerProps) => <Home {...routerProps} />} />
				<Route exact path="/login" render={(routerProps) => <LogInForm {...routerProps} />} />
				<Route exact path="/signup" render={(routerProps) => <SignUpForm {...routerProps} />} />
				<Route exact path="/weight" render={(routerProps) => <Weight {...routerProps} />} />
				<Route exact path="/appointment" render={(routerProps) => <Appointment {...routerProps} />} />
				<Route exact path="/doctors" render={(routerProps) => <Doctor {...routerProps} />} />
				<Route
					exact
					path="/doctors/:name"
					render={(routerProps) => <FindOneDoctor {...routerProps} userData={this.state.userData} />}
				/>
			</div>
		);
	}
}

export default App;
