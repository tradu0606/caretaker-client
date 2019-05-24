import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronDown);

class FindOneNote extends Component {
	constructor() {
		super();
		console.log(this.props);
		this.state = {
			selectedNote: null
		};
		this.selectNote = this.selectNote.bind(this);
	}
	selectNote(evt) {
		console.log('FindOneNote: selectNote');
		console.log(this.props.notes);
		let selectedNote = this.props.notes.filter((note) => {
			return note.date === evt.target.id;
		});
		console.log(selectedNote);
		this.setState({ selectedNote: selectedNote });
		console.log(this.state.selectedNote);
	}
	render() {
		console.log('FindOneNote: render');
		console.log(this.props.name);
		let noteDetails;
		if (this.state.selectedNote) {
			console.log(this.state.selectedNote);
			noteDetails = (
				<div>
					<h4 className="leftMargin"> Your Notes: {this.state.selectedNote.symptoms}</h4>
				</div>
			);
		} else {
			noteDetails = <p> </p>;
		}
		return (
			<div className="dailyNoteRecord">
				<h3 onClick={this.selectNote} id={this.props.name} className="dailyNoteNameOnRecord">
					{this.props.name}
					<FontAwesomeIcon className="chevronIcon" icon="chevron-down" />
				</h3>
				{noteDetails}
			</div>
		);
	}
}

export default FindOneNote;
