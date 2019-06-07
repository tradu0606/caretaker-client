import React, { Component } from 'react';
import axios from 'axios';
import FindOneNote from './FindOneNote';

class ViewAllNotes extends Component {
	constructor() {
		super();
		this.state = {
			userNotes: [],
			selectNote: ''
		};
	}
	componentDidMount() {
		console.log('ViewAllNotes: componentDidMount');
		axios.get(`https://care-taker-app.herokuapp.com/note/${this.props.userID}`).then((userNotes) => {
			console.log(userNotes);
			this.setState({ userNotes: userNotes.data });
		});
	}
	render() {
		console.log('ViewAllNotes: render');
		if (this.state.userNotes) {
			return (
				<div className="doctorLinksContainer">
					<h3 className="doctorsListTitle">Your Notes</h3>
					{this.state.userNotes.map((note, i) => {
						return (
							<FindOneNote
								userID={this.props.userID}
								notes={this.state.userNotes}
								key={i}
								symptoms={note.symptoms}
								name={note.date}
								id={note._id}
							/>
						);
					})}
				</div>
			);
		} else {
			return <h3 className="doctorsListTitle">Your Notes</h3>;
		}
	}
}

export default ViewAllNotes;
