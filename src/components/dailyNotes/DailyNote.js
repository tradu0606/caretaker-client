import React, { Component } from 'react';
import dailyNote from '../../images/dailyNote.png';
import axios from 'axios';
import '../doctors/Doctor.css';
import ViewAllNotes from './ViewAllNotes';
class DailyNote extends Component {
	constructor() {
		super();
		this.state = {
			date: '',
			symptoms: ''
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
		const URL = `http://localhost:3001/note/new/${this.props.userID}`;
		axios
			.put(URL, {
				date: this.state.doctorName,
				symptoms: this.state.doctorSpecialty
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
				<h1>
					Daily Notes <img className="doctorsIcon" src={dailyNote} />
				</h1>
			</div>
		);
	}
}

export default DailyNote;
