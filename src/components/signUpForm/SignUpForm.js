import React, { Component } from 'react';
import CareTaker from '../../images/careTakerIcon.png';
import axios from 'axios';
class SignUpForm extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			dateOfBirth: '',
			emailAddress: '',
			userName: '',
			password: ''
		};
		console.log(this.state.firstName);
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInput(evt) {
		let target = evt.target;
		let value = target.value;
		let name = target.name;
		this.setState({ [name]: value });
	}

	handleSubmit() {
		const URL = 'http://localhost:3001/newUser';
		axios
			.post(URL, {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				dateOfBirth: this.state.dateOfBirth,
				emailAddress: this.state.emailAddress,
				userName: this.state.userName,
				password: this.state.password
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	render() {
		return (
			<div>
				<h1 className="homePageTitle">
					CareTaker <img className="careTakerIconHomePage" src={CareTaker} />
				</h1>
				<div className="form">
					<form>
						<h3>Log In</h3>
						<input
							type="text"
							placeholder=" first name"
							className="signInFirstNameField"
							name="firstName"
							onChange={this.handleInput}
						/>
						<input
							type="text"
							placeholder=" last name"
							className="signInLastNameField"
							name="lastName"
							onChange={this.handleInput}
						/>
						<input
							type="date"
							placeholder="date of birth"
							className="signUpDoBField"
							name="dateOfBirth"
							onChange={this.handleInput}
						/>
						<input
							type="email"
							placeholder="email address"
							className="signUpEmailField"
							name="emailAddress"
						/>
						<input
							type="text"
							placeholder="user name"
							className="signInUserNameField"
							name="userName"
							onChange={this.handleInput}
						/>
						<input
							type="password"
							placeholder="password"
							className="signUpPassWord"
							name="password"
							onChange={this.handleInput}
						/>
						<input className="toggleButton" type="submit" value="Submit" onClick={this.handleSubmit} />
					</form>
				</div>
			</div>
		);
	}
}

export default SignUpForm;
