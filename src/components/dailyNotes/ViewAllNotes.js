import React, { Component } from 'react';
import axios from 'axios';
import FindOneNote from './FindOneNote';
const URL = 'http://localhost:3001/note/5ce2d402236655a1648b00f5';

class ViewAllNotes extends Component {
	constructor() {
		super();
		this.state = {
			userNotes: [],
			selectNote: ''
		};
		// this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		console.log('ViewAllNotes: componentDidMount');
		axios.get(`https://care-taker-app.herokuapp.com/note/${this.props.userID}`).then((userNotes) => {
			console.log(userNotes);
			this.setState({ userNotes: userNotes.data });
		});
	}
	// handleClick(event) {
	// 	console.log('ViewAllNotes: handleClick');
	// 	console.log(event.target.name);
	// 	this.setState({ selectNote: event.target.name });
	// }
	render() {
		console.log('ViewAllNotes: render');
		if (this.state.userNotes) {
			let note;
			if (this.state.selectNote) {
				note = this.state.selectNote;
			} else {
				note = <p>Select a note</p>;
			}
			return (
				<div className="doctorLinksContainer">
					<h3 className="doctorsListTitle">Your Notes</h3>
					{this.state.userNotes.map((note, i) => {
						return <FindOneNote userID={this.props.userID} notes={this.state.userNotes} id={note._id} key={i} symptoms={note.symptoms} name={note.date} />;
					})}
				</div>
			);
		} else {
			return <p>Select a Note</p>;
		}
	}
}

export default ViewAllNotes;
