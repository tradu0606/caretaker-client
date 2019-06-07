import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Delete from '../Delete';
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
		evt.preventDefault();
		console.log('FindOneNote: selectNote');
		console.log(this.props.notes);
		let selectedNote = this.props.notes.filter((note) => {
			return note.date === this.props.name;
		});
		console.log(evt.target.value);
		console.log(selectedNote);
		this.setState({ selectedNote: selectedNote[0] });
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
					<Delete id={this.props.id} url="/note/" />
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
