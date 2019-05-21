import React, { Component } from 'react';
import './LogInForm.css';
import CareTaker from '../../images/careTakerIcon.png';

class LogInForm extends Component {
	render() {
		return (
			<div>
				<h1 className="homePageTitle">
					CareTaker <img className="careTakerIconHomePage" src={CareTaker} />
				</h1>
				<div className="form">
					<form>
						<h3>Log In</h3>
						<input type="text" placeholder="user name" className="signInUserNameField" />
						<input type="password" placeholder="password" className="signInPassWord" />
						<input id="signInSubmitButton" type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default LogInForm;
