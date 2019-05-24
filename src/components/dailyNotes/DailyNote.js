import React, { Component } from 'react';
import dailyNote from '../../images/dailyNote.png';
import axios from 'axios';
import '../dailyNotes/DailyNote.css';
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

	handleSubmit(e) {
		e.preventDefault()
		const URL = `https://care-taker-app.herokuapp.com/note/new/${this.props.userID}`;
		axios
			.put(URL, {
				date: this.state.date,
				symptoms: this.state.symptoms
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
					Daily Notes <img className="dailyNoteIcon" src={dailyNote} />
				</h1>
				<div id="containerForBothDivs">
					<div className="dailyNoteFormDiv">
						<form id="dailyNoteForm">
							<h3>Today's date</h3>
							<input type="date" name="date" onChange={this.handleInput} />
							<h3>Add a note about how you're feeling today:</h3>
							<input
								type="text"
								name="symptoms"
								placeholder="log your symptoms"
								onChange={this.handleInput}
							/>
							<input
								type="submit"
								className="dailyNoteSubmitButton"
								value="submit"
								onClick={this.handleSubmit}
							/>
						</form>
					</div>
					<div className="viewAllNotes">
						<ViewAllNotes userID={this.props.userID}/>
					</div>
				</div>
			</div>
		);
	}
}

export default DailyNote;
