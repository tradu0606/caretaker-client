import React, { Component } from 'react';
import medication from '../../images/medications.png';
import '../doctors/Doctor.css';
import ViewAllMedications from './ViewAllMedications';
import axios from 'axios';

class Medications extends Component {
	constructor() {
		super();
		this.state = {
			medicationName: '',
			purpose: '',
			dosage: '',
			startDate: '',
			endDate: ''
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
		const URL = 'http://localhost:3001/medication/new/5ce2d402236655a1648b00f5';
		axios
			.put(URL, {
				medicationName: this.state.medicationName,
				purpose: this.state.purpose,
				dosage: this.state.dosage,
				startDate: this.state.startDate,
				endDate: this.state.endDate
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
					Medications <img className="doctorsIcon" src={medication} />
				</h1>
				<div>
					<div className="form" id="newDoctorForm">
						<form id="medicationForm">
							<h3>Add a New Medication</h3>
							<input
								type="text"
								name="medicationName"
								placeholder="medication name"
								onChange={this.handleInput}
							/>
							<input
								type="text"
								name="purpose"
								placeholder="medication purpose"
								onChange={this.handleInput}
							/>
							<input type="text" name="dosage" placeholder="dosage" onChange={this.handleInput} />
							<input type="date" name="startDate" onChange={this.handleInput} />
							<input type="date" name="endDate" onChange={this.handleInput} />

							<input
								type="submit"
								className="doctorSubmitButton"
								value="submit"
								onClick={this.handleSubmit}
							/>
						</form>
					</div>
				</div>
				<div className="viewAllDoctors">
					<ViewAllMedications />
				</div>
			</div>
		);
	}
}

export default Medications;
