import React, { Component } from 'react';
import axios from 'axios';
import FindOneMedication from './FindOneMedication';


class ViewAllMedications extends Component {
	constructor() {
		super();
		this.state = {
			userMedications: [],
			selectMedication: ''
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		console.log('ViewAllMedications: componentDidMount');
		axios.get(`https://care-taker-app.herokuapp.com/medication/all/${this.props.userID}`).then((userMedications) => {
			console.log(userMedications);
			this.setState({ userMedications: userMedications.data });
		});
	}
	handleClick(event) {
		event.preventDefault()
		console.log('ViewAllMedications: handleClick');
		console.log(event.target.name);
		this.setState({ selectMedication: event.target.name });
	}

	render() {
		console.log('ViewAllMedications: render');
		if (this.state.userMedications) {
			let medication;
			if (this.state.selectMedication) {
				medication = this.state.selectMedication;
			} else {
				medication = <p>Pick a Medication</p>;
			}
			return (
				<div className="medicationLinksContainer">
					<h3 className="medicationsListTitle">Your Medications</h3>
					{this.state.userMedications.map((medication, i) => {
						return (
							<FindOneMedication
								medications={this.state.userMedications}
								id={medication._id}
								key={i}
								name={medication.medicationName}
							/>
						);
					})}
				</div>
			);
		} else {
			return <p>Pick a Medication</p>;
		}
	}
}

export default ViewAllMedications;
