import React, { Component } from 'react';
import CareTaker from '../../images/careTakerIcon.png';
class SignUpForm extends Component {
	render() {
		return (
			<div>
				<h1 className="homePageTitle">
					CareTaker <img className="careTakerIconHomePage" src={CareTaker} />
				</h1>
				<div className="form">
					<form>
						<h3>Log In</h3>
						<input type="text" placeholder=" first name" className="signInFirstNameField" />
						<input type="text" placeholder=" last name" className="signInLastNameField" />
						<input type="date" placeholder="date of birth" className="signUpDoBField" />
						<input type="email" placeholder="email address" className="signUpEmailField" />
						<input type="text" placeholder="user name" className="signInUserNameField" />
						<input type="password" placeholder="password" className="signUpPassWord" />
						<input type="password" placeholder=" confirm password" className="signUpPassWord" />
						<input id="signInSubmitButton" type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default SignUpForm;
