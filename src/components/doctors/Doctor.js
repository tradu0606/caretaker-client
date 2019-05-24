import React, { Component } from 'react';
import doctor from '../../images/doctors.png';
import './Doctor.css';
import ViewAllDoctors from './ViewAllDoctors';
import axios from 'axios';

class Doctor extends Component {
	constructor() {
		super();
		this.state = {
			doctorName: '',
			doctorSpecialty: '',
			street: '',
			state: '',
			zipcode: '',
			doctorPhone: ''
			// userID: this.props.userID
		};
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
		const URL = 'https://care-taker-app.herokuapp.com/doctor/new/{this.props.userID}';
		axios
			.put(URL, {
				doctorName: this.state.doctorName,
				doctorSpecialty: this.state.doctorSpecialty,
				street: this.state.street,
				state: this.state.state,
				zipcode: this.state.zipcode,
				doctorPhone: this.state.doctorPhone
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	render() {
		console.log('Doctor: render');
		return (
			<div className="formatDoctorsPage">
				<h1>
					Doctors <img className="doctorsIcon" src={doctor} />
				</h1>
				<div id="containerForBothDivs">
					<div className="doctorFormDiv">
						<form id="doctorForm">
							<h3>Add a New Doctor</h3>
							<input
								type="text"
								name="doctorName"
								placeholder="doctor name"
								onChange={this.handleInput}
							/>
							<input
								type="text"
								name="doctorSpecialty"
								placeholder="specialization"
								onChange={this.handleInput}
							/>
							<label className="addressLabel1">Address</label>
							<input type="text" name="street" placeholder="street" onChange={this.handleInput} />
							<input type="text" name="city" placeholder="city" onChange={this.handleInput} />
							<select name="state" className="select" onChange={this.handleInput}>
								<option value="AL">AL</option>
								<option value="AK">AK</option>
								<option value="AR">AR</option>
								<option value="AZ">AZ</option>
								<option value="CA">CA</option>
								<option value="CO">CO</option>
								<option value="CT">CT</option>
								<option value="DC">DC</option>
								<option value="DE">DE</option>
								<option value="FL">FL</option>
								<option value="GA">GA</option>
								<option value="HI">HI</option>
								<option value="IA">IA</option>
								<option value="ID">ID</option>
								<option value="IL">IL</option>
								<option value="IN">IN</option>
								<option value="KS">KS</option>
								<option value="KY">KY</option>
								<option value="LA">LA</option>
								<option value="MA">MA</option>
								<option value="MD">MD</option>
								<option value="ME">ME</option>
								<option value="MI">MI</option>
								<option value="MN">MN</option>
								<option value="MO">MO</option>
								<option value="MS">MS</option>
								<option value="MT">MT</option>
								<option value="NC">NC</option>
								<option value="NE">NE</option>
								<option value="NH">NH</option>
								<option value="NJ">NJ</option>
								<option value="NM">NM</option>
								<option value="NV">NV</option>
								<option value="NY">NY</option>
								<option value="ND">ND</option>
								<option value="OH">OH</option>
								<option value="OK">OK</option>
								<option value="OR">OR</option>
								<option value="PA">PA</option>
								<option value="RI">RI</option>
								<option value="SC">SC</option>
								<option value="SD">SD</option>
								<option value="TN">TN</option>
								<option value="TX">TX</option>
								<option value="UT">UT</option>
								<option value="VT">VT</option>
								<option value="VA">VA</option>
								<option value="WA">WA</option>
								<option value="WI">WI</option>
								<option value="WV">WV</option>
								<option value="WY">WY</option>
							</select>
							<input
								id="zip"
								name="zipcode"
								type="text"
								className="zipCodeField"
								placeholder="zipcode"
								// pattern="[0-9]*"
								onChange={this.handleInput}
							/>
							<input
								type="tel"
								placeholder="phone"
								name="doctorPhone"
								// pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
								required
								onChange={this.handleInput}
							/>
							<input
								type="submit"
								className="doctorSubmitButton"
								value="submit"
								onClick={this.handleSubmit}
							/>
						</form>
					</div>
					<div className="viewAllDoctors">
						<ViewAllDoctors userID={this.props.userID}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Doctor;
