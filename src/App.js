import './App.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/home/Home';
import BloodPressure from './components/bloodPressure/BloodPressure';
import Dashboard from './components/dashboard/Dashboard';
import Navigation from './components/navigation/navigationLogIn';
import LogInForm from './components/logInForm/LogInForm';
import SignUpForm from './components/signUpForm/SignUpForm';
import Weight from './components/weight/Weight'
import Doctor from './components/doctors/Doctor';
import DailyNote from './components/dailyNotes/DailyNote';
import BloodSugar from './components/bloodSugar/BloodSugar';
import Medications from './components/medications/Medications';
import Appointment from './components/Appointments/Appointments';
import NavigationUser from './components/navigation/navigationUser';


class App extends Component {
	constructor(){
		super()
		this.state = {

			userID: ""
		}
	}


	render() {
		return (
			<div className="App">

				<NavigationUser />
				<Route exact path="/dashboard" render={(routerProps) => <Dashboard {...routerProps} userID={this.state.userID}/>} />
				<Route exact path="/bloodpressure" render={(routerProps) => <BloodPressure {...routerProps} userID={this.state.userID}/>} />
				<Route exact path="/" render={(routerProps) => <Home {...routerProps} userID={this.state.userID}/>} />
				<Route exact path="/login" render={(routerProps) => <LogInForm {...routerProps} userID={this.state.userID}/>} />
				<Route exact path="/signup" render={(routerProps) => <SignUpForm {...routerProps} userID={this.state.userID}/>} />
				<Route exact path="/weight" render={(routerProps) => <Weight {...routerProps} userID={this.state.userID}/>} />
				<Route exact path="/appointment" render={(routerProps) => <Appointment {...routerProps} userID={this.state.userID}/>} />
				<Route exact path="/doctors" render={(routerProps) => <Doctor {...routerProps} userID={this.state.userID}/>} />
			<Route
					exact
					path="/medications"
					render={(routerProps) => <Medications {...routerProps} />}
					userID={this.state.userID}
				/>
				<Route
					exact
					path="/bloodsugar"
					render={(routerProps) => <BloodSugar {...routerProps} />}
					userID={this.state.userID}
				/>
				<Route
					exact
					path="/notes"
					render={(routerProps) => <DailyNote {...routerProps} />}
					userID={this.state.userID}
				/>

			</div>
		);
	}
}

export default App;
